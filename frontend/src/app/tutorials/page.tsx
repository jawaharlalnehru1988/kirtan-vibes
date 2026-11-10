"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function TutorialsPage() {
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

<section className="relative w-full overflow-hidden bg-surface-container-low px-gutter py-space-xl">
<div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
<div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">

<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-highest text-primary font-label-caps text-label-caps tracking-wider self-start shadow-sm">
<span className="material-symbols-outlined text-sm text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>temple_hindu</span>
<span className="">गुरु परंपरा • AUTHENTIC SRI CAITANYA MAHAPRABHU KIRTAN HERITAGE</span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
<div className="lg:col-span-8 flex flex-col gap-space-sm">
<h1 className="font-display-hero text-display-hero text-primary tracking-tight">
            Online &amp; In-Studio Mridanga &amp; Kirtan Academy with Sri Ganapathi Prabhu
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Learn authentic Bengali style Khol, Manohar Shahi, Garanhati, and Hindustani classical kirtan beats from a maestro with over 20 years of devotion, sacred craftsmanship, and pedagogical experience.
          </p>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-xs bg-surface-container p-space-md rounded-xl shadow-sm">
<span className="font-label-caps text-label-caps text-secondary uppercase font-bold">Studio Hub</span>
<p className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">location_on</span>
            Bengaluru • SMVT Station Hub
          </p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Live interactive classes on Zoom &amp; In-person training inside our artisanal acoustical laboratory.
          </p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">
<div className="flex flex-col bg-surface p-space-md rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<span className="font-headline-md text-headline-md text-secondary font-bold">450+</span>
<span className="material-symbols-outlined text-primary text-xl">public</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Devotee Students Globally</span>
</div>
<div className="flex flex-col bg-surface p-space-md rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<span className="font-headline-md text-headline-md text-secondary font-bold">100%</span>
<span className="material-symbols-outlined text-primary text-xl">graphic_eq</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Practical Taal Training</span>
</div>
<div className="flex flex-col bg-surface p-space-md rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<span className="font-headline-md text-headline-md text-secondary font-bold">1-on-1</span>
<span className="material-symbols-outlined text-primary text-xl">record_voice_over</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Personalized &amp; Small Batches</span>
</div>
<div className="flex flex-col bg-surface p-space-md rounded-lg shadow-sm">
<div className="flex items-center justify-between">
<span className="font-headline-md text-headline-md text-secondary font-bold">SMVT</span>
<span className="material-symbols-outlined text-primary text-xl">apartment</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Live from Bangalore Studio</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-primary text-on-primary py-space-md px-gutter">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-tertiary-fixed text-2xl">music_note</span>
<span className="font-title-md text-title-md tracking-wide">Fundamental Bols You Will Master:</span>
</div>
<div className="flex flex-wrap items-center gap-space-xs font-label-md text-label-md">
<span className="px-space-sm py-space-xs rounded bg-primary-container text-on-primary-container font-bold">TA</span>
<span className="px-space-sm py-space-xs rounded bg-primary-container text-on-primary-container font-bold">TI</span>
<span className="px-space-sm py-space-xs rounded bg-primary-container text-on-primary-container font-bold">TE</span>
<span className="px-space-sm py-space-xs rounded bg-primary-container text-on-primary-container font-bold">RE</span>
<span className="px-space-sm py-space-xs rounded bg-primary-container text-on-primary-container font-bold">KHET</span>
<span className="px-space-sm py-space-xs rounded bg-secondary-container text-on-secondary-container font-bold">DHA</span>
<span className="px-space-sm py-space-xs rounded bg-secondary-container text-on-secondary-container font-bold">DHIN</span>
<span className="px-space-sm py-space-xs rounded bg-tertiary-container text-on-tertiary-container font-bold">GHI-TI-TA</span>
</div>
<div className="text-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider">
        Daily Metronome Drills Included
      </div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
