import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Flame, Warehouse, Building2, HeartPulse, GraduationCap, Cpu } from "lucide-react";

const SECTORS = [
  {
    icon: Flame,
    title: "Energy & Petroleum",
    desc: "Oil & gas trading, petroleum supply chains, refinery participation, fuel distribution networks."
  },
  {
    icon: Warehouse,
    title: "Infrastructure",
    desc: "Tank farms, petroleum storage, industrial infrastructure, energy logistics."
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Commercial, industrial, and residential developments across emerging markets."
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Hospital investments, medical infrastructure development, and healthcare services."
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Educational institutions and university development initiatives globally."
  },
  {
    icon: Cpu,
    title: "Technology",
    desc: "Digital solutions, technology integration services, and industrial automation."
  }
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
            <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-6">Our Sectors</h1>
            <div className="h-1 w-24 bg-mtc-red mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              MTC Group operates strategically across six high-impact industries.
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
                <ScrollReveal key={sector.title} delay={index * 80}>
                  <div className="relative h-[300px] bg-white shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-mtc-red group overflow-hidden p-10">
                    <div className="w-16 h-16 bg-mtc-red rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-serif text-mtc-charcoal font-bold mb-3">{sector.title}</h2>
                    <div className="w-12 h-1 bg-gray-200 mb-4 group-hover:bg-mtc-red transition-colors duration-300" />
                    <p className="text-gray-600 font-light leading-relaxed text-sm">
                      {sector.desc}
                    </p>

                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 bg-mtc-red flex flex-col items-center justify-center opacity-0 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none"
                      aria-hidden="true"
                    >
                      <Icon className="w-12 h-12 text-white mb-4 opacity-80" />
                      <span className="text-white text-xl font-bold tracking-wide">Learn More →</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
