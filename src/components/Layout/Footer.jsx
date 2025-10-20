import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rusty-900 text-rusty-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Brand Section */}
          <div className="space-y-2.5">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full organic-gradient flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" fill="currentColor" />
              </div>
              <h3 className="text-base font-display font-bold">Rawas Organics</h3>
            </div>
            <p className="text-rusty-300 text-xs leading-relaxed">
              Crafting the finest jaggery-based chocolates with love, tradition, and sustainability at heart.
            </p>
            <div className="flex space-x-2.5">
              <a href="https://facebook.com" className="text-rusty-400 hover:text-copper-400 transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" className="text-rusty-400 hover:text-copper-400 transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" className="text-rusty-400 hover:text-copper-400 transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-1">
              <Link to="/products" className="text-rusty-300 hover:text-copper-400 transition-colors text-xs">
                Our Products
              </Link>
              <Link to="/about" className="text-rusty-300 hover:text-copper-400 transition-colors text-xs">
                About Us
              </Link>
              <Link to="/reviews" className="text-rusty-300 hover:text-copper-400 transition-colors text-xs">
                Customer Reviews
              </Link>
              <Link to="/contact" className="text-rusty-300 hover:text-copper-400 transition-colors text-xs">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-semibold text-white">Customer Service</h4>
            <nav className="flex flex-col space-y-1">
              <a href="#" className="text-rusty-300 hover:text-copper-400 transition-colors text-xs">
                Shipping Info
              </a>
              <a href="#" className="text-rusty-300 hover:text-copper-400 transition-colors text-xs">
                Return Policy
              </a>
              <a href="#" className="text-rusty-300 hover:text-copper-400 transition-colors text-xs">
                FAQ
              </a>
              <a href="#" className="text-rusty-300 hover:text-copper-400 transition-colors text-xs">
                Support
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-semibold text-white">Contact Info</h4>
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-copper-400" />
                <span className="text-rusty-300 text-xs">therawasorganics@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-copper-400" />
                <span className="text-rusty-300 text-xs">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 text-copper-400 mt-0.5" />
                <span className="text-rusty-300 text-xs">
                  123 Organic Street,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-rusty-800 mt-5 pt-5 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-rusty-400 text-xs">
            © 2024 Rawas Organics. All rights reserved.
          </p>
          <div className="flex space-x-3 mt-2 sm:mt-0">
            <a href="#" className="text-rusty-400 hover:text-copper-400 transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-rusty-400 hover:text-copper-400 transition-colors text-xs">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;