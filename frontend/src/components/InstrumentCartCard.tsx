"use client";

import React from "react";
import { CartItem, useCart } from "@/context/CartContext";

interface InstrumentCartCardProps {
  item: CartItem;
}

export default function InstrumentCartCard({ item }: InstrumentCartCardProps) {
  const { removeFromCart, updateQuantity } = useCart();

  const getTagIcon = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes("ping") || t.includes("dayan") || t.includes("tune")) return "tune";
    if (t.includes("cover") || t.includes("free") || t.includes("gift")) return "card_giftcard";
    if (t.includes("left") || t.includes("bangalore") || t.includes("stock")) return "warehouse";
    if (t.includes("frequency") || t.includes("kirtan")) return "notifications_active";
    if (t.includes("alloy") || t.includes("forged") || t.includes("metal")) return "verified";
    if (t.includes("proof") || t.includes("weather")) return "flight_takeoff";
    return "auto_awesome";
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-lg shadow-sm border border-outline-variant/30 flex flex-col md:flex-row gap-space-lg items-start transition-all hover:shadow-md">
      {/* Product Image with Overlay Badges */}
      <div className="relative w-full md:w-56 h-48 sm:h-52 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {/* Top-Left Badge */}
        {item.imageBadgeTop && (
          <span className="absolute top-2.5 left-2.5 bg-primary/95 text-on-primary font-label-caps text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
            {item.imageBadgeTop}
          </span>
        )}
        {/* Bottom-Right Badge */}
        {item.imageBadgeBottom && (
          <div className="absolute bottom-2.5 right-2.5 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[13px] text-tertiary-fixed">
              {item.imageBadgeBottom.toLowerCase().includes("sustain") ? "graphic_eq" : "verified"}
            </span>
            <span>{item.imageBadgeBottom}</span>
          </div>
        )}
      </div>

      {/* Main Content Info */}
      <div className="flex flex-col flex-1 justify-between gap-space-sm w-full">
        {/* Top Title & Subtitle Row + Delete Button */}
        <div>
          <div className="flex items-start justify-between gap-space-sm">
            <div>
              <h3 className="font-headline-sm text-[21px] text-primary font-bold tracking-tight">
                {item.name}
              </h3>
              {item.subtitle && (
                <p className="font-label-md text-label-md text-secondary font-semibold mt-0.5">
                  {item.subtitle}
                </p>
              )}
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-on-surface-variant/60 hover:text-error transition-colors p-1 rounded-lg hover:bg-surface-container"
              title="Remove instrument from cart"
              type="button"
            >
              <span className="material-symbols-outlined text-xl">delete</span>
            </button>
          </div>

          {/* Tags Pills Row */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2.5">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 font-label-caps text-label-caps bg-surface-container text-on-surface px-space-sm py-1 rounded-full border border-outline-variant/30 font-semibold"
                >
                  <span className="material-symbols-outlined text-[13px] text-secondary">
                    {getTagIcon(tag)}
                  </span>
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Sri Ganapathi Prabhu Direct Attestation Box */}
        {item.attestationNote && (
          <div className="bg-[#fff1ec] p-space-sm rounded-xl flex items-start gap-space-sm border border-secondary-container/20 mt-1">
            <span className="material-symbols-outlined text-primary text-xl mt-0.5 flex-shrink-0">
              {item.attestationTitle ? "verified_user" : "check_circle"}
            </span>
            <p className="font-body-sm text-[13px] text-on-surface-variant leading-relaxed">
              {item.attestationTitle && (
                <strong className="text-on-surface font-bold mr-1">
                  {item.attestationTitle}:
                </strong>
              )}
              {item.attestationNote}
            </p>
          </div>
        )}

        {/* Bottom QTY and Price Row */}
        <div className="flex items-center justify-between pt-space-xs border-t border-outline-variant/20 mt-1">
          {/* Quantity Controls */}
          <div className="flex items-center gap-space-sm">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold">
              QTY:
            </span>
            <div className="flex items-center bg-surface-container rounded-lg p-0.5 shadow-inner">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-bold text-sm shadow-sm"
                type="button"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-8 text-center font-title-md text-title-md font-bold text-primary">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-bold text-sm shadow-sm"
                type="button"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Pricing & Savings */}
          <div className="flex flex-col items-end">
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </span>
              {item.originalPrice && (
                <span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">
                  ₹{(item.originalPrice * item.quantity).toLocaleString("en-IN")}
                </span>
              )}
            </div>
            {item.savingsText && (
              <span className="font-label-caps text-label-caps text-secondary font-bold">
                {item.savingsText}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
