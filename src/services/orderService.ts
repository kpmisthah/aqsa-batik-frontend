export const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export interface CheckoutPayload {
  items: {
    productId: string;
    name: string;
    quantity: number;
    variantColour: string;
  }[];
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
  };
  paymentMethod: "Razorpay" | "COD" | "Wallet";
}

export interface VerifyPaymentPayload {
  rzpOrderId: string;
  rzpPaymentId: string;
  rzpSignature: string;
  orderId: string;
}

export const checkoutOrder = async (payload: CheckoutPayload): Promise<Response> => {
  return await fetch(`${API_BASE}/orders/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });
};

export const verifyOrderPayment = async (payload: VerifyPaymentPayload): Promise<Response> => {
  return await fetch(`${API_BASE}/orders/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });
};
