import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";
import { motion } from "motion/react";
import { PageHero } from "./PageHero";

export const BookingSectionContent = () => {
  return (
    <section id="booking" className="py-24 bg-soft-ivory scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row bg-white rounded-sm shadow-2xl overflow-hidden">
          {/* Visual Column */}
          <div className="lg:w-2/5 relative min-h-[400px]">
            <img 
              src="/images/contact.jpg" 
              alt="Booking Visual" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-deep-charcoal/40 flex items-center justify-center p-12">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-heading text-white italic">
                  "Your journey to refined grooming begins here."
                </h3>
                <div className="w-12 h-px bg-gold mx-auto" />
                <p className="text-white/70 text-sm font-light uppercase tracking-widest">
                  Vintage Barber
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-3/5 p-12 lg:p-20 bg-pearl-grey/5">
            <SectionHeader 
              align="left"
              title="Secure Your Session"
              subtitle="Our concierge team will review your request and confirm your appointment within 2 hours."
            />

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-mushroom-taupe font-bold">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Arthur Sterling"
                  className="w-full bg-transparent border-b border-pearl-grey py-3 outline-none focus:border-gold transition-colors font-light text-charcoal"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-mushroom-taupe font-bold">Email Address</label>
                <input 
                  type="email" 
                  placeholder="arthur@sterling.com"
                  className="w-full bg-transparent border-b border-pearl-grey py-3 outline-none focus:border-gold transition-colors font-light text-charcoal"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-mushroom-taupe font-bold">Preferred Service</label>
                <select className="w-full bg-transparent border-b border-pearl-grey py-3 outline-none focus:border-gold transition-colors font-light text-charcoal appearance-none">
                  <option>Signature Haircut</option>
                  <option>Hot Towel Shave</option>
                  <option>The Signature Package</option>
                  <option>Executive Experience</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-mushroom-taupe font-bold">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-b border-pearl-grey py-3 outline-none focus:border-gold transition-colors font-light text-charcoal"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-mushroom-taupe font-bold">Special Notes</label>
                <textarea 
                  rows={3}
                  placeholder="Any specific requests or requirements..."
                  className="w-full bg-transparent border-b border-pearl-grey py-3 outline-none focus:border-gold transition-colors font-light text-charcoal resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-8">
                <Button variant="primary" className="w-full py-5">
                  Confirm Request
                </Button>
                <p className="text-center text-[10px] uppercase tracking-widest text-mushroom-taupe mt-4 font-medium">
                  By clicking confirm, you agree to our booking policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BookingSection = () => {
  return (
    <>
      <PageHero 
        title="Reservations" 
        subtitle="Begin your journey to refined grooming"
        backgroundImage="https://images.unsplash.com/photo-1593702275677-f916c8c99f10?auto=format&fit=crop&q=80&w=2070"
      />
      <BookingSectionContent />
    </>
  );
};

export default BookingSection;
