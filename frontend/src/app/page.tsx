"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function HomePage() {
  const { addToCart } = useCart();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

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

<section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-background pb-space-xl pt-space-md">

<div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-secondary-container/10 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 top-40 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl"></div>
<div className="pointer-events-none absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-on-tertiary-container/15 blur-2xl"></div>
<div className="relative mx-auto max-w-7xl px-gutter">

<div className="mb-space-md flex flex-wrap items-center justify-start gap-space-sm">
<div className="inline-flex items-center gap-space-xs rounded-full bg-surface-container-highest/80 px-space-md py-1 shadow-sm backdrop-blur-sm">
<span className="material-symbols-outlined text-base text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
<span className="font-label-caps text-label-caps font-bold tracking-wider text-primary">श्री श्री राधा गोविन्द जयते • Authentic Bengal Mayapur Craftsmanship</span>
</div>
<div className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-surface-container px-space-sm py-1">
<span className="h-2 w-2 rounded-full bg-secondary-container animate-pulse"></span>
<span className="font-label-caps text-label-caps text-on-surface-variant font-semibold">Bengaluru SMVT Atelier Direct</span>
</div>
</div>

<div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">

<div className="flex flex-col gap-space-lg lg:col-span-7">
<div className="flex flex-col gap-space-sm">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">Vedic Acoustic Science • Sree Khol Parampara</span>
<h1 className="font-display-hero text-headline-lg lg:text-display-hero font-bold tracking-tight text-primary leading-tight">
              Sacred Sound of Sri Caitanya’s Khol — <span className="font-serif italic font-normal text-secondary">High-Class Hand-Tuned Mridangas</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-space-xs">
              Directly crafted, tuned, and sanctified by master craftsman &amp; acharya <strong className="text-on-surface font-semibold">Sri Ganapathi Prabhu</strong> (20+ Years Experience). Supplying premier ISKCON temples, international sankirtan leaders, and devoted practitioners worldwide from our dedicated workshop near <strong className="text-on-surface font-semibold">SMVT Railway Station, Bangalore</strong>.
            </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
