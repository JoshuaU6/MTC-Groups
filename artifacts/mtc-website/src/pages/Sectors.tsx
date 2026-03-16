import { Layout } from "@/components/layout/Layout";
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
                <motion.div 
                  key={sector.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-mtc-red group"
                >
                  <div className="w-16 h-16 bg-mtc-red rounded-full flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-serif text-mtc-charcoal font-bold mb-4">{sector.title}</h2>
                  <div className="w-12 h-1 bg-gray-200 mb-6 group-hover:bg-mtc-red transition-colors" />
                  <p className="text-gray-600 font-light leading-relaxed">
                    {sector.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
