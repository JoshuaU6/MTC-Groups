import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";

export default function Subsidiaries() {
  return (
    <Layout>
      <div className="bg-mtc-charcoal pt-40 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white font-bold mb-6">Our Subsidiaries</h1>
            <div className="h-1 w-24 bg-mtc-red mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Specialized divisions executing our global strategy.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-mtc-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">

            {/* ── MainKey Limited ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl border-t-4 border-mtc-red overflow-hidden"
            >
              {/* Logo banner */}
              <div className="flex items-center justify-center bg-white border-b border-gray-100 py-10 px-10">
                <img
                  src="/images/mainkey-logo.jpg"
                  alt="MainKey Limited — Global Energy & Commodity Trading"
                  className="max-h-40 w-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-10 md:p-14">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-mtc-red text-white text-xs font-bold tracking-widest uppercase rounded-full">
                    Energy & Trading Division
                  </span>
                </div>
                <h2 className="text-4xl font-serif font-bold text-mtc-charcoal mb-4">MainKey Limited</h2>
                <p className="text-xl text-gray-600 font-light mb-10 italic">
                  International petroleum trading and energy commodity solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-lg font-bold text-mtc-charcoal mb-4 uppercase tracking-wide border-b border-gray-100 pb-2">Products Traded</h4>
                    <ul className="space-y-3">
                      {["PMS (Premium Motor Spirit)", "AGO (Automotive Gas Oil)", "EN590 Diesel", "LNG (Liquefied Natural Gas)", "LPG (Liquefied Petroleum Gas)", "Jet A1 Aviation Fuel", "Fertilizer"].map((item) => (
                        <li key={item} className="flex items-start text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-mtc-red mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-mtc-charcoal mb-4 uppercase tracking-wide border-b border-gray-100 pb-2">Additional Services</h4>
                    <ul className="space-y-3">
                      {["Tank farms & petroleum storage", "Energy logistics", "Industrial infrastructure", "Real estate development", "Commercial property investments"].map((item) => (
                        <li key={item} className="flex items-start text-gray-700">
                          <Circle className="w-4 h-4 text-mtc-red mr-4 flex-shrink-0 mt-1 fill-mtc-red" aria-hidden="true" />
                          <span className="font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Safwad Limited ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white shadow-xl border-t-4 border-mtc-red overflow-hidden"
            >
              {/* Logo banner */}
              <div className="flex items-center justify-center bg-white border-b border-gray-100 py-10 px-10">
                <img
                  src="/images/safwad-logo.jpg"
                  alt="Safwad Limited logo"
                  className="max-h-40 w-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-10 md:p-14">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-mtc-red text-white text-xs font-bold tracking-widest uppercase rounded-full">
                    International Trade Division
                  </span>
                </div>
                <h2 className="text-4xl font-serif font-bold text-mtc-charcoal mb-4">Safwad Limited</h2>
                <p className="text-xl text-gray-600 font-light mb-10 italic">
                  Specialized import, export, and distribution across global markets.
                </p>

                <div>
                  <h4 className="text-lg font-bold text-mtc-charcoal mb-4 uppercase tracking-wide border-b border-gray-100 pb-2">Focus Areas</h4>
                  <ul className="space-y-4">
                    {["Agricultural products", "Sanitary & hygiene products (diapers, pampers)", "International logistics & supply chain"].map((item) => (
                      <li key={item} className="flex items-start text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-mtc-red mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="font-light text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
