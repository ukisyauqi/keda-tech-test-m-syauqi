import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function Hero({ onOpenLogin, onSelectPricing }) {
  return (
    <section className="relative overflow-hidden -mt-[70px] sm:-mt-[76px] pt-28 pb-20 md:pt-36 md:pb-28 lg:pb-36 min-h-screen flex items-center isolate bg-white">
      {/* 1. TOP-LEFT CYAN/SKY BLOB (design.png inspiration) - Starts at (0,0) under the navbar */}
      <div
        className="absolute top-0 left-0 w-[320px] sm:w-[360px] lg:w-[540px] h-[140px] sm:h-[180px] lg:h-[180px] pointer-events-none z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 680 520"
          className="w-full h-full fill-none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="topLeftBlobGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.98" />
              <stop offset="40%" stopColor="#00B4D8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.92" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Exact smooth convex wave sweeping down from top-left */}
          <path
            d="M 0,0
               L 580,0
               C 500,130 390,210 280,250
               C 160,300 60,390 0,520
               Z"
            fill="url(#topLeftBlobGrad)"
            filter="url(#softGlow)"
          />
        </svg>
      </div>
      {/* 2. BOTTOM-RIGHT ROYAL BLUE TO PURPLE BLOB + 2 FLOATING BUBBLES (design.png inspiration) */}
      <div
        className="absolute bottom-0 right-0 w-[460px] sm:w-[720px] lg:w-[900px] h-[360px] sm:h-[520px] lg:h-[640px] pointer-events-none z-0 select-none overflow-visible"
        aria-hidden="true"
      >
        {/* Floating Bubble 1 (Lower, larger, blue) */}
        <div
          className="absolute w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-2xl opacity-90 animate-float-slow"
          style={{ bottom: "42%", left: "36%" }}
        />

        {/* Floating Bubble 2 (Upper-right, smaller, purple) */}
        <div
          className="absolute w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-400 shadow-xl opacity-85 animate-float-delayed"
          style={{ bottom: "60%", right: "22%" }}
        />

        {/* Organic Multi-Crest Wavy Blob */}
        <svg
          viewBox="0 0 900 600"
          className="w-full h-full fill-none drop-shadow-2xl"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="bottomRightBlobGrad"
              x1="0%"
              y1="40%"
              x2="100%"
              y2="80%"
            >
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="40%" stopColor="#4F46E5" />
              <stop offset="75%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>
          <path
            d="M 120,600
               C 100,450 180,380 320,390
               C 440,400 520,320 620,310
               C 740,300 830,220 900,180
               L 900,600
               Z"
            fill="url(#bottomRightBlobGrad)"
          />
        </svg>
      </div>
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      {/*
        ========================================================================
        HERO CONTENT CONTAINER
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Two-Column Grid: Left Headline & CTA, Right Interactive ERP Tablet Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols): Main Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Kelola Stok &amp; <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Keuntungan Bisnis Anda
              </span>{" "}
              dalam Satu Dashboard
            </h1>

            <p className="text-slate-600 text-base sm:text-lg sm:leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Catat barang masuk-keluar dan pantau keuntungan harian secara
              real-time. Praktis, akurat, dan mudah digunakan untuk bisnis Anda.
            </p>

            {/* 2 CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenLogin}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Mulai Gratis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onSelectPricing}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-400 font-bold text-base shadow-sm hover:shadow active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Lihat Harga</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Tanpa Kartu Kredit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-500" />
                <span>Setup 3 Menit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-semibold text-slate-700">
                  10.000+ UMKM Aktif
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
