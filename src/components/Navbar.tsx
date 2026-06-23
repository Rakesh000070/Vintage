import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();
  const scrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollPos.current = window.scrollY;
      setScrolled(scrollPos.current > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Experts", href: "/experts" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = location.pathname === "/";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-lg py-4 shadow-sm shadow-mushroom-taupe/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-4">
            <img 
              src="/images/logo.png" 
              alt="Vintage Barber Logo" 
              className="h-[32px] sm:h-[38px] lg:h-[48px] w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(198,164,106,0.2)]"
            />
            <div className="flex flex-col items-start gap-1">
              <span className={`font-heading text-xl tracking-[0.2em] uppercase transition-colors duration-500 ${
                scrolled || !isHome ? "text-charcoal" : "text-white"
              }`}>
                VINTAGE <span className="text-dusty-mauve">BARBER</span>
              </span>
              <motion.div 
                className="w-8 h-0.5 bg-dusty-mauve"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-10">
            <ul className="flex gap-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;

                return (
                  <li 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <NavLink
                      to={link.href}
                      className={() => 
                        `font-body text-[10px] tracking-[0.15em] uppercase transition-colors duration-500 relative py-1 ${
                          isActive || hoveredLink === link.name
                            ? (scrolled || !isHome ? "text-charcoal" : "text-white") 
                            : (scrolled || !isHome ? "text-charcoal/60 hover:text-charcoal" : "text-white/60 hover:text-white")
                        }`
                      }
                    >
                      {link.name}
                      
                      {/* Active/Hover Underline */}
                      <AnimatePresence>
                        {(isActive || hoveredLink === link.name) && (
                          <motion.div 
                            layoutId="navUnderline"
                            className="absolute bottom-0 left-0 w-full h-px bg-dusty-mauve"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </AnimatePresence>
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <Button 
              variant="outline" 
              size="sm"
              href="/booking"
              className={`transition-all duration-500 border-current font-body text-[10px] tracking-[0.15em] uppercase ${
                scrolled || !isHome
                  ? "text-charcoal border-charcoal hover:bg-charcoal hover:text-white"
                  : "text-white border-white hover:bg-white hover:text-charcoal"
              }`}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className={`xl:hidden transition-colors duration-500 ${
              scrolled || !isHome ? "text-charcoal" : "text-white"
            }`}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-16">
              <Link to="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-3">
                <img 
                  src="/images/logo.png" 
                  alt="Vintage Barber Logo" 
                  className="h-[35px] w-auto object-contain"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="font-heading text-xl tracking-[0.2em] uppercase text-charcoal">
                    VINTAGE <span className="text-dusty-mauve">BARBER</span>
                  </span>
                  <div className="w-8 h-0.5 bg-dusty-mauve" />
                </div>
              </Link>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-charcoal p-2 hover:bg-soft-ivory/20 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-4">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.href;

                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                    >
                      <NavLink
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={() => 
                          `font-heading text-3xl uppercase tracking-tight transition-colors block py-2 ${
                            isActive ? "text-dusty-mauve" : "text-charcoal hover:text-dusty-mauve"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-10 mt-auto border-t border-soft-ivory/50"
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full font-body text-xs tracking-widest uppercase py-6"
                href="/booking"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

