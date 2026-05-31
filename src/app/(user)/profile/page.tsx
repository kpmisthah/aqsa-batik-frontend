"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";
import { useAuthStore } from "@/hooks/useAuthStore";
import Nav from "@/modules/user/components/Nav";
import { User, Mail, Shield, Clock, Award, ArrowLeft, LogOut, Camera, Loader2, Check, CreditCard, ShoppingBag, Wallet } from "lucide-react";
import Link from "next/link";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getColorName } from "@/utils/colorHelper";

function ProfileContent() {
  const { isSignedIn, user, loading, logout } = useAuthSync();
  const { setUser, fetchLocalProfile } = useAuthStore();
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

  // Routing, Search Parameters and Tab States
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"profile" | "orders" | "wallet">("profile");

  // Sync activeTab with URL search params (e.g. ?tab=orders)
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "orders") {
      setActiveTab("orders");
    } else if (tabParam === "wallet") {
      setActiveTab("wallet");
    } else {
      setActiveTab("profile");
    }
  }, [searchParams]);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 4; // premium spacious paging count

  // Order History and Retry Payment States
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [retryingOrderId, setRetryingOrderId] = useState<string | null>(null);
  
  // Cancellation and Return States
  const [cancellingOrderId, setCancellingOrderId] = useState<string | null>(null);
  const [cancelReasonStr, setCancelReasonStr] = useState("");
  const [returningOrderId, setReturningOrderId] = useState<string | null>(null);
  const [returnReasonStr, setReturnReasonStr] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const handleCancelOrder = async (orderId: string, reason: string) => {
    setActionLoading(true);
    try {
      const res = await fetch(`${API_BASE}/orders/${orderId}/cancel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: reason || "Cancelled by buyer" }),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to cancel this order.");
      
      setOrders((prevOrders) =>
        prevOrders.map((o) =>
          (o.id === orderId || o._id === orderId) 
            ? { ...o, status: "Cancelled", orderStatus: "Cancelled", cancelReason: reason } 
            : o
        )
      );

      setToast({ message: "Order cancelled successfully! Stock restored.", type: "success" });
      setCancellingOrderId(null);
      setCancelReasonStr("");
      
      // Refresh user profile to immediately synchronize wallet balance
      fetchLocalProfile();
    } catch (err: any) {
      console.error(err);
      setToast({ message: err.message || "Failed to cancel order.", type: "error" });
    } finally {
      setActionLoading(false);
    }
  };

  const handleReturnOrder = async (orderId: string, reason: string) => {
    setActionLoading(true);
    try {
      const res = await fetch(`${API_BASE}/orders/${orderId}/return`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: reason || "Returned by buyer" }),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to request order return.");
      
      setOrders((prevOrders) =>
        prevOrders.map((o) =>
          (o.id === orderId || o._id === orderId) 
            ? { ...o, returnStatus: "Pending", returnReason: reason } 
            : o
        )
      );

      setToast({ message: "Return request submitted successfully for verification!", type: "success" });
      setReturningOrderId(null);
      setReturnReasonStr("");
    } catch (err: any) {
      console.error(err);
      setToast({ message: err.message || "Failed to submit return request.", type: "error" });
    } finally {
      setActionLoading(false);
    }
  };
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cropperRef = useRef<ReactCropperElement>(null);

  // Derived Pagination Calculations
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  // Sync state with user details once loaded
  useEffect(() => {
    if (user) {
      setName(user.name);
      setAvatar(user.avatar || null);
    }
  }, [user]);

  // 📜 Fetch user's past order history
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
        const res = await fetch(`${API_BASE}/orders/history`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to load your past orders.");
        const data = await res.json();
        setOrders(data);
      } catch (err: any) {
        console.error(err);
      } finally {
        setLoadingOrders(false);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  // 💳 Trigger Razorpay payment retry for pending orders
  const handleRetryPayment = async (orderId: string) => {
    setRetryingOrderId(orderId);
    showToast("Opening secure transaction portal...", "success");

    try {
      // 1. Load Razorpay script if not already present
      const scriptLoaded = await new Promise<boolean>((resolve) => {
        if ((window as any).Razorpay) {
          resolve(true);
          return;
        }
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });

      if (!scriptLoaded) {
        throw new Error("Razorpay SDK failed to load. Please check your internet connection.");
      }

      // 2. Request backend order payment details
      const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const retryRes = await fetch(`${API_BASE}/orders/${orderId}/retry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const retryData = await retryRes.json();
      if (!retryRes.ok) {
        throw new Error(retryData.message || "Failed to initiate transaction.");
      }

      const { keyId, amount, currency, rzpOrderId } = retryData;

      // 3. Open Razorpay standard modal dialog
      const options = {
        key: keyId,
        amount: amount, // in paise
        currency: currency,
        name: "Aqsha Batik Store",
        description: `Batik Suit Order Payment Retry #${orderId.substring(18)}`,
        image: "https://res.cloudinary.com/misthah/image/upload/v1/batik_store/logo.png",
        order_id: rzpOrderId,
        handler: async (response: any) => {
          showToast("Payment captured. Verifying signature...", "success");
          try {
            const verifyRes = await fetch(`${API_BASE}/orders/verify`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify({
                rzpOrderId: response.razorpay_order_id,
                rzpPaymentId: response.razorpay_payment_id,
                rzpSignature: response.razorpay_signature,
                orderId: orderId,
              }),
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
              throw new Error(verifyData.message || "Transaction signature verification failed.");
            }

            showToast("Payment verified! Order placed successfully.", "success");
            
            // Mark the order as Paid in local state
            setOrders((prev) =>
              prev.map((o) =>
                (o.id === orderId || o._id === orderId) ? { ...o, paymentStatus: "Paid" } : o
              )
            );
          } catch (err: any) {
            console.error(err);
            showToast(err.message || "Payment signature verification failed.", "error");
          }
        },
        prefill: {
          name: user?.name || "",
          email: user?.email || "",
        },
        theme: {
          color: "#5A2A1F",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (err: any) {
      console.error(err);
      showToast(err.message || "Could not complete order checkout.", "error");
    } finally {
      setRetryingOrderId(null);
    }
  };

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
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5A2A1F] border border-[#5A2A1F] text-xs text-white font-bold uppercase tracking-wider shadow-md">
                  <Wallet size={14} className="text-[#FFD700]" />
                  <span>Wallet: ₹{(user.walletBalance || 0).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#5A2A1F]/10 mb-8 gap-6 font-sans">
          <button
            onClick={() => {
              setActiveTab("profile");
              setCurrentPage(1);
            }}
            className={`pb-4 text-xs font-black uppercase tracking-widest transition-all relative ${
              activeTab === "profile" 
                ? "text-[#5A2A1F]" 
                : "text-[#5A2A1F]/40 hover:text-[#5A2A1F]"
            }`}
          >
            Account Details
            {activeTab === "profile" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B3A2B] animate-fade-in" />
            )}
          </button>
          
          <button
            onClick={() => {
              setActiveTab("orders");
              setCurrentPage(1);
            }}
            className={`pb-4 text-xs font-black uppercase tracking-widest transition-all relative flex items-center gap-2 ${
              activeTab === "orders" 
                ? "text-[#5A2A1F]" 
                : "text-[#5A2A1F]/40 hover:text-[#5A2A1F]"
            }`}
          >
            Order History
            {orders.length > 0 && (
              <span className="px-1.5 py-0.5 bg-[#8B3A2B] text-white text-[9px] font-black rounded-md leading-none">
                {orders.length}
              </span>
            )}
            {activeTab === "orders" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B3A2B] animate-fade-in" />
            )}
          </button>
          
          <button
            onClick={() => {
              setActiveTab("wallet");
              setCurrentPage(1);
            }}
            className={`pb-4 text-xs font-black uppercase tracking-widest transition-all relative flex items-center gap-2 ${
              activeTab === "wallet" 
                ? "text-[#5A2A1F]" 
                : "text-[#5A2A1F]/40 hover:text-[#5A2A1F]"
            }`}
          >
            Wallet History
            {activeTab === "wallet" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B3A2B] animate-fade-in" />
            )}
          </button>
        </div>

        {/* Detail Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main profile form/info */}
          <div className="md:col-span-2 space-y-6">
            {activeTab === "profile" ? (
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
            ) : activeTab === "orders" ? (
              <div className="bg-white rounded-3xl border border-[#5A2A1F]/10 p-6 md:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="text-[#8B3A2B]" size={22} />
                  <h2 className="font-playfair text-xl font-black text-[#5A2A1F]">My Order History</h2>
                </div>
                
                {loadingOrders ? (
                  <div className="flex flex-col items-center justify-center py-10">
                    <Loader2 className="animate-spin text-[#5A2A1F]" size={24} />
                    <p className="text-xs text-[#5A2A1F]/60 font-bold uppercase tracking-wider mt-2">Loading Orders...</p>
                  </div>
                ) : orders.length === 0 ? (
                  <div className="text-center py-12 border border-dashed border-[#5A2A1F]/10 rounded-2xl bg-[#FAF6F0]/20">
                    <p className="text-sm opacity-60 font-medium text-[#5A2A1F] italic font-playfair">You have not placed any orders yet.</p>
                    <Link href="/batik-cloth" className="inline-block mt-4 text-xs font-black uppercase tracking-wider text-[#8B3A2B] hover:underline font-sans">
                      Browse Curated Collections &rarr;
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-6">
                      {currentOrders.map((order: any) => {
                        const orderId = order.id || order._id;
                        const dateStr = formatDate(order.createdAt);
                        
                        return (
                          <div key={orderId} className="border border-[#5A2A1F]/10 rounded-2xl overflow-hidden bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 transition-all font-sans">
                            {/* Summary Row */}
                            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#5A2A1F]/5">
                              <div className="space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-[#8B3A2B]">ORDER #{orderId.substring(18).toUpperCase()}</span>
                                  <span className={`px-2 py-0.5 text-[8px] font-black uppercase tracking-wider rounded-md ${
                                    order.paymentStatus === 'Paid'
                                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                      : order.paymentStatus === 'Pending'
                                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                                  }`}>
                                    Payment: {order.paymentStatus}
                                  </span>
                                  {order.paymentMethod === 'COD' && (
                                    <span className="px-2 py-0.5 text-[8px] font-black uppercase tracking-wider rounded-md bg-sky-50 text-sky-700 border border-sky-200">
                                      COD
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-[#5A2A1F]/55 font-medium">{dateStr}</p>
                              </div>
                              
                              <div className="flex items-center gap-4 justify-between sm:justify-end">
                                <div className="text-right">
                                  <span className="text-[10px] font-bold opacity-45 uppercase tracking-wider block">Total Amount</span>
                                  <span className="text-sm font-bold text-[#5A2A1F]">₹{order.totalAmount.toLocaleString()}</span>
                                </div>
                                
                                {/* Retry Payment Button */}
                                {order.paymentStatus === 'Pending' && order.paymentMethod !== 'COD' && (
                                  <button
                                    type="button"
                                    onClick={() => handleRetryPayment(orderId)}
                                    disabled={retryingOrderId === orderId}
                                    className="bg-[#5A2A1F] hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50"
                                  >
                                    {retryingOrderId === orderId ? (
                                      <Loader2 size={12} className="animate-spin" />
                                    ) : (
                                      <CreditCard size={12} />
                                    )}
                                    <span>Pay Now</span>
                                  </button>
                                )}
                              </div>
                            </div>
                            
                            {/* Order Items Info */}
                            <div className="p-5 bg-white/40 space-y-3.5">
                              <span className="text-[10px] font-black uppercase tracking-widest text-[#5A2A1F]/45 block">Items Ordered ({order.items.reduce((acc: number, item: any) => acc + item.quantity, 0)})</span>
                              <div className="divide-y divide-[#5A2A1F]/5">
                                {order.items.map((item: any, idx: number) => (
                                  <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex justify-between items-center text-xs">
                                    <div className="space-y-0.5">
                                      <span className="font-bold text-[#5A2A1F]">{item.name}</span>
                                      {item.variantColour && (
                                        <span className="block text-[10px] text-[#5A2A1F]/50 font-medium">Color: {getColorName(item.variantColour)}</span>
                                      )}
                                    </div>
                                    <div className="text-right font-medium">
                                      <span className="opacity-60">{item.quantity} x </span>
                                      <span className="font-bold">₹{item.price.toLocaleString()}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Shipping address summary */}
                              <div className="pt-3 border-t border-[#5A2A1F]/5 flex flex-col sm:flex-row justify-between gap-2 text-[10px] text-[#5A2A1F]/60 font-medium">
                                <div>
                                  <span className="font-black uppercase text-[#8B3A2B]/85">SHIPPING ADDRESS:</span>
                                  <span className="ml-1.5">{order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.zip}</span>
                                </div>
                                <div>
                                  <span className="font-black uppercase text-[#8B3A2B]/85">CONTACT:</span>
                                  <span className="ml-1.5">{order.shippingAddress.phone}</span>
                                </div>
                              </div>

                              {/* Order Action Buttons (Cancel / Return / Return Statuses) */}
                              <div className="pt-3 border-t border-[#5A2A1F]/5 flex flex-wrap justify-between items-center gap-3">
                                {/* Fulfillment Status Text */}
                                <div className="flex flex-wrap gap-2 items-center">
                                  <span className={`px-2 py-0.5 text-[8.5px] font-black uppercase tracking-wider rounded-md ${
                                    order.status === 'Delivered'
                                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                      : order.status === 'Pending'
                                      ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                      : order.status === 'Processing'
                                      ? 'bg-sky-50 text-sky-700 border border-sky-200'
                                      : order.status === 'Shipped'
                                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                                      : order.status === 'Returned'
                                      ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                                  }`}>
                                    Status: {order.status}
                                  </span>

                                  {/* Cancellation reason info badge if cancelled */}
                                  {order.status === 'Cancelled' && order.cancelReason && (
                                    <span className="text-[9px] text-[#8B3A2B] font-bold italic">
                                      Reason: &ldquo;{order.cancelReason}&rdquo;
                                    </span>
                                  )}

                                  {/* Return status badges */}
                                  {order.returnStatus && order.returnStatus !== 'None' && (
                                    <span className={`px-2 py-0.5 text-[8.5px] font-black uppercase tracking-wider rounded-md ${
                                      order.returnStatus === 'Approved'
                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                        : order.returnStatus === 'Pending'
                                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                                    }`}>
                                      Return: {order.returnStatus}
                                    </span>
                                  )}

                                  {order.returnStatus === 'Pending' && order.returnReason && (
                                    <span className="text-[9px] text-[#5A2A1F]/60 font-bold italic">
                                      Reason: &ldquo;{order.returnReason}&rdquo;
                                    </span>
                                  )}
                                </div>

                                {/* Interactive Action Buttons */}
                                <div className="flex gap-2 ml-auto">
                                  {/* Cancel Order: Eligible only if status is Pending or Processing */}
                                  {(order.status === 'Pending' || order.status === 'Processing') && (
                                    <button
                                      type="button"
                                      onClick={() => setCancellingOrderId(orderId)}
                                      className="px-3 py-1.5 border border-red-200 hover:bg-red-50 text-red-700 rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors active:scale-95"
                                    >
                                      Cancel Order
                                    </button>
                                  )}

                                  {/* Request Return: Eligible only if status is Delivered and returnStatus is None */}
                                  {order.status === 'Delivered' && order.returnStatus === 'None' && (
                                    <button
                                      type="button"
                                      onClick={() => setReturningOrderId(orderId)}
                                      className="px-3 py-1.5 border border-[#5A2A1F]/15 hover:bg-[#FAF6F0] text-[#5A2A1F] rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors active:scale-95"
                                    >
                                      Return Order
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Premium Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#5A2A1F]/5 font-sans">
                        <button
                          type="button"
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2.5 border border-[#5A2A1F]/15 rounded-xl text-xs font-bold uppercase tracking-wider text-[#5A2A1F] hover:bg-[#FAF6F0] transition-colors disabled:opacity-40"
                        >
                          Previous
                        </button>
                        <span className="text-xs font-bold text-[#5A2A1F]/70 tracking-widest uppercase">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2.5 border border-[#5A2A1F]/15 rounded-xl text-xs font-bold uppercase tracking-wider text-[#5A2A1F] hover:bg-[#FAF6F0] transition-colors disabled:opacity-40"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            ) : activeTab === "wallet" ? (
              <div className="bg-white rounded-3xl border border-[#5A2A1F]/10 p-6 md:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wallet className="text-[#8B3A2B]" size={22} />
                    <h2 className="font-playfair text-xl font-black text-[#5A2A1F]">Wallet History</h2>
                  </div>
                  <div className="bg-[#5A2A1F] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md">
                    Current Balance: ₹{(user.walletBalance || 0).toLocaleString()}
                  </div>
                </div>
                
                {(!user.walletHistory || user.walletHistory.length === 0) ? (
                  <div className="text-center py-12 border border-dashed border-[#5A2A1F]/10 rounded-2xl bg-[#FAF6F0]/20">
                    <p className="text-sm opacity-60 font-medium text-[#5A2A1F] italic font-playfair">You have no wallet transactions yet.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {[...user.walletHistory].reverse().map((tx: any, idx: number) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-[#5A2A1F]/10 rounded-2xl bg-[#FAF6F0]/20 hover:bg-[#FAF6F0]/50 transition-all font-sans gap-4">
                        <div>
                          <p className="text-sm font-bold text-[#5A2A1F] mb-1">{tx.description}</p>
                          <p className="text-xs text-[#5A2A1F]/60 font-medium">{formatDate(tx.date)}</p>
                        </div>
                        <div className={`font-bold text-sm px-4 py-2 rounded-xl border flex items-center justify-center min-w-[120px] shadow-sm ${tx.type === 'Credit' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'}`}>
                          {tx.type === 'Credit' ? '+' : '-'} ₹{tx.amount.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : null}
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

      {/* Cancellation Reason Modal */}
      {cancellingOrderId && (
        <div className="fixed inset-0 bg-[#5A2A1F]/40 backdrop-blur-sm flex items-center justify-center z-[150] p-4 animate-in fade-in duration-300">
          <div className="bg-[#FAF6F0] rounded-[32px] border border-[#5A2A1F]/10 p-6 md:p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200 font-sans">
            <h3 className="font-playfair text-xl font-bold text-[#5A2A1F] mb-2">Cancel Your Order</h3>
            <p className="text-xs text-[#5A2A1F]/60 mb-4">Please let us know why you are cancelling this order. Rest assured, your payment (if online) will be processed for refund automatically.</p>
            
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-1">Select cancellation reason</label>
              {[
                "Changed my mind",
                "Ordered wrong size / style",
                "Found a better price elsewhere",
                "Shipping delay is too long",
                "Other reason"
              ].map((reasonOption) => (
                <button
                  key={reasonOption}
                  type="button"
                  onClick={() => setCancelReasonStr(reasonOption)}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all ${
                    cancelReasonStr === reasonOption
                      ? "bg-[#5A2A1F] text-white border-[#5A2A1F] shadow-md shadow-[#5A2A1F]/20"
                      : "bg-white border-[#5A2A1F]/10 text-[#5A2A1F] hover:bg-[#FAF6F0]"
                  }`}
                >
                  {reasonOption}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setCancellingOrderId(null);
                  setCancelReasonStr("");
                }}
                className="flex-1 px-4 py-3 border border-[#5A2A1F]/15 rounded-xl text-xs font-bold uppercase tracking-wider text-[#5A2A1F] hover:bg-[#FAF6F0] transition-colors"
              >
                Go Back
              </button>
              <button
                type="button"
                onClick={() => handleCancelOrder(cancellingOrderId, cancelReasonStr)}
                disabled={actionLoading || !cancelReasonStr}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-40"
              >
                {actionLoading ? "Cancelling..." : "Confirm Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Return Reason Modal */}
      {returningOrderId && (
        <div className="fixed inset-0 bg-[#5A2A1F]/40 backdrop-blur-sm flex items-center justify-center z-[150] p-4 animate-in fade-in duration-300">
          <div className="bg-[#FAF6F0] rounded-[32px] border border-[#5A2A1F]/10 p-6 md:p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200 font-sans">
            <h3 className="font-playfair text-xl font-bold text-[#5A2A1F] mb-2">Request Order Return</h3>
            <p className="text-xs text-[#5A2A1F]/60 mb-4">We are sorry to hear that your purchase didn&apos;t work out. Please specify a reason to submit this return request for administrator verification.</p>
            
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-widest text-[#8B3A2B] mb-1">Select reason for return</label>
              {[
                "Defective / damaged item",
                "Wrong size / doesn't fit well",
                "Item color is different from picture",
                "Incorrect item was delivered",
                "Other reason"
              ].map((reasonOption) => (
                <button
                  key={reasonOption}
                  type="button"
                  onClick={() => setReturnReasonStr(reasonOption)}
                  className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all ${
                    returnReasonStr === reasonOption
                      ? "bg-[#5A2A1F] text-white border-[#5A2A1F] shadow-md shadow-[#5A2A1F]/20"
                      : "bg-white border-[#5A2A1F]/10 text-[#5A2A1F] hover:bg-[#FAF6F0]"
                  }`}
                >
                  {reasonOption}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setReturningOrderId(null);
                  setReturnReasonStr("");
                }}
                className="flex-1 px-4 py-3 border border-[#5A2A1F]/15 rounded-xl text-xs font-bold uppercase tracking-wider text-[#5A2A1F] hover:bg-[#FAF6F0] transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleReturnOrder(returningOrderId, returnReasonStr)}
                disabled={actionLoading || !returnReasonStr}
                className="flex-1 px-4 py-3 bg-[#5A2A1F] hover:bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-40"
              >
                {actionLoading ? "Submitting..." : "Submit Return"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col justify-center items-center py-20 font-sans">
        <div className="w-12 h-12 border-4 border-[#5A2A1F]/20 border-t-[#5A2A1F] rounded-full animate-spin mb-4" />
        <p className="text-sm font-bold uppercase tracking-widest text-[#5A2A1F]/60">Loading Your Profile...</p>
      </div>
    }>
      <ProfileContent />
    </Suspense>
  );
}
