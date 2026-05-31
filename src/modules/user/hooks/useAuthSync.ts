"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/hooks/useAuthStore";

export function useAuthSync() {
  const {
    user,
    isSignedIn,
    loading,
    initialized,
    fetchLocalProfile,
    logout: storeLogout
  } = useAuthStore();

  useEffect(() => {
    if (!initialized) {
      // Check if secure HTTP-only cookies are already present (custom backend session)
      fetchLocalProfile();
    }
  }, [initialized]);

  const handleLogout = async () => {
    await storeLogout();
  };

  return {
    isSignedIn,
    user,
    loading,
    logout: handleLogout,
  };
}
