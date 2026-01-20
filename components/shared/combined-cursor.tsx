"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code } from "lucide-react";

interface Particle {
    id: number;
    x: number;
    y: number;
    symbol: string;
    rotation: number;
}

const codeSymbols = ["{ }", "</>", "&&", "||", "=>", "[]", ";", "const", "nice"];

export function CombinedCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let count = 0;
        const updateMouse = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            // Create new particle
            count++;
            if (count % 4 === 0) {
                const newParticle: Particle = {
                    id: Date.now() + Math.random(),
                    x: e.clientX,
                    y: e.clientY,
                    symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
                    rotation: Math.random() * 360,
                };
                setParticles((prev) => [...prev.slice(-15), newParticle]);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", updateMouse);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", updateMouse);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
                {/* Particle Trail */}
                <AnimatePresence>
                    {particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            initial={{
                                opacity: 0.8,
                                x: particle.x,
                                y: particle.y,
                                scale: 0.5,
                                rotate: particle.rotation,
                            }}
                            animate={{
                                opacity: 0,
                                x: particle.x + (Math.random() - 0.5) * 50,
                                y: particle.y + 50,
                                scale: 1,
                                rotate: particle.rotation + 45,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute text-purple-300 font-mono text-xs font-bold whitespace-nowrap"
                            style={{
                                left: 0,
                                top: 0,
                                textShadow: "0 0 5px rgba(168, 85, 247, 0.5)",
                            }}
                        >
                            {particle.symbol}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Main Cursor Icon */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center text-white mix-blend-difference"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    scale: isClicking ? 0.8 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            >
                <Code className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" strokeWidth={2.5} />
            </motion.div>
        </>
    );
}
