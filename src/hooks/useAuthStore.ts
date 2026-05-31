import { create } from "zustand";

export interface SyncedUser {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Wholesaler' | 'Customer';
  status: string;
  avatar?: string | null;
  walletBalance?: number;
  walletHistory?: {
    type: 'Credit' | 'Debit';
    amount: number;
    description: string;
    date: string;
  }[];
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  createdAt?: string;
  lastLogin?: string;
}

interface AuthState {
  user: SyncedUser | null;
  loading: boolean;
  isSignedIn: boolean;
  initialized: boolean;
  
  setUser: (user: SyncedUser | null) => void;
  setLoading: (loading: boolean) => void;
  fetchLocalProfile: () => Promise<void>;
  syncWithBackend: (clerkId: string, email: string, name: string) => Promise<void>;
  logout: (clerkSignOut?: () => Promise<void>) => Promise<void>;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  isSignedIn: false,
  initialized: false,

  setUser: (user) => set({ user, isSignedIn: !!user }),
  setLoading: (loading) => set({ loading }),

  fetchLocalProfile: async () => {
    set({ loading: true });
    try {
      const res = await fetch(`${API_BASE_URL}/auth/me`, {
        credentials: "include",
      });
      
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          set({ user: data.user, isSignedIn: true, initialized: true });
          return;
        }
      }
      
      // If access token expired, try to refresh it
      const refreshRes = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: "POST",
        credentials: "include",
      });
      
      if (refreshRes.ok) {
        const refreshData = await refreshRes.json();
        if (refreshData.success) {
          set({ user: refreshData.user, isSignedIn: true, initialized: true });
          return;
        }
      }

      set({ user: null, isSignedIn: false, initialized: true });
    } catch (err) {
      console.error("Failed to fetch local session profile:", err);
      set({ user: null, isSignedIn: false, initialized: true });
    } finally {
      set({ loading: false });
    }
  },

  syncWithBackend: async (clerkId: string, email: string, name: string) => {
    set({ loading: true });
    try {
      const res = await fetch(`${API_BASE_URL}/auth/sync`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ clerkId, email, name }),
      });

      const data = await res.json();
      if (data.success) {
        set({ user: data.user, isSignedIn: true, initialized: true });
      } else {
        console.error("Backend sync rejection:", data.message);
        set({ user: null, isSignedIn: false, initialized: true });
      }
    } catch (err) {
      console.error("Backend sync connection failure:", err);
      set({ user: null, isSignedIn: false, initialized: true });
    } finally {
      set({ loading: false });
    }
  },

  logout: async (clerkSignOut) => {
    set({ loading: true });
    try {
      // Sign out of Clerk if active
      if (clerkSignOut) {
        try {
          await clerkSignOut();
        } catch (clerkErr) {
          console.error("Clerk sign out error:", clerkErr);
        }
      }
      
      // Clear cookies from Express backend
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      
      set({ user: null, isSignedIn: false });
    } catch (err) {
      console.error("Failed during logout sequence:", err);
    } finally {
      set({ loading: false });
      window.location.href = "/";
    }
  },
}));
