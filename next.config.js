/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: hasil build jadi HTML/CSS/JS murni, cocok di-host di CDN
  // (Vercel, Cloudflare Pages, dll) supaya kuat menahan banyak user diakses
  // bersamaan (misalnya ratusan maba scan QR setelah pertunjukan).
  output: "export",

  // Next/Image butuh server untuk optimasi otomatis. Karena kita full static
  // export, matikan optimasi bawaan (tetap kompres manual gambar sebelum upload).
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
