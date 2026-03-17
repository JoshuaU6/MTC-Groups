import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const DIRECTORS = [
  {
    name: "Engr. Ahmed Bello",
    role: "Director of Energy & Trading",
    email: "energy@mtc-groups.com",
    desc: "Overseeing energy trading operations and petroleum supply activities through MainKey Limited."
  },
  {
    name: "Jean-Luc Fournier",
    role: "Director of International Trade",
    email: "trade@mtc-groups.com",
    desc: "Overseeing import and export activities, agricultural commodities trading, and product distribution through Safwad Limited."
  },
  {
    name: "Engr. David Okonkwo",
    role: "Director of Infrastructure",
    email: "infrastructure@mtc-groups.com",
    desc: "Responsible for infrastructure development, pipeline construction, and real estate investment initiatives."
  },
  {
    name: "Arch. L. Abubakar",
    role: "Director of Finance",
    email: "finance@mtc-groups.com",
    desc: "Overseeing financial management, investment strategies, and corporate financial planning."
  }
];

export default function Leadership() {
  return (
    <Layout>
      <div className="bg-mtc-charcoal pt-40 pb-24 text-center border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-6">Leadership & Governance</h1>
            <div className="h-1 w-24 bg-mtc-red mx-auto mb-8" />
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Guiding vision and strategic direction for sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-mtc-charcoal text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Chairman Feature Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start border-l-4 border-mtc-gold pl-8 md:pl-12">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-52 h-64 overflow-hidden shadow-2xl border-2 border-mtc-gold/30">
                  <img
                    src="/images/abba-photo.jpg"
                    alt="A.S. Abba — Chairman, MTC Group of Companies"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="flex-grow">
                <h2 className="text-5xl font-serif font-bold text-white mb-2">A.S. Abba</h2>
                <p className="text-mtc-gold font-bold tracking-widest uppercase text-sm mb-8">Chairman, MTC Group of Companies</p>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-10 max-w-4xl">
                  "A.S. Abba serves as the Chairman of MTC Group of Companies, a diversified business group engaged in energy trading, international commerce, agriculture, real estate development, healthcare, education, and technology services. As Chairman, he provides strategic leadership and oversight for the group's operations and long-term growth initiatives across multiple sectors. His vision for MTC Group is to establish a globally recognised business platform that connects international markets through strategic partnerships, responsible investments, and innovative solutions."
                </p>
                <div className="w-full max-w-md h-px bg-mtc-gold/50" />
              </div>
            </div>
          </motion.div>

          {/* Leadership Grid */}
          <div className="mb-24">
            <h3 className="text-3xl font-serif font-bold text-white mb-10">Board of Directors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIRECTORS.map((director, i) => (
                <motion.div
                  key={director.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border-t-4 border-mtc-red p-8 flex flex-col h-full hover:bg-white/10 transition-colors"
                >
                  <div className="mb-5">
                    <h4 className="text-lg font-bold text-mtc-red uppercase tracking-wider mb-3 leading-snug">{director.role}</h4>
                    <h3 className="text-2xl font-serif font-bold text-white leading-tight">{director.name}</h3>
                  </div>
                  <div className="h-px w-10 bg-white/20 mb-5" />
                  <p className="text-white/60 text-sm leading-relaxed font-light mb-6 flex-grow">{director.desc}</p>
                  <a
                    href={`mailto:${director.email}`}
                    className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group mt-auto"
                    aria-label={`Email ${director.name}`}
                  >
                    <Mail className="w-4 h-4 text-mtc-red group-hover:text-white transition-colors" aria-hidden="true" />
                    <span className="font-mono tracking-tight">{director.email}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Governance note */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto pt-16 border-t border-white/10"
          >
            <p className="text-white/70 leading-relaxed font-light text-lg">
              MTC Group of Companies operates with a strong commitment to transparency, responsible management, and strategic partnerships. The leadership team ensures all operations follow sound corporate governance principles while supporting long-term growth and sustainable development.
            </p>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
