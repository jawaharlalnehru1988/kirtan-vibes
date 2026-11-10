"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function InstrumentsPage() {
  const { addToCart } = useCart();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");


  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const playBellResonator = () => {
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      return;
    }
    try {
      setIsPlayingAudio(true);
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(293.66, ctx.currentTime);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.2);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 2.2);

      setTimeout(() => {
        setIsPlayingAudio(false);
      }, 2200);
    } catch (e) {
      console.log("Audio preview initialized", e);
      setIsPlayingAudio(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">

<section className="w-full bg-surface-container-low/70 py-space-xl">
<div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">

<div className="flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-md text-label-md">
<nav className="flex items-center gap-space-xs font-label-md">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span className="opacity-40">/</span>
<span className="text-primary font-bold">Instruments &amp; Kirtan Store</span>
</nav>
<div className="flex items-center gap-space-sm px-space-md py-1 rounded-full bg-surface-container-high text-primary font-label-caps text-label-caps uppercase tracking-wider">
<span className="material-symbols-outlined text-sm text-secondary">verified_user</span>
<span className="">Wooden Crate Transit Protection • Safe Arrival Insured</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
<div className="lg:col-span-8 flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Devotional Acoustical Workshop • Bengaluru</span>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-serif">
            Sacred Vedic Instruments &amp; Kirtan Essentials
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-space-xs">
            Each sacred instrument is individually handcrafted by hereditary artisans and rigorously pitched, inspected, and seasoned by Sri Ganapathi Prabhu. Tuned for authentic temple vibrations and dispatched in custom multi-layer shockproof flight crates.
          </p>
</div>

<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-xl">tune</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface leading-tight">Master Calibrated</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Dayan pitched to C#, D, or D# concert pitch</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-xl">local_shipping</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface leading-tight">Worldwide Transit Boxed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Reinforced timber crates, zero transit breakage</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-md pt-space-md">

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
<div className="md:col-span-8 relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
<input className="w-full bg-surface-container-lowest text-on-surface pl-12 pr-4 py-3 rounded-lg shadow-sm font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-secondary-container" placeholder="Search Mridanga, Karatal, Dress, Tuning accessories..." type="text"/>
</div>
<div className="md:col-span-4 flex items-center gap-space-sm">
<div className="w-full relative">
<select className="w-full appearance-none bg-surface-container-lowest text-on-surface px-4 py-3 rounded-lg shadow-sm font-label-lg text-label-lg focus:outline-none focus:ring-2 focus:ring-secondary-container cursor-pointer pr-10">
<option value="featured">Sort by: Featured Tuning Quality</option>
<option value="price-asc">Price: Low to High</option>
<option value="tone-high">Tone: High Pitch (D/D#)</option>
<option value="tone-low">Tone: Low Pitch (C/C#)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-xl">unfold_more</span>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none">
<button className="flex items-center whitespace-nowrap px-space-md py-2 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-colors">
            All Items (28)
          </button>
<button className="flex items-center whitespace-nowrap px-space-md py-2 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg shadow-sm transition-colors">
            Terracotta Clay Khols (8)
          </button>
<button className="flex items-center whitespace-nowrap px-space-md py-2 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg shadow-sm transition-colors">
            Fiberglass Travel Khols (6)
          </button>
<button className="flex items-center whitespace-nowrap px-space-md py-2 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg shadow-sm transition-colors">
            Bell Metal Karatals (5)
          </button>
<button className="flex items-center whitespace-nowrap px-space-md py-2 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg shadow-sm transition-colors">
            Mridanga Padded Dresses &amp; Belts (4)
          </button>
<button className="flex items-center whitespace-nowrap px-space-md py-2 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg shadow-sm transition-colors">
            Tuning Tapes &amp; Accessories (5)
          </button>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl">
<div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">

<div className="group bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
<div className="flex flex-col gap-space-sm">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Authentic traditional Mayapur terracotta clay kirtan mridanga drum with intricately braided natural rawhide leather straps, baked earthen terracotta drum body, and glistening black iron and rice flour ghab tuning paste on the dayan and bayan heads, warm temple studio lighting with marigold petals." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwSzdIaseOjgf0-Uw-8cFXApVhifjfNfMG7Hqb0xCJWZ2eglBzjwJRcUtTrPxpk26ZEpv39LZrKnUwU0PBI9H4jolyKfvGkfJ7mCHW-O111RCEjtQv4i1YOGbwI7WF8icsz03A63mHaWRLVnb1RtdeJWtlLwmWZnna_mboHLaSEqq0yiSIb4TNztGkdbRBL3LOtucPS_hOuUg8BvpJySNgasBm2Rm_GY4kwpMSC8Up"/>
<span className="absolute top-2 left-2 px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-caps text-label-caps uppercase font-bold shadow-sm">
                Ganapathi Master Tuned
              </span>
<span className="absolute top-2 right-2 px-space-sm py-1 rounded bg-surface-container-highest/90 text-primary font-label-caps text-label-caps font-bold">
                15% OFF
              </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-secondary uppercase">Sacred Terracotta Series</span>
<h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                Mayapur Supreme Terracotta Mitti Mridanga
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Concert grade baked clay from the banks of the sacred Ganges, hand-cured Dayan with sweet celestial sustain.
              </p>
</div>

<div className="flex flex-wrap gap-1 mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Pitch D (High)</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">22" &amp; 23.5"</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Double Braided</span>
</div>
<div className="flex items-baseline gap-space-xs mt-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">₹14,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">₹17,000</span>
</div>
</div>
<div className="flex flex-col gap-space-xs mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<button onClick={() => setIsModalOpen(true)} className="w-full flex items-center justify-center gap-space-xs py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors cursor-pointer">
<span className="material-symbols-outlined text-base text-secondary">volume_up</span>
<span className="">Quick View &amp; Audio Tone</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg shadow-sm transition-colors">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Add to Cart</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
<div className="flex flex-col gap-space-sm">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Sleek saffron sunburst fiberglass professional travel mridanga drum with gloss finish, authentic goat leather skin head tuning rings, and ergonomic luggage shoulder carrying strap, photographed against a clean warm sandalwood backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7rLZTg5E95iYRtNqsl_AXFMU13i45fNSCG-9y3i_FR5dofVJ5tje3oRah3RHDFx9cf2fnNhxPtqMlH18IAp8bQ_ipksYOdRwAVsdifPBxP7r9yX4ade_I64_cikZ9Q2TmmlMRJNa8nAUzEXbUkOAC38zctc_YOzorMT3YTc4PFm3loGabbcczAzSiD8qaDGvqYoak7ZnaztbpcNXjNPInzgy4U-6JpReAoSKlEM_4"/>
<span className="absolute top-2 left-2 px-space-sm py-1 rounded bg-surface-container-highest text-primary font-label-caps text-label-caps uppercase font-bold shadow-sm">
                Flight Weather-Proof
              </span>
<span className="absolute top-2 right-2 px-space-sm py-1 rounded bg-surface-container-highest/90 text-primary font-label-caps text-label-caps font-bold">
                13% OFF
              </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-secondary uppercase">Modern Traveling Series</span>
<h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                Fiberglass Professional Travel Mridanga
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Unbreakable polymer body, resistant to rain and extreme airline humidity. Traditional skin heads intact.
              </p>
</div>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">3.8 kg Ultra Light</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">22.5" Standard</span>
</div>
<div className="flex items-baseline gap-space-xs mt-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">₹17,800</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">₹20,500</span>
</div>
</div>
<div className="flex flex-col gap-space-xs mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<button className="w-full flex items-center justify-center gap-space-xs py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-base text-secondary">visibility</span>
<span className="">Quick View</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg shadow-sm transition-colors">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Add to Cart</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
<div className="flex flex-col gap-space-sm">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Rare black charred clay mridanga drum with charcoal ash natural glaze, ornate red cord bindings, and deep thunderous bayan bass drum head, detailed macro focus on traditional Bengali drum crafting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2fEv_LrMwCca_PCR2venc_ez3RYIzOvqP2VTyuPqHOZ4jDhCYOkJnabCNk1x4-TEtiKdhBI0bGZ06o5NfVnU9TsDEOpVNK1Ee_PkPupYqJ4xfyJ-aHMffxFRWDuKPbANZ_2DgN7jxTAism42-ouTf-1TxKRVXHSQmgGdYHc0-UH9vXyjIMVKa6jW8OM_L6eYD41aoWe5T58r8ZSd9JU-LtnUUSymM8PGvr-Cny5zj"/>
<span className="absolute top-2 left-2 px-space-sm py-1 rounded bg-inverse-surface text-inverse-on-surface font-label-caps text-label-caps uppercase font-bold shadow-sm">
                Rare Artisan Finish
              </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-secondary uppercase">Sanctum Acoustic Edition</span>
<h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                Special Edition Black Terracotta Khol
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Special mineral-rich clay formulation for deep thunderous Bayan resonance in large kirtan halls.
              </p>
</div>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Deep Bass Bayan</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">23" Temple Size</span>
</div>
<div className="flex items-baseline gap-space-xs mt-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">₹16,200</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">₹19,000</span>
</div>
</div>
<div className="flex flex-col gap-space-xs mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<button className="w-full flex items-center justify-center gap-space-xs py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-base text-secondary">visibility</span>
<span className="">Quick View</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg shadow-sm transition-colors">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Add to Cart</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
<div className="flex flex-col gap-space-sm">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Pair of thick golden bronze bell-metal kansa kirtan karatals with rich hammered acoustic rims and vibrant saffron red braided cotton finger cords, resting on warm silk cloth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPWCCitLCnoEk4j3DTD54R-RjQncV335TPaiS2aUjUb-yqlUuvKC_QuBdY5jw33z08K3O-rP5x3JrC7daCoXhVS6RRFtHwhyWYgyZYW8f_siyfJq9oFA5iXC4ML33nZc-8HAe7G2YbmcWs0_PHjZHcQUVekQpsO6fNvPII7ck3kkjrx43oTqvEVzeESpoCaC0cWz_Ol0mSQHlK1tM1Ue3PfBRY2HtbtZyJYhkKWeOW"/>
<span className="absolute top-2 left-2 px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-caps text-label-caps uppercase font-bold shadow-sm">
                Sweet Sustain Tone
              </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-secondary uppercase">Pure Kansa Alloy</span>
<h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                Navadvip Bell Metal Heavy Karatal
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Hand-cast bell metal alloy yielding a ringing harmonic shimmer that cuts through high-decibel sankirtans.
              </p>
</div>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Size 3.5" (Heavy)</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Pure Bell Bronze</span>
</div>
<div className="flex items-baseline gap-space-xs mt-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">₹2,450</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">₹2,900</span>
</div>
</div>
<div className="flex flex-col gap-space-xs mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<button className="w-full flex items-center justify-center gap-space-xs py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-base text-secondary">visibility</span>
<span className="">Quick View</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg shadow-sm transition-colors">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Add to Cart</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
<div className="flex flex-col gap-space-sm">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Compact lightweight high-pitch brass kirtan kartals with woven saffron strap, polished bronze surface with micro lathe patterns, perfect for fast tempo chanting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA-im2P_gr4WW5eomiYg5fzQKIfeFLW1leNVxONj_yb9xywAWKrhklG075VT31WksbxJgCnCfC_2tCH_rkQmrVy_Hs9aRK3BvrrUaonuDjuRY1Q_CEy0yuuM145J75QpUJu3xpgi4Hb3v4sevO77jaEOCidtzjW1uHlh6tExCJEyHhs6Elj_0TP2XOY0-nGmWxy4wg-HBrkXi4ZbP4XGHQYFwRVzOXN_TjX92fOV9-"/>
<span className="absolute top-2 left-2 px-space-sm py-1 rounded bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase font-bold shadow-sm">
                Fast Chanting Spec
              </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-secondary uppercase">Mini Jhanjh Series</span>
<h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                Mayapur Mini Kartal - Fast Chanting
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Crisp, light, high-frequency clack ideal for accelerating double-time kirtan crescendos.
              </p>
</div>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Size 2.75"</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Lightweight Hand Cast</span>
</div>
<div className="flex items-baseline gap-space-xs mt-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">₹1,650</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">₹1,950</span>
</div>
</div>
<div className="flex flex-col gap-space-xs mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<button className="w-full flex items-center justify-center gap-space-xs py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-base text-secondary">visibility</span>
<span className="">Quick View</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg shadow-sm transition-colors">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Add to Cart</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
<div className="flex flex-col gap-space-sm">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Heavy-duty padded waterproof cordura nylon mridanga drum gig bag in deep terracotta red with backpack straps, internal velvet lining, and reinforced padded head end caps." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3GqDCt5tLVXkKTFyiErFWsWb2hV0dCS1cgzX2eIFoqgrEZokDWlwFwek3yI1L0mjhM3UBNeuXgucOj9nTpEjvNuZ9bsX5CxlHruLi0JtaUyYwmXJqhek1jRDH7TkquQQGgR8_fW_-YtfBI5KSEBUFLQXZ4Be-F0suO2OgkKkbSmTwRMYLfUr2m1KqiCJZuB34DAJzzfLgaKetCgUOsK7Wkmz9AZ-LviRNIgkUexAd"/>
<span className="absolute top-2 left-2 px-space-sm py-1 rounded bg-surface-container-high text-primary font-label-caps text-label-caps uppercase font-bold shadow-sm">
                25mm Cushion Padded
              </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-secondary uppercase">Transit Protection</span>
<h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                Deluxe Heavy Padded Waterproof Bag
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Double cushioned internal red velvet lining prevents Dayan dampening damage during rainy transit.
              </p>
</div>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Dual Backpack Straps</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Accessory Pockets</span>
</div>
<div className="flex items-baseline gap-space-xs mt-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">₹2,400</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">₹2,800</span>
</div>
</div>
<div className="flex flex-col gap-space-xs mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<button className="w-full flex items-center justify-center gap-space-xs py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-base text-secondary">visibility</span>
<span className="">Quick View</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg shadow-sm transition-colors">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Add to Cart</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
<div className="flex flex-col gap-space-sm">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Intricately embroidered sacred mridanga cover dress in ochre saffron with peacock feather embroidery motif and soft broad woven cotton shoulder strap." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoDT6ZkMgyIcCid0rIzKmObSW7MEKs0Yg8TWTrrSiPdKc71BqfGEpzZKlclCzNuOlPiVYEN2Z8TcnuT1yRXax8-VvEb3PzckUjlb2fROQ7f3jCtnML-JVoB0yOUU9_U_2rPK9yV1BnjLdsOjcClN6ii871WUyByQTyGfd9kelADj-HQgplXKUIF41l6oRiHsQj6FoNKkRQUx9IYgsdwB1MENyLA5lJlr7hrKxF5gJ0"/>
<span className="absolute top-2 left-2 px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-label-caps text-label-caps uppercase font-bold shadow-sm">
                Pure Khadi Cotton
              </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-secondary uppercase">Devotional Attire</span>
<h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                Peacock Embroidered Mridanga Dress
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Protects the earthen body against perspiration while honoring the sanctity of the drum in the temple room.
              </p>
</div>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Machine Washable</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Includes Shoulder Strap</span>
</div>
<div className="flex items-baseline gap-space-xs mt-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">₹1,850</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">₹2,200</span>
</div>
</div>
<div className="flex flex-col gap-space-xs mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<button className="w-full flex items-center justify-center gap-space-xs py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-base text-secondary">visibility</span>
<span className="">Quick View</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg shadow-sm transition-colors">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Add to Cart</span>
</button>
</div>
</div>

<div className="group bg-surface-container-lowest rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
<div className="flex flex-col gap-space-sm">
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Mridanga acoustic maintenance toolkit containing a cake of pure yellow beeswax, micro-fiber dayan dampening tape, padded leather head cap covers, and tuning wooden hammer, neatly arranged in a tin box." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL9ee_D5Li6LWt6fkmpuqPnw_V4IwdOXcC_1Z69cIIuVtxzftVu5bwU2RZx3Ju2Pac1qwC0v7NogZHofO2lSbAcEi_lNp6DRmJNK7u_ABqjonH13J9OvxNaPZtLzFL8QSuEHPsq2_hON7qIWR3nj22tZxHmbL1xMDh3TqyGHcEQX4pKXScnCKQNwMrYwNEwu-_9rpF-xbl_G4TMRaft2jfGs6iaafWbfIA15gICsM5"/>
<span className="absolute top-2 left-2 px-space-sm py-1 rounded bg-surface-container-highest text-primary font-label-caps text-label-caps uppercase font-bold shadow-sm">
                Kirtaniya Essential
              </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-secondary uppercase">Workshop Care Kit</span>
<h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                Ganapathi Prabhu's Master Tuning Kit
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Pure natural beeswax, microfiber Dayan ring tape, and protective cap covers for weather stability.
              </p>
</div>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Pure Beeswax</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps">Twin Protector Caps</span>
</div>
<div className="flex items-baseline gap-space-xs mt-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">₹950</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">₹1,200</span>
</div>
</div>
<div className="flex flex-col gap-space-xs mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-xl">
<button className="w-full flex items-center justify-center gap-space-xs py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors">
<span className="material-symbols-outlined text-base text-secondary">visibility</span>
<span className="">Quick View</span>
</button>
<button className="w-full flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-primary hover:bg-secondary text-on-primary font-label-lg text-label-lg shadow-sm transition-colors">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Add to Cart</span>
</button>
</div>
</div>
</div>

<div className="w-full rounded-2xl bg-gradient-to-r from-primary to-primary-container text-on-primary p-space-lg lg:p-space-xl shadow-lg relative overflow-hidden">
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-8 flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-tertiary-fixed text-2xl">verified</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-tertiary-fixed font-bold">Bangalore Workshop Warranty • Parampara Care</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-primary font-serif">
              Personally Tested &amp; Tuned by Sri Ganapathi Prabhu
            </h2>
<p className="font-body-md text-body-md text-surface-container-highest max-w-2xl">
              Every mridanga sold is opened, tested for Dayan overtones, and tensioned by Ganapathi Prabhu before sealing into our flight crates. Includes a complimentary 30-day video-call tuning audit and lifetime workshop advice at SMVT Bangalore.
            </p>
<div className="flex flex-wrap items-center gap-space-md mt-space-sm text-sm">
<div className="flex items-center gap-1.5 font-label-md text-label-md">
<span className="material-symbols-outlined text-base text-secondary-container">done_all</span>
<span className="">Free 1st Re-Tuning Inspection</span>
</div>
<div className="flex items-center gap-1.5 font-label-md text-label-md">
<span className="material-symbols-outlined text-base text-secondary-container">done_all</span>
<span className="">Bengaluru SMVT Walk-in Assistance</span>
</div>
<div className="flex items-center gap-1.5 font-label-md text-label-md">
<span className="material-symbols-outlined text-base text-secondary-container">done_all</span>
<span className="">International Vedic Packaging Standard</span>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
<a className="flex items-center gap-space-sm px-space-lg py-space-sm rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container font-title-md text-title-md shadow-md transition-colors font-bold" href="https://wa.me/919353237559" target="_blank">
<span className="material-symbols-outlined text-[#25D366]">chat</span>
<span className="">Ask Ganapathi Prabhu Directly</span>
</a>
<span className="font-label-caps text-label-caps text-surface-container-highest mt-2">WhatsApp Helpline: +91 9353237559</span>
</div>
</div>
</div>
</div>
</section>

{isModalOpen && (
<div onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }} className="fixed inset-0 z-50 bg-on-surface/60 backdrop-blur-sm flex items-center justify-center p-space-md transition-opacity" id="product-detail-drawer">
<div className="w-full max-w-4xl max-h-[942px] overflow-y-auto bg-surface-container-lowest rounded-2xl shadow-2xl p-space-lg flex flex-col gap-space-lg relative">

<button onClick={() => setIsModalOpen(false)} aria-label="Close product view" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors z-20 cursor-pointer">
<span className="material-symbols-outlined text-xl">close</span>
</button>
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-start">

<div className="md:col-span-6 flex flex-col gap-space-md">
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container relative">
<img className="w-full h-full object-cover" alt="Closeup studio photograph of traditional Bengali clay mridanga drum highlighting the handcrafted black ghab acoustic paste and intricate leather lacing." id="main-preview-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyzto51RnKv_Z0LRpN5C7ScktqbmBQ1-X5MIK0RD45brvng4ONQvpzkIqNtwpDpOgS51W21SOtnsYza_F3AsHoD0g4Axqh3pBXx7zU3lzuLZW33zefCyMdM302Tw07UGDD3td1pNQ5BTHmaLt0K_Iuds0EgaUV3cCchWEAdPgWSVnXJTuxAuTO2na-K40qf6qguQEbnpxBJCmwAvEsTRDhmGGFtnFpzj52xhVq90e0"/>
<span className="absolute bottom-3 left-3 px-space-sm py-1 rounded bg-primary text-on-primary font-label-caps text-label-caps uppercase font-bold shadow-sm">
              In Stock • SMVT Bangalore Workshop
            </span>
</div>

<div className="grid grid-cols-4 gap-space-xs">
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container cursor-pointer ring-2 ring-primary">
<img className="w-full h-full object-cover" alt="Macro detail of Dayan ringing head and circular black ghab tuning iron paste." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0pzqQI5UkcNtaslf1T2qW9BFc_pf0RRZTyd14jh2qDcl2TInuq7tmetaJHPFVexj_kpn7CQTWE7QGcx6S7z_kWzqZk6AnEwYAEYajt2kR2DsWIEzpdqjsdqHXCl5yrpj_nCjG3IUayjdHyRNa343xBHpB1IOGccyqP7LdPT3R7zcAZE0U-ETUy_eIQ3o2YI0tEJvDk5wkApdMAr9ZmjXg9v0pppxf4WEVWyPXbuus"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" alt="Wide shot of deep resonant Bayan bass head of the mridanga." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdam8SFZWjw_X03hN9ypa6dYftoaRWgQTM3YwS6mOsMuLFeBwpvlbo3AZkGCnqhZSFQV97BMCrGpqPJrBJeY1JEQx6cogva_jS4kKOy6qWq2RvmzZdUztPRg-1AM_bIt44p1TG1YYgU7kR_B8NhYUnQC-KfHVC4NJDda_hkRXWCSxt8CxtFAW2Rp_NnqcmGNZtdAItNvmkelKOd2vfk4x0y3OeZGDTSWmGEFrMMdSu"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" alt="Traditional rawhide leather strap braiding detail of Mayapur mridanga." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzCLjBMuOZf0rebsLEqnuXhb6jYzDxvrzT5sbbfD5LS8fKoeJpnnHMTPmHJhlSzgLeWeN8v6Yj_B8XduWaYwOXDMSGEya8iwy1U3Swgo1Z6fUOWY7KMxYZCS9Tv2rT_71FmzTEzAunsJYpbumUAWgU85obODbAKBj07E89AQo9pn4nB0-JLptEZU0PH_A1t72cvsyTRdb_sH_PogLRpL5R5Q48rn7fkVff8v-jc1I2"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-surface-container cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" alt="Devotee holding mridanga drum in standing temple kirtan posture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLzrE846tswXVSf-alHswfB6skoP7jLq5CxRcEDhTumOCxDFOfpGaBYyD77zOY6g_QgUMxw1qlgct2MuV-6pF3gwBy6k1eLvdW6XUNGW6mIUzFmePuMXHbEeOy5-rsN6PplHpmduR3rTQf_SJw0DGaGJCy6huISX39MTzaNy07ANFd2KxY4lZeDSh5TaR4WJrs1GE5Zx5dqzHdKy9G2as0Irp2mdZ5NR9-4zcSaOsw"/>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-secondary uppercase font-bold">Listen to Pitch D Resonance</span>
<span className="font-label-md text-label-md text-on-surface-variant font-mono">0:24 / 1:15</span>
</div>
<div className="flex items-center gap-space-sm">
<button onClick={playBellResonator} className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow hover:bg-secondary transition-colors cursor-pointer" id="play-tone-btn">
<span className="material-symbols-outlined text-xl">{isPlayingAudio ? "pause" : "play_arrow"}</span>
</button>
<div className="flex-1 flex flex-col gap-1">
<div className="w-full h-2 rounded-full bg-surface-container relative overflow-hidden">
<div className="w-1/3 h-full bg-secondary-container rounded-full"></div>
</div>
<div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant">
<span className="">Dayan High Ring</span>
<span className="">Bayan Deep Bass</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-6 flex flex-col gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-sm">stars</span>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-bold">Handcrafted by Master Ganapathi</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-serif">
              Mayapur Supreme Terracotta Mitti Mridanga
            </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Concert-tuned Clay Khol made from Mayapur alluvial clay, seasoned for 6 months to ensure acoustic warmth and pitch retention.
            </p>
</div>

<div className="flex items-baseline gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="font-headline-md text-headline-md text-primary font-bold">₹14,500</span>
<span className="font-body-md text-body-md text-on-surface-variant line-through">₹17,000</span>
<span className="px-2 py-0.5 rounded bg-secondary-container/30 text-secondary font-label-caps text-label-caps font-bold">
              Save ₹2,500 (15% OFF)
            </span>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-caps text-label-caps text-on-surface font-bold uppercase">Select Drum Body Length:</label>
<div className="grid grid-cols-3 gap-space-xs">
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="px-space-sm py-2 rounded-lg bg-surface-container text-center font-label-md text-label-md peer-checked:bg-primary peer-checked:text-on-primary transition-colors">
                  Compact 21"
                </div>
</label>
<label className="cursor-pointer">
<input defaultChecked className="peer sr-only" name="size" type="radio"/>
<div className="px-space-sm py-2 rounded-lg bg-surface-container text-center font-label-md text-label-md peer-checked:bg-primary peer-checked:text-on-primary transition-colors">
                  Standard 22"
                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="px-space-sm py-2 rounded-lg bg-surface-container text-center font-label-md text-label-md peer-checked:bg-primary peer-checked:text-on-primary transition-colors">
                  Concert 23.5"
                </div>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-caps text-label-caps text-on-surface font-bold uppercase">Strap Construction:</label>
<div className="grid grid-cols-2 gap-space-xs">
<label className="cursor-pointer">
<input defaultChecked className="peer sr-only" name="strap" type="radio"/>
<div className="px-space-sm py-2 rounded-lg bg-surface-container text-center font-label-md text-label-md peer-checked:bg-secondary-container peer-checked:text-on-secondary-container transition-colors">
                  Traditional Rawhide
                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="strap" type="radio"/>
<div className="px-space-sm py-2 rounded-lg bg-surface-container text-center font-label-md text-label-md peer-checked:bg-secondary-container peer-checked:text-on-secondary-container transition-colors">
                  Vegan Cotton Braided
                </div>
</label>
</div>
</div>

<div className="flex flex-col gap-1 p-space-sm rounded-lg bg-surface-container-high/60 font-body-sm text-body-sm text-on-surface">
<div className="flex items-center gap-1.5 text-primary font-bold">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
<span className="">Only 3 left in Bangalore Workshop</span>
</div>
<p className="text-on-surface-variant font-body-sm">
              Dispatched within 24 hours. Packed in internal shock-absorbing wooden cage express courier across India &amp; Worldwide.
            </p>
</div>

<div className="flex flex-col gap-space-xs pt-space-xs">
<button onClick={() => {
  addToCart({
    id: "mridanga-mayapur-clay-1",
    name: "Mayapur Supreme Terracotta Mitti Mridanga",
    tuning: "Pitch D (Standard Bengali Temple Scale)",
    price: 14500,
    originalPrice: 17000,
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyzto51RnKv_Z0LRpN5C7ScktqbmBQ1-X5MIK0RD45brvng4ONQvpzkIqNtwpDpOgS51W21SOtnsYza_F3AsHoD0g4Axqh3pBXx7zU3lzuLZW33zefCyMdM302Tw07UGDD3td1pNQ5BTHmaLt0K_Iuds0EgaUV3cCchWEAdPgWSVnXJTuxAuTO2na-K40qf6qguQEbnpxBJCmwAvEsTRDhmGGFtnFpzj52xhVq90e0",
  });
  setIsModalOpen(false);
}} className="w-full flex items-center justify-center gap-space-sm py-3 rounded-lg bg-primary hover:bg-secondary text-on-primary font-title-md text-title-md shadow-md transition-colors font-bold cursor-pointer">
<span className="material-symbols-outlined text-xl">shopping_cart</span>
<span className="">Add to Cart • ₹14,500</span>
</button>
<a className="w-full flex items-center justify-center gap-space-sm py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors font-bold" href="https://wa.me/919353237559?text=Hare%20Krishna%20Ganapathi%20Prabhu,%20I%20am%20interested%20in%20the%20Mayapur%20Supreme%20Terracotta%20Mridanga" target="_blank">
<span className="material-symbols-outlined text-[#25D366] text-xl">chat</span>
<span className="">Order with Ganapathi Prabhu (+91 9353237559)</span>
</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
    </div>
  );
}
