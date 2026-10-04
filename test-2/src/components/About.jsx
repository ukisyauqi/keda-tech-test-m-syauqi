import React from "react";
import {
  ArrowDownUp,
  TrendingUp,
  BarChart3,
  Check,
} from "lucide-react";

export default function About() {
  const features = [
    {
      id: "stok",
      title: "Stok Masuk-Keluar",
      badge: "Inventaris Real-Time",
      icon: ArrowDownUp,
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
      description:
        "Catat penerimaan dan pengeluaran barang otomatis dengan notifikasi saat stok menipis.",
      points: [
        "Pencatatan mutasi stok cepat",
        "Deteksi selisih barang otomatis",
        "Riwayat keluar-masuk real-time",
      ],
      preview: (
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 text-xs space-y-2 mt-4">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
            <span>Log Aktivitas</span>
            <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold text-[10px]">
              Aktif
            </span>
          </div>
          <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-100 shadow-2xs">
            <span className="font-medium text-slate-700">
              Restock Supplier #412
            </span>
            <span className="font-extrabold text-emerald-600">+250 Unit</span>
          </div>
          <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-100 shadow-2xs">
            <span className="font-medium text-slate-700">
              Pesanan Toko #8092
            </span>
            <span className="font-extrabold text-rose-500">-45 Unit</span>
          </div>
        </div>
      ),
    },
    {
      id: "laba",
      title: "Pencatatan Keuntungan Harian",
      badge: "Laba Akurat",
      icon: TrendingUp,
      iconBg: "bg-blue-50 text-blue-600 border-blue-100",
      description:
        "Hitung omzet, modal (HPP), dan laba bersih harian otomatis tanpa rekap manual.",
      points: [
        "Hitung omzet dan biaya otomatis",
        "Pantau laba bersih harian",
        "Rekap kas masuk dan piutang",
      ],
      preview: (
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 text-xs space-y-2 mt-4">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
            <span>Kalkulasi Hari Ini</span>
            <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-bold text-[10px]">
              Otomatis
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-2xs">
              <span className="text-[10px] text-slate-400 block">
                Omzet
              </span>
              <span className="font-extrabold text-slate-800 text-xs sm:text-sm">
                Rp 7.850.000
              </span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-cyan-100 bg-cyan-50/40 shadow-2xs">
              <span className="text-[10px] text-cyan-700 block">
                Laba Bersih
              </span>
              <span className="font-extrabold text-cyan-700 text-xs sm:text-sm">
                Rp 3.120.000
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "laporan",
      title: "Laporan Mudah",
      badge: "Grafik & Analisa",
      icon: BarChart3,
      iconBg: "bg-purple-50 text-purple-600 border-purple-100",
      description:
        "Pantau performa bisnis dan produk terlaris lewat grafik yang mudah dipahami.",
      points: [
        "Grafik tren penjualan harian",
        "Daftar produk terlaris",
        "Laporan ringkas siap pakai",
      ],
      preview: (
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 text-xs space-y-2 mt-4">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
            <span>Produk Terlaris</span>
            <span className="text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full font-bold text-[10px]">
              Minggu Ini
            </span>
          </div>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[10px] font-semibold mb-0.5">
                <span className="text-slate-700">1. Kopi Signature</span>
                <span className="text-slate-900">420 Cup (78%)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="bg-purple-600 h-full rounded-full"
                  style={{ width: "78%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-semibold mb-0.5">
                <span className="text-slate-700">2. Croissant Butter</span>
                <span className="text-slate-900">280 Pcs (54%)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-full rounded-full"
                  style={{ width: "54%" }}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            Tentang Kami
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ERP Praktis untuk{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Pengusaha &amp; UMKM
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Bantu pengusaha mencatat stok barang masuk-keluar dan memantau keuntungan harian secara otomatis tanpa ribet.
          </p>
        </div>

        {/* 3 Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-600">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive preview mock within card */}
                {item.preview}
              </div>
            );
          })}
        </div>

        {/* Key Values & Stats Strip */}
        <div className="p-8 lg:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="pt-4 lg:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-cyan-600">
                10.000+
              </p>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                UMKM Bergabung
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Pengguna aktif di Indonesia
              </p>
            </div>
            <div className="pt-4 lg:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">
                99.8%
              </p>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Akurasi Stok
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Bebas selisih inventaris
              </p>
            </div>
            <div className="pt-4 lg:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-indigo-600">
                15 Jam
              </p>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Hemat Waktu / Minggu
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Otomatis tanpa rekap manual
              </p>
            </div>
            <div className="pt-4 lg:pt-0">
              <p className="text-3xl sm:text-4xl font-extrabold text-purple-600">
                4.9 / 5.0
              </p>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                Rating Kepuasan
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Ulasan positif pengguna
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
