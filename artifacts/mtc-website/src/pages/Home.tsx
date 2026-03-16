import { Layout } from "@/components/layout/Layout";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Globe, Building2, Users, Calendar, Briefcase, ChevronRight } from "lucide-react";

const STATS = [
  { label: "Sectors", value: "6+", icon: Briefcase },
  { label: "Continents", value: "4", icon: Globe },
  { label: "Staff Worldwide", value: "500+", icon: Users },
  { label: "Operations", value: "12", icon: Building2 },
];

export default function Home() {
  return (
    <Layout>
      <HeroCarousel />

      {/* Stats Strip */}
      <section className="bg-mtc-navy py-12 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-center ${i % 2 !== 0 ? 'pl-8' : ''}`}
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-mtc-gold opacity-80" />
                  </div>
                  <div className="text-4xl font-serif text-white font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Building Sustainable Industries Globally" 
                subtitle="About MTC Group"
              />
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  MTC Group of Companies is a diversified international business group engaged in energy trading, petroleum infrastructure, logistics, real estate development, healthcare, education, and technology services.
                </p>
                <p>
                  Through its subsidiaries and strategic partnerships, the group participates in global petroleum supply chains, infrastructure development projects, and industrial investments across multiple regions.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="mt-4">
                    Discover Our Story
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-mtc-gold/10 transform rotate-3 z-0" />
              {/* modern corporate building glass reflection */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="MTC Corporate Overview" 
                className="relative z-10 w-full object-cover shadow-2xl h-[500px]"
              />
              <div className="absolute -bottom-8 -left-8 bg-mtc-navy p-8 text-white z-20 shadow-xl max-w-xs hidden md:block">
                <p className="font-serif text-2xl mb-2">Founded in 2010</p>
                <p className="text-white/70 text-sm">Over a decade of excellence in global trade and investment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Preview */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-mtc-navy/5 transform skew-x-12 translate-x-32" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading 
              title="Our Business Sectors" 
              subtitle="Global Operations"
            />
            <Link href="/sectors" className="hidden md:flex items-center text-mtc-gold font-semibold hover:text-mtc-navy transition-colors mb-12">
              View All Sectors <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Energy & Petroleum", desc: "Oil & gas trading, petroleum supply chains, refinery participation.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80" },
              { title: "Infrastructure", desc: "Tank farms, petroleum storage, industrial infrastructure.", img: "https://images.unsplash.com/photo-1541888087817-485dd20c4e17?w=600&q=80" },
              { title: "Real Estate", desc: "Commercial, industrial, and residential developments.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" }
            ].map((sector, i) => (
              <motion.div 
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-mtc-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={sector.img} 
                    alt={sector.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 relative">
                  <div className="w-12 h-1 bg-mtc-gold mb-4 transition-all duration-300 group-hover:w-full" />
                  <h3 className="text-2xl font-serif font-bold text-mtc-navy mb-3">{sector.title}</h3>
                  <p className="text-muted-foreground">{sector.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/sectors">
              <Button variant="outline">View All Sectors</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-mtc-navy overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/abstract-bg.png`} 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Contact our global offices to explore investment and partnership opportunities across our diverse portfolio of industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Contact Us</Button>
            </Link>
            <Link href="/global-presence">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-mtc-navy">
                Global Offices
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
