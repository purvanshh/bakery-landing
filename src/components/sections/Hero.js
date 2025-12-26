import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GooeyTextMorph from '../ui/GooeyTextMorph';
import FloatingBread3D from '../3d/FloatingBread3D';
import FloatingCards from '../ui/FloatingCards';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Check for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion && contentRef.current) {
            // Entrance animation
            gsap.fromTo(
                contentRef.current.children,
                {
                    y: 40,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    delay: 0.3
                }
            );
        }
    }, []);

    return (
        <section ref={heroRef} className="hero section">
            <FloatingBread3D />
            <FloatingCards />

            <div className="container">
                <div ref={contentRef} className="hero-content">
                    <span className="hero-label">EST. 2024</span>

                    <h1 className="hero-title">
                        Let us bake a <span className="text-honey">Sweet</span> memory for you
                    </h1>

                    <p className="hero-description">
                        Founded upon a passion for food and baking, our bakery has become
                        a beloved destination for artisanal breads, pastries, and moments of joy.
                    </p>

                    <div className="hero-morph">
                        <span className="hero-morph-label">Always</span>
                        <GooeyTextMorph
                            texts={["Fresh", "Artisan", "Handmade", "Baked Daily"]}
                            interval={2500}
                        />
                    </div>

                    <div className="hero-cta">
                        <button className="btn btn-primary">
                            Explore Our Menu
                        </button>
                        <button className="btn btn-outline">
                            Visit Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
