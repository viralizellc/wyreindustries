console.log("Hero loaded");

import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiShield, FiClock, FiPhone, FiCheck, FiAward } = FiIcons;

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 mb-6"
            >
              <SafeIcon icon={FiAward} className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Licensed & Bonded Since 2008</span>
            </motion.div>

            <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                POWER
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                YOUR WORLD
              </span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed font-light">
              Premier electrical contractors delivering 
              <span className="text-blue-300 font-semibold"> cutting-edge solutions</span> for 
              residential and commercial properties across the region.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "24/7 Emergency Response",
                "Licensed Master Electricians", 
                "100% Satisfaction Guarantee",
                "Free Consultations & Quotes"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiCheck} className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-blue-100 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="relative z-10">Get Free Quote Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(239, 68, 68, 0.4)",
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Emergency: (555) 911-ELEC</span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 opacity-80">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">2.5K+</div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">100%</div>
                <div className="text-sm text-blue-200">Licensed & Insured</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-tr from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Professional Electrician in Modern Commercial Setting"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-400 to-green-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                ⚡ 24/7 Available
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                🏆 Licensed Pro
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-300"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-300 rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
