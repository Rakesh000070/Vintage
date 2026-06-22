import React from "react";
import { PageHero } from "../components/PageHero";
import { BookingSection } from "../components/BookingSection";

const Booking = () => {
  return (
    <>
      <PageHero 
        title="Reservations" 
        subtitle="Begin your journey to refined grooming"
        backgroundImage="https://images.unsplash.com/photo-1593702275677-f916c8c99f10?auto=format&fit=crop&q=80&w=2070"
      />
      <BookingSection />
    </>
  );
};

export default Booking;
