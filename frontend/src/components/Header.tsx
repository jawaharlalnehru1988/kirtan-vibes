"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  // The 2 main navigators kept permanently visible on top
  const topNavLinks = [
    { label: "Home", href: "/" },
    {
      label: "Mridangas & Instruments",
      href: "/instruments",
      badge: "High-Class Tuned",
    },
  ];

  // Full collection of navigation sections inside the hamburger drawer
  const drawerLinks = [
    {
      category: "Sanctuary & Instruments",
      items: [
        {
          label: "Home",
          href: "/",
          desc: "Flagship Mayapur clay & fiberglass khols with audio resonance preview",
          icon: "home",
        },
        {
          label: "Mridangas & Instruments",
          href: "/instruments",
          desc: "Traditional clay khols, all-weather fiberglass, bell-metal karatals & gig bags",
          icon: "queue_music",
          badge: "Pre-Tuned",
        },
        {
          label: "Accessories & Straps",
          href: "/instruments#accessories",
          desc: "Hand-embroidered cotton straps, gig bags, ghab care kits & spare heads",
          icon: "shopping_basket",
        },
      ],
    },
    {
      category: "Vedic Academy & Artisanal Services",
      items: [
        {
          label: "Academy & Tutorials",
          href: "/tutorials",
          desc: "1-on-1 Online Masterclasses, Bengali bols, thekas & wrist training",
          icon: "school",
          badge: "Book Slot",
        },
        {
          label: "Repair & Tuning Services",
          href: "/tutorials#repair",
          desc: "Dayan/Bayaan ghab replacement, rawhide braiding & harmonium reed servicing",
          icon: "handyman",
        },
        {
          label: "About Sri Ganapathi Prabhu",
          href: "/about",
          desc: "20+ Years Parampara craftsmanship, The 4 Sacred Pillars & Bangalore Studio",
          icon: "verified_user",
        },
        {
          label: "Sacred Cart & Transit",
          href: "/cart",
          desc: "Insured triple-crated transit, WhatsApp verification & order checkout",
          icon: "shopping_cart_checkout",
        },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(44,24,16,0.08)]">
        {/* Top sacred announcement bar */}
        <div className="bg-primary text-on-primary font-label-caps text-label-caps py-space-xs px-gutter">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-xs text-center">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-sm text-tertiary-fixed">
                auto_awesome
              </span>
              <span>
                Sacred Craftsmanship: Handcrafted Clay &amp; Fiberglass Mridangas Tuned to Precision
              </span>
            </div>
            <div className="flex items-center gap-space-md">
              <a
                href="https://wa.me/919353237559"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-space-xs hover:text-tertiary-fixed transition-colors"
              >
                <span className="material-symbols-outlined text-sm text-on-tertiary-container">
                  call
                </span>
                Call &amp; WhatsApp: +91 9353237559
              </a>
              <span className="hidden lg:inline opacity-40">|</span>
              <span className="hidden lg:inline">SMVT Bangalore</span>
              <span className="hidden lg:inline opacity-40">|</span>
              <span className="hidden lg:inline">Worldwide Shipping Available</span>
            </div>
          </div>
        </div>

        {/* Main navigation row - streamlined & uncluttered */}
        <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
          {/* Brand Logo with Custom Sacred Mridanga SVG Emblem */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/60 flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
              <svg
                className="w-full h-full"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="mridangaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8a3324" />
                    <stop offset="50%" stopColor="#6b1d10" />
                    <stop offset="100%" stopColor="#422b22" />
                  </linearGradient>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fc7127" />
                    <stop offset="100%" stopColor="#ffb351" />
                  </linearGradient>
                </defs>
                {/* Mridanga clay barrel */}
                <path
                  d="M 8 13 C 14 10, 26 10, 32 13 C 35 15, 36 25, 32 27 C 26 30, 14 30, 8 27 C 4 25, 5 15, 8 13 Z"
                  fill="url(#mridangaGrad)"
                  stroke="#dcc0bb"
                  strokeWidth="1.2"
                />
                {/* Dayan head (right) */}
                <ellipse cx="32" cy="20" rx="2.5" ry="7" fill="#ffe9e2" stroke="#89726e" strokeWidth="0.8" />
                <circle cx="32" cy="20" r="1.5" fill="#2a170f" />
                {/* Bayaan head (left) */}
                <ellipse cx="8" cy="20" rx="3" ry="7.5" fill="#ffe9e2" stroke="#89726e" strokeWidth="0.8" />
                <circle cx="8" cy="20" r="2" fill="#2a170f" />
                {/* Strap cross lacing */}
                <path d="M 8 14 L 32 26 M 8 26 L 32 14 M 8 20 L 32 20" stroke="url(#goldGrad)" strokeWidth="0.8" opacity="0.85" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold leading-none">
                Kirtan Vibes
              </span>
              <span className="font-label-caps text-[10px] text-secondary uppercase font-bold tracking-wider mt-0.5">
                By Ganapathi Prabhu
              </span>
            </div>
          </Link>

          {/* Center: The TWO primary navigators on top */}
          <nav className="hidden md:flex items-center gap-space-lg">
            {topNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href} className="relative flex items-center">
                  <Link
                    href={link.href}
                    className={`transition-colors font-label-lg text-label-lg ${
                      isActive
                        ? "text-primary font-bold relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-secondary-container"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.badge && (
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-secondary-container/15 border border-secondary-container/30 font-label-caps text-[9px] uppercase tracking-wider text-secondary font-bold leading-none">
                      {link.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Cluster: Hamburger Menu Button, WhatsApp, Cart, Profile */}
          <div className="flex items-center gap-space-sm sm:gap-space-md flex-shrink-0">
            {/* Hamburger Menu Toggle Button (Visible on all screens) */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant hover:bg-surface-container-high transition-all text-on-surface hover:text-primary shadow-sm group"
              aria-label="Open sacred navigation menu"
              title="Explore all services, academy & artisan info"
            >
              <span className="material-symbols-outlined text-xl text-primary group-hover:rotate-90 transition-transform">
                {drawerOpen ? "close" : "menu"}
              </span>
              <span className="font-label-md text-label-md font-bold hidden sm:inline">
                Menu
              </span>
            </button>

            {/* Direct WhatsApp Pill */}
            <a
              className="hidden lg:flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container border border-outline-variant hover:bg-surface-container-high transition-colors"
              href="https://wa.me/919353237559"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                +91 9353237559
              </span>
            </a>

            {/* Cart Link with Live Count */}
            <Link
              href="/cart"
              className="relative flex items-center gap-space-xs px-3 sm:px-space-md py-space-xs rounded-lg bg-surface-container-low border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-xl text-primary">
                shopping_bag
              </span>
              <span className="font-label-md text-label-md font-bold hidden xs:inline">
                Cart
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps font-bold">
                {cartCount}
              </span>
            </Link>

            {/* Profile Avatar */}
            <div className="group relative hidden sm:flex items-center">
              <div className="ring-2 ring-secondary-container/40 rounded-full p-0.5 cursor-pointer">
                <img
                  alt="Sri Ganapathi Prabhu Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfgl8l9vRxkwXp2Pn6GVLxFw_g3JMwHNK9T_lLVtZEgWLV3Mys32a5nTPMAnRhxHioyQ_EUVbg1qRL0L8k1m0qrmNlN9fpqfs-VAdlQ-m9YUryD7FKchsbOfhz5mWBj8f3Xq3W-wpO7RiWyHX3oyIBngsUw_KRfRha2j8Xb54BMPJgq74x06WwC6tdNDJAD5mqKXKnhYS8U7rSo1zFpQpMv4fI-NHDdS4KNjiYIMcf"
                />
              </div>
              <div className="absolute right-0 top-full mt-2 hidden group-hover:flex flex-col whitespace-nowrap bg-inverse-surface text-inverse-on-surface rounded-lg px-space-md py-space-sm shadow-xl z-50">
                <span className="font-label-md text-label-md font-bold">
                  Sri Ganapathi Prabhu
                </span>
                <span className="font-label-caps text-label-caps text-secondary-fixed-dim">
                  20+ Yrs Master Craftsman &amp; Acharya
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-over Hamburger Drawer & Backdrop */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity animate-fade-in"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-surface border-l border-outline-variant/60 shadow-2xl flex flex-col justify-between overflow-y-auto">
              {/* Drawer Top Header */}
              <div className="p-space-lg border-b border-outline-variant/40 flex items-center justify-between bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-secondary-container">
                    <img
                      alt="Sri Ganapathi Prabhu"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfgl8l9vRxkwXp2Pn6GVLxFw_g3JMwHNK9T_lLVtZEgWLV3Mys32a5nTPMAnRhxHioyQ_EUVbg1qRL0L8k1m0qrmNlN9fpqfs-VAdlQ-m9YUryD7FKchsbOfhz5mWBj8f3Xq3W-wpO7RiWyHX3oyIBngsUw_KRfRha2j8Xb54BMPJgq74x06WwC6tdNDJAD5mqKXKnhYS8U7rSo1zFpQpMv4fI-NHDdS4KNjiYIMcf"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary font-bold">
                      Sri Ganapathi Prabhu
                    </span>
                    <span className="font-label-caps text-[10px] text-secondary uppercase font-semibold">
                      Master Craftsman &amp; Khol Vidwan
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>

              {/* Navigation Sections */}
              <div className="p-space-lg flex flex-col gap-space-lg flex-1">
                {drawerLinks.map((section, idx) => (
                  <div key={idx} className="flex flex-col gap-space-xs">
                    <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider px-2">
                      {section.category}
                    </span>
                    <div className="flex flex-col gap-1 mt-1">
                      {section.items.map((item, itemIdx) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            onClick={() => setDrawerOpen(false)}
                            className={`p-3 rounded-xl flex items-start gap-3 transition-all ${
                              isActive
                                ? "bg-surface-container-high text-primary font-bold shadow-sm"
                                : "hover:bg-surface-container-low text-on-surface"
                            }`}
                          >
                            <span className="material-symbols-outlined text-xl text-primary mt-0.5">
                              {item.icon}
                            </span>
                            <div className="flex flex-col flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-title-md text-title-md">
                                  {item.label}
                                </span>
                                {item.badge && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <span className="font-body-sm text-[12px] text-on-surface-variant leading-snug mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Direct Studio Desk & WhatsApp Card */}
                <div className="mt-2 p-space-md rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">
                      location_on
                    </span>
                    <span className="font-title-md text-title-md font-bold text-on-surface">
                      Bangalore Studio &amp; Workshop
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    #42, Near SMVT Railway Station, Baiyappanahalli / Banaswadi,
                    Bengaluru - 560038
                  </p>
                  <a
                    href="https://wa.me/919353237559?text=Hare%20Krishna%20Sri%20Ganapathi%20Prabhu,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20Mridanga%20tuning%20and%20classes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-label-md font-bold shadow-md hover:brightness-105 transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    <span>Chat on WhatsApp (+91 9353237559)</span>
                  </a>
                </div>
              </div>

              {/* Drawer Bottom Sacred Maha-Mantra Ribbon */}
              <div className="p-space-md bg-surface-container border-t border-outline-variant/40 text-center">
                <span className="font-headline-sm text-[13px] text-primary italic font-serif">
                  Hare Krishna Hare Rama • Sacred Vedic Sound
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
