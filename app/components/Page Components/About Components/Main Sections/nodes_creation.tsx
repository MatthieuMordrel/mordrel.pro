'use client'

import { Line, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const useSmoothTransition = (target: number, speed = 0.01) => {
  const ref = useRef(target)
  useFrame(() => {
    ref.current = THREE.MathUtils.lerp(ref.current, target, speed)
  })
  return ref
}

const CoreStructure = ({
  growth,
  maxNodes,
  initialNodeScale,
  nodeScaleVariation
}: {
  growth: number
  maxNodes: number
  initialNodeScale: number
  nodeScaleVariation: number
}) => {
  const groupRef = useRef<THREE.Group>(null!)
  const { viewport, clock } = useThree()

  const smoothRotation = useSmoothTransition(growth * Math.PI * 2, 0.005)
  const smoothScale = useSmoothTransition(1 + growth, 0.01) // Increased overall scale

  const [nodes, setNodes] = useState<{ position: THREE.Vector3; scale: number }[]>([
    { position: new THREE.Vector3(0, 0, 0), scale: initialNodeScale }
  ])
  const [lines, setLines] = useState<{ start: THREE.Vector3; end: THREE.Vector3; progress: number }[]>([])

  const addNode = useCallback((position: THREE.Vector3) => {
    const scale = initialNodeScale * (1 + Math.random() * nodeScaleVariation)
    setNodes((prev) => [...prev, { position, scale }])
  }, [])

  const addLine = useCallback((start: THREE.Vector3, end: THREE.Vector3) => {
    setLines((prev) => [...prev, { start, end, progress: 0 }])
  }, [])

  useFrame(() => {
    const time = clock.getElapsedTime()
    groupRef.current.rotation.y = smoothRotation.current + time * 0.05
    groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.05

    // Only create new lines if we haven't reached the max number of nodes
    if (growth < 1 && Math.random() < 0.05 && nodes.length < maxNodes) {
      const startNode = nodes[Math.floor(Math.random() * nodes.length)]
      const angle = Math.random() * Math.PI * 2
      const distance = 1 + Math.random() * 1 // Increased distance for more spread
      const endPosition = new THREE.Vector3(
        startNode.position.x + Math.cos(angle) * distance,
        startNode.position.y + Math.sin(angle) * distance,
        startNode.position.z + (Math.random() - 0.5) * distance
      )
      addLine(startNode.position, endPosition)
    }

    setLines((prevLines) =>
      prevLines.map((line) => {
        if (line.progress < 1) {
          const newProgress = Math.min(line.progress + 0.01, 1) // Slowed down line growth
          if (newProgress === 1) {
            addNode(line.end) // Updated: no longer passing scale directly
          }
          return { ...line, progress: newProgress }
        }
        return line
      })
    )
  })

  return (
    <group ref={groupRef} scale={smoothScale.current * Math.min(1, viewport.width / 10)}>
      {nodes.map((node, i) => (
        <Sphere key={i} position={node.position} scale={node.scale}>
          <meshBasicMaterial color="#00ffff" transparent opacity={0.7} />
        </Sphere>
      ))}
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[line.start, new THREE.Vector3().lerpVectors(line.start, line.end, line.progress)]}
          color="#0088ff"
          lineWidth={2}
          transparent
          opacity={0.5}
        />
      ))}
    </group>
  )
}

interface TechBusinessGrowthSculptureProps {
  initialZoom?: number
  maxNodes?: number
  initialNodeScale?: number
  nodeScaleVariation?: number
}

export default function TechBusinessGrowthSculpture({
  initialZoom = 12,
  maxNodes = 50,
  initialNodeScale = 0.2,
  nodeScaleVariation = 0.2
}: TechBusinessGrowthSculptureProps) {
  const [growth, setGrowth] = React.useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setGrowth((prev) => {
        if (prev >= 1) {
          clearInterval(timer)
          return 1
        }
        return Math.min(prev + 0.0005, 1) // Slowed down overall growth
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative inset-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, initialZoom], fov: 60 }} className="h-full">
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <CoreStructure growth={growth} maxNodes={maxNodes} initialNodeScale={initialNodeScale} nodeScaleVariation={nodeScaleVariation} />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.5} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
