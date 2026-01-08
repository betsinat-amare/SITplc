import * as React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { FaFingerprint, FaCompass, FaLightbulb, FaChevronRight } from "react-icons/fa";

const VISION_MISSION_VALUES = [
  {
    key: 'mission',
    title: 'Our Mission',
    icon: <FaFingerprint />,
    content: "Our mission is to provide global partners with strategic guidance and actionable insights for navigating Ethiopia’s regulatory, commercial, and logistical landscape. We specialize in supporting import and export operations, market entry strategy, sourcing and supply chain management, and investment advisory services.",
  },
  {
    key: 'vision',
    title: 'Our Vision',
    icon: <FaCompass />,
    content: "To go beyond conventional trade, positioning SABOLLA as a dynamic platform for collaboration, investment, and growth across diverse industries in Ethiopia and the Horn of Africa region.",
  },
  {
    key: 'approach',
    title: 'Our Approach',
    icon: <FaLightbulb />,
    content: "By continuously exploring new sectors and innovative trade opportunities, we help international companies capitalize on Ethiopia’s growing economy. Our forward-looking approach ensures partners gain a trusted ally capable of mitigating risks and delivering sustainable outcomes.",
  },
];

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(VISION_MISSION_VALUES[0].key);
  const activeContent = VISION_MISSION_VALUES.find(item => item.key === activeTab);

  return (
    // Main background set to a bright "Bone" color (#F4F5F0) 
    // This is bright but allows white nav-links to remain visible
    <div className="w-full min-h-screen bg-white font-sans text-dark-green pt-48 overflow-x-hidden selection:bg-brand-green selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pb-24 overflow-hidden pt-20">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center relative z-10"
            >
              <div className="section-header-tag">
                <div className="section-header-line" />
                <span className="section-header-text">
                  Corporate Heritage
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                Who <span className="text-brand-green"> We </span>
                Are
              </h1>

              <p className="text-lg md:text-xl text-dark-green max-w-2xl font-bold leading-relaxed mb-8">
                Sabolla International Trading plc is a leading foreign trade agency with over two decades
                of experience connecting global businesses to Ethiopian markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-12 xl:col-span-5 relative flex justify-center items-center"
            >
              <div className="relative w-full aspect-square max-w-[480px] group">
                {/* Decorative accent behind the image */}
                <div className="absolute inset-0 bg-brand-green rounded-[3rem] translate-x-3 translate-y-3 opacity-20 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500" />
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Sabolla Professional Partnership"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= THE FOUNDATION ================= */}
      {/* Using a slightly darker "Sand" tone here for section separation */}
      <section className="py-24 bg-bg-light border-y border-dark-green/5">
        <div className="app-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Tab Selectors */}
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-4xl leading-tight mb-10">
                Core <span className="text-brand-green">Foundations</span>
              </h2>

              <div className="flex flex-col gap-3">
                {VISION_MISSION_VALUES.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`flex items-center justify-between p-6 rounded-2xl transition-all duration-300 text-left
                      ${activeTab === item.key
                        ? 'bg-dark-green text-white shadow-xl translate-x-2'
                        : 'bg-white text-dark-green hover:bg-brand-green/10 border border-dark-green/5'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`${activeTab === item.key ? 'text-brand-green' : 'text-dark-green/20'}`}>
                        {item.icon}
                      </span>
                      <span className="text-xs font-black uppercase tracking-widest">{item.title}</span>
                    </div>
                    <FaChevronRight className={`text-[10px] transition-transform ${activeTab === item.key ? 'rotate-0 text-brand-green' : 'rotate-90 opacity-20'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Active Content Display */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white p-10 md:p-16 rounded-[2.5rem] border-l-8 border-brand-green shadow-lg min-h-[380px] flex flex-col justify-center"
                >
                  <span className="text-[10px] font-black text-brand-green uppercase tracking-widest mb-4">
                    Deep Dive
                  </span>
                  <h3 className="text-2xl md:text-3xl mb-6">
                    {activeContent?.title}
                  </h3>
                  <p className="text-base md:text-lg text-dark-green leading-relaxed font-medium">
                    {activeContent?.content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="py-32 bg-dark-green text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#308667_1px,transparent_1px)] [background-size:30px_30px]" />

        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl text-white mb-10 leading-none">
            Ready to Expand <br /> <span className="text-brand-green">Into Ethiopia?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-brand-green text-white font-black py-5 px-16 rounded-full text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-dark-green transition-all duration-500 shadow-2xl"
          >
            Consult an Expert
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;