"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";
import { useAuthStore } from "@/hooks/useAuthStore";
import Nav from "@/modules/user/components/Nav";
import { User, Mail, Shield, Clock, Award, ArrowLeft, LogOut, Camera, Loader2, Check } from "lucide-react";
import Link from "next/link";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function ProfilePage() {
  const { isSignedIn, user, loading, logout } = useAuthSync();
  const { setUser } = useAuthStore();
  const router = useRouter();

  // Local Form and Loading States
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  
  // Image Cropping States
  const [cropImageSrc, setCropImageSrc] = useState<string | null>(null);
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cropperRef = useRef<ReactCropperElement>(null);

  // Sync state with user details once loaded
  useEffect(() => {
    if (user) {
      setName(user.name);
      setAvatar(user.avatar || null);
    }
  }, [user]);

  // Redirect to login if not signed in
  useEffect(() => {
    if (!loading && !isSignedIn) {
      router.push("/login");
    }
  }, [isSignedIn, loading, router]);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Triggered when file selected: reads it and opens crop modal
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    // Validate type and size
    if (!file.type.startsWith("image/")) {
      showToast("Please upload a valid image file.", "error");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      showToast("Image size must be smaller than 10MB.", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setCropImageSrc(reader.result as string);
      setIsCropModalOpen(true);
    };
    reader.readAsDataURL(file);

    // Reset input value so user can select the same file again
    if (e.target) {
      e.target.value = "";
    }
  };

  // Crops and uploads to Cloudinary backend
  const handleCropAndUpload = async () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper || !user) return;

    // Close crop modal instantly to avoid double actions
    setIsCropModalOpen(false);
    setUploading(true);
    showToast("Processing cropped avatar image...", "success");

    try {
      // Get cropped image canvas (force high-res square)
      const canvas = cropper.getCroppedCanvas({
        width: 500,
        height: 500,
        imageSmoothingQuality: "high",
      });

      if (!canvas) throw new Error("Could not crop avatar image.");

      // Convert canvas to blob/file to upload
      const croppedFile = await new Promise<File | null>((resolve) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            resolve(null);
            return;
          }
          const file = new File([blob], "cropped-avatar.jpg", { type: "image/jpeg" });
          resolve(file);
        }, "image/jpeg", 0.9);
      });

      if (!croppedFile) throw new Error("Could not process cropped file.");

      // 1. Upload to Cloudinary backend
      const formData = new FormData();
      formData.append("image", croppedFile);

      const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const uploadRes = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) throw new Error("Upload failed");
      const uploadData = await uploadRes.json();
      const imageUrl = uploadData.imageUrl;

      // 2. Update backend database
      const updateRes = await fetch(`${API_BASE}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar: imageUrl }),
      });

      if (!updateRes.ok) throw new Error("Failed to save avatar image to account");

      // 3. Sync state locally
      setAvatar(imageUrl);
      setUser({
        ...user,
        avatar: imageUrl,
      });

      showToast("Profile image cropped and updated successfully!", "success");
    } catch (err: any) {
      console.error(err);
      showToast(err.message || "Failed to crop or upload image. Please try again.", "error");
    } finally {
      setUploading(false);
      setCropImageSrc(null);
    }
  };

  // Submit name/profile updates
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (!name.trim()) {
      showToast("Full name cannot be empty", "error");
      return;
    }

    setSaving(true);
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const updateRes = await fetch(`${API_BASE}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!updateRes.ok) throw new Error("Failed to update profile name");
      
      // Update local state and global store
      setUser({
        ...user,
        name: name.trim(),
      });

      showToast("Profile updated successfully!", "success");
    } catch (err: any) {
      console.error(err);
      showToast(err.message || "Server connection failed.", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
        <Nav />
        <div className="flex-1 flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-[#5A2A1F]/20 border-t-[#5A2A1F] rounded-full animate-spin mb-4" />
          <p className="text-sm font-bold uppercase tracking-widest text-[#5A2A1F]/60">Loading Your Profile...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const formatDate = (isoString?: string) => {
    if (!isoString || isoString === "Never") return "Never";
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoString;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-rose-50 border-rose-200 text-rose-800";
      case "Wholesaler":
        return "bg-amber-50 border-amber-200 text-amber-800";
      default:
        return "bg-emerald-50 border-emerald-200 text-emerald-800";
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <Nav />

      {/* Floating Toast Notification */}
      {toast && (
        <div className={`fixed top-24 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border transition-all duration-300 text-sm font-bold ${
          toast.type === "success" 
            ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
            : "bg-red-50 border-red-200 text-red-800"
        }`}>
          <span className={`w-2.5 h-2.5 rounded-full ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'} ${toast.type === 'success' ? 'animate-ping' : ''}`} />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Luxury Image Cropper Modal */}
      {isCropModalOpen && cropImageSrc && (
        <div className="fixed inset-0 bg-[#5A2A1F]/40 backdrop-blur-sm flex items-center justify-center z-[250] p-4 animate-in fade-in duration-300">
          <div className="bg-[#FAF6F0] rounded-[32px] border border-[#5A2A1F]/10 p-6 md:p-8 max-w-xl w-full shadow-2xl relative animate-in zoom-in-95 duration-200 flex flex-col gap-6">
            
            {/* Corner styling borders */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#8B3A2B]/30 rounded-tl-[32px]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#8B3A2B]/30 rounded-tr-[32px]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#8B3A2B]/30 rounded-bl-[32px]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#8B3A2B]/30 rounded-br-[32px]" />

            <div>
              <span className="text-[10px] font-black tracking-widest text-[#8B3A2B] uppercase">IMAGE ADJUSTMENT</span>
              <h3 className="font-playfair text-2xl font-black text-[#5A2A1F] mt-1">Crop Your Profile Photo</h3>
              <p className="text-xs text-[#5A2A1F]/60 mt-1 font-medium leading-relaxed">
                Drag, scale, and adjust your photo perfectly within the square guidelines below.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#5A2A1F]/15 bg-white relative max-h-[350px] md:max-h-[400px]">
              <Cropper
                src={cropImageSrc}
                style={{ height: 350, width: "100%" }}
                initialAspectRatio={1}
                aspectRatio={1}
                guides={true}
                ref={cropperRef}
                viewMode={1}
                dragMode="move"
                scalable={true}
                cropBoxMovable={true}
                cropBoxResizable={true}
                background={false}
                responsive={true}
                checkOrientation={false}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsCropModalOpen(false);
                  setCropImageSrc(null);
                }}
                className="flex-1 bg-white border border-[#5A2A1F]/20 text-[#5A2A1F] hover:bg-[#FAF6F0] py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all active:scale-[0.99]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCropAndUpload}
                className="flex-1 bg-[#5A2A1F] hover:bg-black text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all shadow hover:shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Check size={14} />
                <span>Crop & Upload</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#8B3A2B] hover:text-[#5A2A1F] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          <span>Back to Store</span>
        </Link>

        {/* Profile Card Header */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#5A2A1F]/10 bg-[#FAF6F0] p-8 md:p-12 shadow-xl mb-8">
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B3A2B]/30 rounded-tl-[32px]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#8B3A2B]/30 rounded-tr-[32px]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#8B3A2B]/30 rounded-bl-[32px]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B3A2B]/30 rounded-br-[32px]" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            {/* Cloudinary Profile Avatar Upload Block */}
            <div className="relative group cursor-pointer" onClick={handleAvatarClick}>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
              
              <div className="w-28 h-28 rounded-3xl bg-[#5A2A1F] text-white flex items-center justify-center font-playfair text-5xl font-black shadow-lg relative border-4 border-white overflow-hidden transition-all duration-300 group-hover:brightness-90 group-hover:scale-[1.02]">
                {avatar ? (
                  <img src={avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{user.name.charAt(0).toUpperCase()}</span>
                )}
                
                {/* Upload Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {uploading ? (
                    <Loader2 size={24} className="text-white animate-spin" />
                  ) : (
                    <>
                      <Camera size={20} className="text-white mb-1" />
                      <span className="text-[8px] font-black uppercase text-white/95 tracking-widest">Change</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="absolute -bottom-2 -right-2 bg-[#8B3A2B] text-white p-2 rounded-xl shadow border border-white">
                <Award size={14} className="animate-bounce" />
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start">
                <h1 className="font-playfair text-3xl font-black text-[#5A2A1F] tracking-tight">{user.name}</h1>
                <span className={`inline-flex self-center px-3.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border ${getRoleBadgeColor(user.role)}`}>
                  {user.role}
                </span>
              </div>
              <p className="text-sm text-[#5A2A1F]/60 font-medium mt-1">{user.email}</p>
              
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#5A2A1F]/5 text-xs text-[#5A2A1F] font-bold uppercase tracking-wider">
                  <Shield size={14} className="text-[#8B3A2B]" />
                  <span>Status: {user.status}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#5A2A1F]/5 text-xs text-[#5A2A1F] font-bold uppercase tracking-wider">
                  <Clock size={14} className="text-[#8B3A2B]" />
                  <span>Active Since: {formatDate(user.createdAt?.toString()) || "Today"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main profile form/info */}
          <div className="md:col-span-2 space-y-6">
            <form onSubmit={handleProfileSubmit} className="bg-white rounded-3xl border border-[#5A2A1F]/10 p-6 md:p-8 shadow-sm">
              <h2 className="font-playfair text-xl font-black text-[#5A2A1F] mb-6">Account Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Edit Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full pl-11 pr-4 py-3.5 border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20 text-sm font-medium transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Email Address (Read-only)</label>
                  <div className="flex items-center gap-3 px-4 py-3.5 bg-[#FAF6F0]/50 border border-[#5A2A1F]/10 rounded-2xl text-sm font-bold text-[#5A2A1F]/60">
                    <Mail size={16} className="text-[#5A2A1F]/30" />
                    <span>{user.email}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Privilege Tier</label>
                    <div className="px-4 py-3.5 bg-[#FAF6F0]/50 border border-[#5A2A1F]/10 rounded-2xl text-xs font-black uppercase tracking-wider text-[#5A2A1F]/60">
                      {user.role} Member
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Last Login</label>
                    <div className="px-4 py-3.5 bg-[#FAF6F0]/50 border border-[#5A2A1F]/10 rounded-2xl text-xs font-bold text-[#5A2A1F]/60 truncate">
                      {formatDate(user.lastLogin)}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={saving || !name.trim() || name.trim() === user.name}
                  className="w-full bg-[#5A2A1F] hover:bg-black text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm shadow hover:shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Check size={16} />
                  )}
                  <span>Save Profile Name</span>
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar Trade/Wholesale Status */}
          <div className="space-y-6">
            <div className="bg-[#5A2A1F] text-white rounded-3xl p-6 shadow-lg relative overflow-hidden">
              {/* Decorative background circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-8 -mt-8" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-black tracking-widest text-[#D4B295] uppercase">AQSHA BENEFITS</span>
                
                {user.role === "Wholesaler" ? (
                  <>
                    <h3 className="font-playfair text-xl font-bold mt-2 mb-4">Trade Account Active</h3>
                    <p className="text-xs text-white/80 leading-relaxed mb-6">
                      Welcome, valued trade partner. You enjoy custom bulk pricing tier discounts and pre-order catalog priority dispatch automatically.
                    </p>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4B295]" />
                        <span>Wholesale Catalog Enabled</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4B295]" />
                        <span>Pre-order Priority Access</span>
                      </div>
                    </div>
                  </>
                ) : user.role === "Admin" ? (
                  <>
                    <h3 className="font-playfair text-xl font-bold mt-2 mb-4">Store Administrator</h3>
                    <p className="text-xs text-white/80 leading-relaxed mb-6">
                      Full system operations are active. You can manage products, category variants, images, and user accounts.
                    </p>
                    <Link 
                      href="/admin" 
                      className="w-full inline-block text-center bg-white text-[#5A2A1F] py-3.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#FAF6F0] transition-colors"
                    >
                      Admin Panel
                    </Link>
                  </>
                ) : (
                  <>
                    <h3 className="font-playfair text-xl font-bold mt-2 mb-4">Premium Customer</h3>
                    <p className="text-xs text-white/80 leading-relaxed mb-6">
                      Welcome to the Aqsha family! You have full access to our curated premium designs, order tracking, and hand-printed collection catalog.
                    </p>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4B295]" />
                        <span>Exclusive Batik Collections</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4B295]" />
                        <span>Personalized Customer Care</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Logout Card */}
            <button
              onClick={logout}
              className="w-full flex items-center justify-center gap-3 bg-red-50 hover:bg-red-100 text-red-700 py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-xs border border-red-200 transition-all active:scale-[0.99]"
            >
              <LogOut size={16} />
              <span>Sign Out Account</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
