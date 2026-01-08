import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShip, FaArrowRight, FaChartLine, FaGavel, FaBoxOpen } from 'react-icons/fa';

// IMPORT LOCAL ASSET
import bgPattern from "../assets/bg_pattern/image.png";
import Topfooter from '../components/layout/Topfooter';
import { advisory, sourcing } from '../assets/asset';

const SERVICES_LIST = [
  {
    name: "Advisory & Consultancy",
    slug: "advisory",
    shortDesc: "Guiding international companies through Ethiopia’s complex legal, regulatory, and commercial landscape with actionable, pragmatic recommendations.",
    image: advisory

  },
  {
    name: "Market Assessments",
    slug: "market-assessments",
    shortDesc: "Comprehensive field intelligence and data analytics to evaluate demand, competitor activity, and government procurement pipelines.",
    image: "https://www.shutterstock.com/image-photo/business-2025-graphs-statistics-analyze-600nw-2469749585.jpg"
  },
  {
    name: "Import & Export",
    slug: "import-export",
    shortDesc: "End-to-end support for regulatory compliance, documentation, and the efficient movement of goods through customs and logistics.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Sourcing & Supply Chain",
    slug: "sourcing",
    shortDesc: "Full-spectrum sourcing, rigorous supplier verification, and supervising procurement workflows from production to delivery.",
    image: sourcing
  }
];

const ServicesIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-green selection:text-white pt-20">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-dark-green pt-40 pb-20 overflow-hidden">
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
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream mb-8">
              Strategic <span className="text-brand-green">Trade</span>
            <h1 className="text-5xl md:text-7xl font-black text-[#F9F2D6] mb-8 uppercase tracking-tighter leading-none">
              Strategic <span className="text-[#0B1A13] ">Trade</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/70 font-bold italic inline-block pb-8">
              Maximizing profitability through 20 years of localized intelligence.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pb-32 container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white p-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(18,44,33,0.08)] border border-dark-green/5 flex flex-col h-full group transition-all duration-500 overflow-hidden"
            >
              {/* IMAGE AREA - Color filters removed */}
              <div className="relative w-full h-44 rounded-2xl mb-8 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h2 className="text-xl text-brand-green mb-4 leading-tight px-2">
                {service.name}
              </h2>

              <p className="text-dark-green/60 mb-8 grow font-bold text-[16px] leading-relaxed px-2">
                {service.shortDesc}
              </p>

              <div className="px-2 pb-2">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.3em] text-brand-green hover:text-dark-green transition-all"
                >
                  Learn More <FaArrowRight className="ml-3 group-hover:translate-x-3 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= THE PROCESS BLUEPRINT ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="app-container">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="section-header-tag">
                <div className="section-header-line" />
                <span className="section-header-text">Our Lifecycle Management</span>
              </div>
              <h3 className="text-4xl md:text-6xl text-dark-green mb-8 leading-none">
                Strategic <br /> <span className="text-brand-green">Execution</span>
              </h3>
              <p className="text-dark-green/70 text-lg font-bold mb-10 leading-relaxed">
                We combine international best practices with localized field intelligence to ensure every business decision aligns with Ethiopian regulatory frameworks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Market Entry", icon: <FaChartLine /> },
                  { title: "Legal Navigation", icon: <FaGavel /> },
                  { title: "Logistics Control", icon: <FaShip /> },
                  { title: "Supply Integrity", icon: <FaBoxOpen /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-dark-green/5 rounded-2xl">
                    <div className="text-brand-green text-xl">{item.icon}</div>
                    <span className="text-dark-green font-black uppercase tracking-widest text-[10px]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-bg-light p-12 rounded-[4rem] border border-dark-green/5 shadow-inner relative flex flex-col items-center justify-center min-h-[450px]">
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <FaShip className="text-[20rem]" />
              </div>
              <div className="text-center relative z-10">
                <h5 className="text-[10px] font-black text-dark-green uppercase tracking-[0.4em] mb-8">Integrated Trade Model</h5>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-dark-green/5 font-black text-[10px] uppercase text-brand-green"> Assessment & Analysis</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-dark-green/5 font-black text-[10px] uppercase text-brand-green"> Regulatory Compliance</div>
                  <div className="p-4 bg-white rounded-xl shadow-sm border border-dark-green/5 font-black text-[10px] uppercase text-brand-green"> Operational Logistics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Topfooter />
    </div>
  );
};

export default ServicesIndex;