import * as React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// 1. IMPORT YOUR LOCAL ASSETS
import bgPattern from "../assets/bg_pattern/image.png";
import Topfooter from '../components/layout/Topfooter';
import { fire, transportation, water } from '../assets/asset';

const PRODUCT_DATA: Record<string, any> = {
  "aviation": {
    name: "Aviation",
    content: "We support the aviation sector with a comprehensive suite of critical communication, navigation, and information-management systems. Our portfolio includes VHF AM base stations, communication and navigation spare parts, AMHS systems, AIM systems, AIS systems, and other aviation-essential components. Each product is carefully sourced from trusted manufacturers, with detailed verification to ensure technical compliance with international aviation safety standards. Beyond procurement, we coordinate supplier engagement, manage import documentation, and oversee the certification process, ensuring that all equipment meets stringent regulatory and operational requirements.",
    lifecycle: "In addition to supply, we provide full lifecycle support, including installation guidance, maintenance follow-up, and operational troubleshooting. Our approach ensures that airports, airlines, and air traffic control authorities receive reliable, high-performance equipment that enhances safety, operational efficiency, and long-term sustainability. By integrating modern technologies with proven procurement practices, we contribute to the seamless operation of aviation networks and the overall safety of the airspace.",
    offerings: ["VHF AM Base Stations", "AMHS & AIM Systems", "AIS Systems", "Navigation Spares"],
    image: "https://corporate.ethiopianairlines.com/images/default-source/corporate-image/600-x-400-px-aircraft-207559ff99f634e0eb3d4ef8ab0252e90.jpg?sfvrsn=6a41cd38_0"
  },
  "military": {
    name: "Military",
    content: "We deliver advanced communication and navigation technologies designed to meet the exacting standards of defense and military operations. Our services include sourcing verified equipment from specialized manufacturers, managing procurement workflows, coordinating international shipments, and ensuring full compliance with defense regulations. Each procurement process is structured to meet security requirements and operational confidentiality, ensuring that sensitive equipment is delivered securely and on time.",
    lifecycle: "Our support extends beyond delivery, including logistics planning, documentation management, and post-delivery coordination to maintain operational readiness. We work closely with military planners and technical teams to ensure equipment integration, reliability, and mission-critical performance. This approach allows defense institutions to focus on strategic objectives while relying on uninterrupted access to essential technologies.",
    offerings: ["Tactical Communication", "Secure Navigation", "Defense Logistics", "Secure Sourcing"],
    image: "https://images.unsplash.com/photo-1453683685760-b8db0bbb8dc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pbGl0YXJ5fGVufDB8fDB8fHww"
  },
  "fire-disaster": {
    name: "Fire & Disaster Risk",
    content: "Our disaster-response category encompasses an extensive range of firefighting and emergency-response equipment, including firefighting trucks, aerial ladder trucks, firefighting foam, and dry chemical powders. We manage supplier engagement, import and export procedures, technical assessment, and delivery logistics to ensure agencies receive fully functional, ready-to-deploy equipment. Every item is vetted for quality, durability, and compliance with international firefighting and safety standards.",
    lifecycle: "Beyond supply, we provide operational support and advisory services to integrate new equipment into existing emergency-response frameworks. This includes technical training, coordination with municipal and industrial teams, and ensuring compliance with local safety regulations. Our holistic approach helps fire departments, airports, industrial facilities, and emergency agencies respond efficiently and effectively to crises, minimizing risks and safeguarding lives and property.",
    offerings: ["Firefighting Trucks", "Aerial Ladders", "Specialized Foams", "Dry Chemical Powders"],
    image: fire
  },
  "safety-security": {
    name: "Safety & Security",
    content: "We provide specialized protective gear designed for high-risk and industrial environments. Our offerings include firefighting clothing, breathing apparatus, aluminized suits, and full diving suits suitable for rescue operations, firefighting, marine services, and industrial safety applications. Each product undergoes strict verification for material quality, international safety certification, and manufacturing compliance to guarantee reliability under extreme conditions.",
    lifecycle: "Our services include full logistics management, regulatory clearance, and after-sales support to ensure timely delivery and usability. By working closely with organizations, we ensure that personnel have access to gear that meets occupational health and safety standards. This reduces workplace risks, enhances performance, and provides confidence to teams operating in hazardous conditions, enabling safer, more effective operations.",
    offerings: ["Breathing Apparatus", "Aluminized Suits", "Full Diving Gear", "Firefighting Clothing"],
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800"
  },
  "agriculture": {
    name: "Agricultural Products",
    content: "We supply a wide array of agricultural inputs, including food-grade hermetic bags, jute bags, and other storage and post-harvest protection materials. Our procurement process emphasizes supplier verification, quality inspection, and timely coordination of inland distribution to ensure that farmers and agribusinesses have consistent access to essential materials.",
    lifecycle: "We also provide technical guidance and collaboration with cooperatives and agricultural stakeholders to implement effective storage systems and reduce post-harvest losses. By supporting storage efficiency, product quality, and commodity preservation, we help strengthen supply chains and improve the sustainability and profitability of agricultural operations.",
    offerings: ["Hermetic Bags", "Jute Storage", "Technical Guidance", "Distribution Logistics"],
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800"
  },
  "water-sewerage": {
    name: "Water & Sewerage",
    content: "We support the water and sanitation sector by supplying sewerage trucks, jetting trucks, water meters, pumps, and related infrastructure equipment. Our team manages sourcing from reputable manufacturers, coordinates export and import procedures, and provides local market support to ensure that products meet technical and operational requirements.",
    lifecycle: "Additionally, we assist utilities and engineering firms in deploying water and sewerage solutions efficiently. By ensuring timely equipment delivery, providing operational guidance, and maintaining high-quality standards, we enable improved urban service delivery and sustainable water management systems, enhancing overall infrastructure performance.",
    offerings: ["Sewerage Trucks", "Jetting Trucks", "Water Meters", "Industrial Pumps"],
    image: water
  },
  "power-energy": {
    name: "Power & Energy",
    content: "We provide an extensive range of power-sector equipment, including electric meters, generators, transformers, network cables, and other electrical infrastructure components. Our end-to-end support covers sourcing, specification verification, compliance guidance, and logistics management to ensure products meet relevant technical and regulatory standards.",
    lifecycle: "Our involvement extends to assisting partners with planning, installation coordination, and post-delivery support, ensuring equipment functions efficiently in real-world operations. By delivering reliable and compliant power solutions, we help public and private sector clients implement safe, efficient, and scalable energy systems that drive industrial growth and community development.",
    offerings: ["Electric Meters", "Industrial Generators", "Transformers", "Network Cables"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  "transportation": {
    name: "Transport & Storage",
    content: "Our transportation and storage solutions cover freight containers, reachstackers, forklifts, and specialized tires for trucks, heavy machinery, and industrial vehicles. We provide full supply-chain support, including supplier identification, procurement management, shipping coordination, customs clearance, and final delivery.",
    lifecycle: "We also advise clients on equipment suitability and integration to optimize warehouse operations and cargo handling efficiency. By ensuring timely, reliable, and cost-effective supply, we help logistics companies, manufacturers, and government agencies maintain uninterrupted operations, streamline storage management, and enhance the overall efficiency of transportation networks.",
    offerings: ["Freight Containers", "Reachstackers", "Industrial Forklifts", "Specialized Tires"],
    image: transportation
  }
};

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const productKeys = Object.keys(PRODUCT_DATA);
  const currentIndex = productKeys.indexOf(slug || "aviation");
  const product = PRODUCT_DATA[slug || "aviation"] || PRODUCT_DATA["aviation"];

  const nextSlug = productKeys[(currentIndex + 1) % productKeys.length];
  const prevSlug = productKeys[(currentIndex - 1 + productKeys.length) % productKeys.length];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-brand-green selection:text-white">

      {/* ================= HERO - MATCHES PRODUCT INDEX ================= */}
      <section className="relative bg-[#387663] pt-40 pb-56 overflow-hidden">

        {/* LOCAL IMAGE PATTERN */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat'
    <div className="bg-white min-h-screen font-['Montserrat'] selection:bg-[#308667] selection:text-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#387663] pt-40 pb-32 overflow-hidden">
        {/* Dynamic Background with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#387663]/90 mix-blend-multiply" />
        </div>

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none z-0"
          style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: '150px 150px' }}
        />

        <div className="app-container relative z-10">
          <Link to="/products" className="group flex items-center gap-3 text-brand-green font-black uppercase tracking-[0.4em] text-[10px] mb-12 hover:text-white transition-all">
            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            Back to Categories
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-green font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">Sector Intelligence 0{currentIndex + 1}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-cream uppercase leading-[1.05]">
              {product.name} <br />
              <span className="text-brand-green">Infrastructure</span>
        <div className="container mx-auto px-6 relative z-10 text-center pb-12">
          <div className="md:absolute md:left-6 md:bottom-12 md:mb-0 mb-8 flex justify-center md:block">
            <Link to="/products" className="group inline-flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[10px] hover:text-[#F9F2D6] transition-all">
              <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              Back
            </Link>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
            <h1 className="text-4xl md:text-6xl mt-20 font-black text-[#F9F2D6] uppercase leading-none tracking-tighter">
              {product.name}
            </h1>
          </motion.div>
        </div>

        {/* Diagonal Angle Cut */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="app-container py-24 relative -mt-32 z-20">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left Column: Storytelling */}
          <motion.div
            className="lg:col-span-8 bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-[#122C21]/5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-[#122C21]/10"></div>
              <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.4em]">Operational Brief</h2>
              <div className="h-px flex-1 bg-[#122C21]/10"></div>
            </div>

            <p className="text-2xl text-[#122C21] leading-relaxed font-bold mb-16 tracking-tight">
              {product.content}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-10 bg-[#F9F2D6] rounded-[2.5rem] border-t-8 border-[#308667]">
                <h4 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.3em] mb-6">Lifecycle Integration</h4>
                <p className="text-[#122C21] font-bold leading-relaxed text-sm opacity-80 italic">"{product.lifecycle}"</p>
              </div>
              <div className="p-10 bg-[#122C21] rounded-[2.5rem] text-[#F9F2D6] shadow-xl">
                <h4 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.3em] mb-6">Strategic Impact</h4>
                <p className="font-medium leading-relaxed text-sm opacity-90">{product.impact}</p>
              </div>
      <div className="container mx-auto px-6 py-12 max-w-6xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className=""
        >
          {/* STACKED TEXT SECTIONS */}
          <div className="flex flex-col gap-16 mb-20">
            {/* DESCRIPTION SECTION 01 */}
            <div className="w-full">
              <div className="w-12 h-1 bg-[#308667] mb-6 rounded-full" />
              <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.3em] mb-6">
                Procurement & Specification
              </h2>
              <p className="text-lg md:text-xl text-[#122C21] leading-relaxed font-bold tracking-tight">
                {product.content}
              </p>
            </div>

            {/* DESCRIPTION SECTION 02 */}
            <div className="w-full">
              <div className="w-12 h-1 bg-[#308667]/30 mb-6 rounded-full" />
              <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.3em] mb-6">
                Operational Lifecycle Support
              </h2>
              <p className="text-lg md:text-xl text-[#122C21]/70 leading-relaxed font-bold tracking-tight">
                {product.lifecycle}
              </p>
            </div>
          </div>

          {/* Right Column: Technical Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#122C21] text-[#F9F2D6] p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: '60px 60px' }} />

                <h3 className="text-lg font-black uppercase tracking-widest mb-10 border-b border-[#F9F2D6]/10 pb-4 relative z-10">Compliance Framework</h3>
                <div className="space-y-8 relative z-10">
                  {[
                    { icon: <FaShieldAlt />, t: "Verification", d: "Strict safety certification checks." },
                    { icon: <FaTruck />, t: "Logistics", d: "Coordinated global supply chains." },
                    { icon: <FaCogs />, t: "Maintenance", d: "Technical operational support." },
                    { icon: <FaHandshake />, t: "Partnership", d: "Direct manufacturer access." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group/item">
                      <div className="text-[#308667] text-2xl group-hover/item:scale-125 transition-transform">{item.icon}</div>
                      <div>
                        <h4 className="font-black text-[10px] uppercase tracking-widest mb-1">{item.t}</h4>
                        <p className="text-[#F9F2D6]/40 text-[10px] font-bold leading-tight">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <button className="w-full mt-12 py-5 bg-[#308667] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#122C21] transition-all shadow-lg relative z-10">
                    Request Consultation
                  </button>
                </Link>
              </div>

              {/* Navigation Pager */}
              <div className="grid grid-cols-2 gap-4">
                <Link to={`/products/${prevSlug}`} className="bg-white p-6 rounded-[2rem] border border-[#122C21]/5 hover:bg-[#F9F2D6] transition-all text-center">
                  <span className="text-[10px] font-black text-[#122C21]/30 uppercase block mb-1">Previous</span>
                  <span className="text-[10px] font-black text-[#308667] uppercase">← Sector</span>
                </Link>
                <Link to={`/products/${nextSlug}`} className="bg-white p-6 rounded-[2rem] border border-[#122C21]/5 hover:bg-[#F9F2D6] transition-all text-center">
                  <span className="text-[10px] font-black text-[#122C21]/30 uppercase block mb-1">Next</span>
                  <span className="text-[10px] font-black text-[#308667] uppercase">Sector →</span>
                </Link>
              </div>
          {/* KEY OFFERINGS GRID */}
          <div className="mb-20">
            <h3 className="text-center text-sm font-black text-[#122C21] uppercase tracking-[0.4em] mb-10 opacity-40">
              Key Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.offerings.map((item: string, i: number) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center justify-center text-center p-6 bg-[#F9F2D6]/30 rounded-2xl border border-[#122C21]/5 hover:bg-[#122C21] hover:border-[#122C21] transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-[#308667] mb-4 group-hover:bg-[#F9F2D6]" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#122C21] group-hover:text-[#F9F2D6] transition-colors leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex flex-col md:flex-row gap-6 items-center border-t border-[#122C21]/10 pt-12">
            <Link
              to={`/products/${prevSlug}`}
              className="group flex flex-col items-start w-full md:w-1/2 p-6 hover:bg-[#F9F2D6]/50 rounded-2xl transition-all text-left"
            >
              <span className="text-[9px] font-black text-[#122C21]/30 uppercase mb-2 tracking-[0.2em]">Previous Commodity</span>
              <span className="text-xs font-black text-[#308667] uppercase tracking-widest group-hover:text-[#122C21] transition-colors">
                ← {PRODUCT_DATA[prevSlug].name}
              </span>
            </Link>

            <div className="hidden md:block w-px h-12 bg-[#122C21]/10" />

            <Link
              to={`/products/${nextSlug}`}
              className="group flex flex-col items-end w-full md:w-1/2 p-6 hover:bg-[#F9F2D6]/50 rounded-2xl transition-all text-right"
            >
              <span className="text-[9px] font-black text-[#122C21]/30 uppercase mb-2 tracking-[0.2em]">Next Commodity</span>
              <span className="text-xs font-black text-[#308667] uppercase tracking-widest group-hover:text-[#122C21] transition-colors">
                {PRODUCT_DATA[nextSlug].name} →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ================= CATEGORY QUICK-SWITCHER ================= */}
      <section className="py-24 bg-[#122C21]/5 border-t border-[#122C21]/5">
        <div className="container mx-auto px-6">
          <h5 className="text-[10px] font-black text-[#308667] uppercase tracking-[0.5em] text-center mb-12">Browse Other Commodities</h5>
          <div className="flex flex-wrap justify-center gap-4">
            {productKeys.map((key) => (
              <Link
                key={key}
                to={`/products/${key}`}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border-2
                            ${key === slug
                    ? 'bg-[#122C21] text-[#F9F2D6] border-[#122C21]'
                    : 'bg-transparent text-[#122C21]/40 border-[#122C21]/10 hover:border-[#122C21] hover:text-[#122C21]'}
                        `}
              >
                {PRODUCT_DATA[key].name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Topfooter />
    </div>
  );
};

export default ProductDetail;