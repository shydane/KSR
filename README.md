# KSR Landing Page (Next.js + GSAP)

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Tampilan dibatasi lebar seperti layar HP (max 430px)
lewat class `.app-frame` di `app/globals.css`.

## Yang perlu diganti sebelum publish

1. **Link QR code** — buka `components/Join.jsx`, ganti dua konstanta di paling atas:
   ```js
   const GROUP_LINK = "https://chat.whatsapp.com/GANTI-LINK-GRUP-KSR";
   const FORM_LINK = "https://forms.gle/GANTI-LINK-FORM-KSR";
   ```
   QR code otomatis ter-generate ulang karena dibuat dari URL (via `api.qrserver.com`),
   jadi cukup ganti dua baris ini.

2. **Foto kegiatan** — di `components/Gallery.jsx`, tiap item punya `<div className="g-visual">`
   berisi placeholder teks "KSR". Ganti dengan foto asli, contoh:
   ```jsx
   import Image from "next/image";
   // ...
   <div className="g-visual">
     <Image src="/foto-p3k.jpg" alt="Latihan P3K" fill style={{objectFit:"cover"}} />
   </div>
   ```
   Taruh file foto di folder `public/`.

3. **Teks/copy** — semua teks (judul, deskripsi keunggulan, dsb) masih generik,
   sesuaikan dengan info asli UKM kamu di masing-masing file component.

## Build untuk production (static export)

```bash
npm run build
```

Hasil build statis ada di folder `out/`. Karena `next.config.js` sudah diset
`output: "export"`, hasilnya HTML/CSS/JS murni — cocok di-deploy ke CDN
(Vercel, Cloudflare Pages, Netlify) supaya kuat menahan banyak user yang
scan QR code secara bersamaan.

### Deploy ke Vercel (paling gampang)
```bash
npm install -g vercel
vercel
```

### Deploy ke Cloudflare Pages
Upload folder `out/` hasil build, atau hubungkan repo GitHub-nya langsung
lewat dashboard Cloudflare Pages (build command: `npm run build`, output
directory: `out`).

## Struktur folder

```
app/
  layout.jsx      -> setup font (Fraunces, Inter, IBM Plex Mono)
  page.jsx         -> merangkai 4 section
  globals.css       -> semua styling + palet warna
components/
  Hero.jsx          -> section 1: ucapan selamat datang
  Gallery.jsx        -> section 2: galeri geser dari samping saat scroll
  Features.jsx        -> section 3: keunggulan UKM
  Join.jsx             -> section 4: 2 QR code (grup & form pendaftaran)
```

## Palet warna

Merah-putih ala PMI, merah cenderung tua (`--red-900: #6e0e1b` sebagai warna
dominan). Semua variabel warna ada di `app/globals.css` bagian `:root`,
tinggal edit di situ kalau mau tweak lagi.
# KSR
