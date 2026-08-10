"use client";

import React, { useState, useEffect } from "react";
import { useCartStore, CartItem } from "@/hooks/useCartStore";
import { useAuthSync } from "@/modules/user/hooks/useAuthSync";
import Nav from "@/modules/user/components/Nav";
import { useAuthStore } from "@/hooks/useAuthStore";

import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Truck, Info, Lock, Loader2, Sparkles, CheckCircle2, Wallet } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getColorName } from "@/utils/colorHelper";
import { checkoutOrder, verifyOrderPayment } from "@/services/orderService";

export default function CartPage() {
  const { isSignedIn, user, loading: authLoading } = useAuthSync();
  const { items, updateQuantity, removeItem, clearCart, getTotalAmount, getTotalItemsCount, isWholesaleEligible } = useCartStore();
  const { fetchLocalProfile } = useAuthStore();
  const router = useRouter();

  // Shipping Address Form State
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

  const hasSavedAddress = !!(user?.address && user?.city && user?.state && user?.zip && user?.phone);
  const [addressMode, setAddressMode] = useState<"saved" | "new">("new");

  // Remove Item Modal State
  const [itemToRemove, setItemToRemove] = useState<{ productId: string, variantColour?: string } | null>(null);

  // Populate default address if available in user profile
  useEffect(() => {
    if (user) {
      if (user.address && user.city && user.state && user.zip && user.phone) {
        setAddressMode("saved");
      }
    }
  }, [user]);

  // Payment states
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"Razorpay" | "COD" | "Wallet">("Razorpay");

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleUpdateQuantity = (productId: string, newQty: number, variantColour?: string) => {
    try {
      updateQuantity(productId, newQty, variantColour);
    } catch (err: any) {
      showToast(err.message || "Failed to update quantity.", "error");
    }
  };

  // 1. Dynamic Pricing Calculations
  const userRole = user?.role || "Customer";
  const subtotal = getTotalAmount(userRole);
  const wholesaleCheck = isWholesaleEligible(userRole);

  const getSingleItemDisplayPrice = (item: CartItem) => {
    if (userRole === "Wholesaler") {
      const wholesalePrice = Math.round(item.fullPrice * 0.6);
      return Math.min(wholesalePrice, item.discountPrice || item.fullPrice);
    }
    return item.discountPrice || item.fullPrice;
  };

  // Helper to dynamically load the Razorpay checkout script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // 💳 Proceed to checkout & launch Razorpay SDK (or complete direct COD order)
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSignedIn) {
      showToast("Please log in to complete your purchase.", "error");
      router.push("/login?redirect=/cart");
      return;
    }

    if (items.length === 0) {
      showToast("Your cart is empty.", "error");
      return;
    }

    const finalAddress = addressMode === "saved" && user?.address ? user.address : address;
    const finalCity = addressMode === "saved" && user?.city ? user.city : city;
    const finalState = addressMode === "saved" && user?.state ? user.state : state;
    const finalZip = addressMode === "saved" && user?.zip ? user.zip : zip;
    const finalPhone = addressMode === "saved" && user?.phone ? user.phone : phone;

    // Validate that all shipping address fields are filled out completely
    if (!finalAddress?.trim() || !finalCity?.trim() || !finalState?.trim() || !finalZip?.trim() || !finalPhone?.trim()) {
      showToast("Please fill out all address and contact details completely before placing your order.", "error");
      return;
    }

    // Verify wholesale MOQ requirements
    if (userRole === "Wholesaler" && !wholesaleCheck.eligible) {
      showToast("Wholesale orders must meet the minimum quantity or price threshold.", "error");
      return;
    }

    setCheckingOut(true);
    showToast(paymentMethod === "COD" ? "Placing your order..." : "Initializing secure transaction...", "success");

    try {
      // 1. Only load Razorpay script dynamically if online payment method is chosen
      if (paymentMethod === "Razorpay") {
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
          throw new Error("Razorpay SDK failed to load. Please check your connection.");
        }
      }

      // 2. Request backend order creation (with silent token refresh retry)
      const executeOrderRequest = async () => {
        return await checkoutOrder({
          items: items.map((i) => ({
            productId: i.productId,
            name: i.name,
            quantity: i.quantity,
            variantColour: i.variantColour || "",
          })),
          shippingAddress: { address: finalAddress, city: finalCity, state: finalState, zip: finalZip, phone: finalPhone },
          paymentMethod,
        });
      };

      let checkoutRes = await executeOrderRequest();

      // If Access Token expired natively while on the cart page
      if (checkoutRes.status === 401) {
        showToast("Refreshing secure session...", "success");
        await fetchLocalProfile(); // This triggers the backend /auth/refresh automatically
        checkoutRes = await executeOrderRequest(); // Try again immediately
      }

      const checkoutData = await checkoutRes.json();
      if (!checkoutRes.ok) {
        // If it still fails, or failed for another reason
        throw new Error(checkoutData.message || "Failed to initiate payment session.");
      }

      if (paymentMethod === "COD" || paymentMethod === "Wallet") {
        setCheckoutSuccess(true);
        showToast(`Order placed successfully via ${paymentMethod}!`, "success");
        clearCart();
        await fetchLocalProfile();
        router.push(`/order-success?method=${paymentMethod.toLowerCase()}`);
        return;
      }

      const { keyId, amount, currency, rzpOrderId, orderId } = checkoutData;

      // 4. Launch Razorpay Standard Checkout SDK Modal
      const options = {
        key: keyId,
        amount: amount, // in paise
        currency: currency,
        name: "Aqsha Batik Store",
        description: `Batik Suit Order Checkout #${orderId.substring(18)}`,
        image: "https://res.cloudinary.com/misthah/image/upload/v1/batik_store/logo.png",
        order_id: rzpOrderId,
        handler: async (response: any) => {
          // On Payment Success callback inside the client browser
          showToast("Payment captured. Verifying signature...", "success");
          try {
            const verifyRes = await verifyOrderPayment({
              rzpOrderId: response.razorpay_order_id,
              rzpPaymentId: response.razorpay_payment_id,
              rzpSignature: response.razorpay_signature,
              orderId: orderId,
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
              throw new Error(verifyData.message || "Transaction signature verification failed.");
            }

            showToast("Payment verified! Order placed.", "success");
            setCheckoutSuccess(true);
            clearCart();
            await fetchLocalProfile();
            router.push("/order-success");
          } catch (err: any) {
            console.error(err);
            setCheckingOut(false);
            router.push(`/payment-failed?reason=${encodeURIComponent(err.message || "Payment verification failed.")}`);
          }
        },
        prefill: {
          name: user?.name || "",
          email: user?.email || "",
          contact: phone,
        },
        notes: {
          address: `${address}, ${city}, ${state} - ${zip}`,
          role: userRole,
        },
        theme: {
          color: "#1A1A1A", // Aqsha brand color
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        setCheckingOut(false);
        router.push(`/payment-failed?reason=${encodeURIComponent(response.error?.description || "Transaction failed.")}`);
      });
      paymentObject.open();
    } catch (err: any) {
      console.error(err);
      showToast(err.message || "Could not process order payment.", "error");
    } finally {
      setCheckingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col text-primary">
      <Nav />

      {/* Dynamic Toast Alerts */}
      {toast && (
        <div className={`fixed top-24 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border transition-all duration-300 text-sm font-bold ${toast.type === "success"
          ? "bg-emerald-50 border-emerald-200 text-emerald-800"
          : "bg-red-50 border-red-200 text-red-800"
          }`}>
          <span className={`w-2.5 h-2.5 rounded-full ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'} ${toast.type === 'success' ? 'animate-ping' : ''}`} />
          <span>{toast.message}</span>
        </div>
      )}

      <main className="flex-1 max-w-[1300px] w-full mx-auto px-6 py-12">
        <h1 className="font-heading text-3xl md:text-4xl font-normal text-left mb-2 tracking-tight">Shopping Bag</h1>
        <p className="text-sm text-primary/60 text-left mb-10 font-normal">
          Review your items, complete shipping details, and finalize your secure transaction in Indian Rupees (₹).
        </p>

        {checkoutSuccess ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary/80">Securing your order...</p>
          </div>
        ) : items.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-surface rounded-[32px] border border-primary/10 p-12 text-center shadow-xl max-w-xl mx-auto my-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary/30 rounded-tl-[32px]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-[32px]" />

            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow border border-primary/5 text-3xl">
              🛍️
            </div>
            <h2 className="font-heading text-2xl font-normal mb-2">Your cart is empty</h2>
            <p className="text-xs text-primary/60 max-w-xs mx-auto mb-8 leading-relaxed">
              Explore our hand-printed premium Batik collections and add suits or fabrics to your cart.
            </p>
            <Link
              href="/cotton-cloth"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all shadow-md active:scale-95"
            >
              Explore Collections
            </Link>
          </div>
        ) : (
          /* Main Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-7 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.variantColour}`}
                  className="bg-white rounded-3xl border border-primary/10 p-4 md:p-5 flex gap-4 md:gap-5 shadow-sm hover:shadow transition-all relative overflow-hidden"
                >
                  {/* Item Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-surface border border-primary/5 flex-shrink-0">
                    <img
                      src={item.image || "placeholder.jpg"}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-heading font-normal text-sm md:text-base leading-tight hover:text-accent transition-colors">{item.name}</h3>
                        <button
                          onClick={() => setItemToRemove({ productId: item.productId, variantColour: item.variantColour })}
                          className="text-primary/30 hover:text-red-600 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 items-center mt-1.5">
                        {item.variantColour && (
                          <span className="px-2.5 py-0.5 rounded-lg bg-surface border border-primary/10 text-[10px] font-bold uppercase tracking-wider">
                            Color: {getColorName(item.variantColour)}
                          </span>
                        )}
                        {item.isWholesaleOnly && (
                          <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                            Wholesale Only
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Selector and Pricing */}
                    <div className="flex justify-between items-center mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-primary/10 rounded-xl bg-surface/30 p-1">
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1, item.variantColour)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg text-primary/55 hover:bg-white hover:text-black transition-all active:scale-90"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center font-bold text-xs text-primary">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1, item.variantColour)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg text-primary/55 hover:bg-white hover:text-black transition-all active:scale-90"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Pricing Tag */}
                      <div className="text-right">
                        {userRole === "Wholesaler" ? (
                          <>
                            <div className="text-xs text-primary/40 line-through">₹{item.fullPrice * item.quantity}</div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">Wholesale</span>
                              <span className="font-bold text-sm md:text-base text-accent">₹{getSingleItemDisplayPrice(item) * item.quantity}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            {item.discountPrice && item.discountPrice < item.fullPrice ? (
                              <div className="text-xs text-primary/40 line-through">₹{item.fullPrice * item.quantity}</div>
                            ) : null}
                            <span className="font-bold text-sm md:text-base">₹{getSingleItemDisplayPrice(item) * item.quantity}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Checkout Summary & Shipping details */}
            <div className="lg:col-span-5 space-y-6">

              {/* Wholesaler MOQ Policy Checklist */}
              {userRole === "Wholesaler" && (
                <div className={`rounded-3xl border p-5 shadow-sm relative overflow-hidden transition-all duration-300 ${wholesaleCheck.eligible
                  ? "bg-emerald-50/50 border-emerald-200/50 text-emerald-950"
                  : "bg-amber-50/50 border-amber-200/60 text-amber-950"
                  }`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      {wholesaleCheck.eligible ? (
                        <CheckCircle2 size={18} className="text-emerald-700" />
                      ) : (
                        <Info size={18} className="text-amber-700" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider">Wholesale MOQ Validation</h4>
                      {wholesaleCheck.eligible ? (
                        <p className="text-xs opacity-75 mt-1 font-medium leading-relaxed">
                          Awesome! Your order satisfies the minimum quantity or price threshold for wholesale purchase. Wholesale pricing is activated.
                        </p>
                      ) : (
                        <>
                          <p className="text-xs opacity-75 mt-1 font-medium leading-relaxed">
                            Wholesale accounts require either a minimum cart value of **₹10,000** or at least **10 items** in the bag.
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-black uppercase">
                            <span className="px-2.5 py-1 rounded-md bg-white border border-amber-300 text-amber-900">
                              Remaining Value: ₹{wholesaleCheck.remainingAmount}
                            </span>
                            <span className="px-2.5 py-1 rounded-md bg-white border border-amber-300 text-amber-900">
                              Remaining items: {wholesaleCheck.remainingQty}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Order Cost Card */}
              <div className="bg-white rounded-3xl border border-primary/10 p-6 md:p-8 shadow-sm">
                <h2 className="font-heading text-xl font-normal mb-6">Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="opacity-60">Subtotal ({getTotalItemsCount()} items)</span>
                    <span className="font-bold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span className="opacity-60">Shipping (Indian Post / Priority Express)</span>
                    <span className="text-accent font-bold uppercase tracking-wider text-[11px]">Free delivery</span>
                  </div>
                  <div className="border-t border-primary/10 pt-4 flex justify-between items-center">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">Total Amount (INR)</span>
                      <p className="text-[10px] opacity-40 leading-tight">Includes all local taxes / GST</p>
                    </div>
                    <span className="font-heading text-3xl font-bold text-primary">₹{subtotal}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Information & Checkout Button */}
              <form onSubmit={handlePaymentSubmit} className="bg-white rounded-3xl border border-primary/10 p-6 md:p-8 shadow-sm space-y-4">
                <h3 className="font-heading text-lg font-normal mb-2 flex items-center gap-2">
                  <Truck size={18} className="text-accent" />
                  <span>Shipping & Delivery Details</span>
                </h3>

                <div className="space-y-4">
                  {/* Address Toggle */}
                  {hasSavedAddress && (
                    <div className="flex gap-6 border-b border-primary/10 pb-4 mb-4">
                      <label className="flex items-center gap-2.5 cursor-pointer group">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${addressMode === 'saved' ? 'border-primary bg-primary' : 'border-primary/30 group-hover:border-primary/60'}`}>
                          {addressMode === 'saved' && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                        </div>
                        <input type="radio" className="hidden" checked={addressMode === "saved"} onChange={() => setAddressMode("saved")} />
                        <span className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${addressMode === 'saved' ? 'text-primary' : 'text-primary/60'}`}>Use Saved Address</span>
                      </label>
                      <label className="flex items-center gap-2.5 cursor-pointer group">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${addressMode === 'new' ? 'border-primary bg-primary' : 'border-primary/30 group-hover:border-primary/60'}`}>
                          {addressMode === 'new' && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                        </div>
                        <input type="radio" className="hidden" checked={addressMode === "new"} onChange={() => setAddressMode("new")} />
                        <span className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${addressMode === 'new' ? 'text-primary' : 'text-primary/60'}`}>Add New Address</span>
                      </label>
                    </div>
                  )}

                  {addressMode === "saved" && hasSavedAddress ? (
                    <div className="bg-surface/60 rounded-2xl p-5 border border-primary/10 hover:border-primary/30 transition-colors">
                      <div className="font-heading text-lg font-bold mb-1">{user?.name}</div>
                      <div className="text-sm font-medium opacity-80 leading-relaxed max-w-sm">
                        {user?.address}<br />
                        {user?.city}, {user?.state} {user?.zip}
                      </div>
                      <div className="mt-4 pt-4 border-t border-primary/10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                        <Truck size={14} className="text-accent" />
                        <span>Phone: {user?.phone}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2">Delivery Address</label>
                        <textarea
                          required={addressMode === "new"}
                          rows={2}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Street address, apartment, locality"
                          className="w-full px-4 py-3 border border-primary/20 rounded-2xl text-primary bg-white placeholder-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2">City</label>
                          <input
                            type="text"
                            required={addressMode === "new"}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="e.g. Ujjain"
                            className="w-full px-4 py-3 border border-primary/20 rounded-2xl text-primary bg-white placeholder-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2">State</label>
                          <input
                            type="text"
                            required={addressMode === "new"}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            placeholder="e.g. Madhya Pradesh"
                            className="w-full px-4 py-3 border border-primary/20 rounded-2xl text-primary bg-white placeholder-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2">PIN / Zip Code</label>
                          <input
                            type="text"
                            required={addressMode === "new"}
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            placeholder="6-digit ZIP"
                            className="w-full px-4 py-3 border border-primary/20 rounded-2xl text-primary bg-white placeholder-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2">Mobile Phone</label>
                          <input
                            type="tel"
                            required={addressMode === "new"}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="10-digit number"
                            className="w-full px-4 py-3 border border-primary/20 rounded-2xl text-primary bg-white placeholder-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-primary/10 space-y-4">
                  {/* Payment Method Selector */}
                  <div className="space-y-3">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1">Payment Method</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("Razorpay")}
                        className={`px-4 py-3 rounded-full border font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${paymentMethod === "Razorpay"
                          ? "bg-accent border-accent text-white shadow-sm"
                          : "bg-transparent border-primary/20 text-primary hover:border-primary/40"
                          }`}
                      >
                        <CreditCard size={14} />
                        <span>Pay Online</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("COD")}
                        className={`px-4 py-3 rounded-full border font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${paymentMethod === "COD"
                          ? "bg-accent border-accent text-white shadow-sm"
                          : "bg-transparent border-primary/20 text-primary hover:border-primary/40"
                          }`}
                      >
                        <Truck size={14} />
                        <span>Cash On Delivery</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("Wallet")}
                        className={`px-4 py-3 rounded-full border font-bold text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${paymentMethod === "Wallet"
                          ? "bg-accent border-accent text-white shadow-sm"
                          : "bg-transparent border-primary/20 text-primary hover:border-primary/40"
                          }`}
                      >
                        <Wallet size={14} className={paymentMethod === "Wallet" ? "text-white" : "text-accent"} />
                        <span>Aqsha Wallet (₹{user?.walletBalance || 0})</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={checkingOut || (userRole === "Wholesaler" && !wholesaleCheck.eligible) || (paymentMethod === "Wallet" && (user?.walletBalance || 0) < subtotal)}
                    className="w-full bg-accent hover:bg-accent/90 text-white py-4.5 px-6 rounded-full font-bold uppercase tracking-wider text-sm shadow hover:shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {checkingOut ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : paymentMethod === "COD" || paymentMethod === "Wallet" ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <CreditCard size={16} />
                    )}
                    <span>{paymentMethod === "COD" ? "Place Order (Cash on Delivery)" : paymentMethod === "Wallet" ? "Pay with Wallet Balance" : "Secure Razorpay Payment"}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] opacity-40 font-bold uppercase tracking-widest">
                    <Lock size={12} className="text-accent" />
                    <span>{paymentMethod === "COD" || paymentMethod === "Wallet" ? "Aqsha Secure Order Placement" : "Razorpay SSL 256-bit Encrypted"}</span>
                  </div>
                </div>
              </form>

            </div>
          </div>
        )}
      </main>

      {/* Remove Confirmation Modal */}
      {itemToRemove && (
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm flex items-center justify-center z-[150] p-4 animate-in fade-in duration-300">
          <div className="bg-surface rounded-[32px] border border-primary/10 p-6 md:p-8 max-w-sm w-full shadow-2xl relative animate-in zoom-in-95 duration-200 font-heading text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 size={24} />
            </div>
            <h3 className="font-heading text-xl font-normal text-primary mb-2">Remove Item?</h3>
            <p className="text-xs text-primary/80 mb-6 px-4">
              Are you sure you want to remove this item from your shopping bag?
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setItemToRemove(null)}
                className="flex-1 px-4 py-3 border border-primary/15 rounded-xl text-xs font-bold uppercase tracking-wider text-primary hover:bg-white transition-colors shadow-sm"
              >
                Go Back
              </button>
              <button
                type="button"
                onClick={() => {
                  removeItem(itemToRemove.productId, itemToRemove.variantColour);
                  setItemToRemove(null);
                  showToast("Item removed from cart", "success");
                }}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
