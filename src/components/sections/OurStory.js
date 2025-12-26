import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OurStory.css';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion) {
            // Parallax effect on image
            gsap.to(imageRef.current, {
                yPercent: -10,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Content fade in
            gsap.fromTo(
                contentRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="our-story section" id="about">
            <div className="container">
                <div className="story-grid">
                    <div className="story-image-container">
                        <div className="story-image-wrapper">
                            <img
                                ref={imageRef}
                                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=800&fit=crop"
                                alt="Baker kneading dough"
                                loading="lazy"
                            />
                        </div>
                        <div className="story-badge">
                            <span className="story-badge-text">Since</span>
                            <span className="story-badge-year">2024</span>
                        </div>
                    </div>

                    <div ref={contentRef} className="story-content">
                        <span className="section-label">Our Story</span>
                        <h2>Crafted with Love, Baked with Passion</h2>

                        <blockquote className="story-quote">
                            "Every loaf tells a story of patience, tradition, and the simple joy of creating something beautiful from humble ingredients."
                        </blockquote>

                        <p>
                            What began as a small passion project has grown into a beloved community bakery.
                            We wake up before dawn each day, nurturing our sourdough starters and carefully
                            crafting each pastry by hand.
                        </p>

                        <p>
                            Our commitment is simple: use the finest ingredients, honor time-tested techniques,
                            and share the warmth that only freshly baked goods can bring.
                        </p>

                        <div className="story-stats">
                            <div className="stat">
                                <span className="stat-number">5000+</span>
                                <span className="stat-label">Loaves baked monthly</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Natural ingredients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
