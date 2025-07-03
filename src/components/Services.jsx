import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiSettings, FiZap, FiShield, FiTool, FiSun, FiArrowRight, FiClock, FiDollarSign } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: "Residential Electrical",
      description: "Complete home electrical services from new construction to emergency repairs.",
      features: ["Smart Home Integration", "Panel Upgrades & Rewiring", "Lighting Design & Installation", "EV Charging Stations"],
      pricing: "Starting at $150",
      response: "Same Day Service",
      popular: false
    },
    {
      icon: FiSettings,
      title: "Commercial Electrical",
      description: "Professional commercial solutions for businesses and industrial facilities.",
      features: ["Commercial Wiring & Retrofits", "Emergency Power Systems", "Code Compliance & Inspections", "Preventive Maintenance"],
      pricing: "Custom Quote",
      response: "24/7 Emergency",
      popular: true
    },
    {
      icon: FiZap,
      title: "Emergency Repairs",
      description: "24/7 emergency electrical services with 30-minute response time guarantee.",
      features: ["Power Outage Resolution", "Electrical Fault Diagnosis", "Circuit Breaker Repairs", "Safety Hazard Elimination"],
      pricing: "Emergency Rate",
      response: "30 Min Response",
      popular: false
    },
    {
      icon: FiShield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety audits and code compliance assessments.",
      features: ["Electrical Safety Audits", "Code Compliance Checks", "Risk Assessment Reports", "Insurance Inspections"],
      pricing: "Starting at $200",
      response: "Scheduled Service",
      popular: false
    },
    {
      icon: FiTool,
      title: "Maintenance Programs",
      description: "Preventive maintenance contracts to keep your systems running efficiently.",
      features: ["Scheduled Maintenance", "Performance Monitoring", "Component Replacement", "Priority Service"],
      pricing: "Monthly Plans",
      response: "Proactive Service",
      popular: false
    },
    {
      icon: FiSun,
      title: "Solar & Renewable",
      description: "Complete solar installation and renewable energy solutions with financing.",
      features: ["Solar Panel Installation", "Battery Storage Systems", "Grid-Tie Systems", "Energy Monitoring"],
      pricing: "Financing Available",
      response: "Free Consultation",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            COMPREHENSIVE ELECTRICAL SERVICES
          </span>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Professional Solutions
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Built to Last
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From residential smart home installations to complex commercial electrical systems, 
            our certified electricians deliver cutting-edge solutions with unmatched reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 group ${
                service.popular 
                  ? 'border-gradient-to-r from-yellow-400 to-orange-400 bg-gradient-to-br from-yellow-50 to-orange-50' 
                  : 'border-slate-200 hover:border-blue-300'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Most Popular
                </div>
              )}

              {/* Service Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                  service.popular 
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700'
                } transition-all duration-300`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Service Info */}
              <div className="flex items-center justify-between mb-6 p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <SafeIcon icon={FiDollarSign} className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-slate-700">{service.pricing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <SafeIcon icon={FiClock} className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">{service.response}</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700'
                }`}
              >
                Get Quote Now
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Power Your Next Project?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your electrical needs. 
            Our experts are standing by to help you make the right choice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Emergency Service
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;