"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);
    document.documentElement.classList.add("cursor-none");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;
      }
    };

    // Event delegation for hover states on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest(".interactive, a, button, input, textarea, select, [role='button']")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        transform: "translate3d(-100px, -100px, 0) translate3d(-50%, -50%, 0)",
        willChange: "transform",
      }}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-[width,height,background-color,border] duration-150 ease-out ${
        isHovered
          ? "w-10 h-10 bg-transparent border-2 border-primary"
          : "w-2 h-2 bg-primary"
      }`}
    />
  );
}
