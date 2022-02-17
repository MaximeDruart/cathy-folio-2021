import React, { Suspense, useRef, useState, useEffect, useLayoutEffect, createRef, useCallback } from "react"
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber"
import { OrbitControls, Plane, Text, useContextBridge, useTexture } from "@react-three/drei"
import * as THREE from "three"
import styled, { ThemeContext, useTheme } from "styled-components"
import lerp from "@14islands/lerp"
import gsap from "gsap"

import archivesData from "../../archivesData"
import PageTemplate from "./PageTemplate"
import { mfIsHoveringCanvas } from "../../store"

import saolFont from "../../assets/fonts/display-new.otf"

import Effects, { myLensDistortionPass } from "../shared/three/Effects"

import DistortionMaterial from "../shared/three/DistortionMaterial"
import { motion } from "framer-motion"

extend({ DistortionMaterial })

const vec3 = new THREE.Vector3()

const filterRef = createRef()
const controlsRef = createRef()

const mapRef = createRef()
const mapPosRef = createRef()
const mapItemsRef = createRef()

let speed = createRef(0)
let projectIsOpened = createRef()

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  transition: background-color 0.6s;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  @media (max-width: 900px){
    justify-content: center;
  }

  .map {
    pointer-events: none;
    position: absolute;
    left: 10vw;
    bottom: -3vh;
    transform: translateY(-50%);
    width: auto;
    height: auto;
    opacity: 0.7;

    @media (max-width: 900px){
      left: auto;
    }

    .item-container {
      width: 0;
      height: 0;
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      top: 50%;
      left: 50%;
    }

    .item {
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      border: 1px solid ${({ theme }) => theme.colors.text.disabled};
      transition: all ease-in-out 0.4s;

      &.is-active {
        border: 1px solid ${({ theme }) => theme.colors.primary1};
        background: ${({ theme }) => theme.colors.primary1};
      }
    }

    .position {
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      border: 1px solid ${({ theme }) => theme.colors.text.standard};
    }
  }
