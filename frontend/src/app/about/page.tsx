"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function AboutPage() {
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

<section className="w-full bg-surface-container-low py-space-md">
<div className="max-w-7xl mx-auto px-gutter">
<div className="flex flex-wrap items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm">home</span> Home
        </a>
<span className="opacity-40">/</span>
<span className="text-primary font-bold">About Sri Ganapathi Prabhu</span>
<span className="opacity-40">/</span>
<span className="text-secondary font-semibold">Parampara &amp; Artisanal Heritage</span>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-xl">
<div className="max-w-7xl mx-auto px-gutter">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="max-w-3xl">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest inline-block mb-space-xs">
            Acoustic Master • Khol Vidwan • Parampara Artisan
          </span>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Sacred Resonance, Lifelong Devotion: The Journey of Sri Ganapathi Prabhu
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Over two decades devoted to the sacred science of Sri Khol and Mridanga craftsmanship—calibrating holy Navadvip clay, sacred iron-gab minerals, and resonant acoustic timber to sustain devotional singing across temples worldwide.
          </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<div className="px-space-md py-space-xs bg-surface-container rounded-full text-secondary font-label-md text-label-md flex items-center gap-1.5">
<span className="material-symbols-outlined text-base">verified</span>
<span className="">20+ Years Dedicated Service</span>
</div>
<div className="px-space-md py-space-xs bg-surface-container-high rounded-full text-primary font-label-md text-label-md flex items-center gap-1.5">
<span className="material-symbols-outlined text-base">pin_drop</span>
<span className="">SMVT Bengaluru Atelier</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-5 relative">
<div className="relative rounded-xl overflow-hidden shadow-xl bg-surface-container">
<img className="w-full h-[480px] object-cover" alt="Close-up serene portrait of Sri Ganapathi Prabhu, an Indian master craftsman in his fifties wearing traditional Vaishnava tilak and simple cotton kurta, sitting cross-legged in his warm wooden workshop in Bengaluru. In his hands, he delicately holds an authentic terracotta clay mridanga, adjusting the black gab with traditional tuning stones and wooden mallet. Warm golden amber natural light, shelves of finished khols and brass kartals in soft devotional background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Z2-MqMlTk_gK3lRZwp2vO91Se9M3kP65-gWRgS0PpgwUixSJRp4KQHK-oTtcqeFpkT4GN2EYTKHxwooUr-ymmbSZJ8iaNDXy45Dq9zAdDCYHY5idG1wtzQ9zZHpoq2wLmhzQmJRG2-7AE1zPM9H5TdYkDMn_pBCwOqtt4oB6cP7OC3bc-_ZS33QWsLOfMIDFpLwKSWZJp8U7rxyUbM3cz3W1nCLWn2II0FlD8dvJ"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-space-lg text-on-primary">
<span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-wider block">Acharya of Devotional Acoustics</span>
<p className="font-headline-sm text-headline-sm text-on-primary font-bold">Sri Ganapathi Prabhu</p>
<p className="font-body-sm text-body-sm opacity-90 mt-1">Founder of Kirtan Vibes • Bengaluru Craft Studio</p>
</div>
</div>

<div className="hidden sm:flex absolute -bottom-6 -right-6 bg-surface p-space-md rounded-xl shadow-lg items-center gap-space-sm max-w-xs">
<div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl">music_note</span>
</div>
<div>
<p className="font-title-md text-title-md text-primary font-bold leading-tight">C# to D# Tuning</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Harmonized for Vaishnava Temple Kirtan</p>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-lg">
<div className="flex flex-col gap-space-md">
<div className="inline-flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
              Tradition Rooted in Sridham Mayapur
            </div>
