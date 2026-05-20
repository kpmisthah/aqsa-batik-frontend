"use client";

import React, { useState, useEffect } from "react";
import { useSignIn, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Mail, Lock, Sparkles, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";

export default function LoginPage() {
  const { isLoaded: isSignInLoaded, signIn } = useSignIn() as any;
  const { setActive } = useClerk();
  const { isSignedIn, loading: authLoading } = useAuthSync();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // If already logged in, redirect to home page
  useEffect(() => {
    if (isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  // Sync user profile to backend to retrieve custom HTTP-Only JWT tokens
  const syncWithBackend = async (clerkId: string, userEmail: string, userName: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/sync`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          clerkId,
          email: userEmail,
          name: userName,
        }),
      });

      const data = await res.json();
      if (data.success) {
        // Force refresh and redirect home
        window.location.href = "/";
      } else {
        setError(data.message || "Failed to sync secure session with server.");
      }
    } catch (err) {
      setError("Server connection failed. Please try again.");
    }
  };

  const handleGoogleAuth = async () => {
    if (!signIn) return;
    setError("");
    setLoading(true);
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/api/auth/callback",
        redirectUrlComplete: "/",
      });
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Google authentication failed.");
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Logged in successfully!", "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        if (res.status === 404 || (data.message && data.message.toLowerCase().includes("not exist"))) {
          showToast("user not exist", "error");
          setError("user not exist");
        } else {
          showToast(data.message || "Invalid credentials.", "error");
          setError(data.message || "Invalid credentials.");
        }
      }
    } catch (err) {
      showToast("Server connection failed. Please try again.", "error");
      setError("Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-[#FDFBF7]">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-[#5A2A1F]/10 bg-[#F5F1EC] p-8 md:p-10 shadow-2xl"
      >
        {/* Floating Toast Notification */}
        {toast && (
          <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border transition-all duration-300 text-sm font-bold ${
            toast.type === "success" 
              ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
              : "bg-red-50 border-red-200 text-red-800"
          }`}>
            <span className={`w-2.5 h-2.5 rounded-full ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'} animate-ping`} />
            <span>{toast.message}</span>
          </div>
        )}
        {/* Decorative corner borders */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B3A2B]/30 rounded-tl-[32px]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#8B3A2B]/30 rounded-tr-[32px]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#8B3A2B]/30 rounded-bl-[32px]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B3A2B]/30 rounded-br-[32px]" />

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B3A2B]/10 text-[#8B3A2B] text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles size={12} className="animate-pulse" />
            <span>AQSHA STORE</span>
          </div>
          <h2 className="font-playfair text-3xl font-black text-[#5A2A1F] tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-[#5A2A1F]/60 mt-2 font-medium">
            Sign in to access your orders, catalog, and trade benefits
          </p>
        </div>

        {error && (
          <div className="p-4 mb-5 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-bold text-center">
            {error}
          </div>
        )}

        {/* Google Authentication Option */}
        <button
          type="button"
          onClick={handleGoogleAuth}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border border-[#5A2A1F]/15 rounded-2xl text-[#5A2A1F] font-bold text-sm hover:bg-[#FDFBF7] hover:border-[#5A2A1F]/30 transition-all shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-50"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.48 14.98 0 12 0 7.35 0 3.37 2.67 1.42 6.56l3.84 2.97c.9-2.7 3.42-4.49 6.74-4.49z"
            />
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.28 1.48-1.12 2.74-2.38 3.58l3.69 2.87c2.16-1.99 3.42-4.93 3.42-8.6z"
            />
            <path
              fill="#FBBC05"
              d="M5.26 14.22c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28L1.42 6.69C.51 8.5.01 10.53.01 12.7c0 2.17.5 4.2 1.41 6.01l3.84-2.99z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.97-1.07 7.96-2.91l-3.69-2.87c-1.02.69-2.33 1.1-4.27 1.1-3.32 0-5.84-1.79-6.74-4.49L1.42 17.8C3.37 21.69 7.35 24 12 24z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#5A2A1F]/10"></div></div>
          <span className="relative px-4 text-xs font-bold text-[#5A2A1F]/40 uppercase tracking-widest bg-[#F5F1EC]">or</span>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                <Mail size={16} />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@example.com"
                className="w-full pl-11 pr-4 py-3.5 border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20 text-sm font-medium"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B]">Password</label>
              <a href="#" className="text-[10px] font-black uppercase tracking-widest text-[#8B3A2B]/75 hover:text-[#8B3A2B]">Forgot?</a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                <Lock size={16} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-12 py-3.5 border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20 text-sm font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5A2A1F]/40 hover:text-[#5A2A1F] transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-[#5A2A1F] hover:bg-black text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        {/* Toggle Option */}
        <div className="text-center mt-6">
          <p className="text-xs font-bold text-[#5A2A1F]/60">
            New to Aqsha?{" "}
            <Link href="/signup" className="text-[#8B3A2B] hover:underline uppercase tracking-wider text-[10px] font-black ml-1">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
