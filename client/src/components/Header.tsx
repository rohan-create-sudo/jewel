import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Craftsmanship", href: "#craftsmanship" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-md py-4 border-b border-[#2a2a2a]" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl md:text-3xl tracking-widest text-white hover:opacity-80 transition-opacity">
          REVA
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-gray-300 hover:text-[#d4af37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm uppercase tracking-widest border border-[#d4af37] text-[#d4af37] px-6 py-2 hover:bg-[#d4af37] hover:text-black transition-all duration-300"
          >
            Bespoke
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center space-y-8 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
        style={{ top: '72px', height: 'calc(100vh - 72px)' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif tracking-widest text-white hover:text-[#d4af37] transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
