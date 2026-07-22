"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Pelatihan Bersertifikat",
    desc: "Pertolongan pertama, evakuasi, dan manajemen bencana dari instruktur berpengalaman.",
    icon: (
      <path d="M12 21s-7-4.6-9.3-9.1C1.2 8.4 3 5 6.4 5c1.9 0 3.2 1 4.1 2.2C11.4 6 12.7 5 14.6 5 18 5 19.8 8.4 18.3 11.9 16 16.4 12 21 12 21z" />
    ),
  },
  {
    title: "Relasi Lintas Angkatan",
    desc: "Terhubung dengan senior dan alumni yang tersebar di berbagai bidang dan instansi.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6" />
        <circle cx="17" cy="7" r="2.4" />
        <path d="M15.5 14.2c2.6.3 5 2.3 5.5 5.3" />
      </>
    ),
  },
  {
    title: "Poin Kegiatan & SKPI",
    desc: "Setiap penugasan lapangan tercatat dan mendukung portofolio non-akademikmu.",
    icon: <path d="M4 12l5 5L20 6" />,
  },
  {
    title: "Pengalaman Nyata",
    desc: "Turun langsung dalam bakti sosial, siaga bencana, dan kegiatan kampus berskala besar.",
    icon: (
      <path d="M12 3l2.6 5.4 6 .8-4.3 4.1 1 5.9L12 16.9 6.7 19.2l1-5.9L3.4 9.2l6-.8L12 3z" />
    ),
  },
];

export default function Features() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".features-head > *", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".features-head",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".fx-item", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".feature-list",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="features">
      <div className="features-head">
        <div className="eyebrow">Mengapa KSR</div>
        <h2 className="features-title">Empat alasan bergabung bersama kami.</h2>
        <p className="features-sub">
          Bukan sekadar organisasi, tapi ruang belajar keterampilan yang terpakai
          seumur hidup.
        </p>
      </div>

      <div className="feature-list">
        {features.map((f) => (
          <div key={f.title} className="feature-item fx-item">
            <div className="feature-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {f.icon}
              </svg>
            </div>
            <div className="feature-body">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
