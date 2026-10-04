import React, { useState, useEffect } from "react";
import { Menu, X, LogIn, ArrowRight } from "lucide-react";

export default function Navbar({ onOpenLogin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hysteresis buffer to eliminate flickering near the top threshold
      setIsScrolled((prev) => {
        if (!prev && scrollY > 25) return true;
        if (prev && scrollY < 10) return false;
        return prev;
      });

      const sections = ["contact", "pricing", "about"];
      let current = "home";
      const scrollPosition = scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop) {
          current = section;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    window.__lastScrolledTo = id;
    setMobileMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="home"
      className={`sticky top-0 z-40 w-full transition-all duration-300 py-3.5 sm:py-4 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo + HOME */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3.5 focus:outline-none transition-transform active:scale-95 text-left"
            aria-label="Kembali ke Home"
          >
            {/* Stylized Logo circular emblem recreated from logo.png */}
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full backdrop-blur-sm border-2 shadow-md flex items-center justify-center font-bold group-hover:scale-105 transition-all duration-200 ${
                isScrolled || mobileMenuOpen
                  ? "bg-gradient-to-tr from-cyan-500 to-blue-600 border-cyan-400 text-white"
                  : "bg-white/25 border-white text-white"
              }`}
            >
              <svg
                className="w-6 h-6 text-white drop-shadow-sm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9.5" />
                <path d="M 12 2.5 C 6 3 6 10.8 12 12 C 18 13.2 18 21 12 21.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl sm:text-2xl font-black tracking-wider transition-colors ${
                  isScrolled || mobileMenuOpen
                    ? "text-slate-900"
                    : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                }`}
              >
                HOME
              </span>
              <span
                className={`text-[10px] tracking-widest font-bold uppercase -mt-1 ${
                  isScrolled || mobileMenuOpen
                    ? "text-cyan-600"
                    : "text-cyan-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                }`}
              >
                StockFlow ERP
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollTo("about")}
              className={`text-sm lg:text-base font-bold tracking-wider uppercase transition-colors hover:text-cyan-600 ${
                activeSection === "about"
                  ? "text-cyan-600 font-extrabold"
                  : "text-slate-800"
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className={`text-sm lg:text-base font-bold tracking-wider uppercase transition-colors hover:text-cyan-600 ${
                activeSection === "pricing"
                  ? "text-cyan-600 font-extrabold"
                  : "text-slate-800"
              }`}
            >
              PRICING
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className={`text-sm lg:text-base font-bold tracking-wider uppercase transition-colors hover:text-cyan-600 ${
                activeSection === "contact"
                  ? "text-cyan-600 font-extrabold"
                  : "text-slate-800"
              }`}
            >
              CONTACT
            </button>

            {/* Login Button with Sky outline matching design.png */}
            <button
              onClick={onOpenLogin}
              className="px-6 py-2 rounded-lg border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-500 hover:text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow active:scale-95 flex items-center gap-2 bg-white/70 backdrop-blur-sm"
            >
              <LogIn className="w-4 h-4" />
              <span>LOGIN</span>
            </button>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenLogin}
              className="px-3.5 py-1.5 rounded-md border border-cyan-400 text-cyan-600 font-bold text-xs uppercase bg-white/90 shadow-sm"
            >
              LOGIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 bg-white/80 hover:bg-slate-100 transition shadow-sm border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-3 animate-fadeIn">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-cyan-50 font-bold text-slate-800 text-left transition"
            >
              <span>HOME</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-cyan-50 font-bold text-slate-800 text-left transition"
            >
              <span>ABOUT</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-cyan-50 font-bold text-slate-800 text-left transition"
            >
              <span>PRICING</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-cyan-50 font-bold text-slate-800 text-left transition"
            >
              <span>CONTACT</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-center shadow-md flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk ke Akun</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
