import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const DIRECTORS = [
  {
    role: "Director of Energy & Trading",
    desc: "Overseeing energy trading operations and petroleum supply activities through MainKey Limited."
  },
  {
    role: "Director of International Trade",
    desc: "Overseeing import and export activities, agricultural commodities trading, and product distribution through Safwad Limited."
  },
  {
    role: "Director of Infrastructure",
    desc: "Responsible for infrastructure development and real estate investment initiatives."
  },
  {
    role: "Director of Finance",
    desc: "Overseeing financial management, investment strategies, and corporate financial planning."
  }
];

export default function Leadership() {
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
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Leadership & Governance</h1>
            <div className="h-1 w-20 bg-mtc-gold mx-auto mb-6" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Guiding vision and strategic direction for sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Chairman Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 p-8 md:p-12 shadow-xl mb-24 relative"
          >
            <Quote className="absolute top-8 left-8 w-12 h-12 text-mtc-gold/20" />
            <div className="text-center mb-10">
              <h2 className="text-4xl font-serif font-bold text-mtc-navy mb-2">A.S. Abba</h2>
              <p className="text-mtc-gold font-bold tracking-widest uppercase text-sm">Chairman, MTC Group of Companies</p>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light italic text-center px-4 md:px-8">
              "A.S. Abba serves as the Chairman of MTC Group of Companies, a diversified business group engaged in energy trading, international commerce, agriculture, real estate development, healthcare, education, and technology services. As Chairman, he provides strategic leadership and oversight for the group's operations and long-term growth initiatives across multiple sectors. His vision for MTC Group is to establish a globally recognised business platform that connects international markets through strategic partnerships, responsible investments, and innovative solutions."
            </p>
          </motion.div>

          {/* Board of Directors */}
          <div className="mb-24">
            <SectionHeading title="Board of Directors" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {DIRECTORS.map((director, i) => (
                <motion.div
                  key={director.role}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:border-mtc-gold transition-colors duration-300">
                    <CardContent className="p-8">
                      <div className="w-10 h-1 bg-mtc-gold mb-6" />
                      <h3 className="text-xl font-serif font-bold text-mtc-navy mb-3">{director.role}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{director.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Governance Statement */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center bg-mtc-navy text-white p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-mtc-gold/5" />
            <div className="relative z-10">
              <h3 className="text-2xl font-serif mb-6">Corporate Governance</h3>
              <p className="text-white/80 leading-relaxed font-light">
                MTC Group of Companies operates with a strong commitment to transparency, responsible management, and strategic partnerships. The leadership team ensures all operations follow sound corporate governance principles while supporting long-term growth and sustainable development.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
