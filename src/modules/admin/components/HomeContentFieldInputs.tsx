"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Trash2, UploadCloud, Loader2 } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export type FieldType = "text" | "textarea" | "image" | "video";

export interface FieldConfig {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
}

export interface ListFieldConfig {
  key: string;
  label: string;
  itemFields: FieldConfig[];
}

async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("image", file);
  const res = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  const data = await res.json();
  if (!data.imageUrl) throw new Error(data.message || "Upload failed");
  return data.imageUrl;
}

export function FieldInput({
  field,
  value,
  onChange,
}: {
  field: FieldConfig;
  value: string;
  onChange: (value: string) => void;
}) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file);
      onChange(url);
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  if (field.type === "textarea") {
    return (
      <div>
        <label className="block text-[11px] font-black uppercase tracking-widest text-primary/60 mb-1.5">{field.label}</label>
        <textarea
          rows={3}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className="w-full border border-primary/20 rounded-xl p-3 text-sm text-primary focus:ring-2 focus:ring-accent focus:outline-none font-medium resize-none"
        />
      </div>
    );
  }

  if (field.type === "image" || field.type === "video") {
    const isVideo = field.type === "video";
    return (
      <div>
        <label className="block text-[11px] font-black uppercase tracking-widest text-primary/60 mb-1.5">{field.label}</label>
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-cream border border-primary/10">
            {value && !isVideo ? (
              <Image src={value} alt={field.label} fill className="object-cover object-top" unoptimized />
            ) : value && isVideo ? (
              <video src={value} className="w-full h-full object-cover object-top" muted />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-primary/30 text-[9px] font-bold text-center px-1">No {isVideo ? "Video" : "Image"}</div>
            )}
          </div>
          <label className="flex-1 flex items-center justify-center gap-2 border border-dashed border-primary/30 rounded-xl p-2.5 text-xs font-bold text-primary/60 cursor-pointer hover:bg-cream/50 transition-colors">
            {uploading ? <Loader2 size={14} className="animate-spin" /> : <UploadCloud size={14} />}
            {uploading ? "Uploading..." : `Upload ${isVideo ? "Video" : "Image"}`}
            <input type="file" accept={isVideo ? "video/*" : "image/*"} className="hidden" onChange={handleFileChange} />
          </label>
        </div>
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="or paste a URL directly"
          className="mt-2 w-full border border-primary/20 rounded-lg p-2 text-xs text-primary focus:ring-2 focus:ring-accent focus:outline-none font-medium"
        />
      </div>
    );
  }

  return (
    <div>
      <label className="block text-[11px] font-black uppercase tracking-widest text-primary/60 mb-1.5">{field.label}</label>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        className="w-full border border-primary/20 rounded-xl p-3 text-sm text-primary focus:ring-2 focus:ring-accent focus:outline-none font-medium"
      />
    </div>
  );
}

export function RepeatableListEditor({
  label,
  items,
  itemFields,
  onChange,
}: {
  label: string;
  items: Record<string, any>[];
  itemFields: FieldConfig[];
  onChange: (items: Record<string, any>[]) => void;
}) {
  const updateItem = (index: number, key: string, value: string) => {
    const next = items.map((item, i) => (i === index ? { ...item, [key]: value } : item));
    onChange(next);
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const addItem = () => {
    const blank: Record<string, string> = {};
    itemFields.forEach((f) => { blank[f.key] = ""; });
    onChange([...items, blank]);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-black uppercase tracking-widest text-primary">{label}</span>
        <button type="button" onClick={addItem} className="flex items-center gap-1 text-[11px] font-bold text-accent hover:text-primary transition-colors">
          <Plus size={14} /> Add
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="relative bg-cream/40 border border-primary/10 rounded-xl p-4 space-y-3">
            <button
              type="button"
              onClick={() => removeItem(i)}
              className="absolute top-2 right-2 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Remove"
            >
              <Trash2 size={14} />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-8">
              {itemFields.map((f) => (
                <div key={f.key} className={f.type === "textarea" || f.type === "image" || f.type === "video" ? "sm:col-span-2" : ""}>
                  <FieldInput field={f} value={item[f.key]} onChange={(v) => updateItem(i, f.key, v)} />
                </div>
              ))}
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-xs text-primary/40 font-medium text-center py-4 border border-dashed border-primary/15 rounded-xl">No items yet. Click "Add" to create one.</p>
        )}
      </div>
    </div>
  );
}