<div className="flex items-center gap-space-xs rounded-xl bg-surface-container/70 p-space-sm shadow-sm backdrop-blur-sm">
<span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Authentic Clay &amp; Lightweight Fiberglass</span>
</div>
<div className="flex items-center gap-space-xs rounded-xl bg-surface-container/70 p-space-sm shadow-sm backdrop-blur-sm">
<span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>tune</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Perfect Pitch Concert Tuning (Pitch C / D / D#)</span>
</div>
<div className="flex items-center gap-space-xs rounded-xl bg-surface-container/70 p-space-sm shadow-sm backdrop-blur-sm">
<span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Pure Ahimsa &amp; Traditional Leather Straps</span>
</div>
<div className="flex items-center gap-space-xs rounded-xl bg-surface-container/70 p-space-sm shadow-sm backdrop-blur-sm">
<span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Safe Worldwide Sacred Packaging</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<a className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-primary px-space-lg py-space-sm font-label-lg text-label-lg font-bold text-on-primary shadow-md transition-all hover:bg-secondary hover:shadow-xl" href="#instruments-showcase">
<span className="material-symbols-outlined text-lg">music_note</span>
<span className="">Explore Divine Mridangas</span>
</a>
<a className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-surface-container-high px-space-lg py-space-sm font-label-lg text-label-lg font-semibold text-on-surface shadow-sm transition-all hover:bg-surface-container-highest" href="#academy-section">
<span className="material-symbols-outlined text-lg text-secondary">school</span>
<span className="">Book Online Tutorial</span>
</a>
<a className="inline-flex items-center gap-space-xs rounded-lg bg-[#25D366]/15 px-space-md py-space-sm font-label-md text-label-md font-bold text-[#128C7E] transition-all hover:bg-[#25D366]/25" href="https://wa.me/919353237559" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-lg">chat</span>
<span className="">WhatsApp: 9353237559</span>
</a>
</div>

<div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-base text-secondary">workspace_premium</span>
<span className="">Personal audio clip sent before courier dispatch • Video call tuning verification</span>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-full bg-gradient-to-tr from-surface-container-high via-surface-container to-surface-container-lowest p-1 shadow-xl">
<div className="relative overflow-hidden rounded-full bg-surface-container-lowest p-space-lg">

<div className="flex items-center justify-between pb-space-md">
<div className="inline-flex items-center gap-1 rounded-full bg-secondary-container/20 px-space-sm py-0.5 text-on-secondary-container">
<span className="material-symbols-outlined text-sm text-secondary">star</span>
<span className="font-label-caps text-label-caps font-bold">Featured Masterpiece</span>
</div>
<span className="font-label-caps text-label-caps font-bold text-secondary uppercase tracking-widest">Hand-Signed by Ganapathi Prabhu</span>
</div>

<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-container-low shadow-inner">
<img className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" alt="Exquisitely crafted traditional terracotta Mayapur clay Mridanga with deep reddish-brown clay body, pristine braided leather strap, immaculate black syahi ghab on dayan head, resting gracefully on a saffron velvet asana in a warm sunlit Vedic studio with incense glow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjs66NBzVBt610l6R_M8P-utKTCfI7wsRKCcEJvRSWCU4vG8a9m-3mjcLMTc4-Qc1Tolzns5_QS7CiKywm9ev-e-xwULMa1u4JKy5BvYWKi69hbxQ3R5tdeB4CxFgmQLeSkfc8xZhxwEYobrlf4PD13wU5jeciTQEME__N5PjjWVTYzpnY6V86gsXVXwWtoKMqOxB1Arkjgd7fUw1XYWl97UX3b47iZVentk8bct1I"/>
<div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-md bg-inverse-surface/85 px-space-xs py-1 backdrop-blur-sm">
<span className="material-symbols-outlined text-xs text-on-tertiary-container">verified_user</span>
<span className="font-label-caps text-label-caps font-semibold text-inverse-on-surface">100% Ganga Clay Body</span>
</div>
<div className="absolute right-2 top-2 rounded-md bg-secondary px-space-xs py-1 text-on-secondary font-label-caps text-label-caps font-bold shadow-md">
                  SAVE ₹3,000
                </div>
</div>

<div className="mt-space-md flex flex-col gap-space-sm">
<div>
<h3 className="font-headline-sm text-headline-sm font-bold text-primary">Sri Mayapur Premium Red Clay Mridanga</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Calibrated Ghab • Double-Braided Buff Rawhide Lacing • Custom Padded Gig Case Included</p>
</div>

<div className="flex flex-col gap-space-xs rounded-xl bg-surface-container p-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps font-bold uppercase tracking-wider text-on-surface-variant">Calibrated Pitch Scale:</span>
<div className="flex items-center gap-1 font-label-caps text-label-caps">
<button className="rounded px-2 py-0.5 bg-surface-container-highest text-on-surface font-bold hover:bg-primary hover:text-on-primary transition-colors" type="button">C</button>
<button className="rounded px-2 py-0.5 bg-primary text-on-primary font-bold shadow-sm" type="button">D (Standard)</button>
<button className="rounded px-2 py-0.5 bg-surface-container-highest text-on-surface font-bold hover:bg-primary hover:text-on-primary transition-colors" type="button">D#</button>
</div>
</div>

<div onClick={playBellResonator} className={`flex items-center justify-between rounded-lg px-space-sm py-2 shadow-sm cursor-pointer transition-colors ${isPlayingAudio ? "bg-surface-container-highest" : "bg-surface-container-lowest hover:bg-surface-container-high"}`} id="audio-demo-player">
<div className="flex items-center gap-space-xs">
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-sm" id="play-btn" type="button">
<span className="material-symbols-outlined text-lg" id="play-icon">{isPlayingAudio ? "pause" : "play_arrow"}</span>
</button>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Resonant Sweet Sound Preview</span>
<span className="font-label-caps text-label-caps text-secondary font-semibold">Dayan Sweet Sustain • Pitch D (Pure Bell Tone)</span>
</div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant font-mono">0:24</span>
</div>
</div>

<div className="mt-space-xs flex items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-sm text-headline-sm font-bold text-primary">₹14,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹17,500</span>
</div>
<span className="font-label-caps text-label-caps text-secondary font-bold">Inclusive of Velvet Dress + Padded Bag</span>
</div>
<a className="flex items-center gap-1.5 rounded-lg bg-secondary px-space-md py-space-sm font-label-md text-label-md font-bold text-on-secondary shadow-md hover:bg-primary transition-colors" href="https://wa.me/919353237559?text=Hare%20Krishna%20Ganapathi%20Prabhu%2C%20I%20wish%20to%20order%20the%20Sri%20Mayapur%20Premium%20Red%20Clay%20Mridanga%20tuned%20in%20Pitch%20D." rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-lg">shopping_cart_checkout</span>
<span className="">Direct Order</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-space-xl grid grid-cols-2 gap-space-md rounded-2xl bg-surface-container-high/60 p-space-lg shadow-sm backdrop-blur-md md:grid-cols-4">
<div className="flex flex-col items-center justify-center text-center">
<span className="font-display-hero text-headline-lg font-bold text-primary">2,500+</span>
<span className="font-label-md text-label-md font-semibold text-on-surface mt-1">Mridangas Shipped</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Global Temples &amp; Devotees</span>
</div>
<div className="flex flex-col items-center justify-center text-center">
<span className="font-display-hero text-headline-lg font-bold text-secondary">20+ Yrs</span>
<span className="font-label-md text-label-md font-semibold text-on-surface mt-1">Sacred Craftsmanship</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Direct Bengal Parampara</span>
</div>
<div className="flex flex-col items-center justify-center text-center">
<span className="font-display-hero text-headline-lg font-bold text-primary">450+</span>
<span className="font-label-md text-label-md font-semibold text-on-surface mt-1">Active Kirtan Students</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Online &amp; Bangalore Studio</span>
</div>
<div className="flex flex-col items-center justify-center text-center">
<span className="font-display-hero text-headline-lg font-bold text-secondary">100%</span>
<span className="font-label-md text-label-md font-semibold text-on-surface mt-1">Tuning Guarantee</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Pre-Tuned to Perfection</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-background py-space-xl" id="instruments-showcase">
<div className="mx-auto max-w-7xl px-gutter">

<div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
<div className="flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-1.5 font-label-caps text-label-caps font-bold text-secondary uppercase tracking-widest">
<span className="material-symbols-outlined text-sm">album</span>
<span className="">Workshop Catalog • Artisanal Inventory</span>
</div>
<h2 className="font-headline-lg text-headline-lg font-bold text-primary">Sacred Instruments &amp; Divine Kirtan Essentials</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Each instrument is individually weighed, hand-balanced, and micro-tuned by Sri Ganapathi Prabhu before dispatch with strict acoustic reverence.
          </p>
</div>
<a className="inline-flex items-center gap-space-xs rounded-xl bg-surface-container-high px-space-md py-space-sm font-label-md text-label-md font-bold text-primary shadow-sm hover:bg-surface-container-highest transition-all group" href="#custom-order-inquiry">
<span className="">View All Products &amp; Accessories</span>
<span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1 text-secondary">arrow_forward</span>
</a>
</div>

<div className="mt-space-lg flex items-center gap-space-xs overflow-x-auto pb-space-xs">
<button className="shrink-0 rounded-full bg-primary px-space-md py-1.5 font-label-md text-label-md font-bold text-on-primary shadow-sm">All Essentials</button>
<button className="shrink-0 rounded-full bg-surface-container px-space-md py-1.5 font-label-md text-label-md font-semibold text-on-surface hover:bg-surface-container-high transition-colors">Clay Mridangas (Mitti Khol)</button>
<button className="shrink-0 rounded-full bg-surface-container px-space-md py-1.5 font-label-md text-label-md font-semibold text-on-surface hover:bg-surface-container-high transition-colors">Fiberglass Travel Khols</button>
<button className="shrink-0 rounded-full bg-surface-container px-space-md py-1.5 font-label-md text-label-md font-semibold text-on-surface hover:bg-surface-container-high transition-colors">Pure Bell-Metal Karatals</button>
<button className="shrink-0 rounded-full bg-surface-container px-space-md py-1.5 font-label-md text-label-md font-semibold text-on-surface hover:bg-surface-container-high transition-colors">Sacred Mridanga Dresses &amp; Belts</button>
<button className="shrink-0 rounded-full bg-surface-container px-space-md py-1.5 font-label-md text-label-md font-semibold text-on-surface hover:bg-surface-container-high transition-colors">Tuning Tapes &amp; Syahi Paste</button>
</div>

<div className="mt-space-lg grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-4">

<div className="flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-lowest p-space-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<div className="flex flex-col">
<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container">
<img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" alt="Traditional Mayapur Terracotta Mitti Mridanga with deep earth-red hue, intricate hand-wound buff leather straps, finely applied syahi ghab on high pitch head, positioned on pristine white silk cloth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6KdGL_JXNEKAMQJGgtqGp7jx6-SMaCF4Dn7g-15S-A4zLHAC9Cm08LEiOnHBk0WDpGMT23MRDu5xjgyrSYDLx4uQBF68LiXmgFEf05ypATIsPSDGIley6de4o0wnhDPZi0__gPKKtUOjNu7J-3Chk5x1XUU_rXygAvqkHwPLQoVhMQnioiAxQUhTZJRkT4shKGqDl3YAOhTsTOaNIuQhRbAw6xt1nZHATO4u9FBwq"/>
<div className="absolute left-2 top-2 flex flex-col gap-1">
<span className="rounded bg-primary px-2 py-0.5 font-label-caps text-label-caps font-bold text-on-primary">Bestseller</span>
<span className="rounded bg-secondary-container px-2 py-0.5 font-label-caps text-label-caps font-bold text-on-secondary-container">Pre-Tuned Pitch D</span>
</div>
<span className="absolute bottom-2 right-2 rounded-md bg-inverse-surface/80 px-2 py-0.5 font-label-caps text-label-caps font-semibold text-inverse-on-surface backdrop-blur-sm">23-Inch Concert</span>
</div>
<div className="mt-space-md flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps font-bold text-secondary uppercase tracking-wider">Terracotta Mitti Series</span>
<h3 className="font-title-lg text-title-lg font-bold text-on-surface line-clamp-2">Mayapur Traditional Terracotta Mitti Mridanga</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Authentic Mayapur sacred clay shell, tuned for piercing resonant "Ta" and thunderous "Dha".</p>
</div>
</div>
<div className="mt-space-md flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-space-xs">
<span className="font-title-lg text-title-lg font-bold text-primary">₹14,200</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹16,500</span>
</div>
<span className="rounded bg-surface-container-highest px-1.5 py-0.5 font-label-caps text-label-caps font-bold text-secondary">14% OFF</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<a className="flex items-center justify-center rounded-lg bg-surface-container-high py-2 font-label-md text-label-md font-semibold text-on-surface hover:bg-surface-container-highest transition-colors" href="https://wa.me/919353237559?text=Hare%20Krishna%20Prabhu%2C%20I%20am%20interested%20in%20Mayapur%20Traditional%20Terracotta%20Mitti%20Mridanga%20(Pitch%20D)." target="_blank">
                Enquire
              </a>
<button className="flex items-center justify-center gap-1 rounded-lg bg-primary py-2 font-label-md text-label-md font-bold text-on-primary hover:bg-secondary transition-colors shadow-sm">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Order Now</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-lowest p-space-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<div className="flex flex-col">
<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container">
<img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" alt="Modern fiberglass lightweight kirtan khol mridanga with shimmering saffron-gold glossy finish, durable synthetic ahimsa skin, heavy duty nylon tension tuning system, studio product shot on marble." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVvemfhD6h-q7IDYguPFNz6K7psJPCq-NRw_kj0U4QdlIcyx3W5Mj9Y0qFKB886Wq6HdkBWUGEd9nAe1rrI6HZZINUgXIV_4KwPCAtb6FotEfqCR6vZR5bY-M7gW481Ox6_tKNHyIcMhBApMFfSIEmeNNZ7KHmPkPcu0A_Cfyv7bLlXUXaSQl1IkNBcCqOiuBPFYetItHjkD6jLevX89uQKqu-nzW_EizGA-d5Xh8O"/>
<div className="absolute left-2 top-2 flex flex-col gap-1">
<span className="rounded bg-secondary px-2 py-0.5 font-label-caps text-label-caps font-bold text-on-secondary">Flight Safe</span>
<span className="rounded bg-surface-container-high px-2 py-0.5 font-label-caps text-label-caps font-bold text-primary">Ahimsa Strap</span>
</div>
<span className="absolute bottom-2 right-2 rounded-md bg-inverse-surface/80 px-2 py-0.5 font-label-caps text-label-caps font-semibold text-inverse-on-surface backdrop-blur-sm">Ultra-Light 3.8kg</span>
</div>
<div className="mt-space-md flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps font-bold text-secondary uppercase tracking-wider">Aviation &amp; World Tour Series</span>
<h3 className="font-title-lg text-title-lg font-bold text-on-surface line-clamp-2">Fiberglass Weather-Resistant Travel Mridanga</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Impervious to humid climates and airplane baggage handlers. Pure pitch calibration never drops.</p>
</div>
</div>
<div className="mt-space-md flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-space-xs">
<span className="font-title-lg text-title-lg font-bold text-primary">₹16,800</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹19,000</span>
</div>
<span className="rounded bg-surface-container-highest px-1.5 py-0.5 font-label-caps text-label-caps font-bold text-secondary">11% OFF</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<a className="flex items-center justify-center rounded-lg bg-surface-container-high py-2 font-label-md text-label-md font-semibold text-on-surface hover:bg-surface-container-highest transition-colors" href="https://wa.me/919353237559?text=Hare%20Krishna%20Prabhu%2C%20I%20am%20interested%20in%20Fiberglass%20Travel%20Mridanga%20in%20Gold-Saffron%20finish." target="_blank">
                Enquire
              </a>
<button className="flex items-center justify-center gap-1 rounded-lg bg-primary py-2 font-label-md text-label-md font-bold text-on-primary hover:bg-secondary transition-colors shadow-sm">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Order Now</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-lowest p-space-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<div className="flex flex-col">
<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container">
<img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" alt="Pair of thick heavy bronze pure bell-metal karatals kansa cymbals tied with auspicious crimson red woven cotton cord, lustrous golden bronze shimmer, professional overhead product photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_D9jPrdLGVteXMgjz9fg5q7WtdrJqs6DDG10OdK2N3NN2yulRpwXdOl_4LqKLu2LrDUU232Nwra2zf-nFBwLPiuSIgj-kdG_wmVLGtcn8LkBLXc2-7SHSkdlXL_vKh3a1ZzeE58s462Inas9uW0whHVTaTqXgHmOzQpvF-8SkNDEMUcKGHTE33XsWi5-msqT49m8Uc_q-6Tf4vVNU25xn-PHjA2kqYt387J3IAjx3"/>
<div className="absolute left-2 top-2 flex flex-col gap-1">
<span className="rounded bg-tertiary-container px-2 py-0.5 font-label-caps text-label-caps font-bold text-on-tertiary-container">Navadvip Bell Metal</span>
</div>
<span className="absolute bottom-2 right-2 rounded-md bg-inverse-surface/80 px-2 py-0.5 font-label-caps text-label-caps font-semibold text-inverse-on-surface backdrop-blur-sm">Weight 450g Pair</span>
</div>
<div className="mt-space-md flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps font-bold text-secondary uppercase tracking-wider">Acoustic Bell Cymbals</span>
<h3 className="font-title-lg text-title-lg font-bold text-on-surface line-clamp-2">Navadvip Pure Bell-Metal (Kansa) Heavy Karatals</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">High resonance bell-metal alloy offering long crystalline sustain that cuts clearly through loud temple sankirtan.</p>
</div>
</div>
<div className="mt-space-md flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-space-xs">
<span className="font-title-lg text-title-lg font-bold text-primary">₹2,450</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹2,900</span>
</div>
<span className="rounded bg-surface-container-highest px-1.5 py-0.5 font-label-caps text-label-caps font-bold text-secondary">15% OFF</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<a className="flex items-center justify-center rounded-lg bg-surface-container-high py-2 font-label-md text-label-md font-semibold text-on-surface hover:bg-surface-container-highest transition-colors" href="https://wa.me/919353237559?text=Hare%20Krishna%20Prabhu%2C%20I%20want%20Navadvip%20Heavy%20Karatals%203.5%20inch." target="_blank">
                Enquire
              </a>
<button className="flex items-center justify-center gap-1 rounded-lg bg-primary py-2 font-label-md text-label-md font-bold text-on-primary hover:bg-secondary transition-colors shadow-sm">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Order Now</span>
</button>
</div>
</div>
</div>

<div className="flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-lowest p-space-md shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<div className="flex flex-col">
<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container">
<img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" alt="Deep royal peacock blue velvet embroidered mridanga protective jacket dress with ornate golden floral zari borders, matching heavy padded ergonomic shoulder strap with golden hooks on warm wood surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQM_yJ0Vo2FE3k_kIz4NvwWlojWBKPMF_RIe_Vung-gKXgJAFKR2a2Qk1vcx6VEatJhgnvl0gfhxIoVVOqqoiVZ5sPxxRxiuPbNiASrzBvPjQVxJrXxQdsR7SQmHuXQA7WllKiLcuaAJ98bejggGaVL-NPT2BcHXTxzLe2h5K-9CGBGyiE1DWUqxdIUgRg5VwtRM-ytdSvpJBS472x3kwsMsElTJ8NZuL1xVvhltgH"/>
<div className="absolute left-2 top-2 flex flex-col gap-1">
<span className="rounded bg-surface-container-highest px-2 py-0.5 font-label-caps text-label-caps font-bold text-secondary">Zari Handcrafted</span>
</div>
<span className="absolute bottom-2 right-2 rounded-md bg-inverse-surface/80 px-2 py-0.5 font-label-caps text-label-caps font-semibold text-inverse-on-surface backdrop-blur-sm">Universal 23-24"</span>
</div>
<div className="mt-space-md flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps font-bold text-secondary uppercase tracking-wider">Devotional Protection</span>
<h3 className="font-title-lg text-title-lg font-bold text-on-surface line-clamp-2">Embroidered Velvet Mridanga Dress &amp; Belt Set</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Rich peacock velvet lined with soft foam shock protection, protects clay bodies against accidental impact.</p>
</div>
</div>
<div className="mt-space-md flex flex-col gap-space-sm pt-space-xs">
<div className="flex items-baseline justify-between">
<div className="flex items-baseline gap-space-xs">
<span className="font-title-lg text-title-lg font-bold text-primary">₹1,850</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹2,200</span>
</div>
<span className="rounded bg-surface-container-highest px-1.5 py-0.5 font-label-caps text-label-caps font-bold text-secondary">16% OFF</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
<a className="flex items-center justify-center rounded-lg bg-surface-container-high py-2 font-label-md text-label-md font-semibold text-on-surface hover:bg-surface-container-highest transition-colors" href="https://wa.me/919353237559?text=Hare%20Krishna%20Prabhu%2C%20I%20want%20the%20Embroidered%20Velvet%20Mridanga%20Dress%20in%20Peacock%20Blue." target="_blank">
                Enquire
              </a>
<button className="flex items-center justify-center gap-1 rounded-lg bg-primary py-2 font-label-md text-label-md font-bold text-on-primary hover:bg-secondary transition-colors shadow-sm">
<span className="material-symbols-outlined text-base">shopping_bag</span>
<span className="">Order Now</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-space-xl flex flex-col items-center justify-between gap-space-md rounded-2xl bg-surface-container-low p-space-lg shadow-sm sm:flex-row" id="custom-order-inquiry">
<div className="flex items-center gap-space-md">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-sm">
<span className="material-symbols-outlined text-2xl">call_made</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-primary">Need Custom Pitch Matching for Your Temple or Band?</span>
<p className="font-body-md text-body-md text-on-surface-variant">Ganapathi Prabhu provides bespoke khol weight calibration and matching pitch pairing for harmonium scales (C, C#, D, E).</p>
</div>
</div>
<a className="shrink-0 inline-flex items-center gap-space-xs rounded-xl bg-primary px-space-lg py-space-sm font-label-md text-label-md font-bold text-on-primary shadow-sm hover:bg-secondary transition-colors" href="tel:+919353237559">
<span className="material-symbols-outlined text-lg">phone_in_talk</span>
<span className="">Call: +91 9353237559</span>
</a>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-xl">
<div className="mx-auto max-w-7xl px-gutter">

<div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
<div className="flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-1.5 font-label-caps text-label-caps font-bold text-secondary uppercase tracking-widest">
<span className="material-symbols-outlined text-sm">handyman</span>
<span className="">Acoustic Hospital • Artisan Restoration</span>
</div>
<h2 className="font-headline-lg text-headline-lg font-bold text-primary">Mridanga &amp; Harmonium Repair, Restringing &amp; Precision Tuning</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Revitalize your beloved sacred instruments. Specialized clinic staffed directly by Sri Ganapathi Prabhu near SMVT Railway Station, Bangalore.
          </p>
</div>
<a className="inline-flex items-center gap-space-xs rounded-xl bg-surface-container-highest px-space-md py-space-sm font-label-md text-label-md font-bold text-primary shadow-sm hover:bg-surface-container transition-all group" href="https://wa.me/919353237559?text=Hare%20Krishna%20Prabhu%2C%20I%20need%20repair%20and%20restringing%20service%20for%20my%20instrument." target="_blank">
<span className="">View All Repair &amp; Service Packages</span>
<span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1 text-secondary">arrow_forward</span>
</a>
</div>

<div className="mt-space-xl grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-4">

<div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<div className="flex flex-col gap-space-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
<span className="material-symbols-outlined text-2xl">speaker_group</span>
</div>
<h3 className="font-title-lg text-title-lg font-bold text-primary">Mridanga Reskinning (Head Replacement)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Genuine Calcutta Dayan and Bayaan heads fitted. Hand-applied syahi/ghab calibrated for crystalline ringing high pitch and deep bass resonance.
            </p>
</div>
<div className="mt-space-md flex items-center justify-between pt-space-sm">
<span className="font-title-md text-title-md font-bold text-secondary">From ₹2,200</span>
<span className="font-label-caps text-label-caps font-semibold text-on-surface-variant">3-5 Days Turnaround</span>
</div>
</div>

<div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<div className="flex flex-col gap-space-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
<span className="material-symbols-outlined text-2xl">line_weight</span>
</div>
<h3 className="font-title-lg text-title-lg font-bold text-primary">Full Strap Replacement &amp; Restringing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              High-tensile genuine rawhide or ahimsa straps. Precision cross-weave lacing to eliminate sagging, guaranteeing pitch stability through heavy kirtans.
            </p>
</div>
<div className="mt-space-md flex items-center justify-between pt-space-sm">
<span className="font-title-md text-title-md font-bold text-secondary">From ₹1,800</span>
<span className="font-label-caps text-label-caps font-semibold text-on-surface-variant">2-4 Days Turnaround</span>
</div>
</div>

<div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<div className="flex flex-col gap-space-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
<span className="material-symbols-outlined text-2xl">piano</span>
</div>
<h3 className="font-title-lg text-title-lg font-bold text-primary">Harmonium Tuning &amp; Air-Leak Restoration</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Palitana &amp; German reed restoration, micro-tuning to concert A440Hz, replacement of dry wax seals, spring tensioning, and bellow airtight lining.
            </p>
</div>
<div className="mt-space-md flex items-center justify-between pt-space-sm">
<span className="font-title-md text-title-md font-bold text-secondary">From ₹2,500</span>
<span className="font-label-caps text-label-caps font-semibold text-on-surface-variant">A440Hz Micro-Calibrated</span>
</div>
</div>

<div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<div className="flex flex-col gap-space-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary">
<span className="material-symbols-outlined text-2xl">bolt</span>
</div>
<h3 className="font-title-lg text-title-lg font-bold text-primary">Emergency Pre-Festival Instrument Check</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Janmashtami, Gaura Purnima, &amp; Ratha Yatra express tune-ups. Complete emergency pitch stabilization so your temple kirtan remains blissful.
            </p>
</div>
<div className="mt-space-md flex items-center justify-between pt-space-sm">
<span className="font-title-md text-title-md font-bold text-secondary">Express Service</span>
<span className="font-label-caps text-label-caps font-bold text-primary">24h Turnaround Available</span>
</div>
</div>
</div>

<div className="mt-space-xl rounded-2xl bg-primary p-space-lg text-on-primary shadow-xl">
<div className="flex flex-col items-center justify-between gap-space-lg md:flex-row">
<div className="flex items-center gap-space-md">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
<span className="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<div className="flex flex-col">
<h4 className="font-headline-sm text-headline-sm font-bold">Bangalore Workshop Drop-Off or Pan-India Courier</h4>
<p className="font-body-md text-body-md text-on-primary/80">
                Devotees outside Bangalore can safely courier their mridanga shells or heads via our vetted courier partners with protective crating advice.
              </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<a className="rounded-lg bg-surface-container-lowest px-space-lg py-space-sm font-label-md text-label-md font-bold text-primary shadow-md hover:bg-surface-container transition-colors" href="https://wa.me/919353237559?text=Hare%20Krishna%20Prabhu%2C%20I%20want%20to%20send%20my%20instrument%20for%20repair." target="_blank">
              Book Repair Consultation
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-background py-space-xl" id="academy-section">
<div className="mx-auto max-w-7xl px-gutter">
<div className="overflow-hidden rounded-3xl bg-surface-container-low shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="relative bg-surface-container p-space-lg lg:col-span-5 flex flex-col justify-between">
<div className="flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="rounded-full bg-primary px-space-sm py-1 font-label-caps text-label-caps font-bold text-on-primary uppercase">Guru-Shishya Parampara</span>
<span className="font-label-caps text-label-caps text-secondary font-bold">Navadvip &amp; Bengal Lineage</span>
</div>
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-container-high shadow-md">
<img className="h-full w-full object-cover" alt="Sri Ganapathi Prabhu playing a sacred clay mridanga during a devotional temple kirtan in Bangalore, wearing traditional Vaishnava dhoti and sacred tilak, expressive blissful meditative posture with warm golden temple background lights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnu-kztE7iSu6omQ4bNcA9NOZQckkZ-Ldmztr4rEmIkYCp2agLWd4Nh4QjJ9vIwc5_wkv7abVpd0vnNmOzFAY6TOOxTHc7YhH_n-u7dpy2SnSRNQ-7SBuzOLct5VMse6h4F3Zw_xRniB4SDzydZBS3fVDoO1x1ps9JocoNPBzhE9VarpFkN_rIMN6q9s9BI78oLkMOdOrvWh7J8adKGPbo9b6pBxNff3iOMX1hWANA"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex flex-col text-on-primary">
<span className="font-headline-sm text-headline-sm font-bold">Sri Ganapathi Prabhu</span>
<span className="font-label-md text-label-md text-secondary-fixed-dim">Master Mridangiya &amp; Acoustician (20+ Yrs)</span>
</div>
</div>
</div>

<div className="mt-space-md flex flex-wrap gap-1.5">
<span className="rounded-md bg-surface-container-lowest px-space-xs py-1 font-label-caps text-label-caps font-semibold text-on-surface">Manohar Shahi Style</span>
<span className="rounded-md bg-surface-container-lowest px-space-xs py-1 font-label-caps text-label-caps font-semibold text-on-surface">Garanhati Gharana</span>
<span className="rounded-md bg-surface-container-lowest px-space-xs py-1 font-label-caps text-label-caps font-semibold text-on-surface">Reneti Kirtan Taal</span>
</div>
</div>

<div className="flex flex-col justify-between p-space-xl lg:col-span-7">
<div className="flex flex-col gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps font-bold text-secondary uppercase tracking-widest">Kirtan Vibes Academy</span>
<h2 className="font-headline-lg text-headline-lg font-bold text-primary">Learn the Timeless Rhythms of Caitanya Mahaprabhu</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                  Master the sacred percussion that drives the Hare Krishna Sankirtan movement. Whether you have never touched a drum or are already leading temple aratis, Sri Ganapathi Prabhu's structured syllabus will transform your playing.
                </p>
</div>

<div className="grid grid-cols-1 gap-space-md sm:grid-cols-3">
<div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<span className="material-symbols-outlined text-2xl text-secondary">video_camera_front</span>
<span className="font-title-md text-title-md font-bold text-on-surface">1-on-1 Zoom Coaching</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real-time hand positioning, finger strike accuracy, and speed training.</p>
</div>
<div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<span className="material-symbols-outlined text-2xl text-secondary">trending_up</span>
<span className="font-title-md text-title-md font-bold text-on-surface">Beginner to Lead</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Stepwise progression from 'Tere Kheta' to complex fast Jhaptaal &amp; Dhadik Thekas.</p>
</div>
<div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<span className="material-symbols-outlined text-2xl text-secondary">menu_book</span>
<span className="font-title-md text-title-md font-bold text-on-surface">Notation PDFs &amp; Loops</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Comprehensive bol sheets, slow tempo metronome playalongs, and archival kirtan recordings.</p>
</div>
</div>

<div className="flex items-center gap-space-md rounded-xl bg-surface-container p-space-sm">
<div className="flex -space-x-2 overflow-hidden">
<div className="inline-block h-9 w-9 rounded-full bg-primary-container text-on-primary-container text-center font-bold text-xs leading-9">HG</div>
<div className="inline-block h-9 w-9 rounded-full bg-secondary text-on-secondary text-center font-bold text-xs leading-9">BK</div>
<div className="inline-block h-9 w-9 rounded-full bg-tertiary text-on-tertiary text-center font-bold text-xs leading-9">AC</div>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Students across UK, USA, Europe, Australia &amp; India</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Flexible timezone scheduling for international devotees</span>
</div>
</div>
</div>

<div className="mt-space-lg flex flex-wrap items-center gap-space-md">
<a className="inline-flex items-center gap-space-xs rounded-xl bg-primary px-space-lg py-space-sm font-label-lg text-label-lg font-bold text-on-primary shadow-md hover:bg-secondary transition-colors" href="https://wa.me/919353237559?text=Hare%20Krishna%20Ganapathi%20Prabhu%2C%20I%20want%20to%20book%20a%20demo%20online%20mridanga%20class." target="_blank">
<span className="">Explore Courses &amp; Book Demo Session</span>
<span className="material-symbols-outlined text-lg">arrow_forward</span>
</a>
<span className="font-label-md text-label-md text-secondary font-semibold">Demo Sessions Available Weekly</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-xl">
<div className="mx-auto max-w-7xl px-gutter">
<div className="flex flex-col items-center text-center mb-space-xl">
<div className="inline-flex items-center gap-1 font-label-caps text-label-caps font-bold text-secondary uppercase tracking-widest">
<span className="material-symbols-outlined text-sm">stars</span>
<span className="">Endorsements of Devotion</span>
</div>
<h2 className="font-headline-lg text-headline-lg font-bold text-primary mt-space-xs">Praise from Global Kirtan Leaders</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-1">
          Hear how Sri Ganapathi Prabhu’s hand-tuned instruments and compassionate pedagogy elevate daily temple sankirtan.
        </p>
</div>
<div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">

<div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-lg shadow-md">
<div className="flex flex-col gap-space-sm">
<div className="flex text-on-tertiary-container">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
              "The high-pitch Dayan resonance on the clay mridanga Ganapathi Prabhu sent to London is extraordinary. It rings with such sweet overtone clarity without drowning the vocalist. The flight packaging was bombproof!"
            </p>
</div>
<div className="mt-space-md flex items-center gap-space-sm pt-space-xs">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-primary font-bold">
              RP
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-on-surface">Radha Priya Dasa</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">ISKCON Soho Street, London</span>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-lg shadow-md">
<div className="flex text-on-tertiary-container">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<div className="mt-space-sm flex flex-col gap-space-sm">
<p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
              "I took 6 months of online 1-on-1 classes with Ganapathi Prabhu. His patient breakdown of the complex Reneti transitions unlocked confidence I never had. Now I can lead fast Gaura Arati with solid steady thekas."
            </p>
</div>
<div className="mt-space-md flex items-center gap-space-sm pt-space-xs">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-secondary font-bold">
              MK
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-on-surface">Madhava Krishna Dasa</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Kirtan Singer, Mumbai</span>
</div>
</div>
</div>

<div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-lg shadow-md">
<div className="flex text-on-tertiary-container">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<div className="mt-space-sm flex flex-col gap-space-sm">
<p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
              "We sent three cracked temple harmoniums and two loose-skin khols to his workshop near SMVT Bangalore. Returned within 4 days like brand new instruments with pure A440Hz pitch. Genuine devotee craftsman."
            </p>
</div>
<div className="mt-space-md flex items-center gap-space-sm pt-space-xs">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest text-primary font-bold">
              SD
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-on-surface">Sundara Govinda Devi Dasi</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">ISKCON Bangalore Devotee</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-background py-space-xl">
<div className="mx-auto max-w-7xl px-gutter">
<div className="overflow-hidden rounded-3xl bg-surface-container-lowest shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="flex flex-col justify-between p-space-xl lg:col-span-7">
<div className="flex flex-col gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-1 font-label-caps text-label-caps font-bold text-secondary uppercase tracking-widest">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="">Physical Atelier • Visiting Desk</span>
</div>
<h3 className="font-headline-lg text-headline-lg font-bold text-primary">Visit Our Bangalore Sacred Sound Workshop</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                  Conveniently situated moments away from Bangalore’s premier railway transit hub (SMVT Terminal), serving visiting devotees arriving from across the country.
                </p>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-start gap-space-sm rounded-xl bg-surface-container-low p-space-sm">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">home_pin</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-on-surface">Kirtan Vibes Workshop Atelier</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">#42, 2nd Cross, Near SMVT Railway Station, Baiyappanahalli / Banaswadi Extension, Bengaluru - 560038, Karnataka, India</span>
</div>
</div>
<div className="flex items-start gap-space-sm rounded-xl bg-surface-container-low p-space-sm">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">schedule</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-on-surface">Workshop Working Hours</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Monday – Sunday: 9:00 AM – 8:30 PM (Kindly call before visiting)</span>
</div>
</div>
<div className="flex items-start gap-space-sm rounded-xl bg-surface-container-low p-space-sm">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">call</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md font-bold text-on-surface">Direct Mobile &amp; WhatsApp Support</span>
<span className="font-body-sm text-body-sm text-primary font-bold">+91 9353237559 (Sri Ganapathi Prabhu)</span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<a className="inline-flex items-center gap-space-xs rounded-lg bg-[#25D366] px-space-md py-space-sm font-label-md text-label-md font-bold text-white shadow-sm hover:opacity-90 transition-opacity" href="https://wa.me/919353237559" target="_blank">
<span className="material-symbols-outlined text-lg">chat</span>
<span className="">WhatsApp Ganapathi Prabhu</span>
</a>
<a className="inline-flex items-center gap-space-xs rounded-lg bg-surface-container-high px-space-md py-space-sm font-label-md text-label-md font-bold text-on-surface hover:bg-surface-container-highest transition-colors" href="tel:+919353237559">
<span className="material-symbols-outlined text-lg text-primary">phone</span>
<span className="">Direct Call</span>
</a>
<a className="inline-flex items-center gap-space-xs rounded-lg bg-surface-container-high px-space-md py-space-sm font-label-md text-label-md font-bold text-on-surface hover:bg-surface-container-highest transition-colors" href="#">
<span className="material-symbols-outlined text-lg text-secondary">smart_display</span>
<span className="">YouTube Demos</span>
</a>
</div>
</div>
</div>

<div className="relative bg-surface-container-high lg:col-span-5 flex flex-col justify-between">
<div className="h-72 w-full bg-cover bg-center" data-location="Sir M. Visvesvaraya Terminal (SMVT) Bengaluru"></div>
<div className="p-space-lg flex flex-col gap-space-xs bg-surface-container-high">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps font-bold text-primary uppercase">Location Landmark</span>
<span className="rounded bg-secondary-container/20 px-2 py-0.5 font-label-caps text-label-caps font-bold text-secondary">5 Mins from Terminal</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Direct auto or cab connectivity from SMVT Bangalore Station &amp; Baiyappanahalli Metro Purple Line. Devotees traveling via train can easily drop by to test instruments in person.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>


</div>
    </div>
  );
}
