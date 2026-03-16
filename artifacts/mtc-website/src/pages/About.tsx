import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
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
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">About MTC Group</h1>
            <div className="h-1 w-20 bg-mtc-gold mx-auto mb-6" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Powering Global Trade. Building Sustainable Industries.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SectionHeading title="Who We Are" subtitle="Our Identity" />
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-mtc-navy font-semibold">MTC Group of Companies</strong> is a diversified international business group engaged in energy trading, petroleum infrastructure, logistics, real estate development, healthcare, education, and technology services.
                </p>
                <p>
                  Through its subsidiaries and strategic partnerships, the group participates in global petroleum supply chains, infrastructure development projects, and industrial investments across multiple regions.
                </p>
                <p>
                  The group's activities span upstream, midstream, and downstream sectors of the energy industry while also supporting infrastructure and economic development in emerging markets.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-mtc-gold translate-x-4 translate-y-4" />
              {/* boardroom meeting professional */}
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Corporate Leadership" 
                className="relative z-10 w-full object-cover shadow-xl h-[600px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values / Approach */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Approach" subtitle="Strategic Vision" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Transparency",
                desc: "Operating with absolute clarity and honesty across all international boundaries and partnerships."
              },
              {
                title: "Responsible Management",
                desc: "Ensuring all operations follow sound corporate governance principles and ethical standards."
              },
              {
                title: "Sustainable Development",
                desc: "Committing to long-term growth that benefits both stakeholders and the communities we operate in."
              }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-mtc-navy text-mtc-gold flex items-center justify-center rounded-full mx-auto mb-6 text-2xl font-serif group-hover:bg-mtc-gold group-hover:text-mtc-navy transition-colors">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold font-serif text-mtc-navy mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
