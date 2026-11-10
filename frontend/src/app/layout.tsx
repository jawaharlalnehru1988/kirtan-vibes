import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kirtan Vibes by Ganapathi Prabhu | Handcrafted Tuned Mridangas & Kirtan Academy",
  description:
    "Divine handcrafted clay & fiberglass Mridangas, khols, kartals, repair services, and online kirtan masterclasses by Master Craftsman Sri Ganapathi Prabhu in Bangalore, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-sans text-on-surface">
        <CartProvider>
          <Header />
          <main className="flex-1 w-full pt-28">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