<h2 className="font-headline-md text-headline-md text-primary">
              "When the Dayan rings true, the singer's vocal cords rest, and the congregational heart takes flight."
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Trained in the sacred hearths of Mayapur and Navadvip by ancestral Bengali khol-karikars, Sri Ganapathi Prabhu has spent two decades refining a devotional science often overlooked: the acoustic harmony between the singer’s throat and the earthen skin of the drum.
            </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Witnessing countless sankirtan singers strain their voices against poorly tuned, heavy, or unevenly laced mridangas, Prabhu dedicated his life to standardizing acoustic pitch stability. Every instrument created under his hands is tempered with sacred Ganga clay, balanced rawhide braiding, and painstakingly tuned to the exact tonal spectrum needed for high-energy temple sankirtan.
            </p>
</div>

<div className="p-space-lg bg-surface rounded-xl shadow-sm relative overflow-hidden">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-3xl text-secondary shrink-0">format_quote</span>
<p className="font-headline-sm text-headline-sm text-primary italic leading-snug">
                “The Mridanga is not merely clay and skin; it is the physical manifestation of Sri Chaitanya Mahaprabhu’s sankirtan heartbeat. If the instrument is crafted with unalloyed reverence, its sustain dissolves all fatigue.”
              </p>
</div>
<div className="mt-space-sm pl-11 flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary font-bold">— Sri Ganapathi Prabhu</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Navadvip Parampara Tradition</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-space-xs">
<div className="p-space-md bg-surface rounded-lg shadow-sm text-center">
<span className="font-headline-md text-headline-md text-primary font-bold block">20+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Years Dedicated Mastery</span>
</div>
<div className="p-space-md bg-surface rounded-lg shadow-sm text-center">
<span className="font-headline-md text-headline-md text-secondary font-bold block">2,500+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mridangas Consecrated</span>
</div>
<div className="p-space-md bg-surface rounded-lg shadow-sm text-center">
<span className="font-headline-md text-headline-md text-primary font-bold block">450+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Global Academy Students</span>
</div>
<div className="p-space-md bg-surface rounded-lg shadow-sm text-center">
<span className="font-headline-md text-headline-md text-secondary font-bold block">100%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Safe Transit Standard</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-xl">
<div className="max-w-7xl mx-auto px-gutter">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-space-xs">Artisanal Purity &amp; Acoustic Science</span>
<h2 className="font-headline-lg text-headline-lg text-primary">The Four Sacred Pillars of Craftsmanship</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          How Sri Ganapathi Prabhu blends ancient Navadvip alluvial methods with concert-grade chromatic calibration.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">

<div className="p-space-lg bg-surface-container-low rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-2xl">water_drop</span>
</div>
<span className="font-label-caps text-label-caps text-secondary font-bold block mb-1">Pillar I</span>
<h3 className="font-title-lg text-title-lg text-primary font-bold mb-space-xs">Sacred Clay &amp; Slow Curing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Terracotta shells crafted exclusively from seasoned Ganga river silt mixed with husked rice fibers. Each shell undergoes a six-month drying and curing cycle to eliminate micro-fissures and adapt to dry and humid climates alike.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/50 p-space-sm rounded text-xs text-on-surface-variant font-label-md">
<span className="font-bold text-primary">Spec:</span> Zero kiln rush, naturally sun-cured.
          </div>
</div>

<div className="p-space-lg bg-surface-container-low rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-2xl">science</span>
</div>
<span className="font-label-caps text-label-caps text-secondary font-bold block mb-1">Pillar II</span>
<h3 className="font-title-lg text-title-lg text-primary font-bold mb-space-xs">Mineral Iron Gab Pasting</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              The soul of the drum. Ganapathi Prabhu hand-applies up to fourteen micro-layers of magnetic iron-oxide, herbal acacia binders, and cooked rice starch. This creates the crystalline bell-like “Ta/Ti” ping on the Dayan and thunderous “Dha” resonance on the Bayaan.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/50 p-space-sm rounded text-xs text-on-surface-variant font-label-md">
<span className="font-bold text-primary">Spec:</span> 14 micro-layered resonant center.
          </div>
</div>

