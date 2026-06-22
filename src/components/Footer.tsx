import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-charcoal text-soft-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-heading tracking-tighter block">
              VINTAGE <span className="text-gold italic">BARBER</span>
            </Link>
            <p className="text-sm text-soft-ivory/60 leading-relaxed">
              Maison Élégance — where heritage meets modern artistry. A sanctuary 
              dedicated to the precision of craft and the beauty of transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-soft-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-deep-charcoal transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-soft-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-deep-charcoal transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-soft-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-deep-charcoal transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">Discovery</h4>
            <ul className="space-y-4">
              {[
                { name: "Services", to: "/services" },
                { name: "Our Crew", to: "/experts" },
                { name: "Pricing", to: "/pricing" },
                { name: "Gallery", to: "/gallery" },
                { name: "About Us", to: "/about" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-sm text-soft-ivory/60 hover:text-gold transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-soft-ivory/60">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>123 Elegance Row, Mayfair district,<br />London W1S 2YJ</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-soft-ivory/60">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+44 (0) 20 7123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-soft-ivory/60">
                <Mail size={18} className="text-gold shrink-0" />
                <span>concierge@vintagebarber.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">Newsletter</h4>
            <p className="text-sm text-soft-ivory/60">Join our inner circle for exclusive updates and beauty insights.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-b border-soft-ivory/20 py-2 text-sm focus:border-gold outline-none transition-colors"
              />
              <button className="text-xs uppercase tracking-widest text-gold text-left font-bold mt-2 hover:translate-x-2 transition-transform">
                Subscribe →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-soft-ivory/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-soft-ivory/40">
            © {currentYear} Vintage Barber. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-soft-ivory/40">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
