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
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Topfooter />
    </div>
  );
};

export default ContactPage;