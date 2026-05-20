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
}

export default function AdminModal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  onSave, 
  saveText = "Save Changes",
  isSaving = false
}: AdminModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#5A2A1F]/40 backdrop-blur-sm">
      <div className="bg-white rounded-[32px] p-8 max-w-lg w-full shadow-2xl border border-white relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#5A2A1F]/40 hover:text-[#5A2A1F]"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-playfair font-bold text-[#5A2A1F] mb-6">
          {title}
        </h2>
        
        {children}

        <div className="mt-10 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-[#5A2A1F]/20 text-[#5A2A1F] font-bold hover:bg-[#F5F1EC] transition-colors uppercase tracking-widest text-sm"
          >
            Cancel
          </button>
          <button 
            onClick={onSave}
            disabled={isSaving}
            className="flex-1 py-3 px-4 rounded-xl bg-[#5A2A1F] text-white font-bold hover:bg-black transition-colors shadow-lg shadow-[#5A2A1F]/20 uppercase tracking-widest text-sm flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSaving && <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />}
            {saveText}
          </button>
        </div>
      </div>
    </div>
  );
}
