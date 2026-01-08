import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// 1. IMPORT YOUR LOCAL ASSET
import bgPattern from "../assets/bg_pattern/image.png";

const PRODUCT_CATEGORIES = [
  { name: "Aviation", slug: "aviation", desc: "Critical communication, navigation, and information-management systems." },
  { name: "Military", slug: "military", desc: "Advanced defense technologies meeting exacting military standards." },
  { name: "Fire & Disaster Risk", slug: "fire-disaster", desc: "Extensive range of firefighting and emergency-response equipment." },
  { name: "Safety & Security", slug: "safety-security", desc: "Specialized protective gear for high-risk and industrial environments." },
  { name: "Agricultural Products", slug: "agriculture", desc: "Storage, post-harvest protection, and essential implements." },
  { name: "Water & Sewerage", slug: "water-sewerage", desc: "Infrastructure equipment for urban service delivery and sanitation." },
  { name: "Power & Energy", slug: "power-energy", desc: "Electrical infrastructure components for scalable energy systems." },
  { name: "Transportation & Storage", slug: "transportation", desc: "Heavy machinery, specialized tires, and storage solutions." }
];

const ProductsIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-green selection:text-white pt-20">

      {/* ================= HERO SECTION (MATCHES SERVICES DESIGN) ================= */}
      <section className="relative bg-dark-green pt-40 pb-56 overflow-hidden">

        {/* LOCAL IMAGE PATTERN */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="app-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-[10px] font-black text-brand-green uppercase tracking-[0.5em] mb-6 px-6 py-2 border border-brand-green/30 rounded-full">
              Global Procurement
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream mb-8">
              Managed <br /> <span className="text-brand-green">Commodities</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/50 max-w-4xl mx-auto font-bold italic border-b border-brand-green/30 pb-12 inline-block">
              "Facilitating global excellence across Ethiopia's eight primary industrial pillars."
            </p>
          </motion.div>
        </div>

        {/* Diagonal Angle Cut */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= CATEGORY GRID ================= */}
      <section className="pb-32 -mt-32 container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-10 rounded-[3rem] shadow-[0_30px_60px_rgba(18,44,33,0.08)] border border-dark-green/5 flex flex-col h-full group hover:bg-dark-green transition-all duration-500 min-h-[400px]"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-black text-brand-green uppercase tracking-widest bg-brand-green/5 px-4 py-1.5 rounded-full group-hover:bg-brand-green/20 transition-colors">
                  Pillar 0{idx + 1}
                </span>
              </div>

              <h2 className="text-2xl text-dark-green mb-6 leading-tight group-hover:text-cream transition-colors">
                {cat.name}
              </h2>

              <p className="text-dark-green/60 mb-10 grow font-bold text-sm leading-relaxed group-hover:text-cream/50 transition-colors">
                {cat.desc}
              </p>

              <Link
                to={`/products/${cat.slug}`}
                className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-brand-green group-hover:text-cream transition-all"
              >
                Category Intelligence <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= QUALITY ASSURANCE SECTION ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="app-container">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="section-header-tag">
                <div className="section-header-line" />
                <span className="section-header-text">Asset Protection</span>
              </div>
              <h3 className="text-4xl md:text-6xl text-dark-green mb-8 leading-none">
                Vetted <br /> <span className="text-brand-green">Inventory</span>
              </h3>
              <p className="text-dark-green/70 text-lg font-bold mb-10 leading-relaxed">
                Every commodity managed through our protocol undergoes rigorous verification to meet Ethiopian regulatory standards and international ISO benchmarks.
              </p>

              <div className="space-y-6">
                {["Compliance Auditing", "Logistics Supervision", "Warranty Lifecycle Management"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center text-white text-[10px]">✓</div>
                    <span className="text-dark-green font-black uppercase tracking-widest text-[10px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-bg-light p-12 rounded-[4rem] border border-dark-green/5 shadow-inner flex items-center justify-center">
              <div className="text-center py-20">
                <div className="w-20 h-1 bg-brand-green mx-auto mb-6 opacity-30"></div>
                <p className="text-[10px] font-black text-dark-green/40 uppercase tracking-[0.5em]">Inventory Blueprint v2.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="relative bg-dark-green pt-40 pb-40 text-center overflow-hidden">

        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent"></div>

        <div className="app-container">
          <h4 className="text-4xl md:text-7xl font-black text-cream uppercase tracking-tighter mb-10">
            Inquire <span className="text-brand-green">Assets?</span>
          </h4>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-green text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] text-xs shadow-2xl hover:bg-white hover:text-dark-green transition-all"
            >
              Contact Strategy Team
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsIndex;