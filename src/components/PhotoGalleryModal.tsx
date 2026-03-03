
import React from 'react';
import { IconX } from './icons';
import { EquipmentItem } from '../types';

interface PhotoGalleryModalProps {
    item: EquipmentItem;
    onClose: () => void;
}

export const PhotoGalleryModal = ({ item, onClose }: PhotoGalleryModalProps) => (
    <div className="fixed inset-0 z-[100] bg-slate-50 flex flex-col p-6">
        <div className="flex justify-between items-center mb-10">
            <span className="font-black text-slate-400 text-[10px] uppercase tracking-[12px] opacity-40">GALERIA</span>
            <button onClick={onClose} className="p-4 bg-slate-200 rounded-full text-slate-600 active:scale-95 transition-all">
                <IconX className="w-7 h-7"/>
            </button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-6 no-scrollbar pb-24">
            {item.photos.map((p: string, i: number) => (
                <div key={i} className="aspect-video rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-xl">
                    <img src={p} className="w-full h-full object-contain" alt={`Equipment ${i}`} referrerPolicy="no-referrer" />
                </div>
            ))}
        </div>
    </div>
);
