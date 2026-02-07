'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import styles from './Hero3D.module.css';

// Floating Cube Component
function FloatingCube({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.002 * speed;
            meshRef.current.rotation.y += 0.003 * speed;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    color="#c9a962"
                    transparent
                    opacity={0.6}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
}

// Floating Octahedron Component
function FloatingOctahedron({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.001 * speed;
            meshRef.current.rotation.z += 0.002 * speed;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#1a1a2e"
                    transparent
                    opacity={0.4}
                    roughness={0.2}
                    metalness={0.6}
                />
            </mesh>
        </Float>
    );
}

// Wireframe House Component
function WireframeHouse({ position }: { position: [number, number, number] }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002;
        }
    });

    return (
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={groupRef} position={position} scale={0.8}>
                {/* Building base */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[2, 1.5, 1.5]} />
                    <meshStandardMaterial
                        color="#c9a962"
                        wireframe
                        transparent
                        opacity={0.5}
                    />
                </mesh>
                {/* Roof */}
                <mesh position={[0, 1.1, 0]} rotation={[0, Math.PI / 4, 0]}>
                    <coneGeometry args={[1.6, 0.8, 4]} />
                    <meshStandardMaterial
                        color="#1a1a2e"
                        wireframe
                        transparent
                        opacity={0.4}
                    />
                </mesh>
                {/* Windows */}
                <mesh position={[-0.4, 0, 0.76]}>
                    <boxGeometry args={[0.3, 0.4, 0.02]} />
                    <meshStandardMaterial color="#c9a962" opacity={0.8} transparent />
                </mesh>
                <mesh position={[0.4, 0, 0.76]}>
                    <boxGeometry args={[0.3, 0.4, 0.02]} />
                    <meshStandardMaterial color="#c9a962" opacity={0.8} transparent />
                </mesh>
            </group>
        </Float>
    );
}

// Particle Field Component
function ParticleField() {
    const points = useMemo(() => {
        const positions = new Float32Array(200 * 3);
        for (let i = 0; i < 200; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, []);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0005;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={200}
                    array={points}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#c9a962"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

// Main 3D Scene
function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#c9a962" />

            {/* Floating shapes */}
            <FloatingCube position={[-4, 2, -3]} scale={0.8} speed={1.2} />
            <FloatingCube position={[4.5, -1.5, -2]} scale={0.5} speed={0.8} />
            <FloatingCube position={[-3, -2, -4]} scale={0.4} speed={1} />
            <FloatingCube position={[3, 3, -5]} scale={0.6} speed={0.9} />

            <FloatingOctahedron position={[5, 1, -4]} scale={0.7} speed={1.1} />
            <FloatingOctahedron position={[-5, -1, -3]} scale={0.5} speed={0.7} />
            <FloatingOctahedron position={[2, -3, -2]} scale={0.4} speed={1.3} />

            {/* Wireframe building */}
            <WireframeHouse position={[0, 0, -5]} />

            {/* Particles */}
            <ParticleField />
        </>
    );
}

export default function Hero3D() {
    const { companyInfo } = siteData;

    return (
        <section className={styles.hero}>
            {/* 3D Canvas Background */}
            <div className={styles.canvasContainer}>
                <Canvas
                    camera={{ position: [0, 0, 8], fov: 60 }}
                    dpr={[1, 2]}
                    gl={{ antialias: true, alpha: true }}
                >
                    <Scene />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <span className={styles.preTitle}>Welcome to {companyInfo.name}</span>
                        <h1 className={styles.title}>
                            <span className={styles.titleLine}>Building Dreams</span>
                            <span className={styles.titleLine}>with <span className={styles.accent}>Precision</span></span>
                            <span className={styles.titleLine}>and <span className={styles.accent}>Elegance</span></span>
                        </h1>
                        <p className={styles.description}>
                            {companyInfo.description}
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/portfolio" className={styles.primaryBtn}>
                                Explore Our Work
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/contact" className={styles.secondaryBtn}>
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <span>Scroll to explore</span>
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel}></div>
                </div>
            </div>
        </section>
    );
}
