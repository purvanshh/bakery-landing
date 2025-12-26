import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Menu.css';

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
    {
        id: 1,
        name: "Sourdough Loaf",
        description: "24-hour fermented with wild yeast",
        price: "₹280",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Butter Croissant",
        description: "Layered with French butter, 72 folds",
        price: "₹120",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Rustic Baguette",
        description: "Crispy crust, soft interior",
        price: "₹180",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Cinnamon Roll",
        description: "Warm spices, cream cheese glaze",
        price: "₹150",
        image: "https://images.unsplash.com/photo-1609127102567-8a9a21dc27d8?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "Focaccia",
        description: "Rosemary & sea salt, olive oil drizzle",
        price: "₹220",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Pain au Chocolat",
        description: "Dark chocolate wrapped in pastry",
        price: "₹140",
        image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=300&fit=crop"
    }
];

const Menu = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion && cardsRef.current.length > 0) {
            // Staggered reveal on scroll
            gsap.fromTo(
                cardsRef.current,
                {
                    y: 60,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
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
        <section ref={sectionRef} className="menu section" id="menu">
            <div className="container">
                <div className="menu-header">
                    <span className="section-label">Our Selection</span>
                    <h2>Fresh from the Oven</h2>
                    <p className="menu-subtitle">
                        Handcrafted daily with love and the finest ingredients
                    </p>
                </div>

                <div className="menu-grid">
                    {menuItems.map((item, index) => (
                        <article
                            key={item.id}
                            className="menu-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="menu-card-image">
                                <img src={item.image} alt={item.name} loading="lazy" />
                            </div>
                            <div className="menu-card-content">
                                <div className="menu-card-header">
                                    <h3>{item.name}</h3>
                                    <span className="menu-card-price">{item.price}</span>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="menu-cta">
                    <button className="btn btn-outline">
                        View Full Menu
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
