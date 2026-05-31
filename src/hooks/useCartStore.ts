import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  fullPrice: number; // retail full price in INR
  discountPrice: number; // retail discounted price in INR
  variantColour?: string;
  isWholesaleOnly: boolean;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (productId: string, variantColour?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantColour?: string) => void;
  clearCart: () => void;
  getTotalItemsCount: () => number;
  getTotalAmount: (role?: string) => number;
  isWholesaleEligible: (role?: string) => { eligible: boolean; remainingAmount: number; remainingQty: number };
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        const quantity = newItem.quantity || 1;
        const currentCount = get().getTotalItemsCount();
        if (currentCount + quantity > 10) {
          throw new Error("Cart limit reached. You can only add up to 10 products in total.");
        }

        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => 
              item.productId === newItem.productId && 
              item.variantColour === newItem.variantColour
          );

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += quantity;
            return { items: updatedItems };
          }

          return { 
            items: [...state.items, { ...newItem, quantity }] 
          };
        });
      },

      removeItem: (productId, variantColour = "") => {
        set((state) => ({
          items: state.items.filter(
            (item) => 
              !(item.productId === productId && (item.variantColour || "") === variantColour)
          ),
        }));
      },

      updateQuantity: (productId, quantity, variantColour = "") => {
        if (quantity <= 0) {
          get().removeItem(productId, variantColour);
          return;
        }

        const currentItems = get().items;
        const currentItem = currentItems.find(
          (item) => item.productId === productId && (item.variantColour || "") === variantColour
        );
        const difference = quantity - (currentItem ? currentItem.quantity : 0);
        const newTotalCount = get().getTotalItemsCount() + difference;

        if (newTotalCount > 10) {
          throw new Error("Cart limit reached. You can only add up to 10 products in total.");
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId && (item.variantColour || "") === variantColour
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalItemsCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalAmount: (role) => {
        return get().items.reduce((total, item) => {
          let itemPrice = item.discountPrice || item.fullPrice;
          
          if (role === "Wholesaler") {
            // Apply Wholesaler 40% discount off standard fullPrice or use the discountPrice (whichever is lower)
            const wholesalePrice = Math.round(item.fullPrice * 0.6);
            itemPrice = Math.min(wholesalePrice, item.discountPrice || item.fullPrice);
          }

          return total + itemPrice * item.quantity;
        }, 0);
      },

      isWholesaleEligible: (role) => {
        if (role !== "Wholesaler") {
          return { eligible: true, remainingAmount: 0, remainingQty: 0 };
        }

        const totalAmount = get().getTotalAmount("Wholesaler");
        const totalQty = get().getTotalItemsCount();

        const MINIMUM_WHOLESALE_AMOUNT = 10000; // ₹10,000 INR
        const MINIMUM_WHOLESALE_QUANTITY = 10;   // 10 Items minimum

        const eligible = totalAmount >= MINIMUM_WHOLESALE_AMOUNT || totalQty >= MINIMUM_WHOLESALE_QUANTITY;

        return {
          eligible,
          remainingAmount: Math.max(0, MINIMUM_WHOLESALE_AMOUNT - totalAmount),
          remainingQty: Math.max(0, MINIMUM_WHOLESALE_QUANTITY - totalQty),
        };
      },
    }),
    {
      name: "aqsha-batik-cart", // LocalStorage key to persist cart items between sessions!
    }
  )
);
