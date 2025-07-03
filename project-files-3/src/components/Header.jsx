import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiClock } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <SafeIcon icon={FiPhone} className="w-4 h-4 text-yellow-400" />
              <span className="font-medium">Emergency: (555) 911-ELEC</span>
            </div>
            <div className="flex items-center gap-2">
              <SafeIcon icon={FiClock} className="w-4 h-4 text-yellow-400" />
              <span>24/7 Emergency Service Available</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <SafeIcon icon={FiMail} className="w-4 h-4 text-yellow-400" />
              <span>info@wyreindustries.com</span>
            </div>
            <div className="flex items-center gap-2">
              <SafeIcon icon={FiMapPin} className="w-4 h-4 text-yellow-400" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl' 
          : 'bg-white/90 backdrop-blur-sm shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751507719779-WYRE-Ind-Logo-1024x341%20%281%29.png" 
                alt="WYRE Industries - Professional Electrical Services" 
                className="h-14 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="relative text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Free Quote
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                Emergency
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-slate-200"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg">
                    Get Free Quote
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg flex items-center justify-center gap-2">
                    <SafeIcon icon={FiPhone} className="w-4 h-4" />
                    Emergency: (555) 911-ELEC
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;