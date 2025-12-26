import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Phone } from 'lucide-react';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion && contentRef.current) {
            gsap.fromTo(
                contentRef.current.children,
                { y: 40, opacity: 0 },
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
        <section ref={sectionRef} className="contact section" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div ref={contentRef} className="contact-content">
                        <span className="section-label">Visit Us</span>
                        <h2>Come Say Hello</h2>
                        <p className="contact-intro">
                            Step into our warm bakery and experience the aroma of freshly baked goods.
                            We'd love to see you!
                        </p>

                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <MapPin size={22} />
                                </div>
                                <div className="contact-detail">
                                    <h4>Location</h4>
                                    <p>123 Baker Street, Connaught Place<br />New Delhi, 110001</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Clock size={22} />
                                </div>
                                <div className="contact-detail">
                                    <h4>Hours</h4>
                                    <p>Mon - Sat: 7:00 AM - 8:00 PM<br />Sunday: 8:00 AM - 6:00 PM</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Phone size={22} />
                                </div>
                                <div className="contact-detail">
                                    <h4>Contact</h4>
                                    <p>+91 98765 43210<br />hello@artisanbakery.in</p>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary">
                            Get Directions
                        </button>
                    </div>

                    <div className="contact-image">
                        <img
                            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Bakery interior"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
