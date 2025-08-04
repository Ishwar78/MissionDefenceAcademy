import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Academy Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="images/logo-removebg-preview.png"
                alt="Mission Defence Academy Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="ml-3 text-xl font-bold">
                Mission Defence Academy
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Making Future Officers through strategic teaching approach and character building for national service.
            </p>
            <div className="text-sm text-gray-400">
              <p>📍 Tiranga Building, near Rajiv Gandhi Sports Stadium</p>
              <p>Rohtak Haryana, pin 124001</p>
              <p>📞 +91 7700008052</p>
              <p>📧 Mdaclasses22@gmail.com</p>
            </div>
          </div>

          {/* Center - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/authors" className="text-gray-300 hover:text-white transition-colors">
                Authors
              </Link>
              <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                Events
              </Link>
              <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">
                Shop
              </Link>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/groups/133143281449195/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
                title="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/missionarmydefenceacademy01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-colors"
                title="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@mdaclasses"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
                title="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/917700008052"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition-colors"
                title="WhatsApp"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
            <div className="text-sm text-gray-400 mt-8">
              <p>📞 <a href="tel:+917700008052" className="hover:text-white transition-colors">+91 7700008052</a></p>
              <p>🎥 <a href="https://www.youtube.com/@mdaclasses" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube Channel</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <p>&copy; 2024 Mission Defence Academy. All rights reserved.</p>
            <span>•</span>
            <Link to="/admin/login" className="hover:text-white transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
