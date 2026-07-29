"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// GANTI path di bawah dengan file pamflet asli kamu.
// Taruh file-nya di public/gallery/ (atau folder public/ lain), contoh:
// public/gallery/pamflet-open-recruitment.jpg
const PAMFLET_SRC = "/gallery/pamflet.jpg";
const PAMFLET_ALT = "Pamflet Open Recruitment KSR PMI Unit Polije";

export default function Pamflet() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".pamflet-head > *", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".pamflet-head",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".pamflet-frame", {
        opacity: 0,
        y: 30,
        scale: 0.96,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pamflet-frame",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".pamflet-actions", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".pamflet-frame",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="pamflet">
      <div className="pamflet-head">
        <div className="eyebrow">Info Kegiatan</div>
        <h2 className="pamflet-title">Pamflet Open Recruitment</h2>
        <p className="pamflet-sub">
          Simpan atau screenshot pamflet ini biar nggak ketinggalan info
          penting.
        </p>
      </div>

      <div className="pamflet-frame">
        <Image
          src={PAMFLET_SRC}
          alt={PAMFLET_ALT}
          width={800}
          height={1120}
          sizes="(max-width: 430px) 90vw, 380px"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="pamflet-actions">
        <a href={PAMFLET_SRC} download className="pamflet-download">
          <span>Simpan Pamflet</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
          </svg>
        </a>
      </div>
    </section>
  );
}
