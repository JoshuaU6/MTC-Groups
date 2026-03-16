import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { Droplet, HardHat, Building, Stethoscope, GraduationCap, Cpu } from "lucide-react";

const SECTORS = [
  {
    icon: Droplet,
    title: "Energy & Petroleum",
    desc: "Oil & gas trading, petroleum supply chains, refinery participation, fuel distribution networks.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
  },
  {
    icon: HardHat,
    title: "Infrastructure",
    desc: "Tank farms, petroleum storage, industrial infrastructure, energy logistics.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
  },
  {
    icon: Building,
    title: "Real Estate",
    desc: "Commercial, industrial, and residential developments across emerging markets.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Hospital investments, medical infrastructure development, and healthcare services.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Educational institutions and university development initiatives globally.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
  },
  {
    icon: Cpu,
    title: "Technology",
    desc: "Digital solutions, technology integration services, and industrial automation.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  }
];

export default function Sectors() {
  return (
    <Layout>
      <div className="bg-mtc-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={`${import.meta.env.BASE_URL}images/abstract-bg.png`} 
            alt="Abstract Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Our Sectors</h1>
            <div className="h-1 w-20 bg-mtc-gold mx-auto mb-6" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              MTC Group operates strategically across six high-impact industries.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SECTORS.map((sector, index) => {
              const isEven = index % 2 === 0;
              const Icon = sector.icon;
              return (
                <div key={sector.title} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  
                  {/* Image side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-1/2"
                  >
                    <div className="relative group overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-mtc-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={sector.img} 
                        alt={sector.title} 
                        className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>

                  {/* Content side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2 lg:px-12"
                  >
                    <div className="w-16 h-16 bg-mtc-gold/10 text-mtc-gold flex items-center justify-center rounded-lg mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl font-serif text-mtc-navy font-bold mb-6">{sector.title}</h2>
                    <div className="w-12 h-1 bg-mtc-gold mb-6" />
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {sector.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
