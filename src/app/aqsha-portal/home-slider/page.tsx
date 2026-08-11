"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { UploadCloud, Save, Loader2, Plus, Trash2, CheckCircle, XCircle, Pencil, X, AlertTriangle } from 'lucide-react';

interface SlideData {
  _id?: string;
  image: string;
  imageAlt: string;
  bgColor: string;
  tagline: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  description: string;
  badge: string;
  primaryButtonLabel: string;
  primaryButtonLink: string;
  secondaryButtonLabel: string;
  secondaryButtonLink: string;
  order: number;
}

export default function HomeSliderAdmin() {
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [editingSlide, setEditingSlide] = useState<SlideData | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; title: string } | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchSlides = async () => {
    try {
      const res = await fetch(`${API_BASE}/home-slider`, { credentials: 'include' });
      const data = await res.json();
      if (Array.isArray(data)) {
        setSlides(data);
      }
    } catch (err) {
      showToast('Failed to fetch slides', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (deleteTarget) setDeleteTarget(null);
        else if (editingSlide) setEditingSlide(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [editingSlide, deleteTarget]);

  const handleCreateNew = async () => {
    try {
      const newSlide: Omit<SlideData, '_id'> = {
        image: '',
        imageAlt: 'New Promo Banner',
        bgColor: '#F4F1EA',
        tagline: 'NEW COLLECTION',
        title: 'New Slider Heading',
        highlightWord: '',
        subtitle: 'Eye-catching subtitle',
        description: 'Describe the collection here.',
        badge: '',
        primaryButtonLabel: 'SHOP NOW',
        primaryButtonLink: '/collections',
        secondaryButtonLabel: '',
        secondaryButtonLink: '',
        order: slides.length
      };

      const res = await fetch(`${API_BASE}/home-slider`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSlide),
        credentials: 'include'
      });
      const savedSlide = await res.json();
      if (savedSlide && savedSlide._id) {
        setSlides(prev => [...prev, savedSlide]);
        setEditingSlide(savedSlide);
        showToast('New slide created!', 'success');
      }
    } catch (err) {
      showToast('Failed to create new slide', 'error');
    }
  };

  const handleModalFieldChange = (field: keyof SlideData, value: string) => {
    if (!editingSlide) return;
    setEditingSlide({ ...editingSlide, [field]: value });
  };

  const handleSave = async () => {
    if (!editingSlide || !editingSlide._id) return;
    setSavingId(editingSlide._id);
    try {
      const res = await fetch(`${API_BASE}/home-slider/${editingSlide._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingSlide),
        credentials: 'include'
      });
      if (res.ok) {
        setSlides(prev => prev.map(s => s._id === editingSlide._id ? editingSlide : s));
        showToast('Slide updated successfully!', 'success');
        setEditingSlide(null);
      }
    } catch (err) {
      showToast('Failed to save slide', 'error');
    } finally {
      setSavingId(null);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(`${API_BASE}/home-slider/${deleteTarget.id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        setSlides(prev => prev.filter(s => s._id !== deleteTarget.id));
        if (editingSlide?._id === deleteTarget.id) setEditingSlide(null);
        showToast('Slide deleted', 'success');
      }
    } catch (err) {
      showToast('Failed to delete', 'error');
    } finally {
      setDeleting(false);
      setDeleteTarget(null);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingSlide?._id) return;

    setUploadingId(editingSlide._id);
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch(`${API_BASE}/upload`, {
        method: 'POST',
        body: formData,
        credentials: 'include'
      });
      const uploadData = await res.json();
      if (uploadData.imageUrl) {
        handleModalFieldChange('image', uploadData.imageUrl);
        showToast('Image uploaded! Remember to save.', 'success');
      }
    } catch (err) {
      showToast('Failed to upload image', 'error');
    } finally {
      setUploadingId(null);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64"><Loader2 className="animate-spin text-primary w-8 h-8"/></div>;
  }

  return (
    <div className="space-y-6 md:space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-primary/10">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-primary tracking-tight">Home Slider CMS</h1>
          <p className="text-primary/70 text-xs md:text-sm mt-1">Manage interactive hero banners for the homepage.</p>
        </div>
        <button onClick={handleCreateNew} className="bg-primary hover:bg-secondary text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-bold flex items-center shadow-sm text-sm w-full sm:w-auto justify-center">
          <Plus className="w-4 h-4 md:w-5 md:h-5 mr-1" /> Add Slide
        </button>
      </div>

      {/* Slide List — Compact Preview Cards */}
      <div className="space-y-3">
        {slides.map((slide, index) => (
          <div key={slide._id || `slide-${index}`} className="bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden">
            <div className="flex items-center gap-3 md:gap-5 p-3 md:p-5">
              {/* Slide Number */}
              <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-cream flex items-center justify-center">
                <span className="text-[10px] md:text-xs font-black text-primary/60">{index + 1}</span>
              </div>

              {/* Thumbnail */}
              <div className="relative flex-shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                {slide.image ? (
                  <Image src={slide.image} alt={slide.title || 'Slide'} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[8px] md:text-[9px] text-gray-400 text-center leading-tight">No<br/>Image</span>
                  </div>
                )}
              </div>

              {/* Slide Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xs md:text-base font-bold text-gray-900 truncate">{slide.title || 'Untitled Slide'}</h3>
                <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 truncate">{slide.tagline || 'No tagline'}</p>
                {/* Tags - hidden on very small screens */}
                <div className="hidden sm:flex items-center gap-3 mt-1.5 flex-wrap">
                  {slide.primaryButtonLabel && (
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{slide.primaryButtonLabel}</span>
                  )}
                  {slide.badge && (
                    <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-semibold">{slide.badge}</span>
                  )}
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full border border-gray-300" style={{ backgroundColor: slide.bgColor }}></div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">{slide.bgColor}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
                <button
                  onClick={() => setEditingSlide({ ...slide })}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary text-white text-[10px] md:text-xs font-bold rounded-lg hover:bg-secondary transition-colors shadow-sm"
                >
                  <Pencil className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span className="hidden sm:inline">Edit Slide</span>
                  <span className="sm:hidden">Edit</span>
                </button>
                <button
                  onClick={() => setDeleteTarget({ id: slide._id!, title: slide.title || 'Untitled Slide' })}
                  className="p-1.5 md:p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete slide"
                >
                  <Trash2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {slides.length === 0 && (
          <div className="text-center p-8 md:p-12 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 font-medium text-sm">No slides built yet. Click &quot;Add Slide&quot; to begin.</p>
          </div>
        )}
      </div>

      {/* ===== DELETE CONFIRMATION MODAL ===== */}
      {deleteTarget && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={() => !deleting && setDeleteTarget(null)} />
          <div className="relative bg-white rounded-[32px] p-6 md:p-8 w-full max-w-md shadow-2xl border border-white z-10">
            <button
              onClick={() => !deleting && setDeleteTarget(null)}
              className="absolute top-5 right-5 md:top-6 md:right-6 text-primary/40 hover:text-primary"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-50 flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">Delete Slide?</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Are you sure you want to delete <span className="font-bold text-gray-900">&ldquo;{deleteTarget.title}&rdquo;</span>? This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3 md:gap-4">
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={deleting}
                className="flex-1 py-2.5 md:py-3 px-4 rounded-xl border border-primary/20 text-primary font-bold hover:bg-cream transition-colors uppercase tracking-widest text-xs md:text-sm disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-1 py-2.5 md:py-3 px-4 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20 uppercase tracking-widest text-xs md:text-sm flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {deleting && <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== EDIT MODAL ===== */}
      {editingSlide && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setEditingSlide(null)}
          />

          {/* Modal Content — full-screen on mobile, centered card on desktop */}
          <div
            ref={modalRef}
            className="relative bg-white shadow-2xl w-full md:max-w-[1100px] h-[95vh] md:h-auto md:max-h-[90vh] overflow-y-auto z-10 border-t md:border border-primary/10 rounded-t-2xl md:rounded-2xl"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white z-20 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 rounded-t-2xl">
              {/* Mobile drag handle */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-gray-300 md:hidden" />
              <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-0">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary flex items-center justify-center">
                  <Pencil className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-base md:text-lg font-bold text-gray-900">Edit Slide</h2>
                  <p className="text-[10px] md:text-xs text-gray-500 hidden sm:block">Make your changes and click Save to apply.</p>
                </div>
              </div>
              <button
                onClick={() => setEditingSlide(null)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors mt-2 md:mt-0"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 md:p-6 flex flex-col md:flex-row gap-5 md:gap-8">
              {/* Image Col */}
              <div className="w-full md:w-[300px] flex-shrink-0 flex flex-col">
                <label className="text-xs font-bold text-primary/70 mb-2 uppercase">Background Image</label>
                <div className="relative w-full aspect-[3/2] md:aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden border border-dashed border-primary/30 flex items-center justify-center group mb-4">
                  {editingSlide.image ? (
                    <Image src={editingSlide.image} alt="Slider image" fill className="object-cover" />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <UploadCloud className="w-8 h-8" />
                      <span className="text-xs">Click to upload</span>
                    </div>
                  )}
                  
                  <label className={`absolute inset-0 bg-black/50 transition-opacity cursor-pointer flex flex-col items-center justify-center gap-2 ${uploadingId === editingSlide._id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    {uploadingId === editingSlide._id ? (
                      <Loader2 className="w-8 h-8 text-white animate-spin" />
                    ) : (
                      <>
                        <UploadCloud className="w-8 h-8 text-white" />
                        <span className="text-white text-xs font-medium">Upload New Image</span>
                      </>
                    )}
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>
                </div>

                {/* Color Blend Picker */}
                <label className="text-xs font-bold text-primary/70 mb-2 uppercase">Edge Blend Color</label>
                <div className="flex gap-2">
                  <input type="color" value={editingSlide.bgColor} onChange={e => handleModalFieldChange('bgColor', e.target.value)} className="w-10 h-10 md:w-12 md:h-10 rounded cursor-pointer" />
                  <input type="text" value={editingSlide.bgColor} onChange={e => handleModalFieldChange('bgColor', e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm text-gray-900 bg-white uppercase" />
                </div>
                <p className="text-[10px] text-gray-500 mt-1 leading-tight">Must match the EXACT background color on the left edge of the photo.</p>
              </div>

              {/* Form Col */}
              <div className="flex-1 flex flex-col gap-3 md:gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Title</label>
                    <textarea rows={2} value={editingSlide.title} onChange={e => handleModalFieldChange('title', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none"/>
                    <p className="text-[10px] text-gray-400 mt-0.5">Use \\n for line breaks</p>
                  </div>
                  <div>
                    <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Highlight Word</label>
                    <input type="text" value={editingSlide.highlightWord} onChange={e => handleModalFieldChange('highlightWord', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none" placeholder="e.g. Cotton"/>
                    <p className="text-[10px] text-gray-400 mt-0.5">Word from the title to highlight in gold</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Tagline</label>
                    <input type="text" value={editingSlide.tagline} onChange={e => handleModalFieldChange('tagline', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none"/>
                  </div>
                  <div>
                    <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Subtitle</label>
                    <input type="text" value={editingSlide.subtitle} onChange={e => handleModalFieldChange('subtitle', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none"/>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Description</label>
                  <textarea rows={2} value={editingSlide.description} onChange={e => handleModalFieldChange('description', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none"/>
                </div>

                <div>
                  <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Badge Label (Optional)</label>
                  <input type="text" value={editingSlide.badge} onChange={e => handleModalFieldChange('badge', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none" placeholder="e.g. NEW, BESTSELLER"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Primary Button Label</label>
                    <input type="text" value={editingSlide.primaryButtonLabel} onChange={e => handleModalFieldChange('primaryButtonLabel', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none"/>
                  </div>
                  <div>
                    <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Primary Button Link</label>
                    <input type="text" value={editingSlide.primaryButtonLink} onChange={e => handleModalFieldChange('primaryButtonLink', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none" placeholder="/batik-fabric"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Secondary Button Label</label>
                    <input type="text" value={editingSlide.secondaryButtonLabel} onChange={e => handleModalFieldChange('secondaryButtonLabel', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none"/>
                  </div>
                  <div>
                    <label className="text-[11px] md:text-xs font-bold text-primary/70 uppercase mb-1 block">Secondary Button Link</label>
                    <input type="text" value={editingSlide.secondaryButtonLink} onChange={e => handleModalFieldChange('secondaryButtonLink', e.target.value)} className="w-full p-2 md:p-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none" placeholder="/wholesale"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white z-20 flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center px-4 md:px-6 py-3 md:py-4 border-t border-gray-200 rounded-b-2xl gap-3">
              <button
                onClick={() => setDeleteTarget({ id: editingSlide._id!, title: editingSlide.title || 'Untitled Slide' })}
                className="text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg flex items-center justify-center text-sm font-bold transition-colors"
              >
                <Trash2 className="w-4 h-4 mr-1.5"/> Delete Slide
              </button>
              <div className="flex items-center gap-2 md:gap-3">
                <button onClick={() => setEditingSlide(null)} className="flex-1 sm:flex-none px-4 md:px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors text-center">
                  Cancel
                </button>
                <button onClick={handleSave} disabled={savingId === editingSlide._id} className="flex-1 sm:flex-none bg-primary hover:bg-secondary text-white px-6 md:px-8 py-2.5 rounded-xl font-bold flex items-center justify-center disabled:opacity-50 shadow-sm">
                  {savingId === editingSlide._id ? <Loader2 className="w-5 h-5 animate-spin"/> : <><Save className="w-5 h-5 mr-2"/> Save Slide</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-4 right-4 z-[130] flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-2xl transition-all ${toast.type === 'success' ? 'bg-primary text-white' : 'bg-red-500 text-white'}`}>
          {toast.type === 'success' ? <CheckCircle className="w-4 h-4 md:w-5 md:h-5" /> : <XCircle className="w-4 h-4 md:w-5 md:h-5" />}
          <span className="font-medium text-xs md:text-sm">{toast.message}</span>
        </div>
      )}
    </div>
  );
}
