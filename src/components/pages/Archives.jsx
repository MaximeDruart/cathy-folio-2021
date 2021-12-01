import { Canvas } from "@react-three/fiber"
import React from "react"
import styled from "styled-components"
import archivesData from "../../archivesData"
import PageTemplate from "./PageTemplate"

const Container = styled.div``

function ShaderPlane(props) {
  const meshRef = useRef()
  const matRef = useRef()

  const [hovering, setHovering] = useState(false)
  // only using an object because thats what gsap wants
  const hoverValue = useRef({ value: 0 })

  const media = isMobile ? "mobile" : isTablet ? "tablet" : "desktop"

  useFrame((state, delta) => {
    matRef.current.time += delta

    let newSpeed = Math.abs(scrollArea.current.scrollTop - lastScrollTop)
    speed = lerp(speed, newSpeed, 0.03, delta)

    matRef.current.speed = speed
    lastScrollTop = scrollArea.current.scrollTop
  })
  useEffect(() => {
    meshRef.current.position.setFromSphericalCoords(20, Math.PI / 2, planePositions[media].distanceX * props.index)
    let pos = new Vector3().copy(meshRef.current.position)
    // by multiplying the vector by a scalar of 2 we can get the "opposite" of the vector from plane pos to origin
    pos = pos.multiplyScalar(2)
    meshRef.current.lookAt(pos)
    meshRef.current.position.y += props.index / planePositions[media].distanceY
  }, [isTablet, isMobile])

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
    scrollArea.current.scrollTop =
      props.index * ((scrollArea.current.children[0].offsetHeight - window.innerHeight) / (projectsData.length - 1))

    setTimeout(() => {
      props.history.push(`/works/${props.project.path}`)
    }, 300)
  }

  return (
    <mesh
      {...props}
      onClick={clickHandler}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
      ref={meshRef}
    >
      <planeGeometry args={[...planeSizes[media], 32, 32]} />
      <distortionMaterial
        frameAspect={planeSizes[media][0] / planeSizes[media][1]}
        textureAspect={props.texture.image.naturalWidth / props.texture.image.naturalHeight}
        ref={matRef}
        tex={props.texture}
      />
      <Html center className={`canvas-html ${props.isInView ? "" : "hidden"}`} position={[0, 0, 0.25]}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='wrapper'>
          <h1 className='text-h1 name'>{props.project.name}</h1>
          <motion.div animate={{ x: hovering ? 15 : 0, transition: "tween" }} className='cta'>
            <span className='text'>open project</span>
            <div className='circle'>
              <ArrowSVG />
            </div>
          </motion.div>
        </motion.div>
      </Html>
    </mesh>
  )
}

const Scene = () => {
  return (
    <group>
      {projectsData.map((project, index) => (
        <ShaderPlane
          isInView={index > planeInView - 2 && index < planeInView + 2}
          index={index}
          key={project.name + index}
          texture={covers[index]}
          project={projectsData[index]}
          history={history}
        />
      ))}
    </group>
  )
}

const Archives = () => {
  return (
    <PageTemplate hasFooter={false} hasTransitionPanel={true}>
      <Container>
        <Canvas
          dpr={[1, 1.5]}
          mode='concurrent'
          camera={{ position: [0, 0, 5], far: 3 }}
          // scrolling offsets the raycaster, we need to compensate
          raycaster={{
            computeOffsets: ({ offsetX, offsetY }) => ({
              offsetY: offsetY - scrollArea.current.scrollTop,
              offsetX,
            }),
          }}
          // as the canvas is under the scroll div, we can define the scroll div as the event receiver for the canvas
          onCreated={(state) => state.events.connect(scrollArea.current)}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
        <div className='scroll-area' ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: `${(projectsData.length - 1) * projectHeight}vh`, width: "100vw" }} />
        </div>
      </Container>
    </PageTemplate>
  )
}
export default Archives
