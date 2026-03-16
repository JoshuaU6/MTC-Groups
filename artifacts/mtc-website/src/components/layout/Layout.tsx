import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Mail, Phone, Linkedin, Twitter, Facebook, ChevronRight } from "lucide-react";

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

  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Navbar styling logic
  const isDarkNav = isHomePage && !isScrolled;
  const navClass = isDarkNav
    ? "bg-transparent py-6"
    : "bg-white shadow-md py-4";

  const logoColor = "text-mtc-red";
  const logoSubColor = isDarkNav ? "text-white/90" : "text-mtc-charcoal";
  const linkColor = isDarkNav ? "text-white hover:text-white" : "text-mtc-charcoal hover:text-mtc-red";

  return (
    <div className="flex flex-col min-h-screen bg-white text-mtc-charcoal">
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 bg-mtc-charcoal text-white/70 text-xs">
        <div className="flex space-x-6">
          <span className="flex items-center"><MapPin className="w-3 h-3 mr-2 text-mtc-red" /> Headquarters: Washington DC, USA</span>
          <span className="flex items-center"><Phone className="w-3 h-3 mr-2 text-mtc-red" /> Global: +1 771 240 1273</span>
        </div>
        <div>
          <span className="flex items-center"><Mail className="w-3 h-3 mr-2 text-mtc-red" /> info@mtcgroup.com</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${navClass} ${isHomePage && !isScrolled ? 'top-0 lg:top-[33px]' : 'top-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex flex-col">
                <span className={`font-serif text-3xl font-bold tracking-wider ${logoColor}`}>MTC</span>
                <span className={`text-[0.65rem] tracking-[0.1em] font-sans font-medium uppercase ${logoSubColor}`}>Group of Companies</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center space-x-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${linkColor}`}
                >
                  {link.name}
                  {location === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-mtc-red"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <Link href="/contact" className="ml-4">
                <button className="bg-mtc-red text-white hover:bg-red-800 transition-colors rounded px-5 py-2 text-sm font-medium">
                  Partner With Us
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`xl:hidden p-2 focus:outline-none ${isDarkNav ? 'text-white' : 'text-mtc-charcoal'}`}
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
            className="fixed inset-x-0 top-[72px] bg-white border-t border-gray-200 z-40 xl:hidden overflow-hidden shadow-xl"
          >
            <div className="flex flex-col py-4 px-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg py-3 border-b border-gray-100 flex justify-between items-center ${
                    location === link.href ? "text-mtc-red font-semibold" : "text-mtc-charcoal"
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
              <Link href="/contact" className="pt-4">
                <button className="w-full bg-mtc-red text-white rounded px-5 py-3 text-lg font-medium text-center">
                  Partner With Us
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-mtc-charcoal pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Col 1 */}
            <div className="space-y-6">
              <Link href="/" className="flex flex-col inline-block">
                <span className="font-serif text-3xl font-bold tracking-wider text-mtc-red">MTC</span>
                <span className="text-[0.65rem] tracking-[0.1em] font-sans font-medium uppercase text-white/90">Group of Companies</span>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed pr-4">
                Powering Global Trade. Building Sustainable Industries.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mtc-red transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mtc-red transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mtc-red transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-mtc-gold font-serif text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors flex items-center group">
                      <ChevronRight className="w-3 h-3 mr-2 text-mtc-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-mtc-gold font-serif text-lg mb-6">Our Companies</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/subsidiaries" className="text-white/70 hover:text-white text-sm transition-colors flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-2 text-mtc-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    MainKey Limited
                  </Link>
                </li>
                <li>
                  <Link href="/subsidiaries" className="text-white/70 hover:text-white text-sm transition-colors flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-2 text-mtc-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    Safwad Limited
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-mtc-gold font-serif text-lg mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-sm text-white/70">
                  <Mail className="w-4 h-4 mr-3 text-mtc-red shrink-0" />
                  <span>info@mtcgroup.com</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <span className="w-4 h-4 mr-3 flex items-center justify-center text-mtc-red font-bold">🌐</span>
                  <span>www.mtcgroup.com</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <Phone className="w-4 h-4 mr-3 text-mtc-red shrink-0" />
                  <span>+1 771 240 1273</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mtc-red">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
            <p>© 2025 MTC Group of Companies. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
