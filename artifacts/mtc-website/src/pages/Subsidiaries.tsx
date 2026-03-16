import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Subsidiaries() {
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
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Our Subsidiaries</h1>
            <div className="h-1 w-20 bg-mtc-gold mx-auto mb-6" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Specialized divisions executing our global strategy.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* MainKey Limited */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="mb-4 inline-block px-3 py-1 bg-mtc-navy/5 text-mtc-navy text-sm font-bold tracking-widest uppercase">
                Energy & Trading Division
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-mtc-navy mb-6">MainKey Limited</h2>
              <div className="w-16 h-1 bg-mtc-gold mb-8" />
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                MainKey Limited serves as the core Energy & Trading Division for MTC Group, orchestrating complex physical trading of energy products and managing vast logistical networks.
              </p>

              <h4 className="text-xl font-serif font-bold text-mtc-navy mb-4">Products & Focus Areas</h4>
              <ul className="space-y-4">
                {["Energy Trading", "Energy Logistics", "Industrial Real Estate", "Commercial Property"].map((item) => (
                  <li key={item} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-mtc-gold mr-3 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-mtc-navy/10 to-transparent z-10" />
              {/* energy logistics tanker ships */}
              <img 
                src="https://pixabay.com/get/g77aa4962993529a89d6e557051b566a64104085a18f6179d27740a2b8aa345d5b6d11b02ea5a137a42da12434e67fe459099e234f67b9a60cbe6c609295307ff_1280.jpg" 
                alt="MainKey Logistics" 
                className="w-full h-full object-cover shadow-2xl rounded-sm"
              />
            </motion.div>
          </div>

          {/* Safwad Limited */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-mtc-navy/10 to-transparent z-10" />
              {/* cargo containers agricultural trade */}
              <img 
                src="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=800&q=80" 
                alt="Safwad Trade" 
                className="w-full h-full object-cover shadow-2xl rounded-sm"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-block px-3 py-1 bg-mtc-navy/5 text-mtc-navy text-sm font-bold tracking-widest uppercase">
                International Trade Division
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-mtc-navy mb-6">Safwad Limited</h2>
              <div className="w-16 h-1 bg-mtc-gold mb-8" />
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Safwad Limited drives our International Trade initiatives, specializing in the complex movement and distribution of agricultural commodities and comprehensive supply chain solutions globally.
              </p>

              <h4 className="text-xl font-serif font-bold text-mtc-navy mb-4">Key Focus Areas</h4>
              <ul className="space-y-4">
                {["Agricultural Products", "Supply Chain Management", "Global Logistics"].map((item) => (
                  <li key={item} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-mtc-gold mr-3 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