<div className="bg-surface-container rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-surface-container-highest">
<img className="w-full h-full object-cover" alt="Venerable master mridanga musician Sri Ganapathi Prabhu playing a polished clay Bengali khol drum in a serene Bangalore ashram studio, warm saffron ambient lighting, devotional Vaishnava mood, intricate hand mudras, terracotta and brass elements in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhNqDSQPUGQxk0j6vFuns0rv2ez8IajVYHpmslq22kdiMJ7NG97ffnGtaucUycNs6Rtteq9_mT8KD5XzWrCYR-C7CgSQvc0dlaLIci02JQEUQMbH0rLkrd_ZltArae4kzteI2m25WvMHMSGUD2MfF8Xw7t9dJ2ZhvpXjMwOiVZkUNl5GnI5M1gmFmMpIhBSwZc22nrB8OvXn8tARef1WbqjbnE1Rqc-iZOvfi590n7"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-inverse-on-surface">
<span className="font-label-caps text-label-caps uppercase text-secondary-fixed-dim">Guru-Sishya Parampara</span>
<span className="font-headline-sm text-headline-sm font-serif">Sri Ganapathi Prabhu</span>
<span className="font-body-sm text-body-sm opacity-90">20+ Years Dedicated Mridanga Acharya &amp; Vedic Luthier</span>
</div>
</div>

<div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between gap-space-md bg-surface-container">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase">
<span className="material-symbols-outlined text-sm">verified</span>
            Direct Instruction from Bangalore Workshop
          </div>
<h2 className="font-headline-lg text-headline-lg text-primary">
            "The Mridanga is Not Just Played; It Breathes with the Singer's Soul."
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Sri Ganapathi Prabhu has dedicated more than two decades to the divine art of Sri Mridanga. As both a master craftsman and a seasoned kirtaniya, he understands not just how to play the rhythm, but how the instrument breathes. He has trained temple leads, pujaris, and international devotees in authentic ISKCON Bengali kirtan styles, Hindustani accompaniment, and vocal harmonium coordination.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Every online and in-studio session is personally calibrated to your wrist posture, finger snap weight, and acoustic pitch matching, ensuring fast progress whether you are touching the khol for the first time or leading the temple Aarti.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-sm">
<a className="flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-primary hover:bg-secondary text-on-primary transition-all shadow-md" href="https://wa.me/919353237559" target="_blank">
<span className="material-symbols-outlined text-xl">forum</span>
<span className="font-title-md text-title-md">Connect on WhatsApp</span>
</a>
<a className="flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors" href="tel:+919353237559">
<span className="material-symbols-outlined text-primary text-xl">call</span>
<span className="font-label-lg text-label-lg">+91 9353237559</span>
</a>
<div className="flex items-center gap-space-xs text-on-surface-variant sm:ml-auto">
<span className="w-3 h-3 rounded-full bg-secondary-container"></span>
<span className="font-label-md text-label-md">Slots Open for Current Batch</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-lowest py-space-xl px-gutter">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Structured Devotional Curriculum</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Academy Tutorial Packages</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Choose your learning path. All tiers include interactive real-time video feedback, slow-motion wrist drills, and authentic Bengali bols.
          </p>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-full">
<span className="material-symbols-outlined text-primary text-base">video_camera_front</span>
<span className="font-label-md text-label-md text-on-surface">Available in IST, EST, PST, GMT &amp; AEST</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">

<div className="flex flex-col justify-between bg-surface-container-low rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-md">
<div className="flex justify-between items-start">
<span className="px-space-sm py-space-xs rounded bg-surface-container-high text-primary font-label-caps text-label-caps uppercase font-bold">
                Foundation Level
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">1 Month</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                Sacred Hand Positions &amp; Basic Thekas
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Master the fundamental resonance, hand placement, and holy syllables without strain or fatigue.
              </p>
</div>
<div className="flex items-baseline gap-space-xs py-space-xs">
<span className="font-headline-md text-headline-md text-primary font-bold">₹3,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ $55 USD</span>
<span className="font-label-caps text-label-caps text-secondary ml-auto">8 Live Sessions</span>
</div>
<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant font-bold">Syllabus Highlights:</span>
<ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Dayan &amp; Bayaan finger placement &amp; wrist posture</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Pure pronunciation of Bols: Ta, Ti, Te, Re, Khet, Dha, Dhin</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Essential 8-beat Kaharwa taal synchronization</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Hare Krishna Mahamantra foundational tempo</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Printable notation booklet &amp; practice loops included</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-lg">
<button className="w-full py-space-sm rounded-lg bg-primary hover:bg-secondary text-on-primary font-title-md text-title-md transition-colors text-center shadow-sm">
              Book Beginner Course
            </button>
