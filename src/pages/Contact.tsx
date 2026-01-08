import * as React from 'react';
import { CONTACT_INFO } from '../data/mockData';
import ContactForm from '../components/ui/ContactForm';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Topfooter from '../components/layout/Topfooter';

const ContactPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-dark-green pt-48 selection:bg-brand-green selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pb-24 overflow-hidden">
        <div className="app-container">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-header-tag">
                <div className="section-header-line" />
                <span className="section-header-text">Network Access</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                Request <span className="text-brand-green">Strategic</span> <br /> Partnership
              </h1>
              <p className="text-lg md:text-xl text-dark-green/70 max-w-2xl font-bold leading-relaxed">
                Connect with our trade analysts for market entry strategies, tender participation, or logistics representation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INTERFACE ================= */}
      <section className="py-24 bg-bg-light border-y border-dark-green/5">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Contact Info */}
            <div className="lg:col-span-4 space-y-10">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-dark-green/5">
                <h2 className="text-2xl mb-10">Global <span className="text-brand-green">Hubs</span></h2>
                <div className="space-y-8">
                  {[
                    { icon: <FaMapMarkerAlt />, label: "Headquarters", value: CONTACT_INFO.address },
                    { icon: <FaEnvelope />, label: "Direct Email", value: CONTACT_INFO.email },
                    { icon: <FaPhoneAlt />, label: "Trade Line", value: CONTACT_INFO.phone }
                  ].map((info, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-dark-green/30 mb-1">{info.label}</p>
                        <p className="text-dark-green font-bold text-sm leading-relaxed">{info.value}</p>
                      </div>
                    </div>
                  ))}
    <div className="bg-[#F9F2D6] min-h-screen font-['Montserrat']">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#122C21] pt-48 pb-32 overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `url('/pattern.png')`, backgroundSize: '450px' }}
        />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-[#F9F2D6] uppercase tracking-tighter leading-[0.85] mb-8"
          >
            Get In <span className="text-[#308667]">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#F9F2D6]/70 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            Whether you are a global manufacturer looking to enter the Ethiopian market
            or a local entity seeking premium solutions, our experts are ready to assist.
          </motion.p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-6 max-w-7xl -mt-20 relative z-30 pb-32">
        <div className="container mx-auto px-6 max-w-7xl -mt-20 relative z-30 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-[0_20px_60px_-15px_rgba(18,44,33,0.15)] rounded-[3rem] border border-[#122C21]/5 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* CONTACT INFORMATION PANEL (LEFT) */}
              <div className="p-12 md:p-16 space-y-10 border-b lg:border-b-0 lg:border-r border-[#122C21]/5">
                <div>
                  <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-4">Intelligence</h2>
                  <h3 className="text-4xl font-black text-[#122C21] uppercase tracking-tighter mb-10">Our Headquarters</h3>
                </div>

              {/* Business Hours Card */}
              <div className="bg-brand-green p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <FaClock size={200} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-widest mb-6">Operational Hours</h3>
                <div className="space-y-3 text-sm font-bold opacity-80">
                  <p>Monday - Friday: 8:30 AM - 5:30 PM (EAT)</p>
                  <p>Saturday: 8:30 AM - 12:30 PM</p>
                  <p>Sunday: Closed</p>
                <div className="space-y-10">
                  {/* Address */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#F9F2D6] rounded-2xl flex items-center justify-center text-[#122C21] shrink-0 group-hover:bg-[#308667] group-hover:text-white transition-all">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#308667] mb-2">Location</h4>
                      <p className="text-[#09140F] text-lg font-bold leading-tight">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#F9F2D6] rounded-2xl flex items-center justify-center text-[#122C21] shrink-0 group-hover:bg-[#308667] group-hover:text-white transition-all">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#308667] mb-2">Email</h4>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#09140F] text-xl font-bold hover:text-[#308667] transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#F9F2D6] rounded-2xl flex items-center justify-center text-[#122C21] shrink-0 group-hover:bg-[#308667] group-hover:text-white transition-all">
                      <FaPhoneAlt size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#308667] mb-2">Phone</h4>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#09140F] text-xl font-bold hover:text-[#308667] transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#F9F2D6] rounded-2xl flex items-center justify-center text-[#122C21] shrink-0 group-hover:bg-[#308667] group-hover:text-white transition-all">
                      <FaClock size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#308667] mb-2">Hours</h4>
                      <p className="text-[#09140F] text-lg font-bold">Mon — Fri: 8:30 AM - 5:30 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map Embed Container */}
                <div className="mt-12 overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    title="SABOLLA Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5401880486016!2d38.7490!3d9.0080!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMjguOCJOIDM4wrA0NScwMC4wIkU!5e0!3m2!1sen!2set!4v1620000000000"
                    width="100%"
                    height="300"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right: Modern Form Area */}
            <div className="lg:col-span-8">
              <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-dark-green/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-bl-[4rem]" />

                <h2 className="text-2xl md:text-3xl mb-10">
                  Inquiry <span className="text-brand-green">Protocol</span>
                </h2>

                <section>
                  <ContactForm />
                </section>
              {/* CONTACT FORM PANEL (RIGHT) */}
              <div className="p-12 md:p-16 bg-[#F9F2D6]/10">
                <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-4">Direct Inquiry</h2>
                <h3 className="text-4xl font-black text-[#122C21] uppercase tracking-tighter mb-10">Request Intelligence</h3>
                <ContactForm />
              </div>

            </div>
          </div>
          </motion.div>
        </div>
      </section>
      <Topfooter />
    </div>
  );
};

export default ContactPage;