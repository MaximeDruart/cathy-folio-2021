import React, { Suspense, useRef, useState, useEffect, useLayoutEffect, createRef } from "react"
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber"
import { OrbitControls, Plane, Text, useTexture } from "@react-three/drei"
import * as THREE from "three"
import styled from "styled-components"
import lerp from "@14islands/lerp"
import gsap from "gsap"

import archivesData from "../../archivesData2"
import PageTemplate from "./PageTemplate"
import { mfIsHoveringCanvas } from "../../store"

import saolFont from "../../assets/fonts/SaolDisplay-Light.ttf"

import Effects, { myLensDistortionPass } from "../shared/three/Effects"

import DistortionMaterial from "../shared/three/DistortionMaterial"

extend({ DistortionMaterial })

const vec3 = new THREE.Vector3()

const filterRef = createRef()
const controlsRef = createRef()

let speed = 0
let projectIsOpened = createRef()

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  transition: background-color 0.6s;
  position: relative;
`

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

  const { width, height, x, y } = props.itemData

  const [hovering, setHovering] = useState(false)
  // only using an object because thats what gsap wants
  const hoverValue = useRef({ value: 0 })

  useFrame((state, delta) => {
    matRef.current.time += delta
    matRef.current.speed = speed * 15
  })

  useLayoutEffect(() => {
    mfIsHoveringCanvas.current = hovering

    gsap.to(hoverValue.current, {
      value: hovering ? 1 : 0,
      onUpdate: () => {
        // matRef.current.hoverValue = hoverValue.current.value
        textMaterial.current.opacity = hoverValue.current.value
      },
    })
  }, [hovering])

  const clickHandler = () => {
    // props.history.push(`/works/${props.project.path}`)
    if (projectIsOpened.current) {
      controlsRef.current.enabled = true
      projectIsOpened.current = false

      gsap.to(meshRef.current.position, { x, y, z: 0, duration: 0.5, ease: "Power3.easeOut" })
      gsap.timeline().to(filterRef.current.material, { opacity: 0 }).set(filterRef.current.position, { z: -1.2 })
    } else {
      controlsRef.current.enabled = false
      projectIsOpened.current = true

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
    }
  }

  const pointerMissHandler = () => {
    console.log("missed")
    if (projectIsOpened.current) {
      controlsRef.current.enabled = true
      projectIsOpened.current = false

      gsap.to(meshRef.current.position, { x, y, z: 0, duration: 0.5, ease: "Power3.easeOut" })
      gsap.timeline().to(filterRef.current.material, { opacity: 0 }).set(filterRef.current.position, { z: -1.2 })
    }
  }

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
        <meshBasicMaterial ref={textMaterial} transparent={true} color='white' attach='material' />
        TRYING OUT RANDOM TEXT
      </Text>
    </mesh>
  )
}

const _v = new THREE.Vector3()
const panMargin = 5

const Scene = () => {
  const camera = useThree((state) => state.camera)

  const covers = useTexture(archivesData.map((archiveItem) => archiveItem.coverImg))
  const [itemsData, setItemsData] = useState([])

  const lastPos = useRef(new THREE.Vector3(0, 0, 0))
  const isHolding = useRef(false)
  const distortionStrength = useRef(0)
  const focalStrength = useRef(0)

  const panLimits = useRef({ min: new THREE.Vector3(-10, -10, -10), max: new THREE.Vector3(10, 10, 10) })

  useFrame(({ camera }, delta) => {
    speed = lerp(speed, camera.position.distanceTo(lastPos.current), 0.2, delta)
    lastPos.current.copy(camera.position)

    const focalValue = isHolding.current && !projectIsOpened.current ? 0.3 : 0
    focalStrength.current = lerp(focalStrength.current, focalValue, 0.2, delta)

    let distortionValue = isHolding.current && !projectIsOpened.current ? 0.2 : 0
    distortionValue += speed * 3
    distortionStrength.current = lerp(distortionStrength.current, distortionValue, 0.2, delta)
    myLensDistortionPass.distortion.set(distortionStrength.current, distortionStrength.current)
    myLensDistortionPass.focalLength.set(1 - focalStrength.current, 1 - focalStrength.current)
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
        positionIsValid = !isColliding(items, { ...item, ...tempPos })

        numberOfTests++
        if (numberOfTests > 10) minRadius += 0.1
      }

      minX = Math.min(minX, item.x)
      maxX = Math.max(maxX, item.x)
      minY = Math.min(minY, item.y)
      maxY = Math.max(maxY, item.y)

      items.push({ ...item, ...tempPos })
    })

    panLimits.current.min.set(minX - panMargin, minY - panMargin, -10)
    panLimits.current.max.set(maxX + panMargin, maxY + panMargin, 10)

    setItemsData(items)
  }, [covers])

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

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        panSpeed={2}
        mouseButtons={{ LEFT: THREE.MOUSE.PAN }}
        touches={{ ONE: THREE.TOUCH.PAN }}
        enableRotate={false}
        enableZoom={true}
      />
      <Plane ref={filterRef} position-z={-1.2} args={[30, 30]}>
        <meshBasicMaterial color='black' transparent={true} opacity={0} attach='material' />
      </Plane>
      <group>
        <Plane
          onPointerDown={() => (isHolding.current = true)}
          onPointerUp={() => (isHolding.current = false)}
          visible={false}
          position-z={-1}
          args={[30, 30]}
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
  return (
    <PageTemplate hasFooter={false} hasTransitionPanel={true}>
      <Container>
        <Canvas dpr={[1, 1.5]} mode='concurrent' camera={{ position: [0, 0, 0.6], fov: 140 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          {/* <EffectComposer>
            <FishEyeEffect></FishEyeEffect>
          </EffectComposer> */}
          <Effects />
        </Canvas>
      </Container>
    </PageTemplate>
  )
}
export default Archives
