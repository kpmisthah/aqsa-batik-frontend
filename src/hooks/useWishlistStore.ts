import { create } from "zustand";

interface WishlistState {
  wishlistIds: string[];
  setWishlistIds: (ids: string[]) => void;
  addId: (productId: string) => void;
  removeId: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  wishlistIds: [],
  
  setWishlistIds: (ids) => set({ wishlistIds: ids }),

  addId: (productId) => set((state) => {
    if (state.wishlistIds.includes(productId)) return state;
    return { wishlistIds: [...state.wishlistIds, productId] };
  }),

  removeId: (productId) => set((state) => ({
    wishlistIds: state.wishlistIds.filter(id => id !== productId)
  })),

  isInWishlist: (productId) => {
    return get().wishlistIds.includes(productId);
  },

  clearWishlist: () => set({ wishlistIds: [] })
}));
