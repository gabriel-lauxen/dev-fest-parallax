"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      onClick={() => setShowText((prev) => !prev)}
      className="flex min-h-screen items-center justify-center overflow-hidden relative"
      style={{
        transition: "all 0.3s ease-out",
        background: `linear-gradient(
          ${mousePosition.y * 20 + 90}deg,
          #91a4f9ff 0%,
          #eeddff 100%
      )`,
      }}
    >
      <div
        style={{
          transform: `translate(${mousePosition.x * -10}px, ${
            mousePosition.y * -10
          }px)`,
        }}
        className="absolute top-6 right-6 flex gap-4"
      >
        <div className="w-12 h-12 rounded-full border-3 border-black bg-blue-200"></div>
        <div className="w-12 h-12 rounded-full border-3 border-black bg-blue-200"></div>
        <div className="w-12 h-12 rounded-full border-3 border-black bg-blue-200"></div>
      </div>
      <div
        style={{
          transform: `translate(${mousePosition.x * -10}px, ${
            mousePosition.y * -10
          }px)`,
        }}
        className="absolute bottom-6 left-6 flex gap-4"
      >
        <div className="w-32 h-12 border-3 border-black bg-green-400 rounded-md"></div>
      </div>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center relative z-10">
        <div className="flex gap-8 items-center">
          <div
            className="transition-all duration-500 ease-out"
            style={{
              transform: `translate(${
                mousePosition.x * -40 + (showText ? 0 : 150)
              }px, ${mousePosition.y * -40}px)`,
            }}
          >
            <Image
              src="/left-arrow.svg"
              alt="Left Arrow"
              className="left-arrow"
              width={165}
              height={200}
            />
          </div>
          <div
            className="title-container transition-all duration-500 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -40}px, ${
                mousePosition.y * -40
              }px)`,
              opacity: showText ? 1 : 0,
              pointerEvents: showText ? "auto" : "none",
            }}
          >
            <h1 className="title">DevFest</h1>
            <p className="subtitle">Porto alegre - 2025</p>
          </div>
          <div
            className="transition-all duration-500 ease-out"
            style={{
              transform: `translate(${
                mousePosition.x * -40 + (showText ? 0 : -150)
              }px, ${mousePosition.y * -40}px)`,
            }}
          >
            <Image
              src="/right-arrow.svg"
              alt="Right Arrow"
              className="right-arrow"
              width={165}
              height={200}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
