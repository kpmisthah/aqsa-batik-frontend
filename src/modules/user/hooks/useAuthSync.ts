"use client";

import { useUser, useAuth } from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import { useAuthStore } from "@/hooks/useAuthStore";

export function useAuthSync() {
  const { isSignedIn: isClerkSignedIn, user: clerkUser } = useUser();
  const { signOut } = useAuth();
  
  const {
    user,
    isSignedIn,
    loading,
    initialized,
    fetchLocalProfile,
    syncWithBackend,
    logout: storeLogout
  } = useAuthStore();
  
  const hasSynced = useRef(false);

  useEffect(() => {
    if (isClerkSignedIn && clerkUser) {
      // Prevent duplicate syncing in StrictMode
      if (hasSynced.current) return;
      hasSynced.current = true;

      const email = clerkUser.emailAddresses[0]?.emailAddress || "";
      const name = clerkUser.fullName || email.split("@")[0] || "User";
      syncWithBackend(clerkUser.id, email, name);
    } else if (!initialized) {
      // Check if secure HTTP-only cookies are already present (custom email/password session)
      fetchLocalProfile();
    }
  }, [isClerkSignedIn, clerkUser, initialized]);

  const handleLogout = async () => {
    await storeLogout(signOut);
  };

  return {
    isSignedIn,
    user,
    loading,
    logout: handleLogout,
  };
}
