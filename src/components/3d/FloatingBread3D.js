import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Subtle floating particles - much more minimal and elegant
const FloatingParticles = ({ count = 20 }) => {
    const meshRef = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 4 - 2
                ],
                scale: Math.random() * 0.15 + 0.05,
                speed: Math.random() * 0.5 + 0.2
            });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        if (!meshRef.current) return;

        particles.forEach((particle, i) => {
            const t = state.clock.elapsedTime * particle.speed;

            dummy.position.set(
                particle.position[0] + Math.sin(t + i) * 0.3,
                particle.position[1] + Math.sin(t * 0.8 + i * 2) * 0.4,
                particle.position[2]
            );
            dummy.scale.setScalar(particle.scale);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial
                color="#D4B896"
                transparent
                opacity={0.15}
            />
        </instancedMesh>
    );
};

// Single subtle gradient orb
const GradientOrb = ({ position, scale = 1, color = "#E5D4C0" }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
            meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <circleGeometry args={[1, 32]} />
            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.08}
            />
        </mesh>
    );
};

const Scene = () => {
    return (
        <>
            {/* Very subtle ambient particles */}
            <FloatingParticles count={15} />

            {/* Large subtle gradient orbs in background */}
            <GradientOrb position={[3, 1, -3]} scale={2.5} color="#D4C4B0" />
            <GradientOrb position={[-2, -1, -4]} scale={3} color="#E8DED0" />
            <GradientOrb position={[4, -2, -5]} scale={1.8} color="#C9B89D" />
        </>
    );
};

const FloatingBread3D = () => {
    const [shouldRender, setShouldRender] = React.useState(true);

    React.useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth < 768;

        if (prefersReducedMotion || isMobile) {
            setShouldRender(false);
        }
    }, []);

    if (!shouldRender) {
        return null;
    }

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default FloatingBread3D;
