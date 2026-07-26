"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Ganti/tambah pertanyaan di sini sesuai kebutuhan.
const faqs = [
  {
    q: "Siapa saja yang boleh mendaftar jadi anggota KSR?",
    a: "Seluruh mahasiswa aktif semester 1-3, tanpa syarat jurusan tertentu. Yang penting punya niat belajar dan mau berkomitmen mengikuti pelatihan dasar.",
  },
  {
    q: "Apakah ada biaya pendaftaran?",
    a: "Tidak ada biaya pendaftaran. Seluruh proses seleksi dan pelatihan dasar ditanggung oleh organisasi.",
  },
  {
    q: "Bagaimana alur seleksinya?",
    a: "Setelah mengisi form pendaftaran, kamu akan dihubungi lewat grup untuk info jadwal wawancara singkat dan pelatihan dasar sebelum resmi dilantik jadi anggota.",
  },
  {
    q: "Apakah kegiatan KSR mengganggu jadwal kuliah?",
    a: "Jadwal latihan dan penugasan kami atur fleksibel di luar jam kuliah. Kamu juga bebas menyesuaikan intensitas keterlibatan sesuai kesibukan masing-masing.",
  },
];

export default function FAQ() {
  const container = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useGSAP(
    () => {
      gsap.from(".faq-head > *", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".faq-head",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".faq-item", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  const toggle = (index) => {
    const isOpening = openIndex !== index;
    const currentAnswer = document.querySelector(`[data-answer="${index}"]`);
    const currentIcon = document.querySelector(`[data-icon="${index}"]`);

    // Tutup jawaban yang sebelumnya kebuka (kalau beda index)
    if (openIndex !== null && openIndex !== index) {
      const prevAnswer = document.querySelector(`[data-answer="${openIndex}"]`);
      const prevIcon = document.querySelector(`[data-icon="${openIndex}"]`);
      gsap.to(prevAnswer, { height: 0, opacity: 0, duration: 0.35, ease: "power2.inOut" });
      gsap.to(prevIcon, { rotate: 0, duration: 0.35, ease: "power2.inOut" });
    }

    gsap.to(currentAnswer, {
      height: isOpening ? "auto" : 0,
      opacity: isOpening ? 1 : 0,
      duration: 0.35,
      ease: "power2.inOut",
    });
    gsap.to(currentIcon, { rotate: isOpening ? 45 : 0, duration: 0.35, ease: "power2.inOut" });

    setOpenIndex(isOpening ? index : null);
  };

  return (
    <section ref={container} className="faq">
      <div className="faq-head">
        <div className="eyebrow">Sering Ditanyakan</div>
        <h2 className="faq-title">Masih ada yang mengganjal?</h2>
        <p className="faq-sub">Beberapa pertanyaan yang paling sering muncul dari calon anggota.</p>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={item.q} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.q}</span>
              <span className="faq-icon" data-icon={index}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className="faq-answer" data-answer={index}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}