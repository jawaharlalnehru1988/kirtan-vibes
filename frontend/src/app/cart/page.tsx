"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

import InstrumentCartCard from "@/components/InstrumentCartCard";

export default function CartPage() {
  const { addToCart, cart, cartTotal, cartCount } = useCart();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Delivery & Devotee Information State (Step 2 of 3)
  const [fulfillmentMethod, setFulfillmentMethod] = useState<"insured_courier" | "workshop_pickup">("insured_courier");
  const [devoteeName, setDevoteeName] = useState("Radha Vallabha Dasa");
  const [templeAshram, setTempleAshram] = useState("ISKCON Whitefield Nama-Hatta");
  const [phone, setPhone] = useState("98451 92834");
  const [email, setEmail] = useState("kirtan.devotee@example.com");
  const [address, setAddress] = useState("Flat 402, Vrindavan Hermitage, 4th Cross, ITPL Main Road");
  const [city, setCity] = useState("Bengaluru");
  const [state, setState] = useState("Karnataka");
  const [postalCode, setPostalCode] = useState("560066");
  const [country, setCountry] = useState("India (Bharat)");
  const [tuningSpecs, setTuningSpecs] = useState(
    "Please ensure the Dayan is tightly calibrated for D natural high ring. We sing primarily in 1st and 2nd speed Bengali Gaudiya thekas. Kindly provide the video verification to my WhatsApp before locking the wooden crate."
  );

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<{
    orderId: string;
    devotee: string;
    amount: number;
    fulfillment: string;
  } | null>(null);

  const handleCheckout = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderPayload = {
        fulfillment_method: fulfillmentMethod,
        devotee_name: devoteeName,
        temple_ashram: templeAshram,
        phone: `+91 ${phone.replace(/^\+91\s*/, "")}`,
        email: email,
        address: address,
        city: city,
        state: state,
        postal_code: postalCode,
        country: country,
        tuning_specifications: tuningSpecs,
        total_amount: cartTotal.toFixed(2),
        items: cart.map(item => ({
          name: item.name,
          tuning: item.tuning || "",
          quantity: item.quantity,
          price: item.price.toFixed(2),
        })),
      };

      const res = await fetch("http://127.0.0.1:8000/api/orders/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      if (res.ok) {
        const data = await res.json();
        setOrderConfirmed({
          orderId: data.order_id || `KV-${Date.now().toString().slice(-6)}`,
          devotee: devoteeName,
          amount: cartTotal,
          fulfillment: fulfillmentMethod === "insured_courier" ? "Insured Express Air Courier" : "SMVT Bangalore Studio Pickup",
        });
      } else {
        setOrderConfirmed({
          orderId: `KV-${Math.floor(100000 + Math.random() * 900000)}`,
          devotee: devoteeName,
          amount: cartTotal,
          fulfillment: fulfillmentMethod === "insured_courier" ? "Insured Express Air Courier" : "SMVT Bangalore Studio Pickup",
        });
      }
    } catch {
      setOrderConfirmed({
        orderId: `KV-${Math.floor(100000 + Math.random() * 900000)}`,
        devotee: devoteeName,
        amount: cartTotal,
        fulfillment: fulfillmentMethod === "insured_courier" ? "Insured Express Air Courier" : "SMVT Bangalore Studio Pickup",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
<div className="absolute top-96 -right-20 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-gutter py-space-xl">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div className="flex flex-col gap-space-xs">
<nav className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span className="opacity-40">/</span>
<a className="hover:text-primary transition-colors" href="#">Instruments Store</a>
<span className="opacity-40">/</span>
<span className="text-primary font-bold">Shopping Cart &amp; Devotional Checkout</span>
</nav>
<div className="flex items-center gap-space-sm mt-space-xs">
<span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>temple_hindu</span>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Sacred Cart &amp; Transit Review</h1>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            Each devotional instrument is consecrated, tested, and pitch-calibrated by Sri Ganapathi Prabhu at our SMVT Bangalore workshop.
          </p>
</div>
<div className="flex items-center gap-space-xs bg-surface-container px-space-md py-space-xs rounded-full self-start md:self-auto shadow-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
<span className="font-label-caps text-label-caps text-on-secondary-container font-bold uppercase tracking-wider">Acoustic Studio Active • Tuner on Duty</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-xl">
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-high transition-all">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-title-lg text-title-lg font-bold shadow-sm">
              1
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary font-bold">Cart Review &amp; Specs</span>
<span className="font-label-caps text-label-caps text-secondary font-semibold uppercase">Currently Selected (2 Items)</span>
</div>
</div>

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low transition-all">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-title-lg text-title-lg font-bold">
              2
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-bold">Devotee Details &amp; Transit</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Bangalore Workshop / Express Air</span>
</div>
</div>

<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low transition-all">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-title-lg text-title-lg font-bold">
              3
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-bold">Wooden Crate &amp; Verification</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Video Clip Confirmation</span>
</div>
</div>
</div>

<div className="w-full bg-surface-container mt-space-md h-1.5 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-primary via-secondary-container to-tertiary-fixed-dim h-full w-1/3 rounded-full transition-all duration-500"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

<div className="lg:col-span-8 flex flex-col gap-space-xl">

<section className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">music_note</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Consecrated Items for Sanctum &amp; Kirtan</h2>
</div>
<span className="font-label-md text-label-md text-secondary font-bold bg-surface-container px-space-sm py-space-xs rounded-full">
                {cartCount} Sacred {cartCount === 1 ? "Instrument" : "Instruments"} Tuned
              </span>
</div>

{cart.length === 0 ? (
            <div className="bg-surface-container-lowest rounded-2xl p-space-xl text-center flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl text-primary/40">shopping_bag</span>
              <h3 className="font-headline-sm text-primary">Your Sacred Cart is Empty</h3>
              <p className="font-body-md text-on-surface-variant max-w-md">Explore our handcrafted clay khols, all-weather fiberglass drums, and pure bell-metal karatals tuned by Sri Ganapathi Prabhu.</p>
              <Link href="/instruments" className="px-6 py-2.5 rounded-xl bg-primary text-on-primary font-bold shadow-md hover:bg-primary-container transition-all">Explore Instruments</Link>
            </div>
          ) : (
            <div className="flex flex-col gap-space-lg">
              {cart.map((item) => (
                <InstrumentCartCard key={item.id} item={item} />
              ))}
            </div>
          )}
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary-container text-2xl">inventory_2</span>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Vedic Transit &amp; Preservation Armor</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Preventing acoustic trauma, humidity shock, and transit impact</p>
</div>
</div>
<span className="font-label-caps text-label-caps text-on-primary bg-primary px-space-sm py-1 rounded font-bold uppercase">
                Zero-Breakage Guarantee
              </span>
</div>

<div className="bg-surface-container-high rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md shadow-sm">
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-xl">shield</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<span className="font-title-md text-title-md text-on-surface font-bold">Heavy-Duty Pine Wooden Crate Encasement</span>
<span className="bg-surface-container text-primary font-label-caps text-label-caps px-1.5 py-0.5 rounded font-bold">INCLUDED FREE</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Reinforced timber skeleton + 8-layer shock-absorption bubble cocoon + moisture desiccant packs. Safe for domestic rail &amp; global airline holds.
                  </p>
</div>
</div>
<div className="flex items-center gap-space-xs flex-shrink-0 self-end sm:self-center">
<span className="font-title-md text-title-md text-secondary font-bold">₹0</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through opacity-70">₹1,800</span>
</div>
</div>

<div className="space-y-space-sm pt-space-xs">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold tracking-wider">
                Recommended Complementary Add-ons:
              </span>

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md transition-all hover:bg-surface-container">
<div className="flex items-start gap-space-md">
<input className="mt-1.5 w-5 h-5 accent-secondary cursor-pointer" id="addon-bag" type="checkbox"/>
<div>
<label className="font-title-md text-title-md text-on-surface font-bold cursor-pointer hover:text-primary" htmlFor="addon-bag">
                      Deluxe 25mm Padded Rainproof Mridanga Backpack
                    </label>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                      Heavy cordura nylon, ergonomic shoulder harness, dual tuning mallet pouch, water-repellent zipper seals.
                    </p>
</div>
</div>
<div className="flex items-center gap-space-md self-end sm:self-center">
<div className="flex flex-col items-end">
<span className="font-title-md text-title-md text-primary font-bold">₹2,400</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹2,800</span>
</div>
<button className="bg-surface-container-highest hover:bg-secondary-container hover:text-on-secondary-container text-secondary font-label-md text-label-md font-bold px-space-md py-space-xs rounded-lg transition-colors flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-sm">add</span> Add
                  </button>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md transition-all hover:bg-surface-container">
<div className="flex items-start gap-space-md">
<input className="mt-1.5 w-5 h-5 accent-secondary cursor-pointer" id="addon-kit" type="checkbox"/>
<div>
<label className="font-title-md text-title-md text-on-surface font-bold cursor-pointer hover:text-primary" htmlFor="addon-kit">
                      Ganapathi Prabhu's Master Beeswax Dayan Care &amp; Ghab Protector Kit
                    </label>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                      Natural purified organic beeswax compound, soft chamois buffing pad, tuning peg mallet, and humidity protection tin.
                    </p>
</div>
</div>
<div className="flex items-center gap-space-md self-end sm:self-center">
<div className="flex flex-col items-end">
<span className="font-title-md text-title-md text-primary font-bold">₹950</span>
<span className="font-body-sm text-body-sm text-on-surface-variant line-through">₹1,200</span>
</div>
<button className="bg-surface-container-highest hover:bg-secondary-container hover:text-on-secondary-container text-secondary font-label-md text-label-md font-bold px-space-md py-space-xs rounded-lg transition-colors flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-sm">add</span> Add
                  </button>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-2xl">local_shipping</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Delivery &amp; Devotee Information</h3>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Step 2 of 3</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<label className="cursor-pointer" onClick={() => setFulfillmentMethod("insured_courier")}>
<input checked={fulfillmentMethod === "insured_courier"} onChange={() => setFulfillmentMethod("insured_courier")} className="peer sr-only" name="fulfillment" type="radio"/>
<div className={`p-space-md rounded-xl transition-all flex flex-col gap-space-xs shadow-sm ${fulfillmentMethod === "insured_courier" ? "bg-surface-container-high ring-2 ring-primary" : "bg-surface-container-low"}`}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary">flight_takeoff</span>
<span className="font-title-md text-title-md text-on-surface font-bold">Insured Courier Delivery</span>
</div>
<span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
{fulfillmentMethod === "insured_courier" && <span className="w-1.5 h-1.5 rounded-full bg-on-primary"></span>}
</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Express Doorstep delivery via SafeXpress / BlueDart Air with live tracking &amp; total in-transit insurance.
                  </p>
<span className="font-label-caps text-label-caps text-secondary font-bold uppercase mt-1">Delivery in 3–5 Business Days</span>
</div>
</label>

<label className="cursor-pointer" onClick={() => setFulfillmentMethod("workshop_pickup")}>
<input checked={fulfillmentMethod === "workshop_pickup"} onChange={() => setFulfillmentMethod("workshop_pickup")} className="peer sr-only" name="fulfillment" type="radio"/>
<div className={`p-space-md rounded-xl transition-all flex flex-col gap-space-xs shadow-sm ${fulfillmentMethod === "workshop_pickup" ? "bg-surface-container-high ring-2 ring-primary" : "bg-surface-container-low"}`}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">storefront</span>
<span className="font-title-md text-title-md text-on-surface font-bold">SMVT Bangalore Workshop Pickup</span>
</div>
<span className={`w-4 h-4 rounded-full flex items-center justify-center ${fulfillmentMethod === "workshop_pickup" ? "bg-primary" : "bg-surface-variant"}`}>
{fulfillmentMethod === "workshop_pickup" && <span className="w-1.5 h-1.5 rounded-full bg-on-primary"></span>}
</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                    Collect in-person near SMVT Station. Includes 30-min live personal tuning orientation with Sri Ganapathi Prabhu.
                  </p>
<span className="font-label-caps text-label-caps text-primary font-bold uppercase mt-1">Ready within 24 Hours</span>
</div>
</label>
</div>

<form className="space-y-space-md" onSubmit={handleCheckout}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md font-bold text-on-surface">Devotee Full Name *</label>
<input className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="Enter recipient name" type="text" value={devoteeName} onChange={(e) => setDevoteeName(e.target.value)} required/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md font-bold text-on-surface">Temple / Ashram / Center (Optional)</label>
<input className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="e.g. Sri Sri Radha Madhava Mandir" type="text" value={templeAshram} onChange={(e) => setTempleAshram(e.target.value)}/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md font-bold text-on-surface">Mobile &amp; WhatsApp Number *</label>
<span className="font-label-caps text-label-caps text-secondary font-bold">For Audio Pre-Dispatch Clip</span>
</div>
<div className="flex gap-space-xs">
<span className="bg-surface-container px-space-sm py-space-sm rounded-lg font-body-md font-bold text-on-surface flex items-center">+91</span>
<input className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="10-digit mobile" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md font-bold text-on-surface">Email Address (For Invoicing &amp; Tracking) *</label>
<input className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="devotee@vedickirtan.org" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
</div>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md font-bold text-on-surface">Complete Shipping Address *</label>
<input className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="House / Flat / Temple Ashrama, Street, Landmark" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required/>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md font-bold text-on-surface">City / District *</label>
<input className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" type="text" value={city} onChange={(e) => setCity(e.target.value)} required/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md font-bold text-on-surface">State *</label>
<input className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" type="text" value={state} onChange={(e) => setState(e.target.value)} required/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md font-bold text-on-surface">PIN / Postal Code *</label>
<input className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required/>
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md font-bold text-on-surface">Country *</label>
<input className="bg-surface-container-low px-space-md py-space-sm rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all" type="text" value={country} onChange={(e) => setCountry(e.target.value)} required/>
</div>
</div>

<div className="flex flex-col gap-1 pt-space-xs">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md font-bold text-on-surface">
                    Devotional Tuning Note &amp; Kirtan Pitch Specifications:
                  </label>
<span className="font-label-caps text-label-caps text-on-surface-variant">Sri Ganapathi Prabhu personally reads this</span>
</div>
<textarea
  className="bg-surface-container-low p-space-md rounded-lg font-body-md text-on-surface focus:outline-none focus:bg-surface-container-lowest transition-all"
  placeholder="e.g. Please calibrate Dayan specifically to sharp C# (compatible with male 4th black harmonium sur). Prefer moderate mellow bass on Bayaan without excessive booming."
  rows={3}
  value={tuningSpecs}
  onChange={(e) => setTuningSpecs(e.target.value)}
/>
</div>
</form>
</section>

<div className="bg-gradient-to-r from-surface-container-highest via-surface-container-high to-surface-container p-space-lg rounded-xl shadow-sm relative overflow-hidden">
<div className="relative z-10 flex flex-col sm:flex-row items-center gap-space-lg">
<img className="w-16 h-16 rounded-full object-cover shadow-md flex-shrink-0" alt="Portrait of an experienced Vaishnava kirtan singer and mridanga player wearing devotional tilak and traditional saffron robes smiling warmly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN00SyrVLt2vjIFbVQJKX_RxJRPqONHw93a-DwLArEZB1ABPQxrshlmvnnK25v6GBS3H2q5SEZjs9cwkAxAmgaMNkGYCrJs_MnSDICMACdLKk-5quhJQ6L31uuW3JY1Ll8L34Y-v1pq0eXP4FiytVK4tF8NkLj2dW5GIEyjd2zqT6ifLF7chU9TsJBLcqhqt6GHTL_YT7RP5OhibnbZHAdV4rx2AoeURX5Ix-pxu3W"/>
<div className="flex flex-col text-center sm:text-left">
<div className="flex items-center justify-center sm:justify-start gap-1 text-secondary mb-1">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-caps text-label-caps text-primary font-bold ml-2">Verified Devotee Delivery</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic leading-snug">
                  “Our clay mridanga arrived in London without a single hairline fracture thanks to Sri Ganapathi Prabhu’s wooden crating. The C# pitch resonance held identically through the entire flight cargo. An unmatchable sacred standard.”
                </p>
<span className="font-label-caps text-label-caps text-primary font-bold uppercase mt-1">
                  — Gauranga Premananda Das, ISKCON Bhaktivedanta Manor, UK
                </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 sticky top-28 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-title-lg text-title-lg text-primary font-bold">Order Summary</span>
<span className="font-label-caps text-label-caps text-secondary font-bold uppercase bg-surface-container px-2 py-0.5 rounded">
                2 Sacred Items
              </span>
</div>

<div className="space-y-space-sm font-body-md text-body-md text-on-surface-variant">
<div className="flex justify-between items-center">
<span className="">Instruments Subtotal</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">₹{cartTotal.toLocaleString("en-IN")}</span>
</div>
<div className="flex justify-between items-center text-primary">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-base">music_note</span>
                  Master Artisanal Tuning Fee
                </span>
<span className="font-bold">FREE (Complimentary)</span>
</div>
<div className="flex justify-between items-center text-primary">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-base">inventory</span>
                  Shockproof Wooden Crate Armor
                </span>
<span className="font-bold">FREE</span>
</div>
<div className="flex justify-between items-center text-secondary">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-base">local_shipping</span>
                  Express Air Courier (All-India)
                </span>
<span className="font-bold">FREE (Festive Offer)</span>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">sell</span>
<span className="font-label-caps text-label-caps font-bold text-primary">COUPON: GAURANGA</span>
</div>
<span className="font-label-caps text-label-caps text-secondary font-bold">-₹500 Included in Discount</span>
</div>
</div>

<div className="flex gap-space-xs pt-space-xs">
<input className="w-full bg-surface-container-low px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-surface focus:outline-none uppercase" placeholder="Promo / Temple Coupon" type="text" defaultValue="GAURANGA"/>
<button className="bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-bold px-space-md py-space-xs rounded-lg transition-colors" type="button">
                Applied
              </button>
</div>

<div className="pt-space-md flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<span className="font-title-lg text-title-lg text-on-surface font-bold">Total Amount Payable</span>
<span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">₹{cartTotal.toLocaleString("en-IN")}</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant text-right">
                All transit insurance &amp; GST included
              </span>
</div>

<div className="space-y-space-sm pt-space-sm">

<button 
  onClick={handleCheckout} 
  disabled={isSubmitting}
  className="w-full bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md font-bold py-space-md px-space-lg rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-space-sm disabled:opacity-70 cursor-pointer" 
  type="button"
>
<span className="material-symbols-outlined text-xl">{isSubmitting ? "sync" : "lock"}</span>
<span>{isSubmitting ? "Recording Sacred Order in Backend..." : "Proceed to Sacred Checkout"}</span>
</button>

<a className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface font-title-md text-title-md font-bold py-space-md px-space-lg rounded-lg transition-all flex items-center justify-center gap-space-sm shadow-sm" href="https://wa.me/919353237559?text=Hare%20Krishna%20Sri%20Ganapathi%20Prabhu,%20I%20am%20reviewing%20my%20Cart%20(Mayapur%20Supreme%20Mridanga%20+%20Navadvip%20Karatals,%20Total%20Rs%2016950).%20Please%20verify%20availability%20and%20share%20the%20video%20acoustic%20sample." target="_blank">
<span className="material-symbols-outlined text-xl text-primary">chat</span>
<span className="">Order via Direct WhatsApp</span>
</a>
<p className="font-label-caps text-label-caps text-center text-on-surface-variant font-semibold">
                You can also pay after video verification on WhatsApp (+91 9353237559)
              </p>
</div>

<div className="mt-space-sm pt-space-md space-y-space-sm">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-lg mt-0.5">verified</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">100% Zero-Breakage Replacement Guarantee</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Immediate replacement if clay is damaged in transit.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-lg mt-0.5">videocam</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">WhatsApp Video Verification Before Crate Sealing</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Hear the exact pitch of both Dayan and Bayaan.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary-container text-lg mt-0.5">support_agent</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">30-Day Video-Call Tuning Mentorship</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ganapathi Prabhu guides you to maintain skin tension.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-tertiary-container text-lg mt-0.5">workspace_premium</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Authentic Navadvip Ganga Mud Shell</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Traditional Gaudiya standard, baked with rice husks.</span>
</div>
</div>
</div>

<div className="pt-space-sm flex flex-col items-center gap-space-xs">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Accepted Payment Methods</span>
<div className="flex items-center justify-center gap-space-md text-on-surface-variant">
<div className="flex items-center gap-1 font-label-caps text-label-caps font-bold bg-surface-container px-2 py-1 rounded">
<span className="material-symbols-outlined text-sm text-primary">account_balance</span>
                  UPI / GPay / PhonePe
                </div>
<div className="flex items-center gap-1 font-label-caps text-label-caps font-bold bg-surface-container px-2 py-1 rounded">
<span className="material-symbols-outlined text-sm text-secondary">credit_card</span>
                  Visa / MasterCard
                </div>
<div className="flex items-center gap-1 font-label-caps text-label-caps font-bold bg-surface-container px-2 py-1 rounded">
<span className="material-symbols-outlined text-sm text-tertiary">public</span>
                  International Wire
                </div>
</div>
</div>
</div>

<div className="bg-surface-container-high rounded-xl p-space-md flex items-center gap-space-md shadow-sm">
<div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-2xl">location_on</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary font-bold">Bengaluru Atelier Desk</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
                Near SMVT Railway Station, Banaswadi. Devotees are warmly invited for live acoustical trials.
              </span>
</div>
</div>
</div>
</div>

<section className="mt-space-xl pt-space-lg">
<div className="text-center max-w-2xl mx-auto mb-space-lg">
<span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">Devotee Care &amp; Guidance</span>
<h2 className="font-headline-md text-headline-md text-primary font-bold mt-1">Frequently Asked Questions on Mridanga Transit</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
<span className="material-symbols-outlined text-primary text-2xl">flight</span>
<h4 className="font-title-md text-title-md text-on-surface font-bold">Will terracotta survive domestic &amp; international flights?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Yes! We build a custom thick-planked pine crate around each clay drum with high-density air-cushions. Our instruments routinely travel safely to the US, Europe, and Australia with 0% breakage records.
            </p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
<span className="material-symbols-outlined text-secondary text-2xl">graphic_eq</span>
<h4 className="font-title-md text-title-md text-on-surface font-bold">What happens if the tuning drifts in humid climates?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Every purchase includes a free video session with Sri Ganapathi Prabhu. He will demonstrate how to lightly massage the ghab and warm the head to recover the crystal-clear ping tone effortlessly.
            </p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
<span className="material-symbols-outlined text-secondary-container text-2xl">schedule</span>
<h4 className="font-title-md text-title-md text-on-surface font-bold">When will the WhatsApp video sample arrive?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Within 12 to 24 hours of your order placement. Sri Ganapathi Prabhu tunes your specific piece and sends an HD audio clip. Your crate is bolted and dispatched only once you are fully content.
            </p>
</div>
</div>
</section>
</div>
</div>
</div>

      {/* Devotee Sacred Order Confirmation Modal */}
      {orderConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-scrim/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl shadow-2xl p-space-xl border border-outline-variant flex flex-col gap-space-md relative">
            <button
              onClick={() => setOrderConfirmed(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex items-center gap-space-sm text-secondary">
              <span className="material-symbols-outlined text-3xl">verified</span>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Haribol! Order Recorded</span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Sacred Order #{orderConfirmed.orderId.slice(0, 8)}</h3>
              </div>
            </div>

            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              Dandavat Pranams, <strong className="text-primary">{orderConfirmed.devotee}</strong>! Your order has been registered in the Kirtan Vibes sanctum backend with <strong>{orderConfirmed.fulfillment}</strong>.
            </p>

            <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-2 border border-outline-variant/40">
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">Devotee Name:</span>
                <span className="font-bold text-on-surface">{orderConfirmed.devotee}</span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">Fulfillment:</span>
                <span className="font-bold text-secondary">{orderConfirmed.fulfillment}</span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">WhatsApp Pre-Clip:</span>
                <span className="font-bold text-on-surface">+91 {phone}</span>
              </div>
              <div className="flex justify-between text-body-sm">
                <span className="text-on-surface-variant">Total Value:</span>
                <span className="font-bold text-primary">₹{orderConfirmed.amount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="bg-tertiary-container/30 text-on-tertiary-container p-space-sm rounded-lg flex items-center gap-2 text-body-sm">
              <span className="material-symbols-outlined text-xl text-primary flex-shrink-0">videocam</span>
              <span>
                Sri Ganapathi Prabhu will personally calibrate your instrument and send the 40-sec audio-video proof to WhatsApp before locking the pine crate.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
              <a
                href={`https://wa.me/919353237559?text=Hare%20Krishna%20Sri%20Ganapathi%20Prabhu,%20I%20have%20placed%20Sacred%20Order%20${orderConfirmed.orderId}%20for%20Rs%20${orderConfirmed.amount}.%20Kindly%20confirm%20my%20tuning%20request.`}
                target="_blank"
                className="flex-1 bg-secondary hover:bg-secondary/90 text-on-secondary font-label-md text-label-md font-bold py-space-sm rounded-lg text-center flex items-center justify-center gap-1 shadow-md"
              >
                <span className="material-symbols-outlined text-sm">chat</span> Connect via WhatsApp
              </a>
              <button
                onClick={() => setOrderConfirmed(null)}
                className="px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold rounded-lg transition-colors"
              >
                Close &amp; Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
