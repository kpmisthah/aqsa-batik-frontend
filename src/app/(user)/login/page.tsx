"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Sparkles, ShieldCheck, Eye, EyeOff, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";

type ForgotPasswordStep = "none" | "email" | "otp" | "reset";

export default function LoginPage({ isAdmin = false }: { isAdmin?: boolean }) {
  const { isSignedIn, loading: authLoading } = useAuthSync();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Per-field errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Forgot Password Flow States
  const [forgotStep, setForgotStep] = useState<ForgotPasswordStep>("none");
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotOtp, setForgotOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Strong Password Checklist Rules for Reset Password
  const resetPasswordCriteria = [
    { label: "At least 8 characters", met: newPassword.length >= 8 },
    { label: "One uppercase letter (A-Z)", met: /[A-Z]/.test(newPassword) },
    { label: "One lowercase letter (a-z)", met: /[a-z]/.test(newPassword) },
    { label: "One number (0-9)", met: /[0-9]/.test(newPassword) },
    { label: "One special character (@$!%*?&)", met: /[^A-Za-z0-9]/.test(newPassword) },
  ];

  const resetMetCount = newPassword.length > 0 ? resetPasswordCriteria.filter((c) => c.met).length : 0;
  const isResetPasswordStrong = resetMetCount === 5;
  const doResetPasswordsMatch = newPassword === confirmNewPassword;

  // If already logged in, redirect to the appropriate dashboard
  useEffect(() => {
    if (isSignedIn) {
      if (isAdmin) {
        router.push("/aqsha-portal");
      } else {
        router.push("/");
      }
    }
  }, [isSignedIn, router, isAdmin]);

  // Capture custom OAuth errors in URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const errParam = params.get("error");
      if (errParam) {
        setError(errParam);
        showToast(errParam, "error");
      }
    }
  }, []);

  const handleGoogleAuth = () => {
    setError("");
    setLoading(true);
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/google`;
  };

  const handleSignInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setEmailError("");
    setPasswordError("");

    // Inline validation
    let hasError = false;
    if (!email.trim()) {
      setEmailError("Please enter your email address.");
      hasError = true;
    }
    if (!password) {
      setPasswordError("Please enter your password.");
      hasError = true;
    }
    if (hasError) return;

    setLoading(true);

    const loginEndpoint = isAdmin ? "/auth/admin-login" : "/auth/login";
    const redirectUrl = isAdmin ? "/aqsha-portal" : "/";

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}${loginEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      let data: any = {};
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const textResponse = await res.text();
        data = { message: textResponse || `Error code: ${res.status}` };
      }

      if (res.ok && data.success) {
        showToast(isAdmin ? "Admin logged in successfully!" : "Logged in successfully!", "success");
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1500);
      } else {
        const msg = data.message || "Invalid credentials.";
        const lower = msg.toLowerCase();
        // Route server error to the right field
        if (res.status === 404 || lower.includes("not exist") || lower.includes("no user") || lower.includes("not found")) {
          const userMsg = "No account found with this email.";
          setEmailError(userMsg);
          showToast(userMsg, "error");
        } else if (lower.includes("password") || lower.includes("incorrect") || lower.includes("invalid credential")) {
          setPasswordError("Incorrect password. Please try again.");
          showToast("Incorrect password.", "error");
        } else if (lower.includes("blocked") || lower.includes("banned")) {
          setError(msg);
          showToast(msg, "error");
        } else {
          setError(msg);
          showToast(msg, "error");
        }
      }
    } catch (err: any) {
      console.error("Login Error:", err);
      showToast(err.message || "Server connection failed. Please try again.", "error");
      setError(err.message || "Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  // API Call: Request Password Reset OTP
  const handleSendResetOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!forgotEmail) {
      showToast("Please enter your email address.", "error");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotEmail.trim() }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showToast(data.message || "Reset OTP sent successfully!", "success");
        setForgotStep("otp");
      } else {
        showToast(data.message || "Failed to send reset OTP.", "error");
        setError(data.message || "Failed to send reset OTP.");
      }
    } catch (err) {
      showToast("Server connection failed. Please try again.", "error");
      setError("Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  // API Call: Verify Password Reset OTP
  const handleVerifyResetOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotOtp.length !== 6) {
      showToast("Please enter a valid 6-digit OTP code.", "error");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/verify-reset-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotEmail.trim(), otp: forgotOtp }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showToast(data.message || "OTP verified successfully!", "success");
        setForgotStep("reset");
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

  // API Call: Reset Password and Auto Login
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (resetMetCount < 5) {
      showToast("Please ensure your password meets all strong requirements.", "error");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      showToast("Passwords do not match.", "error");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email: forgotEmail.trim(), password: newPassword }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showToast("Password updated successfully! Logged in.", "success");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        showToast(data.message || "Password reset failed.", "error");
        setError(data.message || "Reset failed.");
      }
    } catch (err) {
      showToast("Server connection failed. Please try again.", "error");
      setError("Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-[#FDFBF7] font-playfair">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-[#5A2A1F]/10 bg-[#F5F1EC] p-8 md:p-10 shadow-2xl animate-fade-in"
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
            {isAdmin ? (
              <>
                <ShieldCheck size={12} className="animate-pulse" />
                <span>ADMIN SECURE ACCESS</span>
              </>
            ) : (
              <>
                <Sparkles size={12} className="animate-pulse" />
                <span>
                  {forgotStep === "none" ? "AQSHA STORE" : forgotStep === "email" ? "PASSWORD RECOVERY" : forgotStep === "otp" ? "SECURITY VERIFICATION" : "NEW SECURE CREDENTIAL"}
                </span>
              </>
            )}
          </div>
          <h2 className="font-playfair text-3xl font-black text-[#5A2A1F] tracking-tight">
            {forgotStep === "none" 
              ? (isAdmin ? "Aqsha Administrator" : "Welcome Back")
              : forgotStep === "email"
              ? "Forgot Password"
              : forgotStep === "otp"
              ? "Verify OTP"
              : "Reset Password"
            }
          </h2>
          <p className="text-sm text-[#5A2A1F]/60 mt-2 font-medium">
            {forgotStep === "none"
              ? (isAdmin 
                ? "Sign in with your authorized admin credentials" 
                : "Sign in to access your orders, catalog, and trade benefits")
              : forgotStep === "email"
              ? "Enter your email to receive a 6-digit verification code"
              : forgotStep === "otp"
              ? "Check your email for the 6-digit verification code"
              : "Choose a strong password to secure your account"
            }
          </p>
        </div>

        {error && (
          <div className="p-4 mb-5 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-bold text-center">
            {error}
          </div>
        )}

        {/* Dynamic Wizard Steps */}
        {forgotStep === "none" ? (
          <>
            {/* Google Authentication Option (Only for Customers) */}
            {!isAdmin && (
              <>
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
            <form onSubmit={handleSignInSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">
                  {isAdmin ? "Admin Email" : "Email Address"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(""); }}
                    placeholder={isAdmin ? "Enter email" : "yourname@example.com"}
                    aria-invalid={!!emailError}
                    className={`w-full pl-11 pr-4 py-3.5 border rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 text-sm font-medium ${
                      emailError ? "border-red-400 focus:ring-red-200" : "border-[#5A2A1F]/20 focus:ring-[#5A2A1F]/20"
                    }`}
                  />
                </div>
                {emailError && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-red-600">
                    <AlertCircle size={12} /> {emailError}
                    {emailError.toLowerCase().includes("no account") && !isAdmin && (
                      <Link href="/signup" className="ml-1 underline text-[#8B3A2B]">Create one</Link>
                    )}
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B]">
                    {isAdmin ? "Admin Password" : "Password"}
                  </label>
                  {!isAdmin && (
                    <button
                      type="button"
                      onClick={() => { setForgotStep("email"); setError(""); setEmailError(""); setPasswordError(""); }}
                      className="text-[10px] font-black uppercase tracking-widest text-[#8B3A2B]/75 hover:text-[#8B3A2B] focus:outline-none transition-colors"
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); if (passwordError) setPasswordError(""); }}
                    placeholder="••••••••"
                    aria-invalid={!!passwordError}
                    className={`w-full pl-11 pr-12 py-3.5 border rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 text-sm font-medium ${
                      passwordError ? "border-red-400 focus:ring-red-200" : "border-[#5A2A1F]/20 focus:ring-[#5A2A1F]/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5A2A1F]/40 hover:text-[#5A2A1F] transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {passwordError && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-red-600">
                    <AlertCircle size={12} /> {passwordError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-[#5A2A1F] hover:bg-black text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>{isAdmin ? "Sign In as Admin" : "Sign In"}</span>
                )}
              </button>
            </form>

            {/* Toggle Option (Only for Customers) */}
            {!isAdmin && (
              <div className="text-center mt-6">
                <p className="text-xs font-bold text-[#5A2A1F]/60">
                  New to Aqsha?{" "}
                  <Link href="/signup" className="text-[#8B3A2B] hover:underline uppercase tracking-wider text-[10px] font-black ml-1">
                    Create an Account
                  </Link>
                </p>
              </div>
            )}
          </>
        ) : forgotStep === "email" ? (
          <form onSubmit={handleSendResetOtp} className="space-y-4 animate-fade-in" noValidate>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="yourname@example.com"
                  className="w-full pl-11 pr-4 py-3.5 border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20 text-sm font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !forgotEmail}
              className="w-full mt-4 bg-[#5A2A1F] hover:bg-black text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <span>Send Reset OTP</span>
              )}
            </button>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => { setForgotStep("none"); setError(""); }}
                className="text-[#8B3A2B] hover:underline uppercase tracking-wider text-[10px] font-black"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        ) : forgotStep === "otp" ? (
          <form onSubmit={handleVerifyResetOtp} className="space-y-6 animate-fade-in" noValidate>
            <div className="text-center mb-4">
              <p className="text-sm text-[#5A2A1F]/70 font-medium">
                We've sent a 6-digit password reset OTP to
              </p>
              <p className="text-sm font-bold text-[#8B3A2B] mt-1">{forgotEmail}</p>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2 text-center">
                One-Time Password (OTP)
              </label>
              <input
                type="text"
                maxLength={6}
                required
                value={forgotOtp}
                onChange={(e) => setForgotOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                className="w-full py-4 text-center tracking-[12px] text-2xl font-black border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/20 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading || forgotOtp.length !== 6}
              className="w-full bg-[#5A2A1F] hover:bg-black text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <span>Verify OTP</span>
              )}
            </button>

            <div className="flex flex-col gap-3 text-center mt-6">
              <button
                type="button"
                onClick={() => handleSendResetOtp()}
                disabled={loading}
                className="text-[#8B3A2B] hover:underline uppercase tracking-wider text-[10px] font-black"
              >
                Resend Code
              </button>
              <button
                type="button"
                onClick={() => { setForgotStep("none"); setError(""); }}
                className="text-[#5A2A1F]/60 hover:text-[#5A2A1F] hover:underline uppercase tracking-wider text-[10px] font-black mt-1"
              >
                Cancel and Back to Sign In
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-4 animate-fade-in" noValidate>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                  <Lock size={16} />
                </div>
                <input
                  type={showNewPassword ? "text" : "password"}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20 text-sm font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5A2A1F]/40 hover:text-[#5A2A1F] transition-colors focus:outline-none"
                >
                  {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {/* Password Strength Indicator & Checklist */}
              {newPassword.length > 0 && (
                <div className="mt-3 space-y-2 animate-fade-in">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#5A2A1F]/60">Password Strength:</span>
                    <span className={`font-black uppercase tracking-wider text-[10px] ${
                      resetMetCount <= 2 ? "text-red-500" : resetMetCount <= 4 ? "text-amber-500" : "text-emerald-600"
                    }`}>
                      {resetMetCount <= 2 ? "Weak" : resetMetCount <= 4 ? "Medium" : "Strong"}
                    </span>
                  </div>
                  
                  {/* Segmented Strength Bar */}
                  <div className="flex gap-1.5 h-1.5 w-full">
                    {[1, 2, 3, 4].map((index) => {
                      let barColor = "bg-[#5A2A1F]/10";
                      if (resetMetCount > 0) {
                        if (resetMetCount <= 2 && index <= resetMetCount) {
                          barColor = "bg-red-500";
                        } else if (resetMetCount > 2 && resetMetCount <= 4 && index <= resetMetCount - 1) {
                          barColor = "bg-amber-500";
                        } else if (resetMetCount === 5) {
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
                    {resetPasswordCriteria.map((c, i) => (
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

            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-[#8B3A2B] mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A2A1F]/40">
                  <Lock size={16} />
                </div>
                <input
                  type={showConfirmNewPassword ? "text" : "password"}
                  required
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 border border-[#5A2A1F]/20 rounded-2xl text-[#5A2A1F] bg-white placeholder-[#5A2A1F]/30 focus:outline-none focus:ring-2 focus:ring-[#5A2A1F]/20 text-sm font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5A2A1F]/40 hover:text-[#5A2A1F] transition-colors focus:outline-none"
                >
                  {showConfirmNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {confirmNewPassword.length > 0 && (
                <div className={`mt-2 flex items-center gap-1.5 text-xs font-bold ${
                  doResetPasswordsMatch ? "text-emerald-600" : "text-red-500"
                }`}>
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
                    doResetPasswordsMatch 
                      ? "bg-emerald-100 text-emerald-600 border border-emerald-200" 
                      : "bg-red-50 text-red-500 border border-red-100"
                  }`}>
                    {doResetPasswordsMatch ? "✓" : "✗"}
                  </span>
                  <span>{doResetPasswordsMatch ? "Passwords match" : "Passwords do not match"}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !isResetPasswordStrong || !doResetPasswordsMatch}
              className="w-full mt-4 bg-[#5A2A1F] hover:bg-black text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <span>Update Password</span>
              )}
            </button>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => { setForgotStep("none"); setError(""); }}
                className="text-[#8B3A2B] hover:underline uppercase tracking-wider text-[10px] font-black"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
