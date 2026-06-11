"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/features-1.png",
  "/images/features-2.png",
  "/images/features-3.png",
  "/images/features-4.png",
];

export default function FeatureSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[320px] h-[400px] rounded-card overflow-hidden shadow-sm bg-brand-warm mx-auto">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Detalhe do salão ${index + 1}`}
          fill
          sizes="(max-width: 640px) 320px, 320px"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
}