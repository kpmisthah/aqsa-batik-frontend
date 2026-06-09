"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { UploadCloud, Save, Loader2, Image as ImageIcon } from 'lucide-react';

const PAGES = ['home', 'wholesale', 'new-arrivals', 'batik-suits', 'batik-fabric'];

export default function BannersAdmin() {
  const [banners, setBanners] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const res = await fetch(`${API_BASE}/banners`, { cache: 'no-store' });
      const data = await res.json();
      const bannerMap: Record<string, string> = {};
      if (Array.isArray(data)) {
        data.forEach((b: any) => {
          bannerMap[b.page] = b.imageUrl;
        });
      }
      setBanners(bannerMap);
    } catch (err) {
      console.error('Failed to fetch banners', err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, page: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(page);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const uploadRes = await fetch(`${API_BASE}/upload`, {
        method: 'POST',
        body: formData,
      });
      const uploadData = await uploadRes.json();
      if (uploadData.imageUrl) {
        setBanners((prev) => ({ ...prev, [page]: uploadData.imageUrl }));
        // Auto-save to database
        await fetch(`${API_BASE}/banners/${page}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageUrl: uploadData.imageUrl }),
        });
        alert(`Banner for ${page} uploaded and updated successfully!`);
      }
    } catch (err) {
      console.error('Failed to upload and save image', err);
      alert('Failed to upload and save image');
    } finally {
      setUploading(null);
    }
  };

  const handleSave = async (page: string) => {
    const imageUrl = banners[page];
    if (!imageUrl) {
      alert('Please upload an image first');
      return;
    }

    setSaving(page);
    try {
      const res = await fetch(`${API_BASE}/banners/${page}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl }),
      });
      if (!res.ok) throw new Error('Failed to save banner');
      alert(`Banner for ${page} updated successfully!`);
    } catch (err) {
      console.error(err);
      alert('Failed to save banner');
    } finally {
      setSaving(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-[#5A2A1F]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-[#5A2A1F] tracking-tight">Manage Banners</h1>
        <p className="text-[#5A2A1F]/70 mt-1">Upload and update hero banners for your website pages.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PAGES.map((page) => (
          <div key={page} className="bg-white rounded-2xl shadow-sm border border-[#5A2A1F]/10 p-5 flex flex-col">
            <h2 className="text-lg font-bold text-[#5A2A1F] capitalize mb-4">
              {page.replace('-', ' ')} Page
            </h2>
            
            <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4 border border-dashed border-[#5A2A1F]/30 flex items-center justify-center group">
              {banners[page] ? (
                <Image src={banners[page]} alt={`${page} banner`} layout="fill" objectFit="cover" />
              ) : (
                <div className="text-gray-400 flex flex-col items-center">
                  <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                  <span className="text-sm font-medium">No Banner</span>
                </div>
              )}
              
              <label className={`absolute inset-0 bg-black/50 transition-opacity cursor-pointer flex items-center justify-center ${uploading === page ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {uploading === page ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-8 h-8 text-white animate-spin mb-2" />
                    <span className="font-medium text-sm text-white">Uploading...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-white">
                    <UploadCloud className="w-8 h-8 mb-2" />
                    <span className="font-medium text-sm">
                      {banners[page] ? "Update Image" : "Upload Image"}
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, page)}
                  disabled={uploading === page}
                />
              </label>
            </div>

            <div className="mt-auto">
              <button
                onClick={() => handleSave(page)}
                disabled={saving === page || !banners[page] || uploading === page}
                className="w-full py-2.5 bg-[#5A2A1F] hover:bg-[#8B3A2B] text-white rounded-xl font-bold flex items-center justify-center transition-colors disabled:opacity-50"
              >
                {saving === page ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    {banners[page] ? "Update Banner" : "Save Banner"}
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
