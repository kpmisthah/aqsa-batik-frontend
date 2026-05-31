import React from "react";
import { Plus } from "lucide-react";

interface AdminHeaderProps {
  title: string;
  description: string;
  buttonText?: string;
  onAddClick?: () => void;
}

export default function AdminHeader({ title, description, buttonText, onAddClick }: AdminHeaderProps) {
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-[#5A2A1F] font-playfair tracking-tight">{title}</h1>
        <p className="mt-2 text-lg text-[#5A2A1F]/70 italic font-medium">{description}</p>
      </div>
      {buttonText && onAddClick && (
        <div className="mt-4 sm:mt-0">
          <button 
            onClick={onAddClick}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-xl shadow-[0_10px_20px_rgba(90,42,31,0.15)] text-sm font-black uppercase tracking-widest text-white bg-[#5A2A1F] hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A2A1F] transition-all hover:-translate-y-1"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}
