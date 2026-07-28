import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/85 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, "body")}
            className="text-xl font-bold tracking-tighter text-text-primary"
          >
            CW<span className="text-[#e8a838]">.</span>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href={process.env.NODE_ENV === 'production' ? "/portfolio/resume.pdf" : "/resume.pdf"}
              target="_blank"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-bg-primary bg-[#e8a838] rounded-lg hover:bg-accent-hover transition-colors"
            >
              Download PDF
            </a>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button 
              className="p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-0 right-0 z-40 bg-bg-card border-b border-border shadow-xl overflow-hidden md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={process.env.NODE_ENV === 'production' ? "/portfolio/resume.pdf" : "/resume.pdf"}
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center px-4 py-3 text-base font-medium text-bg-primary bg-[#e8a838] rounded-xl hover:bg-accent-hover transition-colors"
              >
                Download PDF
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
