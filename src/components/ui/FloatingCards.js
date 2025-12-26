import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Clock, Award, Heart } from 'lucide-react';
import './FloatingCards.css';

const FloatingCards = () => {
    const cardsRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion && cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll('.floating-card');

            // Entrance animation
            gsap.fromTo(
                cards,
                {
                    x: 100,
                    opacity: 0,
                    scale: 0.8
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    delay: 0.8
                }
            );

            // Continuous floating animation
            cards.forEach((card, index) => {
                gsap.to(card, {
                    y: "random(-15, 15)",
                    x: "random(-8, 8)",
                    rotation: "random(-3, 3)",
                    duration: 3 + index * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });
        }
    }, []);

    return (
        <div ref={cardsRef} className="floating-cards">
            {/* Main featured card */}
            <div className="floating-card card-main">
                <div className="card-badge">Featured</div>
                <div className="card-image">
                    <div className="card-image-placeholder">
                        <span className="bread-emoji">🥐</span>
                    </div>
                </div>
                <div className="card-content">
                    <h4>Butter Croissant</h4>
                    <p>Flaky, golden perfection</p>
                    <div className="card-rating">
                        <span className="stars">★★★★★</span>
                        <span className="reviews">(124)</span>
                    </div>
                </div>
            </div>

            {/* Stats card */}
            <div className="floating-card card-stats">
                <div className="stats-icon">
                    <Clock size={20} />
                </div>
                <div className="stats-content">
                    <span className="stats-value">5:00 AM</span>
                    <span className="stats-label">Fresh Daily</span>
                </div>
            </div>

            {/* Award card */}
            <div className="floating-card card-award">
                <div className="award-icon">
                    <Award size={24} />
                </div>
                <div className="award-content">
                    <span className="award-title">Best Bakery</span>
                    <span className="award-year">2024</span>
                </div>
            </div>

            {/* Love count card */}
            <div className="floating-card card-love">
                <Heart size={18} className="heart-icon" />
                <span className="love-count">2.4k</span>
            </div>

            {/* Decorative elements */}
            <div className="floating-decor decor-1">🌾</div>
            <div className="floating-decor decor-2">🥖</div>
            <div className="floating-decor decor-3">🍞</div>
        </div>
    );
};

export default FloatingCards;
