import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const LOCATIONS = [
  {
    city: "Washington DC",
    country: "USA",
    address: "Washington Business District, DC 20001",
    type: "Global Headquarters",
    img: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?w=600&q=80"
  },
  {
    city: "Paris",
    country: "France",
    address: "Central Business District, 75008 Paris",
    type: "European Hub",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80"
  },
  {
    city: "Lagos",
    country: "Nigeria",
    address: "Victoria Island Business District, Lagos",
    type: "African Operations",
    img: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=600&q=80"
  },
  {
    city: "Hong Kong",
    country: "China",
    address: "Central District, Hong Kong",
    type: "Asian Markets",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80"
  }
];

export default function GlobalPresence() {
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
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Global Presence</h1>
            <div className="h-1 w-20 bg-mtc-gold mx-auto mb-6" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Operating across four continents through strategic partnerships.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              MTC Group maintains a robust international presence, allowing us to seamlessly connect markets, execute complex logistics, and manage investments on a global scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LOCATIONS.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white group overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-mtc-navy/30 group-hover:bg-mtc-navy/10 transition-colors z-10" />
                  <img 
                    src={loc.img} 
                    alt={loc.city} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 text-white font-bold tracking-widest text-xs uppercase px-2 py-1 bg-mtc-gold">
                    {loc.country}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-mtc-navy mb-1">{loc.city}</h3>
                  <p className="text-mtc-gold text-sm font-medium mb-4">{loc.type}</p>
                  <div className="flex items-start text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-mtc-navy text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl"
          >
            <div>
              <h3 className="text-3xl font-serif mb-2">Global Inquiries</h3>
              <p className="text-white/70 font-light">Reach out to our central operations team.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 md:mt-0">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-mtc-gold mr-3" />
                <span className="text-xl">+1 771 240 1273</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-mtc-gold mr-3" />
                <span className="text-xl">info@mtcgroup.com</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
