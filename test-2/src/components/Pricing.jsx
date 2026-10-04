import React, { useState } from "react";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";

export default function Pricing({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' | 'yearly'
  const [selectedPlanModal, setSelectedPlanModal] = useState(null);

  const tiers = [
    {
      id: "basic",
      name: "TIER 1 / Basic",
      subtitle: "Untuk usaha rintisan",
      monthlyPrice: 49000,
      yearlyPrice: 39000,
      popular: false,
      badge: null,
      features: [
        { text: "Mencatat barang masuk", included: true },
        { text: "Mencatat barang keluar", included: true },
        { text: "Mencatat hasil keuntungan", included: true },
        { text: "Analisa penjualan dengan CHART", included: false },
        { text: "Support 7x24 Jam", included: false },
        { text: "Export data ke Excel", included: false },
        { text: "AI Prediksi penghasilan", included: false },
      ],
      buttonText: "Pilih Paket",
      buttonStyle:
        "bg-slate-100 hover:bg-cyan-50 text-slate-800 hover:text-cyan-700 border border-slate-200",
    },
    {
      id: "business",
      name: "TIER 2 / Business",
      subtitle: "Paling laris untuk bisnis berkembang",
      monthlyPrice: 149000,
      yearlyPrice: 119000,
      popular: true,
      badge: "POPULAR",
      features: [
        { text: "Mencatat barang masuk dan keluar", included: true },
        { text: "Mencatat Keuntungan", included: true },
        { text: "Analisa penjualan dengan CHART", included: true },
        { text: "Support 7x24 Jam", included: true },
        { text: "Export data ke Excel", included: false },
        { text: "AI Prediksi penghasilan", included: false },
      ],
      buttonText: "Pilih Paket",
      buttonStyle:
        "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:opacity-95",
    },
    {
      id: "entrepreneur",
      name: "TIER 3 / Entrepreneur",
      subtitle: "Fitur lengkap untuk bisnis berkembang pesat",
      monthlyPrice: 299000,
      yearlyPrice: 239000,
      popular: false,
      badge: "LENGKAP",
      features: [
        { text: "Mencatat barang masuk dan keluar", included: true },
        { text: "Mencatat Keuntungan", included: true },
        { text: "Analisa penjualan dengan CHART", included: true },
        { text: "Support 7x24 Jam", included: true },
        { text: "Export data ke Excel", included: true },
        { text: "AI Prediksi penghasilan", included: true },
      ],
      buttonText: "Pilih Paket",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white shadow-md",
    },
  ];

  const formatRupiah = (num) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleChoosePlan = (tier) => {
    setSelectedPlanModal(tier);
    if (onSelectPlan) {
      onSelectPlan(tier);
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background Decorative subtle ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            Pilihan Harga
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Pilih Paket Sesuai Kebutuhanmu
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Mulai kelola bisnis lebih rapi dengan biaya terjangkau. Upgrade kapan saja.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === "yearly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Tahunan</span>
              <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                Hemat 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards: Side by side desktop, stack vertical on mobile. Tier 2 highlighted without scale up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier) => {
            const price =
              billingCycle === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-b from-white to-cyan-50/30 border-2 border-cyan-500 shadow-xl ring-4 ring-cyan-500/10"
                    : "bg-white border border-slate-200/90 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Popular Badge without disruptive scaling */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cyan-200" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                {!tier.popular && tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-slate-800 text-slate-100 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Subtitle */}
                  <div className="mb-6 pt-2">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Price display */}
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        {formatRupiah(price)}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        /bulan
                      </span>
                    </div>
                    {billingCycle === "yearly" && (
                      <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                        Ditagih tahunan (hemat 20%)
                      </p>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                      Fitur:
                    </p>
                    <ul className="space-y-3 text-sm">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                              <X className="w-3.5 h-3.5" />
                            </div>
                          )}
                          <span
                            className={
                              feature.included
                                ? "text-slate-700 font-medium"
                                : "text-slate-400 line-through text-xs sm:text-sm"
                            }
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleChoosePlan(tier)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${tier.buttonStyle}`}
                >
                  <span>{tier.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Plan Feedback Modal */}
      {selectedPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 text-center animate-scaleUp">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Paket Telah Dipilih
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Anda memilih{" "}
              <span className="font-extrabold text-cyan-600">
                {selectedPlanModal.name}
              </span>{" "}
              (
              <span className="font-bold text-slate-800">
                {formatRupiah(
                  billingCycle === "monthly"
                    ? selectedPlanModal.monthlyPrice
                    : selectedPlanModal.yearlyPrice,
                )}
              </span>
              /bln).
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 mb-6 text-left space-y-1.5 border border-slate-200">
              <p className="font-bold text-slate-700">Langkah berikutnya:</p>
              <p>1. Uji coba gratis 14 hari langsung aktif.</p>
              <p>2. Akses seluruh fitur paket tanpa kartu kredit.</p>
            </div>
            <button
              onClick={() => setSelectedPlanModal(null)}
              className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-md"
            >
              Lanjutkan
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
