
import React from 'react';
import { IconX, IconTrash, IconGallery } from './icons';
import { EquipmentItem } from '../types';

interface PhotoGalleryModalProps {
    item: EquipmentItem;
    onClose: () => void;
    onDeletePhoto: (photoIndex: number) => void;
}

export const PhotoGalleryModal = ({ item, onClose, onDeletePhoto }: PhotoGalleryModalProps) => (
    <div className="fixed inset-0 z-[100] bg-slate-50 flex flex-col p-6">
        <div className="flex justify-between items-center mb-10">
            <span className="font-black text-slate-400 text-[10px] uppercase tracking-[12px] opacity-40">GALERIA</span>
            <button onClick={onClose} className="p-4 bg-slate-200 rounded-full text-slate-600 active:scale-95 transition-all">
                <IconX className="w-7 h-7"/>
            </button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-6 no-scrollbar pb-24">
            {item.photos.length > 0 ? item.photos.map((p: string, i: number) => (
                <div key={i} className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-xl group">
                    <img src={p} className="w-full h-full object-contain" alt={`Equipment ${i}`} referrerPolicy="no-referrer" />
                    <button 
                        onClick={() => { if(confirm('Excluir esta foto?')) onDeletePhoto(i); }}
                        className="absolute top-4 right-4 p-3 bg-red-500 text-white rounded-full shadow-lg active:scale-90 transition-all"
                    >
                        <IconTrash className="w-4 h-4"/>
                    </button>
                </div>
            )) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-10 opacity-30">
                    <IconGallery className="w-16 h-16 mb-4 text-slate-300"/>
                    <p className="font-black uppercase tracking-[4px] text-[10px]">Nenhuma foto</p>
                </div>
            )}
        </div>
    </div>
);
