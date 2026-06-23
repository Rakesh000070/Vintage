import React from "react";
import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";
import { Shield, Info, Lock, Eye, Users, Settings, Mail, RefreshCw, FileText } from "lucide-react";

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

const PrivacyPolicy = () => {
  return (
    <div className="bg-deep-charcoal min-h-screen">
      <PageHero 
        title="Privacy Policy" 
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
        backgroundImage="https://images.unsplash.com/photo-1512690196248-7374ebd5d4b4?auto=format&fit=crop&q=80&w=2070"
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 gap-12">
          
          <Section title="1. Introduction" icon={Info} delay={0.1}>
            <p>
              At Vintage Barber, your privacy is our priority. We are committed to protecting 
              the personal information of our customers and website visitors. This Privacy Policy 
              outlines our practices regarding the collection, use, and safeguarding of your data.
            </p>
          </Section>

          <Section title="2. Information We Collect" icon={FileText} delay={0.2}>
            <p>We may collect the following information to provide and improve our services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>Appointment Details (Date, Time, Requested Services)</li>
              <li>Information voluntarily submitted through our contact and booking forms.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information" icon={Settings} delay={0.3}>
            <p>We use the data we collect for various purposes, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Processing and managing your appointment bookings.</li>
              <li>Providing dedicated customer support and responding to inquiries.</li>
              <li>Sending important service updates and confirmation messages.</li>
              <li>Enhancing your overall customer experience at our salon.</li>
              <li>Analyzing website traffic and performance to improve our digital presence.</li>
            </ul>
          </Section>

          <Section title="4. Data Protection" icon={Lock} delay={0.4}>
            <p>
              We implement industry-standard security measures to ensure that your personal 
              data is stored securely. Our systems are designed to protect against unauthorized 
              access, disclosure, alteration, or destruction of your information.
            </p>
          </Section>

          <Section title="5. Cookies & Tracking" icon={Eye} delay={0.5}>
            <p>
              Our website utilizes cookies to enhance functionality and analyze user engagement. 
              Cookies are small files stored on your device that help us remember your preferences 
              and provide a more personalized browsing experience. You can manage your cookie 
              preferences through your browser settings.
            </p>
          </Section>

          <Section title="6. Third-Party Services" icon={Users} delay={0.6}>
            <p>
              To provide a seamless experience, we may integrate third-party services such as 
              Google Maps for location services, social media platforms for connectivity, 
              and analytics tools to understand website usage. These third parties have their 
              own privacy policies regarding how they handle data.
            </p>
          </Section>

          <Section title="7. User Rights" icon={Shield} delay={0.7}>
            <p>As a valued customer, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request the correction of any inaccurate or incomplete information.</li>
              <li>Request the deletion of your personal data from our records.</li>
            </ul>
          </Section>

          <Section title="8. Contact Information" icon={Mail} delay={0.8}>
            <p>If you have any questions or concerns regarding our Privacy Policy, please contact us at:</p>
            <div className="mt-4 space-y-2 border-l-2 border-gold/30 pl-6">
              <p className="font-bold text-white">Vintage Barber Shop</p>
              <p>SNT Road, Panabika Street, Baidiya Nath Pur</p>
              <p>Brahmapur, Odisha 760001</p>
              <p>Phone: +91 83289 95970</p>
              <p>Email: hello@vintagebarber.com</p>
            </div>
          </Section>

          <Section title="9. Policy Updates" icon={RefreshCw} delay={0.9}>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our 
              practices or legal requirements. We encourage you to review this page periodically 
              to stay informed about how we are protecting your information.
            </p>
            <p className="text-xs text-white/40 mt-8">Last Updated: June 22, 2026</p>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
