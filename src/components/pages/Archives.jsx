import React, { Suspense, useRef, useState, useEffect, createRef, useLayoutEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import styled from "styled-components"
import archivesData from "../../archivesData2"
import PageTemplate from "./PageTemplate"
import { Dodecahedron, Html, OrbitControls, Plane, Text, useTexture } from "@react-three/drei"
import { mfIsHoveringCanvas } from "../../store"
import gsap from "gsap"
import lerp from "@14islands/lerp"

import * as THREE from "three"
import { EffectComposer } from "@react-three/postprocessing"
import { FishEyeEffect } from "../shared/3D/FishEye"
import Effects, { myLensDistortionPass } from "../shared/3D/Effects"
import { motion } from "framer-motion"

const vec3 = new THREE.Vector3()

let speed = 0

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

  const { width, height, x, y } = props.itemData

  const [hovering, setHovering] = useState(false)
  // only using an object because thats what gsap wants
  const hoverValue = useRef({ value: 0 })

  useFrame((state, delta) => {
    matRef.current.time += delta
    matRef.current.speed = speed * 20
  })

  useEffect(() => {
    mfIsHoveringCanvas.current = hovering

    gsap.to(hoverValue.current, {
      value: hovering ? 1 : 0,
      onUpdate: () => {
        matRef.current.hoverValue = hoverValue.current.value
      },
    })
  }, [hovering])

  const clickHandler = () => {
    // props.history.push(`/works/${props.project.path}`)
  }

  return (
    <mesh
      {...props}
      onClick={clickHandler}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
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
      <Text position-z={0.1}>HEYYY</Text>
    </mesh>
  )
}

const Scene = () => {
  const covers = useTexture(archivesData.map((archiveItem) => archiveItem.coverImg))

  let lastPos = useRef(new THREE.Vector3(0, 0, 0))
  let isHolding = useRef(false)
  let distortionStrength = useRef(0)
  let focalStrength = useRef(0)

  const [itemsData, setItemsData] = useState([])

  useFrame(({ camera }, delta) => {
    speed = lerp(speed, camera.position.distanceTo(lastPos.current), 0.2, delta)
    lastPos.current.copy(camera.position)

    const focalValue = isHolding.current ? 0.3 : 0
    focalStrength.current = lerp(focalStrength.current, focalValue, 0.2, delta)

    let distortionValue = isHolding.current ? 0.2 : 0
    distortionValue += speed * 3
    distortionStrength.current = lerp(distortionStrength.current, distortionValue, 0.2, delta)
    myLensDistortionPass.distortion.set(distortionStrength.current, distortionStrength.current)
    myLensDistortionPass.focalLength.set(1 - focalStrength.current, 1 - focalStrength.current)
  })

  useEffect(() => {
    if (!covers) return

    let items = []

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
        if (numberOfTests > 5) minRadius += 0.2
      }
      items.push({ ...item, ...tempPos })
    })

    setItemsData(items)
  }, [covers])

  return (
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
  )
}

const Archives = () => {
  return (
    <PageTemplate hasFooter={false} hasTransitionPanel={true}>
      <Container>
        <Canvas dpr={[1, 1.5]} mode='concurrent' camera={{ position: [0, 0, 0.6], fov: 140 }}>
          <OrbitControls panSpeed={2} mouseButtons={{ LEFT: THREE.MOUSE.PAN }} enableRotate={false} enableZoom={true} />
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
