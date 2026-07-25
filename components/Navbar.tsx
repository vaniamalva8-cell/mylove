"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

const menus = [
  {
    name: "home",
    href: "#hero",
  },
  {
    name: "tentang dia",
    href: "#about",
  },
  {
    name: "alasan",
    href: "#reasons",
  },
  {
    name: "galeri",
    href: "#gallery",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-5 flex max-w-6xl items-center justify-between rounded-full border border-pink-200 bg-white/80 px-8 py-4 shadow-xl backdrop-blur-xl">

        <div className="flex items-center gap-2">

          <Heart
            fill="currentColor"
            className="text-pink-500"
          />

          <h1 className="font-bold text-xl">
            my love
          </h1>

        </div>

        <div className="hidden md:flex gap-8">

          {menus.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-pink-500"
            >
              {item.name}
            </Link>
          ))}

        </div>

      </nav>
    </header>
  );
}