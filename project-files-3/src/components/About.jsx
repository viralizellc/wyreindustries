import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiShield, FiCheckCircle, FiStar, FiTrendingUp, FiUsers } = FiIcons;

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: FiAward },
    { number: "2,500+", label: "Projects Completed", icon: FiTrendingUp },
    { number: "100%", label: "Licensed & Insured", icon: FiShield },
    { number: "24/7", label: "Emergency Service", icon: FiUsers }
  ];

  const certifications = [
    { name: "Licensed Master Electrician", level: "Master Level" },
    { name: "NECA Member", level: "Industry Standard" },
    { name: "OSHA Safety Certified", level: "Safety Compliant" },
    { name: "Commercial Electrical Specialist", level: "Specialized" },
    { name: "Solar Installation Certified", level: "Renewable Energy" },
    { name: "Emergency Response Certified", level: "24/7 Ready" }
  ];

  const whyChooseUsItems = [
    { text: "Licensed, bonded, and fully insured with $2M coverage", highlight: true },
    { text: "24/7 emergency service with 30-minute response time", highlight: true },
    { text: "Upfront pricing with no hidden fees - guaranteed", highlight: false },
    { text: "100% satisfaction guarantee on all work performed", highlight: false }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                TRUSTED SINCE 2008
              </span>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Powering Your
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Success Story
                </span>
              </h2>
            </div>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              WYRE Industries stands as the region's premier electrical contractor, combining 
              <span className="font-semibold text-blue-600"> cutting-edge technology</span> with 
              time-tested expertise to deliver unparalleled electrical solutions for both 
              residential and commercial clients.
            </p>

            {/* Why Choose Us */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-white" />
                </div>
                Why Industry Leaders Choose Us
              </h3>
              <div className="space-y-4">
                {whyChooseUsItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-4 p-4 rounded-xl ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200' 
                        : 'bg-white/50 border border-slate-200'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                        : 'bg-gradient-to-r from-emerald-500 to-green-500'
                    }`}>
                      <SafeIcon icon={FiCheckCircle} className="w-3 h-3 text-white" />
                    </div>
                    <span className={`${item.highlight ? 'text-slate-800 font-semibold' : 'text-slate-700'}`}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <SafeIcon icon={stat.icon} className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Modern Electrical Installation by WYRE Industries"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-2xl shadow-xl"
              >
                <div className="text-lg font-bold">A+ Rating</div>
                <div className="text-xs opacity-90">Better Business Bureau</div>
              </motion.div>
            </div>

            {/* Certifications Panel */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiAward} className="w-4 h-4 text-white" />
                </div>
                Professional Certifications
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold text-slate-800">{cert.name}</span>
                    </div>
                    <span className="text-sm text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full">
                      {cert.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;