<span className="text-center font-label-md text-label-md text-secondary">Free 15-min trial session included</span>
</div>
</div>

<div className="flex flex-col justify-between bg-surface-container rounded-2xl p-space-lg shadow-lg relative -mt-0 md:-mt-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-space-md py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps uppercase font-bold tracking-wider shadow">
            Most Popular for Kirtaniyas
          </div>
<div className="flex flex-col gap-space-md pt-space-xs">
<div className="flex justify-between items-start">
<span className="px-space-sm py-space-xs rounded bg-surface-container-highest text-secondary font-label-caps text-label-caps uppercase font-bold">
                Intermediate Mastery
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">2 Months</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-title-lg text-title-lg text-primary font-bold">
                Bengali Khol Style &amp; Fast Kirtan Tihais
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Unlock the ecstatic momentum of traditional Bengali temple kirtans with lightning-fast speed switches.
              </p>
</div>
<div className="flex items-baseline gap-space-xs py-space-xs">
<span className="font-headline-md text-headline-md text-primary font-bold">₹6,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ $95 USD</span>
<span className="font-label-caps text-label-caps text-secondary ml-auto">16 Live Sessions</span>
</div>
<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant font-bold">Syllabus Highlights:</span>
<ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Gauranga Lila traditional rhythm suites</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Dynamic speed transitions: Vilambit to Dvigun &amp; Chaugun</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Complex resonant Tihais &amp; climax pickups</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Live Kartal and Bell-metal synchronization technique</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Recorded video homework critiques directly from Prabhu</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-lg">
<button className="w-full py-space-sm rounded-lg bg-primary hover:bg-secondary text-on-primary font-title-md text-title-md transition-colors text-center shadow-md">
              Book Intermediate Course
            </button>
<span className="text-center font-label-md text-label-md text-on-surface-variant">Instant WhatsApp seat reservation</span>
</div>
</div>

<div className="flex flex-col justify-between bg-surface-container-low rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-md">
<div className="flex justify-between items-start">
<span className="px-space-sm py-space-xs rounded bg-surface-container-high text-primary font-label-caps text-label-caps uppercase font-bold">
                Advanced Masterclass
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Personalized Pace</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-title-lg text-title-lg text-on-surface font-bold">
                Vocal &amp; Harmonium Dual Coordination
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                For senior temple kirtaniyas seeking effortless classical improvisation, Dadra, Rupak, and multi-instrument agility.
              </p>
</div>
<div className="flex items-baseline gap-space-xs py-space-xs">
<span className="font-headline-md text-headline-md text-primary font-bold">₹9,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ $140 USD</span>
<span className="font-label-caps text-label-caps text-secondary ml-auto">Flexible Mentorship</span>
</div>
<div className="flex flex-col gap-space-xs pt-space-xs">
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant font-bold">Syllabus Highlights:</span>
<ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Hindustani classical kirtan: Dadra, Rupak &amp; Tintal</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Singing lead vocals while holding intricate mridanga thekas</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Harmonium chord progression &amp; reed pitch calibration</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Accompanying prominent world kirtan leaders smoothly</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Direct phone access for pre-festival tuning questions</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col gap-space-xs pt-space-lg">
<button className="w-full py-space-sm rounded-lg bg-primary hover:bg-secondary text-on-primary font-title-md text-title-md transition-colors text-center shadow-sm">
              Book Personalized Mentorship
            </button>
