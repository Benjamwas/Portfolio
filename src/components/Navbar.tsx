import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Hexagon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Services',
    path: '/services'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Testimonials',
    path: '/testimonials'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Hexagon className="w-8 h-8 text-royal dark:text-gold-500 fill-royal/20 dark:fill-gold-500/20 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-xl tracking-tight text-navy-900 dark:text-white">
              Nexora
              <span className="text-royal dark:text-gold-500">Systems</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-royal dark:hover:text-gold-400 ${location.pathname === link.path ? 'text-royal dark:text-gold-500' : 'text-slate-600 dark:text-slate-300'}`}>
              
                {link.name}
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme">
              
              {theme === 'dark' ?
              <Sun className="w-5 h-5" /> :

              <Moon className="w-5 h-5" />
              }
            </button>
            <Link
              to="/contact"
              className="bg-navy-900 hover:bg-royal dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-900 px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-sm hover:shadow-md">
              
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors text-slate-600 dark:text-slate-300">
              
              {theme === 'dark' ?
              <Sun className="w-5 h-5" /> :

              <Moon className="w-5 h-5" />
              }
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300">
              
              {isMobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden glass border-t border-slate-200 dark:border-navy-700 mt-3">
          
            <div className="px-4 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium px-4 py-2 rounded-lg ${location.pathname === link.path ? 'bg-royal/10 text-royal dark:bg-gold-500/10 dark:text-gold-500' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-800'}`}>
              
                  {link.name}
                </Link>
            )}
              <Link
              to="/contact"
              className="mt-4 bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900 px-4 py-3 rounded-lg font-medium text-center shadow-sm">
              
                Start a Project
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}