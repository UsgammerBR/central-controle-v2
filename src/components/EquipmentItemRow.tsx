
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconTrash, IconCameraLens, IconGallery } from './icons';
import { CountBadge } from './CountBadge';
import { EquipmentItem } from '../types';

export interface EquipmentItemRowProps {
    item: EquipmentItem;
    onUpdate: (item: EquipmentItem) => void;
    onDelete: (id: string) => void;
    onGallery: (item: EquipmentItem) => void;
    onCamera: (item: EquipmentItem) => void;
    deleteMode: boolean;
    selectedForDelete: string[];
    onToggleSelect: (id: string) => void;
    isChristmas: boolean;
    onAddItem: () => void;
    onCollapse: () => void;
}

export const EquipmentItemRow: React.FC<EquipmentItemRowProps> = ({ 
    item, onUpdate, onDelete, onGallery, onCamera, deleteMode, 
    selectedForDelete, onToggleSelect, onAddItem, onCollapse 
}) => {
    const serialRef = useRef<HTMLInputElement>(null);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleContractChange = (val: string) => {
        // Remove newlines and limit to 20 characters for safety, though user said 10 digits
        const cleanVal = val.replace(/\n/g, '').slice(0, 20);
        onUpdate({ ...item, contract: cleanVal });
        if (cleanVal.length >= 10) {
            setTimeout(() => {
                serialRef.current?.focus();
            }, 10);
        }
    };

    const handleContractPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const lines = pastedData.split(/\r?\n/).filter(l => l.trim() !== '');
        
        // Even if it's less than 10 digits, go to serial
        // If multiple lines, we'll just take the first one for this field
        const firstLine = lines[0] || '';
        onUpdate({ ...item, contract: firstLine });
        
        setTimeout(() => {
            serialRef.current?.focus();
            // On mobile, sometimes we need to trigger a click or focus twice
            serialRef.current?.click();
        }, 100);
    };

    const finishItem = () => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
        onCollapse();
        setIsCollapsed(true);
        setTimeout(() => {
            onAddItem();
        }, 300);
    };

    const handleSerialChange = (val: string) => {
        const cleanVal = val.replace(/\n/g, '').slice(0, 30);
        onUpdate({ ...item, serial: cleanVal });
        if (cleanVal.length >= 20) {
            finishItem();
        }
    };

    const handleSerialPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        const lines = pastedData.split(/\r?\n/).filter(l => l.trim() !== '');
        
        if (lines.length > 0) {
            // Se colar algo que seja menos de 20 linhas ele completa a atividade e abre uma nova
            if (lines.length < 20) {
                onUpdate({ ...item, serial: lines[0] });
                setTimeout(() => {
                    finishItem();
                }, 100);
            } else {
                // Se for mais de 20 linhas, talvez o usuário queira apenas colar o texto?
                // Mantemos o comportamento de apenas atualizar sem finalizar automaticamente
                // para evitar erros em colagens massivas acidentais
                onUpdate({ ...item, serial: pastedData });
            }
        }
    };

    const variants = {
        hidden: { 
            opacity: 0, 
            height: 0,
            y: -20,
            scale: 0.95,
            marginBottom: 0,
            overflow: 'hidden'
        },
        visible: { 
            opacity: isCollapsed ? 0.5 : 1, 
            height: 'auto',
            y: 0,
            scale: isCollapsed ? 0.98 : 1,
            marginBottom: 8,
            transition: {
                height: { type: 'spring', stiffness: 500, damping: 40 },
                opacity: { duration: 0.2 },
                y: { type: 'spring', stiffness: 400, damping: 30 }
            }
        },
        exit: { 
            opacity: 0, 
            height: 0,
            y: -20,
            scale: 0.9,
            marginBottom: 0,
            transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
            }
        }
    };

    return (
        <motion.div 
            layout
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex gap-1.5 w-full"
        >
            <div className={`flex-1 p-2 rounded-[1.2rem] border shadow-sm flex flex-col gap-2 transition-all duration-500 ${deleteMode && selectedForDelete?.includes(item.id) ? 'bg-red-50 border-red-100' : 'bg-white/40 border-slate-100/50 backdrop-blur-sm'}`}>
                <div className="flex gap-1.5 items-center">
                    {deleteMode && (
                        <button 
                            onClick={() => onToggleSelect(item.id)}
                            className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${selectedForDelete?.includes(item.id) ? 'bg-red-500 border-red-400 text-white' : 'bg-slate-50 border-slate-200 text-transparent'}`}
                        >
                            <IconTrash className="w-3 h-3"/>
                        </button>
                    )}
                    
                    <div className="w-7 shrink-0 flex flex-col items-center justify-center opacity-30">
                        <span className="text-[7px] font-black text-slate-500">
                            {new Date(item.createdAt || Date.now()).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>

                    <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                        <div className="flex gap-1 items-center">
                            <div className="flex flex-col gap-1 flex-[0.3] min-w-0">
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        inputMode="numeric"
                                        placeholder="CTR" 
                                        value={item.contract} 
                                        onChange={e => handleContractChange(e.target.value)}
                                        onPaste={handleContractPaste}
                                        className="w-full py-2 px-0 rounded-lg border border-slate-100 outline-none font-black text-[10px] sm:text-[11px] bg-white text-slate-800 placeholder-slate-300 focus:border-blue-200 transition-all text-center shadow-sm tracking-tighter"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-1 flex-[0.7] min-w-0">
                                <div className="relative">
                                    <input 
                                        ref={serialRef}
                                        type="text" 
                                        inputMode="numeric"
                                        placeholder="SERIAL" 
                                        value={item.serial} 
                                        onChange={e => handleSerialChange(e.target.value)}
                                        onPaste={handleSerialPaste}
                                        className="w-full py-2 px-0 rounded-lg border border-slate-100 outline-none font-black text-[10px] sm:text-[11px] bg-white text-slate-800 placeholder-slate-300 focus:border-blue-200 transition-all text-center shadow-sm tracking-tighter"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-1 shrink-0">
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                onClick={() => onCamera(item)} 
                                className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#111827] text-white active:scale-95 transition-all shadow-md"
                            >
                                <IconCameraLens className="w-3.5 h-3.5"/>
                            </motion.button>
                            <motion.button 
                                whileTap={{ scale: 0.9 }}
                                onClick={() => onGallery(item)} 
                                className={`w-7 h-7 flex items-center justify-center rounded-lg active:scale-95 transition-all border overflow-visible ${item.photos.length > 0 ? 'bg-green-50 text-green-600 border-green-100' : 'bg-white text-slate-300 border-slate-100 shadow-sm'}`}
                            >
                                <div className="relative overflow-visible">
                                    <IconGallery className="w-3.5 h-3.5"/>
                                    <CountBadge count={item.photos.length} />
                                </div>
                            </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
