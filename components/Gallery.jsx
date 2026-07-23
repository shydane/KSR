"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Placeholder ilustrasi (langit + awan + bukit) - dipakai otomatis kalau
// sebuah foto belum diisi field `src`-nya.
function PhotoArt() {
  return (
    <svg
      viewBox="0 0 200 150"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="150" fill="#cfe9f7" />
      <ellipse cx="55" cy="34" rx="24" ry="13" fill="#ffffff" />
      <ellipse cx="76" cy="27" rx="17" ry="11" fill="#ffffff" />
      <ellipse cx="150" cy="24" rx="20" ry="11" fill="#ffffff" opacity="0.9" />
      <path d="M0 108 Q50 82 100 104 T200 96 V150 H0 Z" fill="#8fc94a" />
      <path d="M0 122 Q60 102 120 122 T200 112 V150 H0 Z" fill="#6fae3a" />
    </svg>
  );
}

// top & edge dalam px. edge = jarak dari sisi (left untuk kolom kiri, right untuk kolom kanan),
// nilai negatif artinya foto sedikit "bleed" keluar tepi layar, seperti pada referensi.
//
// CARA MASUKKAN FOTO ASLI:
// 1. Taruh file foto di folder public/gallery/, misal: public/gallery/p3k-1.jpg
// 2. Isi field `src` di bawah dengan path-nya, contoh: src: "/gallery/p3k-1.jpg"
// 3. Isi juga `alt` dengan deskripsi singkat foto tsb (penting untuk aksesibilitas & SEO)
// Kalau `src` dibiarkan kosong/undefined, otomatis pakai placeholder ilustrasi.
const leftPhotos = [
  {
    id: "l1",
    top: 0,
    edge: -24,
    rotate: -9,
    shape: "shape-a",
    src: "/gallery/delegasi.jpg",
    alt: "",
  },
  {
    id: "l2",
    top: 165,
    edge: -52,
    rotate: 6,
    shape: "shape-b",
    src: "/gallery/delegasi2.jpg",
    alt: "",
  },
  {
    id: "l3",
    top: 330,
    edge: -50,
    rotate: -6,
    shape: "shape-c",
    src: "/gallery/delegasi3.jpg",
    alt: "",
  },
  {
    id: "l4",
    top: 495,
    edge: -26,
    rotate: 8,
    shape: "shape-a",
    src: "/gallery/delegasi4.jpg",
    alt: "",
  },
];

const rightPhotos = [
  {
    id: "r1",
    top: 40,
    edge: -24,
    rotate: 8,
    shape: "shape-b",
    src: "/gallery/delegasi5.jpg",
    alt: "",
  },
  {
    id: "r2",
    top: 205,
    edge: -54,
    rotate: -7,
    shape: "shape-c",
    src: "/gallery/delegasi6.jpg",
    alt: "",
  },
  {
    id: "r3",
    top: 370,
    edge: -52,
    rotate: 9,
    shape: "shape-a",
    src: "/gallery/delegasi7.jpg",
    alt: "",
  },
  {
    id: "r4",
    top: 535,
    edge: -24,
    rotate: -8,
    shape: "shape-b",
    src: "",
    alt: "",
  },
];

function PhotoCard({ p, side }) {
  return (
    <div
      className={`g-photo g-photo-${side} ${p.shape}`}
      style={{ top: p.top, [side]: p.edge }}
      data-rotate={p.rotate}
    >
      {p.src ? (
        <Image
          src={p.src}
          alt={p.alt || "Dokumentasi kegiatan KSR"}
          fill
          sizes="168px"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <PhotoArt />
      )}
    </div>
  );
}

export default function Gallery() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Set rotasi akhir tiap foto lewat GSAP dulu (bukan CSS), supaya nanti
      // saat animasi geser (x) dijalankan, rotasinya tidak ke-reset/hilang.
      gsap.utils.toArray(".g-photo").forEach((el) => {
        gsap.set(el, { rotation: parseFloat(el.dataset.rotate) });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery-stage",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out", duration: 1.1 },
      });

      // Sama seperti sebelumnya: tak terlihat -> muncul dari samping,
      // berbarengan dengan teks "Our Gallery", baru jalan ketika discroll ke sini.
      tl.from(".g-photo-left", { x: -140, opacity: 0, stagger: 0.12 })
        .from(".g-photo-right", { x: 140, opacity: 0, stagger: 0.12 }, "<")
        .from(".gallery-headline", { opacity: 0, y: 12 }, "<0.15")
        .from(".gallery-caption", { opacity: 0, y: 10 }, "<0.1");
    },
    { scope: container },
  );

  return (
    <section ref={container} className="gallery" id="gallery">
      <div className="gallery-stage">
        {leftPhotos.map((p) => (
          <PhotoCard key={p.id} p={p} side="left" />
        ))}

        {rightPhotos.map((p) => (
          <PhotoCard key={p.id} p={p} side="right" />
        ))}

        <div className="gallery-center">
          <div className="gallery-headline">Our Gallery</div>
          <p className="gallery-caption">
            Momen dari setiap penugasan lapangan kami.
          </p>
        </div>
      </div>
    </section>
  );
}
