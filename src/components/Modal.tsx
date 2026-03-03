
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IconX } from './icons';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  hideHeader?: boolean;
  padding?: string;
}

export const Modal = ({ title, onClose, children, hideHeader = false, padding = "p-8" }: ModalProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/40 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <motion.div 
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="w-full max-w-[440px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative"
      onClick={e => e.stopPropagation()}
    >
      {!hideHeader && (
        <div className="flex items-center justify-between px-8 pt-8 pb-4">
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-tighter">{title}</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 active:scale-90 transition-all">
            <IconX className="w-3 h-3"/>
          </button>
        </div>
      )}
      <div className={padding}>
        {children}
      </div>
    </motion.div>
  </motion.div>
);
