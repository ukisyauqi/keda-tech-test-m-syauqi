import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Nama wajib diisi";
    }
    if (!formData.email.trim()) {
      errs.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Format email tidak valid";
    }
    if (!formData.message.trim()) {
      errs.message = "Pesan wajib diisi";
    } else if (formData.message.trim().length < 8) {
      errs.message = "Pesan minimal 8 karakter";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            Kontak Kami
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Kami
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Punya pertanyaan seputar fitur atau paket StockFlow ERP? Tim kami
            siap membantu Anda.
          </p>
        </div>

        {/* Two Column Layout: Left Dummy Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* Left Column (5 cols): Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
                Informasi Kontak
              </h3>

              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex items-start gap-2">
                  <div className="w-10 h-12 text-cyan-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:halo@stockflow.id"
                      className="text-sm sm:text-base font-bold text-slate-800 hover:text-cyan-600 transition"
                    >
                      halo@stockflow.id
                    </a>
                    <p className="text-xs text-slate-500">
                      Respon dalam &lt; 2 jam kerja
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-2">
                  <div className="w-10 h-12 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <a
                      href="tel:+6281234567890"
                      className="text-sm sm:text-base font-bold text-slate-800 hover:text-blue-600 transition"
                    >
                      +62 812-3456-7890
                    </a>
                    <p className="text-xs text-slate-500">
                      Konsultasi langsung via chat
                    </p>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-start gap-2">
                  <div className="w-10 h-12 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Alamat Kantor
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      Menara Digital Lt. 12
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      Jl. Jendral Sudirman Kav. 28, Jakarta Selatan 12920
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <div className="w-10 h-12 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Jam Operasional
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      Senin – Minggu: 08.00 – 22.00 WIB
                    </p>
                    <p className="text-xs text-emerald-600 font-semibold">
                      Dukungan 24/7 untuk pengguna aktif
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ Mini Accordion */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 space-y-3">
              <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-cyan-600" />
                Pertanyaan Umum
              </h4>

              <div className="collapse collapse-arrow bg-slate-50 border border-slate-100 rounded-xl text-xs">
                <input type="radio" name="faq-accordion" defaultChecked />
                <div className="collapse-title font-bold text-slate-800 py-3 text-xs">
                  Apakah ada uji coba gratis?
                </div>
                <div className="collapse-content text-slate-600 text-xs leading-relaxed">
                  <p>
                    Ya, tersedia uji coba gratis 14 hari untuk seluruh fitur
                    tanpa perlu kartu kredit.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-slate-50 border border-slate-100 rounded-xl text-xs">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-bold text-slate-800 py-3 text-xs">
                  Bisa diakses dari HP atau tablet?
                </div>
                <div className="collapse-content text-slate-600 text-xs leading-relaxed">
                  <p>
                    Bisa, StockFlow berbasis cloud dan dapat dibuka langsung
                    lewat browser HP, tablet, maupun PC.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-slate-50 border border-slate-100 rounded-xl text-xs">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title font-bold text-slate-800 py-3 text-xs">
                  Apakah data stok saya aman?
                </div>
                <div className="collapse-content text-slate-600 text-xs leading-relaxed">
                  <p>
                    Aman, data dienkripsi dengan standar SSL 256-bit dan
                    dicadangkan otomatis secara berkala.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80">
              {submitSuccess ? (
                /* Success State Banner & Feedback */
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Pesan Berhasil Terkirim!
                  </h3>
                  <div className="max-w-md mx-auto bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-600 text-xs sm:text-sm text-left space-y-2">
                    <p className="font-bold text-slate-800">Detail Pesan:</p>
                    <p>
                      <span className="text-slate-400">Pengirim:</span>{" "}
                      {formData.name}
                    </p>
                    <p>
                      <span className="text-slate-400">Email:</span>{" "}
                      {formData.email}
                    </p>
                    <p>
                      <span className="text-slate-400">Isi:</span> "
                      {formData.message}"
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto">
                    Terima kasih telah menghubungi kami. Tim StockFlow akan
                    segera merespons pesan Anda.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition"
                  >
                    Kirim Pesan Baru
                  </button>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                      Kirim Pesan
                    </h3>
                    <p className="text-xs text-slate-500">
                      Isi formulir di bawah ini dan kami akan segera membalas
                      pesan Anda.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                          : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100 bg-slate-50/50 focus:bg-white"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Alamat Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                          : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100 bg-slate-50/50 focus:bg-white"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Pesan Pertanyaan <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tuliskan pertanyaan atau kebutuhan bisnis Anda..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 resize-none ${
                        errors.message
                          ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                          : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100 bg-slate-50/50 focus:bg-white"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:opacity-95 active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner loading-sm" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Pesan</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-400">
                    Data Anda aman dan terjaga kerahasiaannya.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
