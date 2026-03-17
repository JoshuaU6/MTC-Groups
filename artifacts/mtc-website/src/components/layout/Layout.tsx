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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isDarkNav = isHomePage && !isScrolled;
  const navClass = isDarkNav
    ? "bg-transparent py-6"
    : "bg-white shadow-md py-4";
  const linkColor = isDarkNav ? "text-white hover:text-white" : "text-mtc-charcoal hover:text-mtc-red";

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-mtc-charcoal">
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 bg-mtc-charcoal text-white/70 text-xs">
        <div className="flex space-x-6">
          <span className="flex items-center">
            <MapPin className="w-3 h-3 mr-2 text-mtc-red" aria-hidden="true" />
            Headquarters: Washington DC, USA
          </span>
          <span className="flex items-center">
            <Phone className="w-3 h-3 mr-2 text-mtc-red" aria-hidden="true" />
            Global: +1 771 240 1273
          </span>
        </div>
        <span className="flex items-center">
          <Mail className="w-3 h-3 mr-2 text-mtc-red" aria-hidden="true" />
          info@mtc-groups.com
        </span>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${navClass} ${isHomePage && !isScrolled ? 'top-0 lg:top-[33px]' : 'top-0'}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" aria-label="MTC Group of Companies — Home">
              <div className={`flex items-center rounded-lg transition-all duration-300 ${isDarkNav ? 'bg-white px-3 py-1.5 shadow-lg' : ''}`}>
                <img
                  src={`${import.meta.env.BASE_URL}images/mtc-logo.png`}
                  alt="MTC Group of Companies logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center space-x-2" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${linkColor}`}
                  aria-current={location === link.href ? "page" : undefined}
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
                <button
                  className="bg-mtc-red text-white hover:bg-red-800 transition-colors rounded px-5 py-2 text-sm font-medium"
                  aria-label="Partner with MTC Group — Contact us"
                >
                  Partner With Us
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className={`xl:hidden p-2 focus:outline-none rounded ${isDarkNav ? 'text-white' : 'text-mtc-charcoal'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation — slides in from the right */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/50 z-40 xl:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.nav
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 xl:hidden flex flex-col"
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <img
                  src={`${import.meta.env.BASE_URL}images/mtc-logo.png`}
                  alt="MTC Group of Companies logo"
                  className="h-10 w-auto object-contain"
                  style={{ filter: 'none' }}
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-mtc-charcoal focus:outline-none rounded"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col py-4 px-6 space-y-1 flex-grow overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`text-base py-3 border-b border-gray-100 flex justify-between items-center transition-colors ${
                      location === link.href
                        ? "text-mtc-red font-semibold"
                        : "text-mtc-charcoal hover:text-mtc-red"
                    }`}
                    aria-current={location === link.href ? "page" : undefined}
                  >
                    {link.name}
                    <ChevronRight className="w-4 h-4 opacity-40" aria-hidden="true" />
                  </Link>
                ))}
              </div>

              {/* CTA at bottom of drawer */}
              <div className="px-6 py-6 border-t border-gray-100">
                <Link href="/contact" onClick={closeMobileMenu}>
                  <button
                    className="w-full bg-mtc-red text-white rounded px-5 py-3 text-base font-medium text-center hover:bg-red-800 transition-colors"
                    aria-label="Partner with MTC Group — Contact us"
                  >
                    Partner With Us
                  </button>
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col" id="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-mtc-charcoal pt-16" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Col 1 — Brand */}
            <div className="space-y-6">
              <Link href="/" className="inline-block" aria-label="MTC Group of Companies — Home">
                <img
                  src={`${import.meta.env.BASE_URL}images/mtc-logo.png`}
                  alt="MTC Group of Companies logo"
                  className="h-20 w-auto object-contain"
                />
              </Link>
              <p className="text-white/70 text-sm leading-relaxed pr-4">
                Powering Global Trade. Building Sustainable Industries.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mtc-red transition-colors"
                  aria-label="MTC Group on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mtc-red transition-colors"
                  aria-label="MTC Group on Twitter / X"
                >
                  <Twitter className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-mtc-red transition-colors"
                  aria-label="MTC Group on Facebook"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h4 className="text-mtc-gold font-serif text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 text-mtc-gold opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Our Companies */}
            <div>
              <h4 className="text-mtc-gold font-serif text-lg mb-6">Our Companies</h4>
              <ul className="space-y-3" role="list">
                <li>
                  <Link href="/subsidiaries" className="text-white/70 hover:text-white text-sm transition-colors flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-2 text-mtc-gold opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    MainKey Limited
                  </Link>
                </li>
                <li>
                  <Link href="/subsidiaries" className="text-white/70 hover:text-white text-sm transition-colors flex items-center group">
                    <ChevronRight className="w-3 h-3 mr-2 text-mtc-gold opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    Safwad Limited
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <h4 className="text-mtc-gold font-serif text-lg mb-6">Contact</h4>
              <ul className="space-y-4" role="list">
                <li className="flex items-center text-sm text-white/70">
                  <Mail className="w-4 h-4 mr-3 text-mtc-red shrink-0" aria-hidden="true" />
                  <span>info@mtc-groups.com</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <span className="w-4 h-4 mr-3 flex items-center justify-center text-mtc-red font-bold" aria-hidden="true">🌐</span>
                  <span>www.mtc-groups.com</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <Phone className="w-4 h-4 mr-3 text-mtc-red shrink-0" aria-hidden="true" />
                  <span>+1 771 240 1273</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mtc-red">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
            <p>© {new Date().getFullYear()} MTC Group of Companies. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">Washington DC, USA &nbsp;|&nbsp; London &nbsp;|&nbsp; Paris &nbsp;|&nbsp; Lagos &nbsp;|&nbsp; Hong Kong</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
