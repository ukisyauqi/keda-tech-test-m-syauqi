# StockFlow ERP — Landing Page

Landing page single-page untuk **StockFlow ERP**, aplikasi pengelolaan stok & keuntungan bisnis. Berisi section Navbar, Hero, About (fitur), Pricing (tier paket), Contact, Footer, dan Login Modal.

Dibangun dengan **React + Vite + Tailwind CSS + DaisyUI**.

---

## ✨ Fitur

- **Sticky Navbar** dengan efek glassmorphism saat scroll + mobile menu responsif.
- **Hero Section** full-screen dengan blob gradien, badge, CTA, dan social proof.
- **About / Fitur** — penjelasan pencatatan barang masuk/keluar, analisa chart, AI prediksi.
- **Pricing** — 3 tier (Basic / Business / Entrepreneur) dengan toggle bulanan/tahunan + modal detail paket.
- **Contact** — form kontak + info kontak perusahaan.
- **Login Modal** — modal login global yang bisa dibuka dari Navbar & Hero.
- **Responsif penuh** (mobile → desktop) dan smooth-scroll antar section.

---

## 🛠️ Tech Stack

| Teknologi | Versi | Fungsi |
|---|---|---|
| React | ^19.3.0 | Library UI utama |
| React DOM | ^19.3.0 | Renderer React ke DOM |
| Vite | ^8.3.2 | Build tool & dev server |
| @vitejs/plugin-react | ^6.1.1 | Integrasi React (Fast Refresh, JSX) untuk Vite |
| Tailwind CSS | ^3.4.19 | Utility-first CSS framework |
| DaisyUI | ^4.12.24 | Komponen UI siap pakai berbasis Tailwind |
| PostCSS + Autoprefixer | ^8.5.28 / ^10.6.1 | Pemrosesan CSS Tailwind & vendor prefix otomatis |
| Lucide React | ^1.51.0 | Ikon SVG |
| Plus Jakarta Sans (Google Fonts) | — | Tipografi utama |

---

## 💡 Alasan Pemilihan Teknologi

### 1. React — Library UI Berbasis Komponen
- **Alasan:** UI landing page ini terdiri dari banyak section berulang (Navbar, Hero, About, Pricing, Contact, Footer, LoginModal). React memungkinkan setiap section dijadikan komponen terpisah di `src/components/`, sehingga kode mudah dibaca, dirawat, dan dipakai ulang.
- **State management lokal yang sederhana:** kebutuhan state hanya `loginModalOpen`, `billingCycle`, dan `selectedPlan` — cukup ditangani `useState` tanpa perlu Redux/Zustand.
- **Ekosistem besar:** mudah mencari library pendukung (ikon, UI kit) dan mudah direkrut/dipelajari tim baru.
- **Alternatif yang dipertimbangkan:** HTML/CSS/JS murni (ditolak karena sulit dirawat saat section bertambah) dan Next.js (berlebihan / overkill karena ini halaman statis tanpa SSR, routing server, atau kebutuhan SEO server-side yang kompleks).

### 2. Vite — Build Tool & Dev Server
- **Alasan:** Dev server sangat cepat (ESM native + HMR instan) dibanding Create React App / Webpack, sehingga edit komponen langsung terlihat tanpa reload lama.
- **Build produksi optimal:** output berupa file statis kecil hasil code-splitting dan minifikasi otomatis, cocok untuk hosting murah (Vercel, Netlify, Nginx statis).
- **Konfigurasi minimal:** cukup `vite.config.js` + plugin React, tidak perlu setup Webpack/Babel manual.
- **Alternatif yang dipertimbangkan:** CRA (sudah deprecated & lambat) dan Next.js (menambah kompleksitas server padahal hanya butuh SPA statis).

### 3. Tailwind CSS — Utility-First Styling
- **Alasan:** Styling landing page yang kaya gradien, blob SVG, animasi float, dan layout responsif bisa ditulis langsung di `className` tanpa file CSS terpisah per komponen.
- **Konsistensi desain:** token warna brand (`brand.cyan`, `brand.blue`, dll.) dan font (`Plus Jakarta Sans`) didefinisikan sekali di `tailwind.config.js`, lalu dipakai di semua komponen.
- **Responsif cepat:** breakpoint `sm:`, `md:`, `lg:` mempermudah penyesuaian mobile → desktop tanpa media query manual.
- **Purge otomatis:** kelas yang tidak dipakai dibuang saat build, sehingga CSS produksi kecil.
- **Alternatif yang dipertimbangkan:** Bootstrap (terlihat generik & sulit kustom blob/animasi), CSS Module / styled-components (menambah file & runtime JS yang tidak perlu untuk halaman statis).

