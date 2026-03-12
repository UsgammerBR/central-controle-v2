
import React, { useState, useEffect } from 'react';

export const CountBadge = ({ count }: { count: number }) => {
    const [prevCount, setPrevCount] = useState(count);
    const [phase, setPhase] = useState<'idle' | 'blue' | 'green'>('idle');

    useEffect(() => {
        if (count !== prevCount) {
            setPhase('blue');
            const t1 = setTimeout(() => setPhase('green'), 250);
            const t2 = setTimeout(() => setPhase('idle'), 800);
            setPrevCount(count);
            return () => { clearTimeout(t1); clearTimeout(t2); };
        }
    }, [count, prevCount]);

    if (count === 0) return null;

    const getPhaseClasses = () => {
        switch(phase) {
            case 'blue': return 'bg-blue-500 text-white scale-125 z-10 shadow-[0_0_20px_#3b82f6,0_0_5px_#ffffff] ring-2 ring-blue-400 animate-pulse';
            case 'green': return 'bg-emerald-500 text-white scale-125 z-10 shadow-[0_0_20px_#10b981,0_0_5px_#ffffff] ring-2 ring-emerald-400';
            default: return 'bg-[#ff3b30] text-white shadow-[0_2px_10px_rgba(255,59,48,0.4)] border border-white/20';
        }
    };

    return (
        <div className={`absolute -top-1 -right-1 min-w-[14px] h-[14px] px-1 rounded-full flex items-center justify-center font-black text-[7px] transition-all duration-500 ${getPhaseClasses()}`}>
            {count}
        </div>
    );
};
