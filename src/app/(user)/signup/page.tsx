"use client";

import React, { useState, useEffect } from "react";
import { useSignUp, useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Sparkles, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const { isLoaded: isSignUpLoaded, signUp } = useSignUp() as any;
  const { setActive } = useClerk();
  const { isSignedIn } = useUser();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Custom Custom OTP Verification & Toast States
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [otp, setOtp] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const passwordCriteria = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter (A-Z)", met: /[A-Z]/.test(password) },
    { label: "One lowercase letter (a-z)", met: /[a-z]/.test(password) },
    { label: "One number (0-9)", met: /[0-9]/.test(password) },
    { label: "One special character (@$!%*?&)", met: /[^A-Za-z0-9]/.test(password) },
  ];

  const metCount = password.length > 0 ? passwordCriteria.filter((c) => c.met).length : 0;
  const isPasswordStrong = metCount === 5;
  const doPasswordsMatch = password === confirmPassword;

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
    if (!signUp) return;
    setError("");
    setLoading(true);
    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/api/auth/callback",
        redirectUrlComplete: "/",
      });
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Google registration failed.");
      setLoading(false);
    }
  };

  const handleEmailSignUp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Validate password criteria
    const metCount = passwordCriteria.filter((c) => c.met).length;
    if (metCount < 5) {
      showToast("Please ensure your password meets all strong requirements.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showToast(data.message || "OTP sent successfully!", "success");
        setIsOtpStep(true);
      } else {
        showToast(data.message || "Registration failed. Try a different email.", "error");
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      showToast("Server connection failed. Please try again.", "error");
      setError("Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      showToast("Please enter a valid 6-digit OTP code.", "error");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Account created and verified successfully!", "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        showToast(data.message || "Incorrect or expired OTP.", "error");
        setError(data.message || "Verification failed.");
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
        {/* Decorative corner borders */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8B3A2B]/30 rounded-tl-[32px]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#8B3A2B]/30 rounded-tr-[32px]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#8B3A2B]/30 rounded-bl-[32px]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8B3A2B]/30 rounded-br-[32px]" />

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B3A2B]/10 text-[#8B3A2B] text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles size={12} className="animate-pulse" />
            <span>AQSHA REGISTER</span>
          </div>
          <h2 className="font-playfair text-3xl font-black text-[#5A2A1F] tracking-tight">
            Create Account
          </h2>
          <p className="text-sm text-[#5A2A1F]/60 mt-2 font-medium">
            Register to explore exclusive batik dress materials and wholesale rates
          </p>
        </div>

        {error && (
          <div className="p-4 mb-5 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-bold text-center">
            {error}
          </div>
        )}

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

        {isOtpStep ? (
          <div>
            <div className="text-center mb-6">
              <p className="text-sm text-[#5A2A1F]/70 font-medium">
                We've sent a 6-digit verification code to
              </p>
              <p className="text-sm font-bold text-[#8B3A2B] mt-1">{email}</p>
            </div>

            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2 text-center">
                  One-Time Password (OTP)
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder="000000"
                  className="w-full py-4 text-center tracking-[12px] text-2xl font-black border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/20 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20"
                />
              </div>

              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="w-full bg-[#5A2A1F] hover:bg-black text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>Verify and Sign Up</span>
                )}
              </button>
            </form>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => handleEmailSignUp()}
                disabled={loading}
                className="text-xs font-bold text-[#8B3A2B] hover:underline uppercase tracking-wider text-[10px] font-black"
              >
                Resend Code
              </button>
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}

        {/* Credentials Form */}
        {!isOtpStep && (
          <>
            <form onSubmit={handleEmailSignUp} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3.5 border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20 text-sm font-medium"
                  />
                </div>
              </div>

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
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Password</label>
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

                {/* Password Strength Indicator & Checklist */}
                {password.length > 0 && (
                  <div className="mt-3 space-y-2 animate-fade-in">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#5A2A1F]/60">Password Strength:</span>
                      <span className={`font-black uppercase tracking-wider text-[10px] ${
                        metCount <= 2 ? "text-red-500" : metCount <= 4 ? "text-amber-500" : "text-emerald-600"
                      }`}>
                        {metCount <= 2 ? "Weak" : metCount <= 4 ? "Medium" : "Strong"}
                      </span>
                    </div>
                    
                    {/* Segmented Strength Bar */}
                    <div className="flex gap-1.5 h-1.5 w-full">
                      {[1, 2, 3, 4].map((index) => {
                        let barColor = "bg-[#5A2A1F]/10";
                        if (metCount > 0) {
                          if (metCount <= 2 && index <= metCount) {
                            barColor = "bg-red-500";
                          } else if (metCount > 2 && metCount <= 4 && index <= metCount - 1) {
                            barColor = "bg-amber-500";
                          } else if (metCount === 5) {
                            barColor = "bg-emerald-500";
                          }
                        }
                        return (
                          <div
                            key={index}
                            className={`flex-1 h-full rounded-full transition-all duration-300 ${barColor}`}
                          />
                        );
                      })}
                    </div>

                    {/* Checklist */}
                    <div className="p-3.5 bg-[#5A2A1F]/5 border border-[#5A2A1F]/10 rounded-2xl space-y-1.5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-1">Safety Requirements</p>
                      {passwordCriteria.map((c, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
                            c.met 
                              ? "bg-emerald-100 text-emerald-600 border border-emerald-200" 
                              : "bg-[#5A2A1F]/5 text-[#5A2A1F]/40 border border-[#5A2A1F]/10"
                          }`}>
                            {c.met ? "✓" : "•"}
                          </span>
                          <span className={c.met ? "text-emerald-700 font-medium" : "text-[#5A2A1F]/60"}>
                            {c.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3.5 border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20 text-sm font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5A2A1F]/40 hover:text-[#5A2A1F] transition-colors focus:outline-none"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {confirmPassword.length > 0 && (
                  <div className={`mt-2 flex items-center gap-1.5 text-xs font-bold ${
                    doPasswordsMatch ? "text-emerald-600" : "text-red-500"
                  }`}>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
                      doPasswordsMatch 
                        ? "bg-emerald-100 text-emerald-600 border border-emerald-200" 
                        : "bg-red-50 text-red-500 border border-red-100"
                    }`}>
                      {doPasswordsMatch ? "✓" : "✗"}
                    </span>
                    <span>{doPasswordsMatch ? "Passwords match" : "Passwords do not match"}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || (password.length > 0 && (!isPasswordStrong || !doPasswordsMatch))}
                className="w-full mt-4 bg-[#5A2A1F] hover:bg-black text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>Register Now</span>
                )}
              </button>
            </form>

            {/* Toggle Option */}
            <div className="text-center mt-6">
              <p className="text-xs font-bold text-[#5A2A1F]/60">
                Already have an account?{" "}
                <Link href="/login" className="text-[#8B3A2B] hover:underline uppercase tracking-wider text-[10px] font-black ml-1">
                  Sign In
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
