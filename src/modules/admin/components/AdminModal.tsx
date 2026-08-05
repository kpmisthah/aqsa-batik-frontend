import React from "react";
import { X } from "lucide-react";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onSave: () => void;
  saveText?: string;
  isSaving?: boolean;
  maxWidth?: string;
}

export default function AdminModal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  onSave, 
  saveText = "Save Changes",
  isSaving = false,
  maxWidth = "max-w-lg"
}: AdminModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
      <div className={`bg-white rounded-[32px] p-8 w-full shadow-2xl border border-white relative ${maxWidth}`}>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-primary/40 hover:text-primary"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">
          {title}
        </h2>
        
        {children}

        <div className="mt-10 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-primary/20 text-primary font-bold hover:bg-cream transition-colors uppercase tracking-widest text-sm"
          >
            Cancel
          </button>
          <button 
            onClick={onSave}
            disabled={isSaving}
            className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-bold hover:bg-black transition-colors shadow-lg shadow-primary/20 uppercase tracking-widest text-sm flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSaving && <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />}
            {saveText}
          </button>
        </div>
      </div>
    </div>
  );
}
