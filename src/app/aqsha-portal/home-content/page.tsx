"use client";

import React, { useState } from "react";
import { Pencil, CheckCircle, XCircle } from "lucide-react";
import AdminModal from "@/modules/admin/components/AdminModal";
import { FieldInput, RepeatableListEditor } from "@/modules/admin/components/HomeContentFieldInputs";
import { HOME_CONTENT_SECTIONS, SectionConfig } from "@/modules/admin/homeContent/sectionConfigs";
import { useHomeContentAdmin } from "@/modules/admin/homeContent/hooks/useHomeContentAdmin";

export default function HomeContentAdmin() {
  const { sections, loading, isSaving, updateSection } = useHomeContentAdmin();
  const [editingSection, setEditingSection] = useState<SectionConfig | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const openEditor = (section: SectionConfig) => {
    // Pre-fill with whatever's actually live: the saved admin content if this
    // section has been customized before, otherwise the content currently
    // hardcoded (and shown) on the site — never a blank form.
    const saved = sections[section.key];
    const base = saved && Object.keys(saved).length > 0 ? saved : section.defaultData;
    const initial: Record<string, any> = { ...base };
    section.fields.forEach((f) => {
      if (initial[f.key] === undefined) initial[f.key] = "";
    });
    (section.lists || []).forEach((l) => {
      if (!Array.isArray(initial[l.key])) initial[l.key] = [];
    });
    setFormData(initial);
    setEditingSection(section);
  };

  const closeEditor = () => {
    setEditingSection(null);
    setFormData({});
  };

  const handleSave = async () => {
    if (!editingSection) return;
    try {
      await updateSection(editingSection.key, formData);
      showToast(`${editingSection.label} updated successfully!`);
      closeEditor();
    } catch (err) {
      console.error(err);
      showToast(`Failed to save ${editingSection.label}. Please try again.`, "error");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
        <h1 className="text-2xl font-black font-heading text-primary">Home Page Content</h1>
        <p className="text-sm text-primary/60 mt-1 font-medium">
          Edit every section of the home page. Sections you haven't edited yet keep showing their current content.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {HOME_CONTENT_SECTIONS.map((section) => {
          const hasCustomContent = !!sections[section.key];
          return (
            <div key={section.key} className="bg-white rounded-2xl shadow-sm border border-primary/10 p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black text-primary uppercase tracking-wide">{section.label}</h3>
                  {hasCustomContent && (
                    <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full bg-green-100 text-green-700">Customized</span>
                  )}
                </div>
                <p className="text-xs text-primary/50 font-medium mt-1">{section.description}</p>
              </div>
              <button
                onClick={() => openEditor(section)}
                className="shrink-0 flex items-center gap-1.5 px-3 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Pencil size={13} /> Edit
              </button>
            </div>
          );
        })}
      </div>

      <AdminModal
        isOpen={!!editingSection}
        onClose={closeEditor}
        title={editingSection?.label || ""}
        onSave={handleSave}
        isSaving={isSaving}
        maxWidth="max-w-3xl"
      >
        {editingSection && (
          <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
            {editingSection.fields.map((f) => (
              <FieldInput
                key={f.key}
                field={f}
                value={formData[f.key]}
                onChange={(v) => setFormData((prev) => ({ ...prev, [f.key]: v }))}
              />
            ))}
            {(editingSection.lists || []).map((list) => (
              <RepeatableListEditor
                key={list.key}
                label={list.label}
                items={formData[list.key] || []}
                itemFields={list.itemFields}
                onChange={(items) => setFormData((prev) => ({ ...prev, [list.key]: items }))}
              />
            ))}
          </div>
        )}
      </AdminModal>

      {toast && (
        <div className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[130] flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl transition-all duration-300 ${toast.type === "success" ? "bg-primary text-white" : "bg-red-500 text-white"}`}>
          {toast.type === "success" ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
          <span className="font-medium text-sm tracking-wide">{toast.message}</span>
        </div>
      )}
    </div>
  );
}