`

function visibleBox(camera, z) {
  const t = Math.tan(THREE.Math.degToRad(camera.fov) / 2)
  const height = t * 2 * (camera.position.z - z)
  const width = height * camera.aspect
  return { width, height }
}

const isColliding = (items, testedItem) => {
  let colliding = false
  for (const item of items) {
    if (
      testedItem.x < item.x + item.width * 1.5 &&
      testedItem.x + testedItem.width * 1.5 > item.x &&
      testedItem.y < item.y + item.height * 1.5 &&
      testedItem.height * 1.5 + testedItem.y > item.y
    ) {
      colliding = true
    }
  }
  return colliding
}
const isCollidingOne = (item, testedItem) => {
  let colliding = false
  if (
    testedItem.x < item.x + item.width &&
    testedItem.x + testedItem.width > item.x &&
    testedItem.y < item.y + item.height &&
    testedItem.height + testedItem.y > item.y
  ) {
    colliding = true
  }
  return colliding
}

const getNewPosition = (item, minRadius) => {
  vec3
    .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
    .normalize()
    .multiplyScalar(minRadius)
  return { x: vec3.x, y: vec3.y }
}

function ShaderPlane(props) {
  const meshRef = useRef()
  const matRef = useRef()
  const textMaterial = useRef()

  const camera = useThree((state) => state.camera)
  const theme = useTheme()

  const { width, height, x, y } = props.itemData

  const [hovering, setHovering] = useState(false)
  // only using an object because thats what gsap wants
  const hoverValue = useRef({ value: 0 })

  const closeProject = useCallback(() => {
    controlsRef.current.enabled = true

    gsap.to(meshRef.current.position, {
      x,
      y,
      z: 0,
      duration: 0.5,
      ease: "Power3.easeOut",
      onComplete: () =>
        (projectIsOpened.current = {
          isOpened: false,
          id: null,
        }),
    })
    gsap.timeline().to(filterRef.current.material, { opacity: 0 }).set(filterRef.current.position, { z: -1.2 })
    gsap.to(textMaterial.current, { opacity: 0 })
  }, [])

  const openProject = useCallback(() => {
    controlsRef.current.enabled = false
    projectIsOpened.current = {
      isOpened: true,
      id: props.project.id,
    }

    gsap.to(meshRef.current.position, {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z - 0.5,
      duration: 0.5,
      ease: "Power3.easeOut",
    })
    gsap
      .timeline()
      .set(filterRef.current.position, { z: camera.position.z - 0.6 })
      .to(filterRef.current.material, { opacity: 0.7 })

    gsap.to(textMaterial.current, { opacity: 1 })
  }, [])

  const clickHandler = useCallback(() => {
    if (projectIsOpened.current.isOpened && projectIsOpened.current.id !== props.project.id) return

    if (projectIsOpened.current.isOpened) {
      closeProject()
    } else {
      openProject()
    }
  }, [closeProject, openProject])

  useFrame((state, delta) => {
    matRef.current.time += delta
    matRef.current.speed = speed.current * 15
  })

  useLayoutEffect(() => {
    mfIsHoveringCanvas.current = hovering

    let tween

    if (textMaterial.current && hoverValue.current && !projectIsOpened.current.isOpened) {
      tween = gsap.to(hoverValue.current, {
        value: hovering ? 1 : 0,
        onUpdate: () => {
          if (hoverValue.current) textMaterial.current.opacity = hoverValue.current.value
        },
      })
    }
    return () => {
      tween && tween.kill()
      mfIsHoveringCanvas.current = false
    }
  }, [hovering])

  useEffect(() => {
    const closeProjectWithKey = (e) => {
      e.key === "Escape" && closeProject()
    }
    window.addEventListener("keydown", closeProjectWithKey)

    return () => {
      window.removeEventListener("keydown", closeProjectWithKey)
    }
  }, [])

  return (
    <mesh
      {...props}
      onClick={clickHandler}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
      // onPointerMissed={pointerMissHandler}
      ref={meshRef}
      position={[x, y, 0]}
    >
      <planeGeometry args={[width, height, 32, 32]} />
      <distortionMaterial
        frameAspect={width / height}
        textureAspect={props.texture.image.naturalWidth / props.texture.image.naturalHeight}
        ref={matRef}
        tex={props.texture}
      />
      <Text
        font={saolFont}
        anchorY='top'
        anchorX='left'
        textAlign='left'
        maxWidth={width}
        position={[-width / 2, -(height / 2 + 0.1), 0.001]}
        fontSize={0.14}
      >
        <meshBasicMaterial ref={textMaterial} transparent={true} color={theme.colors.text.standard} attach='material' />
        {props.project.name.toUpperCase()}
      </Text>
    </mesh>
  )
}

const _v = new THREE.Vector3()
const panMargin = -2

const Scene = () => {
  const camera = useThree((state) => state.camera)

  const covers = useTexture(archivesData.map((archiveItem) => archiveItem.coverImg))
  const [itemsData, setItemsData] = useState([])

  const lastPos = useRef(new THREE.Vector3(0, 0, 0))
  const isHolding = useRef(false)
  const distortionStrength = useRef(0)
  const focalStrength = useRef(2)

  const camBox = useRef()
  const canvasBox = useRef()

  const mapItemRects = useRef([])
  const mapPosRect = useRef()

  const panLimits = useRef({ min: new THREE.Vector3(-10, -10, -10), max: new THREE.Vector3(10, 10, 10) })

  useFrame(({ camera }, delta) => {
    let hasChanged = lastPos.current.distanceTo(camera.position) > 0.005
    speed.current = lerp(speed.current, camera.position.distanceTo(lastPos.current), 0.2, delta)
    lastPos.current.copy(camera.position)

    const focalValue = isHolding.current && !projectIsOpened.current.isOpened ? 0.3 : 0
    focalStrength.current = lerp(focalStrength.current, focalValue, 0.2, delta)

    let distortionValue = isHolding.current && !projectIsOpened.current.isOpened ? 0.2 : 0
    distortionValue += speed.current * 3
    distortionStrength.current = lerp(distortionStrength.current, distortionValue, 0.2, delta)
    myLensDistortionPass.distortion.set(distortionStrength.current, distortionStrength.current)
    myLensDistortionPass.focalLength.set(1 - focalStrength.current, 1 - focalStrength.current)

    let top = (1 - (camera.position.y / canvasBox.current.height + 0.5)) * 100 + "%"
    let left = (camera.position.x / canvasBox.current.width + 0.5) * 100 + "%"

    mapPosRef.current.style.top = top
    mapPosRef.current.style.left = left

    if (hasChanged) {
      mapPosRect.current = mapPosRef.current.getBoundingClientRect()
      if (itemsData.length) {
        mapItemsRef.current.forEach((mapItem, index) => {
          if (isCollidingOne(mapPosRect.current, mapItemRects.current[index])) {
            mapItem.classList.add("is-active")
          } else {
            mapItem.classList.remove("is-active")
          }
        })
      }

      camBox.current = visibleBox(camera, 0)

      mapPosRef.current.style.width = camBox.current.width * 10 + "px"
      mapPosRef.current.style.height = camBox.current.height * 10 + "px"
    }
  })

  useEffect(() => {
    if (!covers) return

    let items = []

    let minX = 0
    let minY = 0
    let maxX = 0
    let maxY = 0

    covers.forEach((cover, index) => {
      let size
      const ratio = cover.image.naturalWidth / cover.image.naturalHeight

      if (ratio < 1) {
        size = { width: 2 * ratio, height: 2 }
      } else size = { width: 2, height: 2 / ratio }

      let item = { x: 0, y: 0, width: size.width, height: size.height }

      if (index === 0) {
        items.push(item)
        return
      }

      let positionIsValid = false

      let numberOfTests = 0
      let minRadius = 2

      let tempPos

      while (!positionIsValid) {
        tempPos = getNewPosition(item, minRadius)
        // add space for the text in height
        positionIsValid = !isColliding(items, {
          ...tempPos,
          width: item.width,
          height: item.height + 0.35,
        })

        numberOfTests++
        if (numberOfTests > 10) minRadius += 0.1
      }

      minX = Math.min(minX, tempPos.x - item.width)
      maxX = Math.max(maxX, tempPos.x + item.width)
      minY = Math.min(minY, tempPos.y - item.height)
      maxY = Math.max(maxY, tempPos.y + item.height)

      items.push({ ...item, ...tempPos })
    })

    panLimits.current.min.set(minX - panMargin, minY - panMargin, -10)
    panLimits.current.max.set(maxX + panMargin, maxY + panMargin, 10)

    canvasBox.current = {
      width: maxX - minX,
      height: maxY - minY,
    }

    camBox.current = visibleBox(camera, 0)

    mapPosRef.current.style.width = camBox.current.width * 10 + "px"
    mapPosRef.current.style.height = camBox.current.height * 10 + "px"

    mapRef.current.style.width = canvasBox.current.width * 10 + "px"
    mapRef.current.style.height = canvasBox.current.height * 10 + "px"

    mapItemsRef.current = mapRef.current.querySelectorAll(".item")

    mapPosRect.current = mapPosRef.current.getBoundingClientRect()
    setTimeout(() => {
      mapItemsRef.current.forEach((mapItem, index) => {
        mapItem.style.left = items[index].x * 10 + "px"
        mapItem.style.top = (1 - items[index].y) * 10 + "px"
        mapItem.style.width = items[index].width * 10 + "px"
        mapItem.style.height = items[index].height * 10 + "px"

        const rect = mapItem.getBoundingClientRect()
        mapItemRects.current.push(rect)

        if (isCollidingOne(mapPosRect.current, rect)) {
          mapItem.classList.add("is-active")
        } else {
          mapItem.classList.remove("is-active")
        }
      })
    }, 10)

    setItemsData(items)
  }, [covers])

  // ENFORCE PAN LIMITS
  useLayoutEffect(() => {
    const handlePan = () => {
      _v.copy(controlsRef.current.target)
      controlsRef.current.target.clamp(panLimits.current.min, panLimits.current.max)
      _v.sub(controlsRef.current.target)
      camera.position.sub(_v)
    }

    controlsRef.current.addEventListener("change", handlePan)
    return () => controlsRef.current.removeEventListener("change", handlePan)
  }, [])

  // INIT
  useEffect(() => {
    projectIsOpened.current = {
      isOpened: false,
      id: null,
    }

    speed.current = 1000
  }, [])

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        panSpeed={2}
        mouseButtons={{ LEFT: THREE.MOUSE.PAN }}
        touches={{ ONE: THREE.TOUCH.PAN }}
        enableRotate={false}
        enableZoom={true}
        screenSpacePanning={true}
        minDistance={1}
        maxDistance={1.6}
      />
      <Plane ref={filterRef} position-z={-1.2} args={[30, 30]}>
        <meshBasicMaterial color='black' transparent={true} opacity={0} attach='material' />
      </Plane>
      <group>
        <Plane
          onPointerDown={() => (isHolding.current = true)}
          onPointerUp={() => (isHolding.current = false)}
          visible={false}
          position-z={-0.05}
          args={[50, 50]}
        />
        {itemsData.length &&
          archivesData.map((project, index) => (
            <ShaderPlane
              itemData={itemsData[index]}
              index={index}
              key={project.name + index}
              texture={covers[index]}
              project={archivesData[index]}
            />
          ))}
      </group>
    </>
  )
}

const Archives = () => {
  const ContextBridge = useContextBridge(ThemeContext)

  return (
    <PageTemplate hasFooter={false} hasTransitionPanel={true}>
      <Container>
        <Canvas dpr={[1, 1.5]} mode='concurrent' camera={{ position: [0, 0, 1.2], fov: 140, far: 10 }}>
          <ContextBridge>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
            <Effects />
          </ContextBridge>
        </Canvas>
        <div ref={mapRef} className='map'>
          <div className='item-container'>
            {archivesData.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.4 + i / 15, duration: 0.4 } }}
                className='item'
              ></motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 + archivesData.length / 10 } }}
            ref={mapPosRef}
            className='position'
          ></motion.div>
        </div>
      </Container>
    </PageTemplate>
  )
}
export default Archives
