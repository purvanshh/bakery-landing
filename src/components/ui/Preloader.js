import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

// Floating paths component
function FloatingPaths({ position }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="floating-paths-container">
            <svg
                className="floating-paths-svg"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

const Preloader = ({ onLoadComplete, minDuration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const title = "Baking Memories";
    const words = title.split(" ");

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            // Allow exit animation to complete
            setTimeout(() => {
                setIsVisible(false);
                if (onLoadComplete) {
                    onLoadComplete();
                }
            }, 800);
        }, minDuration);

        return () => clearTimeout(timer);
    }, [minDuration, onLoadComplete]);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="preloader-background">
                        <FloatingPaths position={1} />
                        <FloatingPaths position={-1} />
                    </div>

                    <div className="preloader-content">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="preloader-text-container"
                        >
                            {/* Bakery Icon */}
                            <motion.div
                                className="preloader-icon"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                }}
                            >
                                🥐
                            </motion.div>

                            {/* Title */}
                            <h1 className="preloader-title">
                                {words.map((word, wordIndex) => (
                                    <span
                                        key={wordIndex}
                                        className="preloader-word"
                                    >
                                        {word.split("").map((letter, letterIndex) => (
                                            <motion.span
                                                key={`${wordIndex}-${letterIndex}`}
                                                initial={{ y: 100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    delay: 0.5 + wordIndex * 0.15 + letterIndex * 0.04,
                                                    type: "spring",
                                                    stiffness: 150,
                                                    damping: 25,
                                                }}
                                                className="preloader-letter"
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </h1>

                            {/* Subtitle */}
                            <motion.p
                                className="preloader-subtitle"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                            >
                                Artisan Bakery & Café
                            </motion.p>

                            {/* Loading indicator */}
                            <motion.div
                                className="preloader-loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            >
                                <div className="loader-dots">
                                    <motion.span
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                    />
                                    <motion.span
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                    />
                                    <motion.span
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Progress bar */}
                    <motion.div
                        className="preloader-progress"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: minDuration / 1000, ease: "linear" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
