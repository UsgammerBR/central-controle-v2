
import React, { useState, useEffect } from 'react';

export const CountBadge = ({ count }: { count: number }) => {
    const [prevCount, setPrevCount] = useState(count);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (count > prevCount) {
            setIsAnimating(true);
            const timer = setTimeout(() => setIsAnimating(false), 800);
            setPrevCount(count);
            return () => clearTimeout(timer);
        } else if (count < prevCount) {
            setPrevCount(count);
        }
    }, [count, prevCount]);

    if (count === 0) return null;

    return (
        <div className={`absolute -top-1 -right-1 min-w-[14px] h-[14px] px-1 rounded-full flex items-center justify-center font-black text-[7px] transition-all duration-300 ${
            isAnimating 
            ? 'bg-green-400 text-white shadow-[0_0_12px_#4ade80] scale-125 z-10' 
            : 'bg-green-500 text-white shadow-sm'
        }`}>
            {count}
        </div>
    );
};
