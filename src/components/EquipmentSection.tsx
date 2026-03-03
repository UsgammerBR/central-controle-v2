
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EquipmentItemRow } from './EquipmentItemRow';
import { EquipmentItem, EquipmentCategory } from '../types';

interface EquipmentSectionProps {
    category: EquipmentCategory;
    items: EquipmentItem[];
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

const isItemActive = (item: EquipmentItem): boolean => (item.contract && item.contract.trim() !== '') || (item.serial && item.serial.trim() !== '') || item.photos.length > 0;

export const EquipmentSection = ({ 
    items, onUpdate, onDelete, onGallery, onCamera, 
    deleteMode, selectedForDelete, onToggleSelect, 
    isChristmas, onAddItem, onCollapse 
}: EquipmentSectionProps) => {
    const sortedItems = [...items].sort((a, b) => {
        const aActive = isItemActive(a);
        const bActive = isItemActive(b);
        if (aActive && !bActive) return -1;
        if (!aActive && bActive) return 1;
        return (a.createdAt || 0) - (b.createdAt || 0);
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren"
            }
        }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-2 w-full"
        >
            <AnimatePresence mode="popLayout">
                {sortedItems.map((item: EquipmentItem) => (
                    <EquipmentItemRow 
                        key={item.id}
                        item={item}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                        onGallery={onGallery}
                        onCamera={onCamera}
                        deleteMode={deleteMode}
                        selectedForDelete={selectedForDelete}
                        onToggleSelect={onToggleSelect}
                        isChristmas={isChristmas}
                        onAddItem={onAddItem}
                        onCollapse={onCollapse}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    );
};
