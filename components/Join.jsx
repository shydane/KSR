"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// GANTI dua link di bawah ini dengan link grup & form pendaftaran asli kamu.
const GROUP_LINK = "https://chat.whatsapp.com/GANTI-LINK-GRUP-KSR";
const FORM_LINK = "https://forms.gle/GANTI-LINK-FORM-KSR";

function qrUrl(data) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=8&color=110-16-27&data=${encodeURIComponent(
    data
  )}`;
}

export default function Join() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".join-head > *", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".join-head",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray(".tag-item").forEach((tag) => {
        gsap.from(tag, {
          opacity: 0,
          y: 30,
          scale: 0.97,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tag,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".footer-note", {
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".footer-note",
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="join">
      <div className="join-head">
        <div className="eyebrow">Langkah Selanjutnya</div>
        <h2 className="join-title">Scan &amp; mulai perjalananmu.</h2>
        <p className="join-sub">
          Pindai salah satu kode di bawah untuk gabung grup diskusi atau langsung
          isi formulir pendaftaran.
        </p>
      </div>

      <div className="tag-stack">
        <div className="tag-card tag-item">
          <div className="tag-punch" />
          <div className="tag-eyebrow">Tag 01 · Komunitas</div>
          <div className="tag-title">Grup Calon Anggota</div>
          <p className="tag-desc">
            Berisi info jadwal open recruitment, Q&amp;A, dan pengumuman terbaru.
          </p>
          <div className="qr-box">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrUrl(GROUP_LINK)} alt="QR Code Grup Calon Anggota KSR" loading="lazy" />
            <div className="qr-meta">
              <span className="qr-code-label">GANTI LINK DI GROUP_LINK</span>
              <a href={GROUP_LINK} className="qr-link-btn" target="_blank" rel="noopener noreferrer">
                Buka Grup &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="tag-card tag-item">
          <div className="tag-punch" />
          <div className="tag-eyebrow">Tag 02 · Pendaftaran</div>
          <div className="tag-title">Form Pendaftaran</div>
          <p className="tag-desc">
            Isi biodata singkat, kami akan menghubungimu untuk tahap berikutnya.
          </p>
          <div className="qr-box">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrUrl(FORM_LINK)} alt="QR Code Form Pendaftaran KSR" loading="lazy" />
            <div className="qr-meta">
              <span className="qr-code-label">GANTI LINK DI FORM_LINK</span>
              <a href={FORM_LINK} className="qr-link-btn" target="_blank" rel="noopener noreferrer">
                Isi Form &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-note">KSR — KORPS SUKARELA · SIAP SEDIA SIAP BERBAKTI</div>
    </section>
  );
}
