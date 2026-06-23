import React from "react";
import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  Tag, 
  UserCheck, 
  CreditCard, 
  Globe, 
  Copyright, 
  AlertTriangle, 
  ShieldCheck, 
  RefreshCw, 
  Mail 
} from "lucide-react";

const Section = ({ title, icon: Icon, children, delay = 0 }: { title: string, icon: any, children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 space-y-6 hover:border-gold/30 transition-colors duration-500"
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
        <Icon size={24} />
      </div>
      <h2 className="font-heading text-2xl text-white tracking-wide">{title}</h2>
    </div>
    <div className="font-body text-warm-greige/80 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

const TermsOfService = () => {
  return (
    <div className="bg-deep-charcoal min-h-screen">
      <PageHero 
        title="Terms of Service" 
        subtitle="Please read these terms carefully before using our services or booking an appointment."
        backgroundImage="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070"
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 gap-12">
          
          <Section title="1. Acceptance of Terms" icon={CheckCircle} delay={0.1}>
            <p>
              By accessing the Vintage Barber website or utilizing our professional grooming services, 
              you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please refrain from using our website or services.
            </p>
          </Section>

          <Section title="2. Appointments & Bookings" icon={Calendar} delay={0.2}>
            <p>
              Our services are available by appointment to ensure a premium experience for every client. 
              Bookings can be made through our online portal, via telephone, or in person at our salon.
            </p>
            <p>
              When booking, you are responsible for providing accurate and current information, including 
              your contact details and the specific services requested.
            </p>
          </Section>

          <Section title="3. Cancellation & Rescheduling" icon={Clock} delay={0.3}>
            <p>
              We value your time and the time of our master barbers. If you need to cancel or reschedule 
              your appointment, we request reasonable notice (at least 24 hours).
            </p>
            <p>
              Late cancellations or missed appointments ("no-shows") may be subject to salon policies, 
              which may include a cancellation fee or a requirement for pre-payment for future bookings.
            </p>
          </Section>

          <Section title="4. Services & Pricing" icon={Tag} delay={0.4}>
            <p>
              Vintage Barber strives to maintain transparent pricing. All service prices listed on our 
              website or in-studio are subject to change without prior notice.
            </p>
            <p>
              Please note that final pricing may vary depending on specific service requirements, hair length, 
              or additional customizations requested during your visit.
            </p>
          </Section>

          <Section title="5. Customer Responsibilities" icon={UserCheck} delay={0.5}>
            <p>
              To provide the best possible service, we ask that our customers:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Arrive on time for scheduled appointments.</li>
              <li>Provide relevant information regarding scalp conditions, allergies, or hair history.</li>
              <li>Communicate clearly with their barber regarding desired style and outcome.</li>
            </ul>
          </Section>

          <Section title="6. Payments" icon={CreditCard} delay={0.6}>
            <p>
              Full payment is required upon completion of services. We accept various payment methods 
              including major credit cards, digital wallets, and cash.
            </p>
            <p>
              Gratuity for our master barbers is not included in the service price and is always 
              appreciated but left to your discretion.
            </p>
          </Section>

          <Section title="7. Website Usage" icon={Globe} delay={0.7}>
            <p>
              Our website is provided for informational and booking purposes. You agree not to misuse, 
              damage, or attempt to gain unauthorized access to the website or its underlying systems. 
              Any unlawful use of this website is strictly prohibited.
            </p>
          </Section>

          <Section title="8. Intellectual Property" icon={Copyright} delay={0.8}>
            <p>
              All content on this website—including branding, the Vintage Barber logo, custom images, 
              copywritting, and site design—is the exclusive property of Vintage Barber.
            </p>
            <p>
              This content may not be copied, reproduced, distributed, or used for commercial purposes 
              without explicit written permission from the owner.
            </p>
          </Section>

          <Section title="9. Limitation of Liability" icon={AlertTriangle} delay={0.9}>
            <p>
              Vintage Barber provides services in good faith and with professional care. However, the salon 
              is not responsible for indirect damages arising from website use or unavoidable service 
              interruptions.
            </p>
          </Section>

          <Section title="10. Privacy" icon={ShieldCheck} delay={1.0}>
            <p>
              Your personal information is handled in accordance with our Privacy Policy. By using our 
              services, you also consent to our data collection and protection practices as outlined 
              in that document.
            </p>
          </Section>

          <Section title="11. Changes to Terms" icon={RefreshCw} delay={1.1}>
            <p>
              Vintage Barber reserves the right to modify these Terms of Service at any time. Updates 
              will be posted on this page with a revised "Last Updated" date. Continued use of our 
              website or services constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section title="12. Contact Information" icon={Mail} delay={1.2}>
            <p>For questions or concerns regarding our terms, please reach out to us:</p>
            <div className="mt-4 space-y-2 border-l-2 border-gold/30 pl-6">
              <p className="font-bold text-white">Vintage Barber Shop</p>
              <p>SNT Road, Panabika Street, Baidiya Nath Pur</p>
              <p>Brahmapur, Odisha 760001</p>
              <p>Phone: +91 83289 95970</p>
              <p>Email: terms@vintagebarber.com</p>
            </div>
            <p className="text-xs text-white/40 mt-8">Last Updated: June 22, 2026</p>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
