import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 pt-space-xl pb-space-lg">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl mb-space-xl">
            {/* Column 1 & 2: Brand Description */}
            <div className="lg:col-span-2 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
                    Kirtan Vibes
                  </span>
                  <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
                    Sacred Vedic Acoustical Arts
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
                Dedicated to propagating the authentic transcendental resonance of
                Sree Khol and Mridangas. Handcrafted by Sri Ganapathi Prabhu with pure
                devotional standard, calibrated acoustic clay, and precision tuning
                for temple sankirtan worldwide.
              </p>
              <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-sm text-primary mt-0.5">
                    person
                  </span>
                  <span>
                    <strong>Proprietor:</strong> Sri Ganapathi Prabhu
                  </span>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-sm text-primary mt-0.5">
                    call
                  </span>
                  <span>
                    <strong>Direct Desk:</strong> +91 9353237559
                  </span>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-sm text-primary mt-0.5">
                    location_on
                  </span>
                  <span>
                    #42, Near SMVT Railway Station, Baiyappanahalli / Banaswadi,
                    Bengaluru - 560038, Karnataka
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-md mt-space-xs">
                <a
                  className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md"
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-base text-primary">
                    smart_display
                  </span>
                  YouTube
                </a>
                <a
                  className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-base text-secondary">
                    photo_camera
                  </span>
                  Instagram
                </a>
                <a
                  className="flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md"
                  href="https://wa.me/919353237559"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-base text-[#25D366]">
                    forum
                  </span>
                  WhatsApp Community
                </a>
              </div>
            </div>

            {/* Column 3: Instruments & Shop */}
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-surface font-bold">
                Instruments &amp; Shop
              </span>
              <nav className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <Link
                  className="hover:text-primary transition-colors"
                  href="/instruments"
                >
                  Bengali Clay Mridangas
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/instruments"
                >
                  Fiberglass Travel Khols
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/instruments"
                >
                  Traditional Pure Bell-Metal Kartals
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/instruments"
                >
                  Velvet Mridanga Covers &amp; Straps
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/cart"
                >
                  Worldwide Safe Flight Packaging
                </Link>
              </nav>
            </div>

            {/* Column 4: Workshop Services */}
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-surface font-bold">
                Workshop Services
              </span>
              <nav className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <Link
                  className="hover:text-primary transition-colors"
                  href="/tutorials#repair"
                >
                  Dayan &amp; Bayaan Ghab Replacement
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/tutorials#repair"
                >
                  Full Leather Restringing &amp; Braiding
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/tutorials#repair"
                >
                  Harmonium Reed Servicing &amp; Tuning
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/tutorials#repair"
                >
                  Emergency Pitch Calibrations
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/about#visit"
                >
                  Workshop Consultation in Bengaluru
                </Link>
              </nav>
            </div>

            {/* Column 5: Vedic Academy & Heritage */}
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-surface font-bold">
                Vedic Academy &amp; Heritage
              </span>
              <nav className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <Link
                  className="hover:text-primary transition-colors"
                  href="/tutorials"
                >
                  1-on-1 Mridanga Masterclasses
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/tutorials"
                >
                  Bengali Kirtan Taals &amp; Thekas
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/tutorials"
                >
                  Vocal &amp; Harmonium Harmonics
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/cart"
                >
                  Shipping &amp; Transit Insurance
                </Link>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/about"
                >
                  Parampara &amp; Artisanal Heritage
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom Maha-mantra ribbon & Copyright */}
          <div className="pt-space-lg border-t border-outline-variant/40 flex flex-col items-center gap-space-md text-center">
            <div className="px-space-lg py-space-xs rounded-full bg-surface-container border border-outline-variant/40">
              <span className="font-headline-sm text-headline-sm text-primary tracking-wide italic font-serif">
                Hare Krishna Hare Krishna Krishna Krishna Hare Hare | Hare Rama Hare
                Rama Rama Rama Hare Rama
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between w-full font-label-md text-label-md text-on-surface-variant">
              <p>
                © 2025 Kirtan Vibes. Crafted with devotion under the guidance of Sri
                Ganapathi Prabhu.
              </p>
              <div className="flex items-center gap-space-md">
                <Link className="hover:text-on-surface" href="/cart">
                  Shipping Terms
                </Link>
                <span>•</span>
                <Link className="hover:text-on-surface" href="/tutorials#repair">
                  Warranty &amp; Tuning
                </Link>
                <span>•</span>
                <Link className="hover:text-on-surface" href="/about#visit">
                  Bengaluru Workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Acharya Support widget */}
      <aside
        aria-label="WhatsApp Quick Contact Support"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-space-sm"
      >
        <a
          className="hidden sm:flex flex-col items-end rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs shadow-xl border border-outline-variant/40 transition-transform duration-300 hover:scale-105 hover:bg-surface-container-lowest"
          href="https://wa.me/919353237559?text=Hare%20Krishna%20Sri%20Ganapathi%20Prabhu,%20I%20have%20an%20inquiry%20regarding%20Mridanga%20and%20Kirtan%20services."
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span className="font-label-caps text-label-caps font-bold text-secondary uppercase tracking-wider">
              Online • Direct Acharya Support
            </span>
          </div>
          <div className="font-label-md text-label-md font-bold text-primary">
            Need Tuning or Custom Mridanga Advice?
          </div>
          <div className="font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1">
            <span>Chat with Ganapathi Prabhu (+91 9353237559)</span>
            <span className="material-symbols-outlined text-sm text-[#25D366]">
              arrow_forward
            </span>
          </div>
        </a>
        <a
          aria-label="Chat on WhatsApp with Sri Ganapathi Prabhu"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex-shrink-0"
          href="https://wa.me/919353237559?text=Hare%20Krishna%20Sri%20Ganapathi%20Prabhu,%20I%20have%20an%20inquiry%20regarding%20Mridanga%20and%20Kirtan%20services."
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-[#25D366]"></span>
          </span>
          <svg
            className="h-7 w-7 fill-white transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 0C5.39 0 0 5.391 0 12.031c0 2.115.549 4.184 1.593 6.012L.062 24l6.155-1.503a11.96 11.96 0 005.814 1.504h.005c6.636 0 12.025-5.391 12.025-12.031C24.062 5.391 18.672 0 12.031 0zm0 21.993h-.004a9.988 9.988 0 01-5.093-1.39l-.365-.217-3.782.923.923-3.687-.238-.379a9.948 9.948 0 01-1.528-5.212c0-5.508 4.484-9.992 9.996-9.992 2.668 0 5.176 1.038 7.062 2.924a9.932 9.932 0 012.924 7.068c0 5.508-4.484 9.962-9.988 9.962zm5.48-7.485c-.3-.15-1.776-.876-2.051-.976-.275-.1-.475-.15-.675.15s-.775.976-.95 1.176-.35.225-.65.075a8.19 8.19 0 01-2.413-1.488 9.034 9.034 0 01-1.67-2.079c-.175-.3-.019-.462.131-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.675-1.626-.925-2.226c-.244-.585-.492-.505-.675-.515-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.502 0 1.476 1.075 2.902 1.225 3.102.15.2 2.115 3.23 5.124 4.53 3.009 1.3 3.009.867 3.559.817.55-.05 1.776-.725 2.026-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"></path>
          </svg>
        </a>
      </aside>
    </>
  );
}