<div className="p-space-lg bg-surface-container-low rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-2xl">all_inclusive</span>
</div>
<span className="font-label-caps text-label-caps text-secondary font-bold block mb-1">Pillar III</span>
<h3 className="font-title-lg text-title-lg text-primary font-bold mb-space-xs">Bidirectional Braid Tension</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Using sustainably treated rawhide lacing, the straps are pulled symmetrically over 32 braided rim points. Balanced horizontal wooden pegs allow players to subtly raise or lower the pitch without stripping the delicate drumhead perimeter.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/50 p-space-sm rounded text-xs text-on-surface-variant font-label-md">
<span className="font-bold text-primary">Spec:</span> 32-point hand-woven rim girdle.
          </div>
</div>

<div className="p-space-lg bg-surface-container-low rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-2xl">equalizer</span>
</div>
<span className="font-label-caps text-label-caps text-secondary font-bold block mb-1">Pillar IV</span>
<h3 className="font-title-lg text-title-lg text-primary font-bold mb-space-xs">Concert Pitch Calibration</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              No instrument leaves the studio unplayed. Prabhu personally tests every drum against harmonium octaves, ensuring the Dayan rings crisply at C#, D, or D# without harsh ringing overtones, letting vocalists sing effortlessly for hours.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container/50 p-space-sm rounded text-xs text-on-surface-variant font-label-md">
<span className="font-bold text-primary">Spec:</span> Certified 432Hz &amp; 440Hz scale matching.
          </div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-gutter">
<div className="p-space-xl bg-surface rounded-2xl shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-5">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-space-xs">Acoustic Calibration</span>
<h3 className="font-headline-md text-headline-md text-primary">Hear Sri Ganapathi Prabhu’s Tuning Benchmark</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
              Listen to the pure acoustic contrast between a raw mass-market head versus an atelier-calibrated Dayan &amp; Bayaan hand-finished by Sri Ganapathi Prabhu.
            </p>
<div className="mt-space-md flex items-center gap-space-md">
<div className="flex items-center gap-2 text-sm text-on-surface">
<span className="w-3 h-3 rounded-full bg-secondary-container"></span>
<span className="font-label-md text-label-md">C# Master Dayan (Khol Ping)</span>
</div>
<div className="flex items-center gap-2 text-sm text-on-surface">
<span className="w-3 h-3 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md">Sub-resonant Bayaan Bass</span>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-surface-container-low p-space-lg rounded-xl">
<div className="flex flex-col gap-space-md">

