"use client";

import { Heart } from "lucide-react";

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {[...Array(25)].map((_, index) => {

        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 5;
        const size = 14 + Math.random() * 18;

        return (
          <Heart
            key={index}
            fill="currentColor"
            className="absolute text-pink-300 opacity-30"
            size={size}
            style={{
              left: `${left}%`,
              bottom: "-40px",
              animation: `float ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

    </div>
  );
}