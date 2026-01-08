import * as React from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHandshake,
  FaFileContract,
  FaHistory,
  FaTruckLoading,
  FaArrowRight
} from "react-icons/fa";

import GlobalFootprint from "../components/sections/GlobalFootprint";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import Topfooter from '../components/layout/Topfooter';
import { award } from '../assets/asset';
import SabollaPattern from '../components/icons/SabollaPattern';

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  return <span ref={ref}>{count}</span>;
};

const Home: React.FC = () => {
  const dynamicTexts = ["Gateway to Growth", "Trade Representation", "Market Solutions", "Strategic Pathway"];
  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setTextIndex((prev) => (prev + 1) % dynamicTexts.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden font-sans bg-white text-dark-green">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
        <div className="absolute top-24 left-4 md:left-10 text-[6rem] md:text-[10rem] font-black text-gray-50 select-none z-0 tracking-tighter opacity-70">
          SABOLLA
        </div>

        <div className="app-container">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

            <div className="w-full lg:w-3/5 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
                  Your <br />
                  {/* RESPONSIVE DYNAMIC TEXT CONTAINER - Reduced height and size */}
                  <div className="relative inline-block w-full min-h-[1.1em] text-[1.4rem] sm:text-2xl md:text-5xl lg:text-5xl">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={dynamicTexts[textIndex]}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-brand-green absolute left-0 whitespace-nowrap"
                      >
                        {dynamicTexts[textIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <br /> to Ethiopia.
                </h1>

                <p className="text-lg md:text-xl text-dark-green/70 max-w-xl font-medium leading-relaxed mb-8">
                  Navigating the complexities of East African trade. We bridge the gap between world-class technology and Ethiopia's industrial landscape.
                </p>

                <div className="flex flex-wrap gap-4 md:gap-6">
                  <Link to="/services" className="group flex items-center gap-4 bg-dark-green text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-brand-green transition-all duration-300 shadow-xl">
                    Our Services
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-2/5 relative flex justify-center items-center h-[400px] lg:h-[600px] z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="relative w-full aspect-square max-w-[480px] flex items-center justify-center"
              >
                <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-full shadow-[0_50px_100px_rgba(48,134,103,0.12)] flex items-center justify-center border border-gray-100 flex-shrink-0">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-[42%] h-[42%] absolute z-10 select-none flex items-center justify-center"
                  >
                    <SabollaPattern className="w-full h-full text-brand-green" />
                  </motion.div>

                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />

                  {/* Rotating Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[95%] h-[95%] border-[10px] lg:border-[20px] border-brand-green rounded-full border-t-transparent opacity-80"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[85%] h-[85%] border-2 border-dashed border-brand-green/30 rounded-full"
                  />

                  {/* Creative Orbiting Dots */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      <div
                        className="w-2 h-2 bg-brand-green rounded-full absolute shadow-[0_0_10px_#308667]"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) translate(${160 + i * 40}px, 0)`
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-10 right-10 w-10 h-10 bg-brand-green/20 rounded-full blur-sm" />
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-20 left-0 w-12 h-12 bg-brand-green rounded-full shadow-lg" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MILESTONES (Synchronized Bento Box Grid) ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl"> {/* Increased max-width for better PC spacing */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">

            {/* 1. LARGE AWARD CARD */}
            <div className="md:col-span-7 bg-[#05110B] rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden shadow-lg border border-white/5 group flex flex-col md:flex-row items-center gap-8">
              <div className="relative z-10 flex-1 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-2xl bg-[#308667] flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(48,134,103,0.4)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 16H6V4h12zM8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z" /></svg>
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight mb-6">
                  Winner of <br />
                  <span className="text-[#308667]">Kalmar's 2016</span> <br />
                  Global Award
                </h4>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                  Recognized for unparalleled operational excellence and strategic market growth within the East African heavy machinery sector.
                </p>
              </div>

              <div className="relative z-10 w-full md:w-1/3 flex justify-center">
                <div className="absolute inset-0 bg-[#308667]/20 blur-[40px] rounded-full scale-75" />
                <motion.img
                  src={award}
                  alt="Kalmar Award"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-56 md:h-64 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] relative z-10"
                />
              </div>
            </div>

            {/* 2. PARTNERS CARD - Duration 3s */}
            <div className="md:col-span-5 bg-[#308667] rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg group">
              <div className="absolute top-10 opacity-20"><FaHandshake size={80} className="text-white" /></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-8xl font-black text-white tracking-tighter">
                    <Counter value={100} duration={3} />
                  </span>
                  <span className="text-6xl font-black text-white/40">+</span>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white mt-4">Global Industrial Partners</p>
                <div className="w-full h-[1px] bg-white/20 my-8" />
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Forging Links Worldwide</p>
              </div>
            </div>

            {/* 3. TENDERS - Duration 3s */}
            <div className="md:col-span-4 bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-sm border border-gray-100 group">
              <FaFileContract size={32} className="text-[#0B1A13] mb-6 opacity-80" />
              <div className="flex items-center gap-1">
                <span className="text-5xl font-black text-[#0B1A13] tracking-tighter">
                  <Counter value={500} duration={3} />
                </span>
                <span className="text-4xl font-black text-[#308667]">+</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-4">Active Tenders</p>
            </div>

            {/* 4. EXPERIENCE - Duration 3s */}
            <div className="md:col-span-4 bg-[#F9F6E5] rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-sm group">
              <FaHistory size={32} className="text-[#0B1A13] mb-6 opacity-80" />
              <div className="flex items-center gap-1">
                <span className="text-5xl font-black text-[#0B1A13] tracking-tighter">
                  <Counter value={20} duration={3} />
                </span>
                <span className="text-4xl font-black text-[#308667]">+</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-4">Years Experience</p>
            </div>

            {/* 5. LOGISTICS - Duration 3s */}
            <div className="md:col-span-4 bg-[#0B1A13] rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-lg group border border-white/5">
              <FaTruckLoading size={32} className="text-[#308667] mb-6" />
              <div className="flex items-center gap-1">
                <span className="text-5xl font-black text-white tracking-tighter">
                  <Counter value={150} duration={3} />
                </span>
                <span className="text-4xl font-black text-[#308667]">+</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-4">Shipments Logged</p>
            </div>
          </div>
        </div>
      </section>
      <GlobalFootprint />

      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-[#122C21] uppercase tracking-tighter mb-6">
              Trusted <span className="text-[#308667]">Partners</span>
            </h2>
          </div>
          <div className="space-y-32">
            <div className="relative">
              <h3 className="relative z-10 text-sm font-black text-[#308667] uppercase tracking-[0.5em] mb-12 text-center lg:text-left">
                International Partners
              </h3>
              <PartnersShowcase partners={PARTNERS} />
            </div>
            <div className="relative">
              <h3 className="relative z-10 text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-12 text-center lg:text-right">
                Local & Government Partners
              </h3>
              <PartnersShowcase partners={LOCAL_PARTNERS} />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <Topfooter />
    </div>
  );
};

export default Home;