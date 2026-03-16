import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, MapPin, Mail, Phone } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sectors", href: "/sectors" },
  { name: "Subsidiaries", href: "/subsidiaries" },
  { name: "Leadership", href: "/leadership" },
  { name: "Global Presence", href: "/global-presence" },
  { name: "Contact", href: "/contact" },
];

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if we're on a page with a full-screen hero (like home)
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navClass = isHomePage
    ? isScrolled
      ? "bg-mtc-navy/95 backdrop-blur-md shadow-lg py-4"
      : "bg-transparent py-6"
    : "bg-mtc-navy shadow-lg py-4";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-mtc-gold selection:text-mtc-navy">
      {/* Top Bar (Contact Info) - Hidden on Mobile */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 bg-mtc-navy border-b border-white/10 text-white/80 text-xs">
        <div className="flex space-x-6">
          <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-mtc-gold" /> Headquarters: Washington DC, USA</span>
          <span className="flex items-center"><Phone className="w-3 h-3 mr-2 text-mtc-gold" /> Global: +1 771 240 1273</span>
        </div>
        <div>
          <span className="flex items-center"><Mail className="w-3 h-3 mr-2 text-mtc-gold" /> info@mtcgroup.com</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${navClass} ${isHomePage && !isScrolled ? 'top-0 lg:top-[33px]' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="MTC Group Logo" 
                className="w-10 h-10 md:w-12 md:h-12 mr-3"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white">MTC</span>
                <span className="text-[0.6rem] tracking-[0.25em] text-mtc-gold uppercase">Group of Companies</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                    location === link.href ? "text-mtc-gold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {location === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-mtc-gold"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[72px] bg-mtc-navy border-t border-white/10 z-40 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg py-2 border-b border-white/5 flex justify-between items-center ${
                    location === link.href ? "text-mtc-gold font-semibold" : "text-white/80"
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-mtc-navy pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center inline-block">
                <div className="flex flex-col">
                  <span className="font-serif text-3xl font-bold tracking-wider text-white">MTC</span>
                  <span className="text-[0.6rem] tracking-[0.25em] text-mtc-gold uppercase">Group of Companies</span>
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed pr-4">
                Powering Global Trade. Building Sustainable Industries through strategic investment and operational excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-serif text-lg mb-6 flex items-center">
                <span className="w-6 h-px bg-mtc-gold mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/70 hover:text-mtc-gold text-sm transition-colors flex items-center">
                      <ChevronRight className="w-3 h-3 mr-2 text-mtc-gold opacity-50" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subsidiaries */}
            <div>
              <h4 className="text-white font-serif text-lg mb-6 flex items-center">
                <span className="w-6 h-px bg-mtc-gold mr-3"></span>
                Our Companies
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/subsidiaries" className="text-white/70 hover:text-mtc-gold text-sm transition-colors flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2 text-mtc-gold opacity-50" />
                    MainKey Limited
                  </Link>
                </li>
                <li>
                  <Link href="/subsidiaries" className="text-white/70 hover:text-mtc-gold text-sm transition-colors flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2 text-mtc-gold opacity-50" />
                    Safwad Limited
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-serif text-lg mb-6 flex items-center">
                <span className="w-6 h-px bg-mtc-gold mr-3"></span>
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start text-sm text-white/70">
                  <MapPin className="w-5 h-5 mr-3 text-mtc-gold shrink-0 mt-0.5" />
                  <span>Washington Business District, DC 20001, USA</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <Phone className="w-5 h-5 mr-3 text-mtc-gold shrink-0" />
                  <span>+1 771 240 1273</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <Mail className="w-5 h-5 mr-3 text-mtc-gold shrink-0" />
                  <span>info@mtcgroup.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
            <p>© {new Date().getFullYear()} MTC Group of Companies. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-mtc-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-mtc-gold transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
