
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const CountBadge = ({ count }: { count: number }) => {
    const [phase, setPhase] = useState<'idle' | 'pulse'>('idle');
    const prevCountRef = useRef(count);

    useEffect(() => {
        if (count !== prevCountRef.current) {
            if (count > 0) {
                setPhase('pulse');
                const timer = setTimeout(() => setPhase('idle'), 600);
                prevCountRef.current = count;
                return () => clearTimeout(timer);
            }
            prevCountRef.current = count;
        }
    }, [count]);

    return (
        <AnimatePresence>
            {count > 0 && (
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 600, damping: 30 }}
                    className="absolute -top-1.5 -right-1.5 z-30 pointer-events-none"
                >
                    {/* Subtle LED Glow Layer */}
                    <AnimatePresence>
                        {phase === 'pulse' && (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ 
                                    scale: 1.3,
                                    opacity: [0, 0.6, 0],
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ 
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                                className="absolute inset-0 rounded-full bg-emerald-400 blur-[3px]"
                            />
                        )}
                    </AnimatePresence>

                    {/* Main Badge Body */}
                    <motion.div
                        animate={{ 
                            backgroundColor: phase === 'pulse' ? '#22c55e' : '#FF3B30',
                            scale: phase === 'pulse' ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        className="relative min-w-[18px] h-[18px] px-1.5 rounded-full flex items-center justify-center border-[1.5px] border-white/90 z-10 shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
                    >
                        <span className="text-white font-black text-[9px] leading-none select-none" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                            {count}
                        </span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
