import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#100F0C] text-[#E9E1CE] border-t border-[#E9E1CE]/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-10">
        {/* Top row — brand + arabic mark */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b border-[#E9E1CE]/10">
          <div>
            <Link to="/" className="flex items-baseline gap-3 mb-3">
              <span className="font-display text-4xl sm:text-5xl tracking-wide">Raaha</span>
              <span className="font-arabic text-2xl text-[#C9A24B]">راحة</span>
            </Link>
            <p className="text-[#E9E1CE]/40 text-sm max-w-xs leading-relaxed">
              Middle Eastern grill & fine dining in the heart of Madurai. Fire-grilled flavor, generous hospitality.
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-1">Reservations</p>
            <a href="tel:+918681992233" className="font-display text-2xl text-[#C9A24B] hover:text-[#d8b566] transition-colors">
              +91 86819 92233
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12">
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' },
                { name: 'Reservations', path: '/reservation' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[#E9E1CE]/55 text-sm hover:text-[#C9A24B] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-4">Find Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24B]/70 mt-0.5 shrink-0" />
                <span className="text-[#E9E1CE]/55 text-sm leading-relaxed">
                  14, Gokhale Rd, Chinna Chokikulam, Madurai 625002
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A24B]/70 shrink-0" />
                <a href="tel:+918681992233" className="text-[#E9E1CE]/55 text-sm hover:text-[#C9A24B] transition-colors">
                  +91 86819 92233
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A24B]/70 shrink-0" />
                <span className="text-[#E9E1CE]/55 text-sm">Open daily · Until 11:30 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Dine-In', 'Drive-Through', 'Delivery', 'Takeaway', 'Catering', 'Private Dining'].map((s) => (
                <li key={s} className="text-[#E9E1CE]/55 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#E9E1CE]/30 mb-4">Follow</h4>
            <ul className="space-y-2.5">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E9E1CE]/55 text-sm hover:text-[#C9A24B] transition-colors">Instagram ↗</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#E9E1CE]/55 text-sm hover:text-[#C9A24B] transition-colors">Facebook ↗</a></li>
              <li><a href="https://wa.me/918681992233" target="_blank" rel="noopener noreferrer" className="text-[#E9E1CE]/55 text-sm hover:text-[#C9A24B] transition-colors">WhatsApp ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-[#E9E1CE]/10">
          <p className="text-[#E9E1CE]/25 text-xs tracking-wide">
            © {new Date().getFullYear()} Raaha Restaurant & Grill · Madurai
          </p>
          <p className="font-arabic text-lg text-[#C9A24B]/50">بالعافية</p>
        </div>
      </div>
    </footer>
  );
}
