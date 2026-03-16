import { Layout } from "@/components/layout/Layout";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Globe, Building2, Users, Briefcase, Flame, Warehouse, ChevronRight } from "lucide-react";

const STATS = [
  { label: "Sectors", value: "6+" },
  { label: "Continents", value: "4" },
  { label: "Staff Worldwide", value: "10,000+" },
  { label: "Operations", value: "12" },
];

export default function Home() {
  return (
    <Layout>
      <HeroCarousel />

      {/* Stats Strip */}
      <section className="bg-white border-b border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {STATS.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-4 md:py-0"
              >
                <div className="text-4xl md:text-5xl font-serif text-mtc-red font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-mtc-charcoal uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full h-1 bg-mtc-red" />
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-[60%]">
              <div className="mb-8">
                <span className="text-mtc-red font-bold tracking-widest text-sm uppercase mb-4 block">About MTC Group</span>
                <h2 className="text-4xl md:text-5xl font-serif text-mtc-charcoal font-bold leading-tight">
                  Building Sustainable Industries Globally
                </h2>
              </div>
              <div className="space-y-6 text-mtc-charcoal text-lg leading-relaxed font-light">
                <p>
                  MTC Group of Companies is a diversified international business group engaged in energy trading, petroleum infrastructure, logistics, real estate development, healthcare, education, and technology services.
                </p>
                <p>
                  Through its subsidiaries and strategic partnerships, the group participates in global petroleum supply chains, infrastructure development projects, and industrial investments across multiple regions.
                </p>
                <p>
                  The group's activities span upstream, midstream, and downstream sectors of the energy industry while also supporting infrastructure and economic development in emerging markets.
                </p>
                <Link href="/about" className="inline-block mt-6">
                  <Button variant="outline" className="border-mtc-charcoal text-mtc-charcoal hover:bg-mtc-charcoal hover:text-white rounded-none px-8 py-6">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-[40%] w-full">
              <div className="bg-mtc-red text-white p-10 shadow-2xl h-full flex flex-col justify-center">
                <ul className="space-y-8 text-lg">
                  <li className="flex flex-col border-b border-white/20 pb-4">
                    <span className="text-white/70 text-sm uppercase tracking-wider mb-1">Founded</span>
                    <span className="font-semibold">Washington, D.C., USA</span>
                  </li>
                  <li className="flex flex-col border-b border-white/20 pb-4">
                    <span className="text-white/70 text-sm uppercase tracking-wider mb-1">Operations</span>
                    <span className="font-semibold">Africa | Middle East | Europe | Asia</span>
                  </li>
                  <li className="flex flex-col border-b border-white/20 pb-4">
                    <span className="text-white/70 text-sm uppercase tracking-wider mb-1">Sectors</span>
                    <span className="font-semibold">6 core industries</span>
                  </li>
                  <li className="flex flex-col border-b border-white/20 pb-4">
                    <span className="text-white/70 text-sm uppercase tracking-wider mb-1">Website</span>
                    <span className="font-semibold">www.mtc-groups.com</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-white/70 text-sm uppercase tracking-wider mb-1">Email</span>
                    <span className="font-semibold">info@mtc-groups.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-24 bg-mtc-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-mtc-charcoal font-bold mb-4">Our Global Sectors</h2>
              <div className="w-20 h-1 bg-mtc-red" />
            </div>
            <Link href="/sectors" className="hidden md:flex items-center text-mtc-red font-semibold hover:text-red-800 transition-colors">
              View All Sectors <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Energy & Petroleum", 
                desc: "Oil & gas trading, petroleum supply chains, refinery participation, fuel distribution networks.", 
                icon: Flame 
              },
              { 
                title: "Infrastructure", 
                desc: "Tank farms, petroleum storage, industrial infrastructure, energy logistics.", 
                icon: Warehouse 
              },
              { 
                title: "Real Estate", 
                desc: "Commercial, industrial, and residential developments across emerging markets.", 
                icon: Building2 
              }
            ].map((sector, i) => (
              <motion.div 
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-mtc-red"
              >
                <div className="w-16 h-16 bg-mtc-red rounded-full flex items-center justify-center text-white mb-8">
                  <sector.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-mtc-charcoal mb-4">{sector.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/sectors" className="inline-flex items-center text-mtc-red font-semibold">
              View All Sectors <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-mtc-charcoal diagonal-pattern relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
            Contact our global offices to explore investment and partnership opportunities across our diverse portfolio of industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-mtc-red hover:bg-red-800 text-white rounded px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
            <Link href="/global-presence">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-mtc-charcoal rounded px-8 py-6 text-lg">
                Global Offices
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
