import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Flame, Warehouse, Building2, HeartPulse, GraduationCap, Cpu, TrendingUp, Wheat } from "lucide-react";
import { Link } from "wouter";

const SECTORS = [
  {
    icon: Flame,
    title: "Energy & Petroleum",
    desc: "Crude oil trading, petroleum product supply, refinery operations, tank farms, and global fuel distribution networks.",
    href: "/sectors/energy-petroleum",
    tag: "Core Business",
  },
  {
    icon: TrendingUp,
    title: "Trading & Commodities",
    desc: "International energy and commodity trading — PMS, AGO, LNG, LPG, Jet A1, fertilizers, and industrial products through MainKey Limited.",
    href: "/sectors/trading",
    tag: "MainKey Limited",
  },
  {
    icon: Wheat,
    title: "Agriculture & Consumer Goods",
    desc: "Import, export, and global distribution of agricultural commodities, diapers, sanitary products, and fast-moving consumer goods through Safwad Limited.",
    href: "/sectors/agriculture",
    tag: "Safwad Limited",
  },
  {
    icon: Warehouse,
    title: "Infrastructure",
    desc: "Tank farms, petroleum storage facilities, industrial infrastructure, pipelines, and large-scale energy logistics projects.",
    href: "/sectors/infrastructure",
    tag: "Development",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Commercial, industrial, and residential developments. Strategic property investments across Africa, the Middle East, and beyond.",
    href: "/sectors/real-estate",
    tag: "Investment",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Hospital development, diagnostic centres, medical equipment supply, and primary healthcare network investments across West Africa.",
    href: "/sectors/healthcare",
    tag: "Social Impact",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "International schools, vocational training institutes, university-affiliated research centres, and digital learning infrastructure.",
    href: "/sectors/education",
    tag: "Social Impact",
  },
  {
    icon: Cpu,
    title: "Technology",
    desc: "Digital infrastructure, IT services, industrial automation, and enterprise technology solutions across MTC Group's operational divisions.",
    href: "/sectors/technology",
    tag: "Innovation",
  },
];

export default function Sectors() {
  return (
    <Layout>
      <div className="bg-mtc-charcoal pt-40 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-mtc-red font-bold tracking-widest text-sm uppercase mb-4 block">Our Business</span>
            <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-6">Our Sectors</h1>
            <div className="h-1 w-24 bg-mtc-red mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              MTC Group operates strategically across eight high-impact industries — from crude oil trading and refinery operations to agriculture, real estate, healthcare, and technology.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-mtc-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTORS.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <ScrollReveal key={sector.title} delay={index * 70}>
                  <Link href={sector.href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-mtc-red" aria-label={`Explore the ${sector.title} sector`}>
                    <div className="sector-card relative h-[320px] bg-white shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-mtc-red group overflow-hidden p-10 cursor-pointer">
                      <span className="text-xs font-bold text-mtc-red uppercase tracking-widest mb-4 block">{sector.tag}</span>
                      <div className="w-14 h-14 bg-mtc-charcoal rounded-full flex items-center justify-center text-white mb-5 group-hover:bg-mtc-red transition-colors duration-300">
                        <Icon className="w-7 h-7" aria-hidden="true" />
                      </div>
                      <h2 className="text-2xl font-serif text-mtc-charcoal font-bold mb-3">{sector.title}</h2>
                      <p className="text-gray-500 font-light leading-relaxed text-sm">
                        {sector.desc}
                      </p>

                      {/* Hover overlay */}
                      <div
                        className="sector-hover-overlay absolute inset-0 bg-mtc-red flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 p-8"
                        aria-hidden="true"
                      >
                        <Icon className="w-12 h-12 text-white mb-4 opacity-80" />
                        <span className="text-white text-xl font-bold tracking-wide text-center">{sector.title}</span>
                        <span className="text-white/70 text-sm mt-2">Explore Sector →</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