<div className="p-space-md bg-surface rounded-lg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md w-full sm:w-auto">
<button className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 hover:bg-secondary transition-colors shadow" id="play-dayan-btn">
<span className="material-symbols-outlined text-2xl" id="dayan-icon">play_arrow</span>
</button>
<div>
<p className="font-title-md text-title-md text-primary font-bold">Dayan Master Ping (Tuned to C#)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Crisp "Ta", sustained bell resonance, zero mud</p>
</div>
</div>
<div className="w-full sm:w-48 flex items-center gap-2">
<div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-0 transition-all duration-300" id="dayan-progress"></div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant" id="dayan-time">0:00 / 0:14</span>
</div>
</div>

<div className="p-space-md bg-surface rounded-lg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md w-full sm:w-auto">
<button className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 hover:bg-primary transition-colors shadow" id="play-bayaan-btn">
<span className="material-symbols-outlined text-2xl" id="bayaan-icon">play_arrow</span>
</button>
<div>
<p className="font-title-md text-title-md text-primary font-bold">Bayaan Deep Sustain ("Dha / Gha")</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Natural dampening curve with rich low harmonics</p>
</div>
</div>
<div className="w-full sm:w-48 flex items-center gap-2">
<div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary w-0 transition-all duration-300" id="bayaan-progress"></div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant" id="bayaan-time">0:00 / 0:18</span>
</div>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-space-sm italic">
              "Every drum dispatched from Bangalore is recorded and shared with the devotee via WhatsApp prior to packing."
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-xl">
<div className="max-w-7xl mx-auto px-gutter">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-space-xs">Path of Service</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Two Decades in the Sankirtan Parampara</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          From humble apprentice hands on the banks of the Bhagirathi to setting the acoustic benchmark for international kirtaniyas.
        </p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-outline-variant -translate-x-1/2"></div>
<div className="space-y-space-xl">

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="md:w-1/2 md:pr-space-xl pl-12 md:pl-0 text-left md:text-right">
<span className="px-space-sm py-0.5 rounded bg-surface-container-highest font-label-caps text-label-caps text-secondary font-bold inline-block mb-1">2003</span>
<h3 className="font-title-lg text-title-lg text-primary font-bold">Apprenticeship in Navadvip Dham</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Initiated into sacred khol crafting under master karikars of Bengal. Spent years studying clay temperaments, seasonal weather contractions, and authentic mineral gab formulations.
              </p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow">
<span className="material-symbols-outlined text-sm">spa</span>
</div>
<div className="hidden md:block md:w-1/2 md:pl-space-xl"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="hidden md:block md:w-1/2 md:pr-space-xl"></div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow">
<span className="material-symbols-outlined text-sm">temple_hindu</span>
</div>
<div className="md:w-1/2 md:pl-space-xl pl-12 text-left">
<span className="px-space-sm py-0.5 rounded bg-surface-container-highest font-label-caps text-label-caps text-primary font-bold inline-block mb-1">2009</span>
<h3 className="font-title-lg text-title-lg text-primary font-bold">Bengaluru Atelier Established</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Founded the sound studio in Bangalore to support ISKCON temples and nama-hatta groups across Karnataka, Tamil Nadu, Andhra Pradesh, and Kerala with high-standard instrument servicing.
              </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="md:w-1/2 md:pr-space-xl pl-12 md:pl-0 text-left md:text-right">
<span className="px-space-sm py-0.5 rounded bg-surface-container-highest font-label-caps text-label-caps text-secondary font-bold inline-block mb-1">2016</span>
<h3 className="font-title-lg text-title-lg text-primary font-bold">Pioneering Fiberglass Travel Khols</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                To solve the heartbreak of broken clay drums on flights, Prabhu perfected heavy-duty multi-ply fiberglass shells with traditional genuine rawhide heads—uniting portability with Vedic tone.
              </p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow">
<span className="material-symbols-outlined text-sm">flight</span>
</div>
<div className="hidden md:block md:w-1/2 md:pl-space-xl"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="hidden md:block md:w-1/2 md:pr-space-xl"></div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow">
<span className="material-symbols-outlined text-sm">school</span>
</div>
<div className="md:w-1/2 md:pl-space-xl pl-12 text-left">
<span className="px-space-sm py-0.5 rounded bg-surface-container-highest font-label-caps text-label-caps text-primary font-bold inline-block mb-1">2021</span>
<h3 className="font-title-lg text-title-lg text-primary font-bold">Global Kirtan Vibes Online Academy</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Formalized 1-on-1 virtual training, mentoring devotees from London, New York, Melbourne, Zurich, and Vrindavan in fundamental Gauranga bols, thekas, and advanced kirtan accompaniment.
              </p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center">
<div className="md:w-1/2 md:pr-space-xl pl-12 md:pl-0 text-left md:text-right">
<span className="px-space-sm py-0.5 rounded bg-surface-container-highest font-label-caps text-label-caps text-secondary font-bold inline-block mb-1">Present Day</span>
<h3 className="font-title-lg text-title-lg text-primary font-bold">SMVT Bangalore Hub &amp; Global Dispatches</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                A bustling pilgrimage point for kirtaniyas, providing personalized drum matching, harmonium maintenance, zero-breakage flight crating, and ongoing seva to sankirtan teams globally.
              </p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow">
<span className="material-symbols-outlined text-sm">verified</span>
</div>
<div className="hidden md:block md:w-1/2 md:pl-space-xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-6 flex flex-col gap-space-md">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">In-Person Pilgrimage</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Visiting the Bengaluru Atelier: What to Expect</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Located just minutes from SMVT Railway Station in Banaswadi / Baiyappanahalli, the workshop is both an acoustic laboratory and an affectionate gathering space for devotees.
          </p>
<div className="space-y-space-md mt-space-xs">
<div className="flex items-start gap-space-md p-space-md bg-surface rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xl">straighten</span>
</div>
<div>
<h4 className="font-title-md text-title-md text-primary font-bold">Forearm Measurement &amp; Ergonomic Fit</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Prabhu precisely matches drum body lengths (20", 21.5", 23") to your arm reach and posture so hours of sankirtan cause zero shoulder tension.</p>
</div>
</div>
<div className="flex items-start gap-space-md p-space-md bg-surface rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xl">piano</span>
</div>
<div>
<h4 className="font-title-md text-title-md text-primary font-bold">Harmonium Octave Alignment Bench</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bring your own harmonium or test against our tuned reed sets. We ensure your mridanga resonates perfectly with your vocal range (C, C#, or D).</p>
</div>
</div>
<div className="flex items-start gap-space-md p-space-md bg-surface rounded-xl shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-xl">restaurant</span>
</div>
<div>
<h4 className="font-title-md text-title-md text-primary font-bold">Warm Vaishnava Hospitality</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Enjoy fresh herbal ginger tea and sacred prasadam while discussing kirtan taals, drumhead preservation, and sangha memories.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col gap-space-md">
<div className="rounded-2xl overflow-hidden shadow-lg bg-surface-container relative">
<img className="w-full h-72 object-cover" alt="Interior of traditional Vedic musical instrument atelier in Banaswadi Bangalore. Rows of terracotta Bengali mridangas resting on cushions, handcrafted bell-metal kartals hanging on aged wooden racks, and leather braiding tools neatly arranged on teakwood tables. Soft warm ambient sunlight through carved lattice windows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3a5whIHCgVyvAIZrPqu8IPI_XzGVLbribAFWZI5afz2G4cIpL1JoRUSqY6_SYTuhyroCOLCctRI4hG9_rfxFV8kVAJifWckOZEu_dV_vHXaMIffqTeJJX0y6J_j0GHo6QAGlEtGQMjWp27qWNG_R3CQJUqU1rH8-3q_4w7nnGQI495KK20zNFl9CEHVRtISwloUmqrJbYsw2yws1wInePfL-pqmdUHoXJfJYkrGPW"/>
<div className="absolute top-space-md left-space-md bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded-full shadow text-xs font-bold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-secondary">location_on</span> SMVT Banaswadi Workshop
            </div>
</div>

<div className="p-space-lg bg-surface rounded-xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-space-md">
<div>
<p className="font-title-md text-title-md text-primary font-bold">Kirtan Vibes Workshop Desk</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                #42, Near SMVT Railway Station, Banaswadi, Bengaluru - 560038
              </p>
<p className="font-label-md text-label-md text-secondary mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-sm">schedule</span> Mon – Sun: 9:00 AM – 8:30 PM (Prior WhatsApp Notice Appreciated)
              </p>
</div>
<a className="px-space-md py-space-sm bg-primary text-on-primary rounded font-label-md text-label-md font-bold hover:bg-secondary transition-colors shrink-0 flex items-center gap-1.5" href="https://wa.me/919353237559" target="_blank">
<span className="material-symbols-outlined text-base">near_me</span>
<span className="">Directions / Appointment</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-space-xl">
<div className="max-w-7xl mx-auto px-gutter">
<div className="text-center max-w-2xl mx-auto mb-space-xl">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-space-xs">Parampara Blessings</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Voices from the Global Sankirtan Sangha</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          Resonant words from temple leaders and lifelong kirtaniyas across three continents.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

<div className="p-space-lg bg-surface-container-low rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="flex text-secondary-container">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
              "For 12 years of travelling across European retreats, my clay mridanga always cracked. The fiberglass khol handcrafted by Ganapathi Prabhu survived 24 flights and still produces a deep, heart-melting Mayapur pitch."
            </p>
</div>
<div className="flex items-center gap-space-sm mt-space-md pt-space-sm bg-surface p-space-sm rounded">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-primary font-bold flex items-center justify-center text-sm">
              AD
            </div>
<div>
<p className="font-title-md text-title-md text-primary font-bold text-sm">Ananda Das</p>
<p className="font-label-caps text-label-caps text-on-surface-variant">Bhaktivedanta Manor, Watford UK</p>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container-low rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="flex text-secondary-container">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
              "Prabhu’s knowledge of gab layering is second to none. He restored an heirloom 1980s Navadvip clay drum for our temple that three other makers said was beyond repair. The Dayan now sings like pure silver."
            </p>
</div>
<div className="flex items-center gap-space-sm mt-space-md pt-space-sm bg-surface p-space-sm rounded">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-secondary font-bold flex items-center justify-center text-sm">
              RS
            </div>
<div>
<p className="font-title-md text-title-md text-primary font-bold text-sm">Radha Govinda Dasa</p>
<p className="font-label-caps text-label-caps text-on-surface-variant">Sri Sri Radha Gopinath Mandir, Chowpatty</p>
</div>
</div>
</div>

<div className="p-space-lg bg-surface-container-low rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="flex text-secondary-container">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
              "Taking online masterclasses with Sri Ganapathi Prabhu transformed how our Sydney youth sankirtan group supports the lead singers. He teaches not only the physical bols, but the devotional humility of playing."
            </p>
</div>
<div className="flex items-center gap-space-sm mt-space-md pt-space-sm bg-surface p-space-sm rounded">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-primary font-bold flex items-center justify-center text-sm">
              VM
            </div>
<div>
<p className="font-title-md text-title-md text-primary font-bold text-sm">Vishvambhar Murray</p>
<p className="font-label-caps text-label-caps text-on-surface-variant">Kirtan Australia Community, Sydney</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-high py-space-xl">
<div className="max-w-7xl mx-auto px-gutter">
<div className="bg-surface rounded-2xl p-space-xl shadow-md text-center max-w-4xl mx-auto relative overflow-hidden">
<div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary-container/10 rounded-full blur-2xl"></div>
<div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-surface-container text-primary flex items-center justify-center mb-space-sm shadow-sm">
<span className="material-symbols-outlined text-3xl">record_voice_over</span>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-1">
            Personal Guidance From Master Craftsman
          </span>
<h2 className="font-headline-lg text-headline-lg text-primary max-w-2xl">
            Have a Question About Selecting or Restoring Your Mridanga?
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xl leading-relaxed">
            Whether you are acquiring your very first clay instrument, seeking flight-safe fiberglass models, or sending an heirloom drum for re-heading, Sri Ganapathi Prabhu personally answers every message.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-space-md mt-space-lg w-full justify-center">
<a className="w-full sm:w-auto px-space-xl py-space-md bg-[#25D366] text-white rounded font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow" href="https://wa.me/919353237559?text=Hare%20Krishna%20Ganapathi%20Prabhu,%20I%20would%20like%20guidance%20on%20a%20Mridanga" target="_blank">
<span className="material-symbols-outlined text-xl">chat</span>
<span className="">WhatsApp Prabhu: +91 9353237559</span>
</a>
<a className="w-full sm:w-auto px-space-xl py-space-md bg-primary text-on-primary rounded font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow" href="#">
<span className="material-symbols-outlined text-xl">event_available</span>
<span className="">Book Atelier Visit or Zoom Session</span>
</a>
</div>
<p className="font-label-md text-label-md text-on-surface-variant mt-space-md">
            Direct Desk: Bengaluru Atelier, SMVT Station Area • Safe Air-Crate Shipping to 40+ Countries
          </p>
</div>
</div>
</div>
</section>
</div>

    </div>
  );
}
