"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";
import { Loader2 } from "lucide-react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isSignedIn, initialized } = useAuthSync();
  const router = useRouter();
  const pathname = usePathname();

  // Define the routes that require a logged-in user
  const protectedRoutes = [
    '/profile',
    '/wishlist',
    '/order-tracking',
    '/checkout',
    '/cart'
  ];

  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

  useEffect(() => {
    if (initialized && isProtected && !isSignedIn) {
      router.push(`/login`);
    }
  }, [initialized, isSignedIn, isProtected, pathname, router]);

  // Show a loading state while we verify auth status for protected routes
  if (isProtected && (!initialized || !isSignedIn)) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Loader2 size={32} className="animate-spin text-secondary mb-4" />
        <p className="text-sm font-bold text-primary uppercase tracking-widest animate-pulse">
          Verifying Security...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
