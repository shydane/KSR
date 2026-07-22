"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageShell({ children }) {
  const frameRef = useRef(null);

  useGSAP(
    () => {
      // Warna latar satu halaman penuh, bukan per-section. Berubah perlahan
      // dari putih ke merah tua selama user scroll dari hero menuju gallery,
      // lalu tetap merah tua untuk section-section berikutnya (tidak ada
      // perubahan mendadak/lompatan warna di manapun).
      gsap.set(frameRef.current, { backgroundColor: "#ffffff" });

      gsap.to(frameRef.current, {
        backgroundColor: "#6e0e1b",
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          endTrigger: "#gallery",
          end: "top top",
          scrub: true,
        },
      });
    },
    { scope: frameRef }
  );

  return (
    <div className="app-frame" ref={frameRef}>
      {children}
    </div>
  );
}
