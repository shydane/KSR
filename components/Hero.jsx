"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: -10, duration: 0.6 })
        .from(".hero-invite", { opacity: 0, y: 18, duration: 0.7 }, "-=0.25")
        .from(".logo-mark", { opacity: 0, scale: 0.85, duration: 0.6 }, "-=0.3")
        .from(".hero-bottom", { opacity: 0, y: 14, duration: 0.6 }, "-=0.25");
    },
    { scope: container }
  );

  const handleScrollToGallery = (e) => {
    e.preventDefault();
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={container} className="hero" id="hero">
      <div className="hero-top">
        <div className="hero-eyebrow eyebrow">Unit Kegiatan Mahasiswa</div>
      </div>

      <div className="hero-center">
        <h1 className="hero-invite">
          Ayo, <em>Bergabung</em>
          <br />
          Bersama Kami.
        </h1>

        <div className="logo-mark">
          {/* Ganti dengan <Image src="/logo-ksr.png" alt="Logo KSR" width={104} height={104} />
              kalau file logo asli sudah ada di folder public/ */}
          <span>KSR</span>
        </div>
      </div>

      <div className="hero-bottom">
        <a href="#gallery" className="cta-primary" onClick={handleScrollToGallery}>
          <span>Lihat Kegiatan Kami</span>
          <span>&darr;</span>
        </a>
        <div className="hero-note">
          <span className="scroll-cue" />
          Scroll untuk menjelajah
        </div>
      </div>
    </section>
  );
}
