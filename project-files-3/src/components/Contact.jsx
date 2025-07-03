import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle, FiAlertCircle, FiAward } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: "Phone",
      details: ["(555) 123-4567", "Emergency: (555) 911-ELEC"],
      link: "tel:+15551234567",
      highlight: "Call anytime for immediate assistance"
    },
    {
      icon: FiMail,
      title: "Email",
      details: ["info@wyreindustries.com", "quotes@wyreindustries.com"],
      link: "mailto:info@wyreindustries.com",
      highlight: "Get detailed quotes and project info"
    },
    {
      icon: FiMapPin,
      title: "Service Area",
      details: ["Greater Metro Area", "50+ Mile Radius Coverage"],
      link: "https://maps.google.com",
      highlight: "Serving residential & commercial clients"
    },
    {
      icon: FiClock,
      title: "Response Time",
      details: ["Normal: Same Day", "Emergency: 30 Minutes"],
      link: null,
      highlight: "Guaranteed response times"
    }
  ];

  const guarantees = [
    "Licensed & Insured ($2M Coverage)",
    "100% Satisfaction Guarantee",
    "Upfront Pricing - No Hidden Fees",
    "Clean-Up After Every Job"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-full text-sm font-bold mb-6">
            GET IN TOUCH TODAY
          </span>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Ready to Start
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Contact WYRE Industries today for professional electrical services. Our certified electricians 
            are ready to provide expert solutions for your residential or commercial needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                      <SafeIcon icon={info.icon} className="w-6 h-6 text-slate-900" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{info.title}</h4>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-blue-100 font-medium">
                        {info.link && idx === 0 ? (
                          <a href={info.link} className="hover:text-yellow-400 transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                  
                  <p className="text-sm text-blue-200 italic">{info.highlight}</p>
                </motion.div>
              ))}
            </div>

            {/* Emergency Service CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-600/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <SafeIcon icon={FiAlertCircle} className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Emergency Service</h4>
              </div>
              
              <p className="text-red-100 mb-6 leading-relaxed">
                Electrical emergencies can't wait. Our emergency response team is available 24/7 
                with a guaranteed 30-minute response time for urgent electrical issues.
              </p>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call Emergency Line: (555) 911-ELEC
              </motion.button>
            </motion.div>

            {/* Guarantees */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <SafeIcon icon={FiAward} className="w-6 h-6 text-yellow-400" />
                Our Guarantees
              </h4>
              <div className="space-y-3">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100 font-medium">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Get Your Free Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-100 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Service Type
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="text-slate-900">Select a service</option>
                      <option value="residential" className="text-slate-900">Residential Electrical</option>
                      <option value="commercial" className="text-slate-900">Commercial Electrical</option>
                      <option value="emergency" className="text-slate-900">Emergency Repair</option>
                      <option value="inspection" className="text-slate-900">Safety Inspection</option>
                      <option value="maintenance" className="text-slate-900">Maintenance</option>
                      <option value="solar" className="text-slate-900">Solar Installation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-2">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="normal" className="text-slate-900">Normal (1-2 days)</option>
                      <option value="priority" className="text-slate-900">Priority (Same day)</option>
                      <option value="emergency" className="text-slate-900">Emergency (30 min)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-100 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Please describe your electrical project or issue in detail..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  Get My Free Quote
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;