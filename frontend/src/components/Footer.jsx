import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { companyInfo } from "../data/mockData";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Shield
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://img1.wsimg.com/isteam/ip/9621693c-899c-4763-b9aa-02fc73963b49/blob-9b78866.png/:/rs=h:60,cg:true,m/qt=q:95" 
                alt="Defender Security Services Logo" 
                className="h-12 w-auto"
              />
              <div>
                <div className="font-bold text-lg text-white">Defender Security</div>
                <div className="text-gray-400 text-sm">Services</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading security solutions provider offering comprehensive security and manpower services across Uttarakhand and neighboring regions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-teal-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-teal-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-teal-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-red-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Security Solutions",
                "Manpower Services", 
                "Facility Management",
                "Corporate Security",
                "Event Security",
                "Residential Security"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Solutions", 
                "Career",
                "News & Media",
                "Contact Us",
                "Get Quote"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  {companyInfo.contact.address}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <div className="text-gray-400">
                  {companyInfo.contact.phone}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600" />
                <div className="text-gray-400">
                  {companyInfo.contact.email}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Subscribe to Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-600"
                />
                <Button 
                  className="bg-red-600 hover:bg-red-700 transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Get updates on security insights and company news
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Defender Security Services. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;