### 4. DaisyUI — Komponen UI di atas Tailwind
- **Alasan:** Menyediakan komponen siap pakai (button, card, modal, badge, form) dengan theming (`data-theme="light"`, custom `primary/secondary/accent` di `tailwind.config.js`), sehingga tidak perlu membangun modal login, kartu pricing, dan form dari nol.
- **Tetap Tailwind:** semua komponen DaisyUI masih bisa dioverride dengan kelas Tailwind biasa, jadi fleksibilitas tidak hilang.
- **Alternatif yang dipertimbangkan:** Material UI / Ant Design (bundle berat, gaya visual kaku, dan memaksa design system sendiri) dan Headless UI / Radix (lebih fleksibel tapi butuh styling manual dari nol → lebih lama).

### 5. Lucide React — Ikon SVG
- **Alasan:** Ikon vektor yang ringan, konsisten, dan mudah dipakai sebagai komponen React (`<ArrowRight />`, `<Check />`, `<ShieldCheck />`), tanpa perlu file SVG manual atau font ikon.
- **Tree-shakeable:** hanya ikon yang diimpor yang masuk bundle, sehingga tidak membengkakkan ukuran aplikasi.
- **Alternatif yang dipertimbangkan:** React Icons / Font Awesome (bundle lebih besar, gaya ikon tidak konsisten) dan SVG inline manual (sulit dirawat dan duplikatif).

### 6. PostCSS + Autoprefixer — Pemrosesan CSS
- **Alasan:** Wajib sebagai pendamping Tailwind CSS untuk memproses direktif `@tailwind` di `src/index.css` dan menambahkan vendor prefix (`-webkit-`, dll.) otomatis agar `backdrop-filter` (efek glassmorphism) dan animasi berjalan di semua browser modern.
- Ini adalah pasangan standar yang direkomendasikan dokumentasi Tailwind, jadi minim risiko konfigurasi.

### 7. Plus Jakarta Sans (Google Fonts) — Tipografi
- **Alasan:** Font modern, geometris, dan sangat terbaca untuk produk SaaS/ERP Indonesia; mendukung karakter Latin Indonesia dengan baik dan memiliki banyak weight (400–800) untuk hierarki heading vs body.
- Dimuat via Google Fonts CDN di `index.html` dengan `preconnect` agar loading cepat tanpa menambah bundle aplikasi.

---

## 📁 Struktur Proyek

```
test-2/
├── index.html              # Entry HTML, judul, font, <div id="root">
├── vite.config.js          # Konfigurasi Vite + plugin React
├── tailwind.config.js      # Token warna brand, font, animasi, tema DaisyUI
├── postcss.config.js       # Konfigurasi PostCSS (Tailwind + Autoprefixer)
├── package.json            # Dependensi & script npm
└── src/
    ├── main.jsx            # Entry React (ReactDOM.createRoot)
    ├── App.jsx             # Komposisi section + state loginModalOpen
    ├── index.css           # Direktif Tailwind + helper glassmorphism/animasi
    └── components/
        ├── Navbar.jsx      # Navigasi sticky + tombol login
        ├── Hero.jsx        # Hero full-screen + CTA
        ├── About.jsx       # Section fitur/tentang produk
        ├── Pricing.jsx     # Tier paket + toggle billing + modal detail
        ├── Contact.jsx     # Form & info kontak
        ├── LoginModal.jsx  # Modal login global
        └── Footer.jsx      # Footer + link
```

---

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js 18+ (disarankan LTS) dan npm.

### 1. Install dependensi
```bash
npm install
```

### 2. Jalankan mode development
```bash
npm run dev
```
Buka http://localhost:5173 di browser.

### 3. Build untuk produksi
```bash
npm run build
```
Hasil build ada di folder `dist/` dan siap di-host sebagai situs statis.

### 4. Preview hasil build (opsional)
```bash
npm run preview
```

---

## 🎨 Kustomisasi Cepat

- **Warna brand & tema:** ubah `theme.extend.colors.brand` dan blok `daisyui.themes` di `tailwind.config.js`.
- **Font:** ganti link Google Fonts di `index.html` dan `fontFamily.sans` di `tailwind.config.js`.
- **Harga paket:** ubah array `tiers` di `src/components/Pricing.jsx` (`monthlyPrice` / `yearlyPrice` / `features`).
- **Animasi:** keyframes `float`, `pulseSlow`, `blobDrift` ada di `tailwind.config.js`; helper `glass-nav` / `glass-card` ada di `src/index.css`.

---

## 📝 Catatan Pengembangan

- Proyek ini adalah **front-end statis** (landing page). Aksi `handleSelectPlan` di `App.jsx` dan form login/kontak saat ini hanya `console.log` / UI — belum terhubung ke backend/API.
- Untuk integrasi backend selanjutnya, yang dibutuhkan hanya mengganti handler tersebut dengan `fetch`/`axios` ke endpoint auth, pricing/checkout, dan contact.