<span className="text-center font-label-md text-label-md text-on-surface-variant">Includes custom notation transcriptions</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container py-space-lg px-gutter">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg bg-surface p-space-lg rounded-xl shadow-md">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container flex-shrink-0 cursor-pointer shadow-md hover:scale-105 transition-transform" id="previewPlayBtn">
<span className="material-symbols-outlined text-3xl">play_arrow</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Audio Preview • 8-Beat Kaharwa Taal Demo</span>
<span className="font-title-md text-title-md text-primary font-semibold">Bengali Khol Dayan (High Pitch C#) &amp; Deep Bayaan Bass</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Handcrafted Clay Mridanga tuned by Sri Ganapathi Prabhu</span>
</div>
</div>

<div className="w-full md:w-80 flex items-center gap-1 h-10 px-space-md bg-surface-container-low rounded-lg">
<span className="w-1 h-4 bg-primary/40 rounded-full animate-pulse"></span>
<span className="w-1 h-7 bg-primary rounded-full"></span>
<span className="w-1 h-3 bg-secondary rounded-full"></span>
<span className="w-1 h-9 bg-primary-container rounded-full"></span>
<span className="w-1 h-5 bg-primary rounded-full"></span>
<span className="w-1 h-8 bg-secondary-container rounded-full"></span>
<span className="w-1 h-4 bg-primary rounded-full"></span>
<span className="w-1 h-6 bg-primary-container rounded-full"></span>
<span className="w-1 h-10 bg-secondary rounded-full"></span>
<span className="w-1 h-5 bg-primary rounded-full"></span>
<span className="w-1 h-8 bg-primary-container rounded-full"></span>
<span className="w-1 h-3 bg-secondary-container rounded-full"></span>
<span className="w-1 h-7 bg-primary rounded-full"></span>
<span className="w-1 h-4 bg-primary/40 rounded-full"></span>
<span className="w-1 h-6 bg-secondary rounded-full"></span>
<span className="w-1 h-9 bg-primary rounded-full"></span>
<span className="w-1 h-5 bg-primary-container rounded-full"></span>
<span className="w-1 h-8 bg-secondary-container rounded-full"></span>
</div>
<div className="flex items-center gap-space-sm flex-shrink-0">
<span className="font-label-md text-label-md text-on-surface-variant font-mono">0:45 / 2:10</span>
<a className="px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md font-semibold transition-colors" href="https://wa.me/919353237559?text=Hare%20Krishna%20Ganapathi%20Prabhu,%20I%20would%20like%20to%20hear%20sample%20taal%20recordings">
          Request Full Audio Packs
        </a>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-gutter py-space-xl" id="booking-section">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">

<div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Fast Devotional Registration</span>
<h2 className="font-headline-lg text-headline-lg text-primary">
            Book Your Online Slot or In-Studio Workshop
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Begin with a zero-cost 15-minute rhythm orientation with Sri Ganapathi Prabhu. We assess your hand grip, verify your time zone, and formulate your personalized weekly training roadmap.
          </p>
<div className="flex flex-col gap-space-sm pt-space-md">
<div className="flex items-start gap-space-sm bg-surface-container p-space-md rounded-lg">
<span className="material-symbols-outlined text-secondary text-2xl mt-0.5">verified_user</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">100% Personal Attention</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">No crowded lectures. Maximum 2 students per batch or pure 1-on-1 focus.</span>
</div>
</div>
<div className="flex items-start gap-space-sm bg-surface-container p-space-md rounded-lg">
<span className="material-symbols-outlined text-secondary text-2xl mt-0.5">schedule</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Flexible Timezone Adaptation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Devotees in USA, UK, Europe, Australia, and India booked according to their local mornings/evenings.</span>
</div>
</div>
<div className="flex items-start gap-space-sm bg-surface-container p-space-md rounded-lg">
<span className="material-symbols-outlined text-secondary text-2xl mt-0.5">support_agent</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Instant Coordinator Hotline</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Prefer direct voice call? Reach Prabhu directly at +91 9353237559.</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-high p-space-md rounded-xl flex items-center justify-between gap-space-md">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps uppercase text-secondary">In-Person Address</span>
<span className="font-title-md text-title-md font-bold text-on-surface">SMVT Railway Hub Studio</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Baiyappanahalli, Bengaluru - 560038</span>
</div>
<a className="px-space-md py-space-xs rounded bg-surface text-primary font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors shadow-sm" href="#repair-section">
            View Directions
          </a>
</div>
</div>

<div className="lg:col-span-7 bg-surface p-space-lg lg:p-space-xl rounded-2xl shadow-xl">
<form className="flex flex-col gap-space-md" id="academyBookingForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="devoteeName">
                Devotee / Full Legal Name *
              </label>
<input className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary" id="devoteeName" placeholder="e.g. Radhapati Das / Arjun Sharma" required type="text"/>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="whatsappNumber">
                WhatsApp Phone Number *
              </label>
<input className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary" id="whatsappNumber" placeholder="+91 98765 43210" required type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="studentTimezone">
                Your Timezone / Region *
              </label>
<select className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary" id="studentTimezone">
<option value="IST">India Standard Time (IST - UTC+5:30)</option>
<option value="EST">USA Eastern Time (EST / EDT)</option>
<option value="PST">USA Pacific Time (PST / PDT)</option>
<option value="GMT">United Kingdom / Europe (GMT / CET)</option>
<option value="AEST">Australia / NZ (AEST - UTC+10)</option>
<option value="Other">Other Global Country</option>
</select>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="learningMode">
                Learning Preference *
              </label>
<select className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary" id="learningMode">
<option value="Online Zoom">Online Interactive (Zoom / Google Meet)</option>
<option value="In Studio">In-Person at SMVT Bangalore Studio</option>
<option value="Hybrid">Hybrid (Online + Weekend Workshop)</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="studentExperience">
                Current Mridanga Experience *
              </label>
<select className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary" id="studentExperience">
<option value="Absolute Beginner">Absolute Beginner (Never played)</option>
<option value="Know Basic Thekas">Know Basic Thekas &amp; Hand placement</option>
<option value="Intermediate Temple Player">Intermediate (Temple Aarti player)</option>
<option value="Harmonium Vocalist">Vocalist seeking rhythm synchronization</option>
</select>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="courseFocus">
                Preferred Focus Area *
              </label>
<select className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary" id="courseFocus">
<option value="Bengali Style Khol">Bengali Style Khol (Traditional Gaudiya)</option>
<option value="Hindustani Classical">Hindustani Classical Kirtan (Dadra/Rupak)</option>
<option value="Vocal Harmonium Dual">Vocal &amp; Harmonium Coordination</option>
<option value="Fast Tihais and Speed">Fast Kirtan Tihais &amp; Climax Beats</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="preferredDate">
                Preferred Start Date *
              </label>
<input className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary" id="preferredDate" required type="date"/>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="preferredSlot">
                Preferred Daily Time Slot *
              </label>
<select className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary" id="preferredSlot">
<option value="Morning 7:00 AM - 8:30 AM IST">Morning: 7:00 AM – 8:30 AM IST</option>
<option value="Morning 10:00 AM - 11:30 AM IST">Morning: 10:00 AM – 11:30 AM IST</option>
<option value="Evening 4:30 PM - 6:00 PM IST">Evening: 4:30 PM – 6:00 PM IST</option>
<option value="Night 7:30 PM - 9:00 PM IST">Night: 7:30 PM – 9:00 PM IST (US Friendly)</option>
<option value="Weekend Special">Weekend Saturday &amp; Sunday Intensive</option>
</select>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="studentNotes">
              Specific Aspirations or Instruments Owned (Optional)
            </label>
<textarea className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-secondary resize-none" id="studentNotes" placeholder="e.g. I have a clay Bengali mridanga in C# tuning and want to prepare for Janmashtami kirtan..." rows={2}></textarea>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
<button className="w-full sm:w-auto px-space-xl py-space-md rounded-lg bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary font-title-md text-title-md font-bold transition-all shadow-md flex items-center justify-center gap-space-xs" type="submit">
<span className="material-symbols-outlined text-xl">send</span>
              Confirm Booking &amp; WhatsApp Ganapathi Prabhu
            </button>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
<span className="material-symbols-outlined text-base text-primary">security</span>
              Zero-obligation orientation
            </span>
</div>
<div className="hidden p-space-md rounded-lg bg-surface-container-high text-primary font-body-sm text-body-sm" id="bookingSuccessMessage">
            Haribol! Your booking request has been formatted. Redirecting to WhatsApp with Ganapathi Prabhu (+91 9353237559)...
          </div>
</form>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-xl px-gutter" id="repair-section">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Artisanal Vedic Restoration</span>
<h2 className="font-headline-lg text-headline-lg text-primary">
            Mridanga &amp; Harmonium Repair Workshop (SMVT Bangalore)
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
            Have an old, untuned, cracked, or dull-sounding mridanga? Bring or ship it to our Bangalore workshop. Sri Ganapathi Prabhu personally inspects, restrings with sacred pure rawhide, and tunes every Dayan and Bayaan shell to precision resonance.
          </p>
</div>
<button className="px-space-lg py-space-sm rounded-lg bg-primary text-on-primary hover:bg-secondary font-label-lg text-label-lg transition-colors shadow-sm flex items-center gap-space-xs self-start md:self-auto cursor-pointer" id="openRepairModalBtn" type="button"><span className="material-symbols-outlined text-lg">build</span><span className="">Submit Repair Inquiry</span></button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="flex flex-col justify-between bg-surface p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">album</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-bold">
              Dayan &amp; Bayaan Head Replacement &amp; Ghab Application
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Complete removal of damaged black paste (ghab) or split skins. Reapplied using artisanal Mayapur mineral paste for pure high bell ring and rumbling bass sustain.
            </p>
</div>
<div className="flex items-center justify-between pt-space-md">
<span className="font-title-lg text-title-lg text-secondary font-bold">₹2,200</span>
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">3-4 Days Turnaround</span>
</div>
</div>

<div className="flex flex-col justify-between bg-surface p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">straighten</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-bold">
              Buffalo / Rawhide Full Restringing &amp; Braiding
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Replacement of brittle leather straps with conditioned rawhide ribbons. Hand-braided rim tension calibration for balanced dual-head tension stability.
            </p>
</div>
<div className="flex items-center justify-between pt-space-md">
<span className="font-title-lg text-title-lg text-secondary font-bold">₹1,800</span>
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">2-3 Days Turnaround</span>
</div>
</div>

<div className="flex flex-col justify-between bg-surface p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">piano</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-bold">
              Harmonium Reed Re-tuning &amp; Bellow Servicing
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Calibrated pitch realignment to standard A440Hz concert pitch or meditative 432Hz. Multi-fold bellow air-leak sealing, key level balance, and valve replacement.
            </p>
</div>
<div className="flex items-center justify-between pt-space-md">
<span className="font-title-lg text-title-lg text-secondary font-bold">₹2,500</span>
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">4-5 Days Turnaround</span>
</div>
</div>

<div className="flex flex-col justify-between bg-surface p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-2xl">healing</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-bold">
              Crack Repair &amp; Shell Reinforcement (Clay &amp; Fiber)
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Specialized structural bonding for cracked earthen Bengali khols. For fiberglass models, epoxy joint sealing and internal acoustic dampening calibration.
            </p>
</div>
<div className="flex items-center justify-between pt-space-md">
<span className="font-title-lg text-title-lg text-secondary font-bold">₹1,500</span>
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant">2-3 Days Turnaround</span>
</div>
</div>
</div>

<div className="bg-surface p-space-lg rounded-2xl shadow-md grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-7 flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase font-bold">
<span className="material-symbols-outlined text-base">local_shipping</span>
            Courier Drop-off &amp; Pickup Guide
          </div>
<h3 className="font-headline-sm text-headline-sm text-primary">
            How to Send Instruments from Anywhere in India
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Devotees regularly courier mridangas to our workshop via Delhivery, DTDC, and SafeXpress. We provide step-by-step guidance on wrapping the clay belly in double bubble-wrap and hard outer cartons to ensure safe transit.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface">
<div className="flex items-start gap-space-xs bg-surface-container-low p-space-sm rounded">
<span className="material-symbols-outlined text-primary text-base">pin_drop</span>
<span className=""><strong>Address:</strong> #42, Sri Kirtan Vibes Workshop, Near SMVT Railway Station, Banaswadi, Bengaluru - 560038</span>
</div>
<div className="flex items-start gap-space-xs bg-surface-container-low p-space-sm rounded">
<span className="material-symbols-outlined text-primary text-base">train</span>
<span className=""><strong>Transit Landmark:</strong> Just 5 minutes from Sir M. Visvesvaraya Terminal (SMVT Bengaluru)</span>
</div>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-space-sm bg-surface-container p-space-md rounded-xl">
<span className="font-title-md text-title-md text-primary font-bold">Emergency Festival Tuning?</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Preparing for Ratha Yatra, Gaura Purnima, or Vyasa Puja? Same-day express tuning and Dayan pitch tightening are available upon direct appointment.
          </p>
<div className="flex items-center gap-space-sm pt-space-xs">
<a className="px-space-md py-space-xs rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors" href="https://wa.me/919353237559?text=Hare%20Krishna%20Prabhu,%20I%20need%20urgent%20same-day%20tuning%20service">
              Request Emergency Tuning
            </a>
<a className="px-space-md py-space-xs rounded bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-surface transition-colors" href="tel:+919353237559">
              Call Desk Directly
            </a>
</div>
</div>
</div><div className="flex flex-col gap-space-md pt-space-md border-t border-outline-variant/30" id="repair-faq"><div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm"><div><span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Acoustic Questions &amp; Guidance</span><h3 className="font-headline-md text-headline-md text-primary">Frequently Asked Questions: Repair &amp; Custom Khols</h3></div><button className="px-space-md py-space-xs rounded bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md font-semibold transition-colors flex items-center gap-space-xs self-start md:self-auto" type="button"><span className="material-symbols-outlined text-sm">chat</span>Ask Ganapathi Prabhu Directly</button></div><div className="flex flex-col gap-space-sm"><div className="bg-surface rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm"><button className="w-full p-space-md flex items-center justify-between text-left font-title-md text-title-md text-primary font-semibold hover:bg-surface-container-low transition-colors faq-trigger" type="button"><span className="">1. How do I safely courier my fragile clay khol to your SMVT Bangalore atelier?</span><span className="material-symbols-outlined text-secondary transition-transform duration-200 faq-icon">expand_more</span></button><div className="px-space-md pb-space-md pt-0 font-body-sm text-body-sm text-on-surface-variant leading-relaxed hidden faq-answer"><p className="">We assist devotees across India with our certified transit protocol. We recommend wrapping the clay earthen belly in triple-layer large air-bubble wrap, immobilizing the Dayan and Bayaan with cloth pads, and seating it inside a sturdy corrugated box with crushed thermocol popcorn. Major couriers (Delhivery, DTDC, SafeXpress) deliver safely right to our workshop doorstep. For overseas or high-value instruments, we can dispatch a specialized wooden crate shell.</p></div></div><div className="bg-surface rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm"><button className="w-full p-space-md flex items-center justify-between text-left font-title-md text-title-md text-primary font-semibold hover:bg-surface-container-low transition-colors faq-trigger" type="button"><span className="">2. Can Sri Ganapathi Prabhu match the Dayan pitch to my vocal key or harmonium?</span><span className="material-symbols-outlined text-secondary transition-transform duration-200 faq-icon">expand_more</span></button><div className="px-space-md pb-space-md pt-0 font-body-sm text-body-sm text-on-surface-variant leading-relaxed hidden faq-answer"><p className="">Yes, absolutely. Sri Ganapathi Prabhu meticulously tunes the Dayan to concert C#, D, or D# (or standard 440Hz / meditative 432Hz harmonics) to suit your primary harmonium scale or personal vocal pitch. During head replacement or re-tensioning, he tests the bell resonance against Tanpura frequency meters to guarantee pure, fatigue-free harmonics.</p></div></div><div className="bg-surface rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm"><button className="w-full p-space-md flex items-center justify-between text-left font-title-md text-title-md text-primary font-semibold hover:bg-surface-container-low transition-colors faq-trigger" type="button"><span className="">3. What is the turnaround time for a complete Dayan and Bayaan head reskinning?</span><span className="material-symbols-outlined text-secondary transition-transform duration-200 faq-icon">expand_more</span></button><div className="px-space-md pb-space-md pt-0 font-body-sm text-body-sm text-on-surface-variant leading-relaxed hidden faq-answer"><p className="">Standard turnaround is typically 3 to 5 business days in Bangalore. This duration ensures the authentic Mayapur mineral paste (gab) cures naturally under controlled ambient humidity and the hand-braided rawhide straps settle into balanced dual-head tension without artificial accelerated heat warping.</p></div></div><div className="bg-surface rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm"><button className="w-full p-space-md flex items-center justify-between text-left font-title-md text-title-md text-primary font-semibold hover:bg-surface-container-low transition-colors faq-trigger" type="button"><span className="">4. Do you offer emergency tuning before major festivals like Gaura Purnima or Janmashtami?</span><span className="material-symbols-outlined text-secondary transition-transform duration-200 faq-icon">expand_more</span></button><div className="px-space-md pb-space-md pt-0 font-body-sm text-body-sm text-on-surface-variant leading-relaxed hidden faq-answer"><p className="">Yes. Priority same-day emergency slots are reserved for temple sankirtan parties and visiting kirtaniyas before auspicious festival dates. Devotees can bring their khol directly to our SMVT Railway Hub studio for express rawhide tightening, gab re-polishing, or harmonium reed calibration upon direct WhatsApp coordination.</p></div></div><div className="bg-surface rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm"><button className="w-full p-space-md flex items-center justify-between text-left font-title-md text-title-md text-primary font-semibold hover:bg-surface-container-low transition-colors faq-trigger" type="button"><span className="">5. What is the difference between authentic terracotta mitti khol and modern fiberglass khol?</span><span className="material-symbols-outlined text-secondary transition-transform duration-200 faq-icon">expand_more</span></button><div className="px-space-md pb-space-md pt-0 font-body-sm text-body-sm text-on-surface-variant leading-relaxed hidden faq-answer"><p className="">Terracotta Mitti (Ganga Clay) khols possess incomparable sweet devotional acoustic warmth, natural earthen sustain, and the sacred tradition dear to Lord Caitanya Mahaprabhu. Fiberglass models, on the other hand, offer exceptional mechanical durability, resistance to monsoonal humidity shifts, and effortless resilience for frequent international flight travel without compromising bell-like projection.</p></div></div></div></div>
</div>
</section>

<section className="w-full bg-surface py-space-xl px-gutter">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="text-center flex flex-col gap-space-xs items-center">
<span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Real Devotee Experiences</span>
<h2 className="font-headline-md text-headline-md text-primary">Voices from the Global Kirtan Sangha</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="flex flex-col justify-between bg-surface-container-low p-space-md rounded-xl">
<p className="font-body-md text-body-md text-on-surface italic">
            "I could never play the fast 16-beat Bengali theka without stiff wrists until Ganapathi Prabhu corrected my thumb release. Learning over Zoom from London felt as clear as being in his room."
          </p>
<div className="flex items-center gap-space-sm pt-space-md">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">
              M
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Madhav Das</span>
<span className="font-label-md text-label-md text-on-surface-variant">London, UK • Student (1 Year)</span>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-surface-container-low p-space-md rounded-xl">
<p className="font-body-md text-body-md text-on-surface italic">
            "My grandfather's clay khol had split ghab and dull bass. I couriered it from Mumbai to SMVT Bangalore. Ganapathi Prabhu gave it back sounding like a divine temple bell. Invaluable craftsmanship!"
          </p>
<div className="flex items-center gap-space-sm pt-space-md">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">
              N
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Nitaipada Dasa</span>
<span className="font-label-md text-label-md text-on-surface-variant">Mumbai • Workshop Restoration</span>
</div>
</div>
</div>
<div className="flex flex-col justify-between bg-surface-container-low p-space-md rounded-xl">
<p className="font-body-md text-body-md text-on-surface italic">
            "The simultaneous vocal and harmonium coordination tier gave me the courage to lead Sunday Feast kirtan. Prabhu's patient devotee demeanor makes learning deeply meditative."
          </p>
<div className="flex items-center gap-space-sm pt-space-md">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary">
              G
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Govinda Priya Devi</span>
<span className="font-label-md text-label-md text-on-surface-variant">Sydney, Australia • 1-on-1 Online</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md p-space-sm flex items-center justify-between gap-space-sm shadow-xl">
<a className="flex-1 py-space-xs rounded bg-primary text-on-primary font-label-md text-label-md text-center font-bold flex items-center justify-center gap-1" href="https://wa.me/919353237559?text=Hare%20Krishna%20Prabhu,%20I%20would%20like%20to%20book%20a%20mridanga%20tutorial%20trial">
<span className="material-symbols-outlined text-base">forum</span>
      WhatsApp Prabhu
    </a>
<button className="flex-1 py-space-xs rounded bg-secondary-container text-on-secondary-container font-label-md text-label-md text-center font-bold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-base">calendar_month</span>
      Book Slot
    </button>
</div>

</div>
    </div>
  );
}
