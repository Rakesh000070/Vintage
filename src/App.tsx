import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Preloader } from "./components/Preloader";
import { motion, AnimatePresence } from "motion/react";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Experts from "./pages/Experts";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import BookingPage from "./pages/BookingPage";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Components
import { ScrollToTopButton } from "./components/ScrollToTopButton";

// Scroll to top component for route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";

    const timer = setTimeout(() => {
      setLoading(false);
      // Re-enable scroll and interactions
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Preloader loading={loading} />
      <ScrollToTopButton />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="font-body selection:bg-gold selection:text-deep-charcoal"
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </Layout>
      </motion.div>
    </Router>
  );
}
