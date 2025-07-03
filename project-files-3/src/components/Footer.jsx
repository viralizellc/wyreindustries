import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiAward, FiShield, FiClock } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Residential Electrical",
    "Commercial Electrical", 
    "Emergency Repairs",
    "Safety Inspections",
    "Solar Installation",
    "Maintenance Services"
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Emergency Service",
    "Free Quote",
    "Service Areas",
    "Careers"
  ];

  const certifications = [
    "Licensed Master Electrician",
    "NECA Member",
    "OSHA Safety Certified",
    "Bonded & Insured ($2M)"
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751507719779-WYRE-Ind-Logo-1024x341%20%281%29.png" 
              alt="WYRE Industries" 
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-blue-100 leading-relaxed">
              Premier electrical contractors delivering cutting-edge solutions for residential 
              and commercial properties. Licensed, insured, and committed to excellence since 2008.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                <SafeIcon icon={FiAward} className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">A+ Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                <SafeIcon icon={FiShield} className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">Licensed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                <SafeIcon icon={FiClock} className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">24/7 Service</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <SafeIcon icon={Icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-blue-100 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-blue-100 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Certifications */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <div className="text-blue-100 font-semibold">(555) 123-4567</div>
                    <div className="text-sm text-blue-200">Emergency: (555) 911-ELEC</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <SafeIcon icon={FiMail} className="w-5 h-5 text-yellow-400" />
                  <div className="text-blue-100">info@wyreindustries.com</div>
                </div>
                
                <div className="flex items-start gap-3">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <div className="text-blue-100">Greater Metro Area</div>
                    <div className="text-sm text-blue-200">50+ Mile Service Radius</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Certifications</h4>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <SafeIcon icon={FiAward} className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-blue-100">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-200 text-sm">
              © {currentYear} WYRE Industries. All rights reserved. | Licensed Electrical Contractor
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                Licensing Info
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;