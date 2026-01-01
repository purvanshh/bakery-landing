import React, { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import './MenuOverlay.css';

const categories = [
    { id: 'all', name: 'All Items', icon: '🍞' },
    { id: 'breads', name: 'Artisan Breads', icon: '🥖' },
    { id: 'pastries', name: 'Pastries', icon: '🥐' },
    { id: 'cakes', name: 'Cakes', icon: '🎂' },
    { id: 'cookies', name: 'Cookies', icon: '🍪' },
    { id: 'beverages', name: 'Beverages', icon: '☕' },
];

const menuItems = [
    // Artisan Breads (18 items)
    { id: 1, name: "Sourdough Loaf", price: "₹280", category: "breads" },
    { id: 2, name: "Rustic Baguette", price: "₹180", category: "breads" },
    { id: 3, name: "Focaccia", price: "₹220", category: "breads" },
    { id: 4, name: "Ciabatta", price: "₹160", category: "breads" },
    { id: 5, name: "Multigrain Loaf", price: "₹240", category: "breads" },
    { id: 6, name: "Brioche Bun", price: "₹100", category: "breads" },
    { id: 7, name: "Rye Bread", price: "₹200", category: "breads" },
    { id: 8, name: "Pretzel Roll", price: "₹90", category: "breads" },
    { id: 9, name: "Olive Bread", price: "₹190", category: "breads" },
    { id: 10, name: "Pumpkin Bread", price: "₹170", category: "breads" },
    { id: 11, name: "Challah Bread", price: "₹260", category: "breads" },
    { id: 12, name: "Naan", price: "₹60", category: "breads" },
    { id: 13, name: "Garlic Bread", price: "₹120", category: "breads" },
    { id: 14, name: "Banana Bread", price: "₹180", category: "breads" },
    { id: 15, name: "Cornbread", price: "₹140", category: "breads" },
    { id: 16, name: "Whole Wheat Loaf", price: "₹200", category: "breads" },
    { id: 17, name: "French Loaf", price: "₹150", category: "breads" },
    { id: 18, name: "Walnut Bread", price: "₹230", category: "breads" },

    // Pastries (18 items)
    { id: 19, name: "Butter Croissant", price: "₹120", category: "pastries" },
    { id: 20, name: "Pain au Chocolat", price: "₹140", category: "pastries" },
    { id: 21, name: "Almond Danish", price: "₹130", category: "pastries" },
    { id: 22, name: "Cinnamon Roll", price: "₹150", category: "pastries" },
    { id: 23, name: "Apple Turnover", price: "₹140", category: "pastries" },
    { id: 24, name: "Cream Puff", price: "₹110", category: "pastries" },
    { id: 25, name: "Fruit Tart", price: "₹180", category: "pastries" },
    { id: 26, name: "Chocolate Eclair", price: "₹160", category: "pastries" },
    { id: 27, name: "Raspberry Danish", price: "₹145", category: "pastries" },
    { id: 28, name: "Palmier", price: "₹80", category: "pastries" },
    { id: 29, name: "Cannoli", price: "₹170", category: "pastries" },
    { id: 30, name: "Baklava", price: "₹150", category: "pastries" },
    { id: 31, name: "Napoleon", price: "₹190", category: "pastries" },
    { id: 32, name: "Kouign-Amann", price: "₹200", category: "pastries" },
    { id: 33, name: "Sfogliatella", price: "₹175", category: "pastries" },
    { id: 34, name: "Cheese Danish", price: "₹135", category: "pastries" },
    { id: 35, name: "Berry Strudel", price: "₹165", category: "pastries" },
    { id: 36, name: "Profiterole", price: "₹140", category: "pastries" },

    // Cakes (18 items)
    { id: 37, name: "Tiramisu Slice", price: "₹200", category: "cakes" },
    { id: 38, name: "Red Velvet Slice", price: "₹220", category: "cakes" },
    { id: 39, name: "Chocolate Truffle", price: "₹250", category: "cakes" },
    { id: 40, name: "Cheesecake Slice", price: "₹230", category: "cakes" },
    { id: 41, name: "Black Forest", price: "₹240", category: "cakes" },
    { id: 42, name: "Carrot Cake", price: "₹200", category: "cakes" },
    { id: 43, name: "Lemon Drizzle", price: "₹180", category: "cakes" },
    { id: 44, name: "Opera Cake", price: "₹280", category: "cakes" },
    { id: 45, name: "Mango Mousse", price: "₹260", category: "cakes" },
    { id: 46, name: "Strawberry Shortcake", price: "₹240", category: "cakes" },
    { id: 47, name: "Victoria Sponge", price: "₹210", category: "cakes" },
    { id: 48, name: "Bundt Cake", price: "₹190", category: "cakes" },
    { id: 49, name: "Swiss Roll", price: "₹170", category: "cakes" },
    { id: 50, name: "Pineapple Upside Down", price: "₹220", category: "cakes" },
    { id: 51, name: "Tres Leches", price: "₹250", category: "cakes" },
    { id: 52, name: "Coffee Walnut", price: "₹230", category: "cakes" },
    { id: 53, name: "Coconut Cake", price: "₹215", category: "cakes" },
    { id: 54, name: "Raspberry Mousse", price: "₹245", category: "cakes" },

    // Cookies (18 items)
    { id: 55, name: "Chocolate Chip", price: "₹60", category: "cookies" },
    { id: 56, name: "Oatmeal Raisin", price: "₹55", category: "cookies" },
    { id: 57, name: "Macaron Set", price: "₹250", category: "cookies" },
    { id: 58, name: "Peanut Butter", price: "₹65", category: "cookies" },
    { id: 59, name: "Snickerdoodle", price: "₹60", category: "cookies" },
    { id: 60, name: "Double Chocolate", price: "₹70", category: "cookies" },
    { id: 61, name: "Shortbread", price: "₹50", category: "cookies" },
    { id: 62, name: "Gingerbread", price: "₹55", category: "cookies" },
    { id: 63, name: "Biscotti", price: "₹75", category: "cookies" },
    { id: 64, name: "Linzer Cookie", price: "₹80", category: "cookies" },
    { id: 65, name: "Alfajores", price: "₹90", category: "cookies" },
    { id: 66, name: "Florentine", price: "₹85", category: "cookies" },
    { id: 67, name: "Madeleines", price: "₹95", category: "cookies" },
    { id: 68, name: "Anzac Biscuit", price: "₹60", category: "cookies" },
    { id: 69, name: "Speculoos", price: "₹70", category: "cookies" },
    { id: 70, name: "Thumbprint Cookie", price: "₹65", category: "cookies" },
    { id: 71, name: "Lemon Cookies", price: "₹55", category: "cookies" },
    { id: 72, name: "White Chocolate Macadamia", price: "₹85", category: "cookies" },

    // Beverages (18 items)
    { id: 73, name: "Espresso", price: "₹120", category: "beverages" },
    { id: 74, name: "Cappuccino", price: "₹150", category: "beverages" },
    { id: 75, name: "Cafe Latte", price: "₹160", category: "beverages" },
    { id: 76, name: "Hot Chocolate", price: "₹140", category: "beverages" },
    { id: 77, name: "Chai Latte", price: "₹130", category: "beverages" },
    { id: 78, name: "Matcha Latte", price: "₹180", category: "beverages" },
    { id: 79, name: "Fresh Juice", price: "₹120", category: "beverages" },
    { id: 80, name: "Iced Coffee", price: "₹140", category: "beverages" },
    { id: 81, name: "Smoothie", price: "₹160", category: "beverages" },
    { id: 82, name: "Affogato", price: "₹200", category: "beverages" },
    { id: 83, name: "Mocha", price: "₹170", category: "beverages" },
    { id: 84, name: "Cold Brew", price: "₹160", category: "beverages" },
    { id: 85, name: "Flat White", price: "₹150", category: "beverages" },
    { id: 86, name: "Turmeric Latte", price: "₹140", category: "beverages" },
    { id: 87, name: "Iced Matcha", price: "₹170", category: "beverages" },
    { id: 88, name: "Caramel Macchiato", price: "₹180", category: "beverages" },
    { id: 89, name: "Vanilla Milkshake", price: "₹150", category: "beverages" },
    { id: 90, name: "Rose Lemonade", price: "₹130", category: "beverages" },
];

const MenuOverlay = ({ isOpen, onClose }) => {
    const overlayRef = useRef(null);
    const cardRef = useRef(null);
    const itemsRef = useRef([]);
    const gridRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const handleClose = useCallback(() => {
        gsap.to(cardRef.current, {
            scale: 0.9,
            opacity: 0,
            y: 30,
            duration: 0.25,
            ease: "power2.in"
        });
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
            onComplete: onClose
        });
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setActiveCategory('all');

            // Animate overlay in
            gsap.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });

            // Animate card in
            gsap.fromTo(cardRef.current,
                { scale: 0.9, opacity: 0, y: 30 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
            );

            // Staggered items animation
            setTimeout(() => {
                gsap.fromTo(itemsRef.current.filter(Boolean),
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.3,
                        stagger: 0.02,
                        ease: "power2.out"
                    }
                );
            }, 200);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, handleClose]);

    const handleCategoryChange = (categoryId) => {
        if (categoryId === activeCategory) return;

        // Animate out current items
        gsap.to(gridRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                setActiveCategory(categoryId);

                // Reset refs for new items
                itemsRef.current = [];

                // Animate in new items after state updates
                setTimeout(() => {
                    gsap.fromTo(gridRef.current,
                        { opacity: 0, y: 10 },
                        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
                    );

                    gsap.fromTo(itemsRef.current.filter(Boolean),
                        { y: 15, opacity: 0, scale: 0.95 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.25,
                            stagger: 0.02,
                            ease: "back.out(1.2)"
                        }
                    );
                }, 50);
            }
        });
    };

    const handleBackdropClick = (e) => {
        if (e.target === overlayRef.current) {
            handleClose();
        }
    };

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    const getCategoryLabel = (categoryId) => {
        const cat = categories.find(c => c.id === categoryId);
        return cat ? cat.name : categoryId;
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            className="menu-overlay"
            onClick={handleBackdropClick}
            style={{ opacity: 0 }}
        >
            <div ref={cardRef} className="menu-overlay-card">
                <div className="menu-overlay-header">
                    <div className="menu-overlay-title-group">
                        <span className="menu-overlay-label">Our Selection</span>
                        <h2 className="menu-overlay-title">Explore Our Menu</h2>
                    </div>
                    <button className="menu-overlay-close" onClick={handleClose} aria-label="Close menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Category Tabs */}
                <div className="menu-overlay-categories">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`menu-category-tab ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            <span className="menu-category-icon">{category.icon}</span>
                            <span className="menu-category-name">{category.name}</span>
                        </button>
                    ))}
                </div>

                <div className="menu-overlay-content">
                    <div ref={gridRef} className="menu-overlay-grid">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="menu-overlay-item"
                                ref={el => itemsRef.current[index] = el}
                            >
                                <div className="menu-overlay-item-content">
                                    <div className="menu-overlay-item-category">{getCategoryLabel(item.category)}</div>
                                    <h3 className="menu-overlay-item-name">{item.name}</h3>
                                </div>
                                <span className="menu-overlay-item-price">{item.price}</span>
                                <div className="menu-overlay-item-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="menu-overlay-footer">
                    <p>Prices are inclusive of all taxes. Items subject to availability.</p>
                </div>
            </div>
        </div>
    );
};

export default MenuOverlay;
