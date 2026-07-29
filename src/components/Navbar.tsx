import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Home is dark from the top; inner pages are light until scrolled
  const lightText = isHome;
  const barClass = scrolled
    ? isHome
      ? 'bg-[#100F0C]/90 backdrop-blur-md border-b border-[#E9E1CE]/10'
      : 'bg-white/95 backdrop-blur-md border-b border-neutral-200'
    : 'bg-transparent border-b border-transparent';

  const textColor = lightText ? 'text-[#E9E1CE]' : 'text-[#1A1A1A]';
  const dimText = lightText ? 'text-[#E9E1CE]/50' : 'text-neutral-400';
  const hoverText = lightText
    ? 'hover:text-[#C9A24B]'
    : 'hover:text-[#1A1A1A]';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${barClass}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className={`font-display text-2xl tracking-wide transition-colors ${textColor}`}>
              Raaha
            </span>
            <span className={`font-arabic text-lg leading-none transition-colors ${lightText ? 'text-[#C9A24B]' : 'text-[#C9A24B]'}`}>
              راحة
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[12px] font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${
                  location.pathname === link.path ? textColor : `${dimText} ${hoverText}`
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservation"
              className={`ml-2 px-5 py-2 text-[12px] font-medium tracking-[0.18em] uppercase rounded-full transition-colors duration-200 ${
                lightText
                  ? 'bg-[#C9A24B] text-[#161411] hover:bg-[#d8b566]'
                  : 'bg-[#1A1A1A] text-white hover:bg-neutral-800'
              }`}
            >
              Reserve
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden border-t ${
            isHome
              ? 'bg-[#100F0C]/97 backdrop-blur-xl border-[#E9E1CE]/10'
              : 'bg-white border-neutral-200'
          }`}
        >
          <div className="px-5 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-sm font-medium tracking-[0.18em] uppercase ${
                  location.pathname === link.path ? textColor : dimText
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservation"
              className={`inline-block mt-2 px-6 py-2.5 text-sm font-medium tracking-[0.18em] uppercase rounded-full ${
                lightText
                  ? 'bg-[#C9A24B] text-[#161411]'
                  : 'bg-[#1A1A1A] text-white'
              }`}
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
