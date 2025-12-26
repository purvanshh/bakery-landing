import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-logo">The Artisan Bakery</h3>
                        <p className="footer-tagline">
                            Crafted with love, baked with passion.
                        </p>
                    </div>

                    <nav className="footer-nav">
                        <a href="#menu">Menu</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <div className="footer-social">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} The Artisan Bakery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
