"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  subtitle?: string;
  tuning?: string;
  price: number;
  originalPrice?: number;
  savingsText?: string;
  quantity: number;
  image: string;
  imageBadgeTop?: string;
  imageBadgeBottom?: string;
  tags?: string[];
  attestationTitle?: string;
  attestationNote?: string;
  description?: string;
  status?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  cartCount: number;
  cartTotal: number;
  syncFromBackend: () => Promise<void>;
}

export const defaultCartItems: CartItem[] = [
  {
    id: "mridanga-mayapur-clay-1",
    name: "Mayapur Supreme Terracotta Mitti Mridanga",
    subtitle: "Standard 22\" Body • Traditional Rawhide Lacing • Pitch D Resonance",
    tuning: "C# / D (Standard Bengali Temple Scale)",
    price: 14500,
    originalPrice: 17000,
    savingsText: "You Save ₹2,500",
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmJwz-P7V9LhjFsMecFyYm_oEq0m8AXRIPE-8XZeFdANKtYOBDyaOmLHKGnoink2LylXncGp8HhMi3IzDvq2lJ2ODnNgwCG_Vp_OEY6SCuJpwcoUd-VDohSMfhris9mfZC4Sjny5xgrPvSVTgfT_qgMfoeYJgonAFRWo_tL8RtN_pm7kZtYLNDUxvBy19tDnLmjNKGmstgz6UbdCzUWwXicVKRoGGZWxQyCVzE1lHr",
    imageBadgeTop: "Bengali Mitti",
    imageBadgeBottom: "Tuned C# / D",
    tags: [
      "High Ping Dayan (C#)",
      "Free Velvet Saffron Cover",
      "Only 2 Left in Bangalore",
    ],
    attestationTitle: "Sri Ganapathi Prabhu Direct Attestation:",
    attestationNote:
      "Inspected, hand-hammered, and calibrated to pitch before boxing. A personal 40-second audio/video proof will be transmitted directly to your WhatsApp before dispatch.",
  },
  {
    id: "karatals-navadvip-kansa-2",
    name: "Navadvip Pure Bell-Metal (Kansa) Heavy Karatals",
    subtitle: "450 Grams Standard • Hand-Braided Red Saffron Cotton Cord",
    tuning: "Temple Kirtan Frequency",
    price: 2450,
    originalPrice: 2900,
    savingsText: "Save ₹450 (Discount Applied)",
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeJrGmDp-NsWmaZdF66tS7iPqKPeMnQzLI0VR9QuTMsn2NUmLZDDhv4Ytd4XNAj_KQsN21sEhrVgvFV4Qdey-fmi7hTeJBuCHvA4j6FWX6Nm2BiqzOi0EsHpegf00U9BwMM1CmbtA0jBIiURBLZ-dY9RfShXlYKQaXdE-zec_nhUqJGMs1pFZxk2gqSkRiOiZGj3xBZ1dsa5JdirDfiylh222591hYGAmSV55DxKtl",
    imageBadgeTop: "Pure Kansa",
    imageBadgeBottom: "High Sustain",
    tags: ["Temple Kirtan Frequency", "Hand-Forged Alloy"],
    attestationTitle: "",
    attestationNote:
      "Rhythmically balanced pair. Harmonic bell chime designed to cut cleanly through loud ecstatic kartal-khol gatherings without harshness.",
  },
];

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(defaultCartItems);

  // Sync instruments from Django backend API if reachable
  const syncFromBackend = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/instruments/");
      if (res.ok) {
        const data = await res.json();
        const results = data.results || data;
        if (Array.isArray(results) && results.length > 0) {
          console.log(`Synced ${results.length} cards from Django backend`);
        }
      }
    } catch {
      // Backend not yet running; keep defaults
    }
  };

  useEffect(() => {
    syncFromBackend();
  }, []);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        syncFromBackend,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
