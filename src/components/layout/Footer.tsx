import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Utensils, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-bgDark text-cream">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-parisienne text-gold mb-4">Masala Tales</h3>
            <p className="font-cormorant text-lg leading-relaxed mb-6 max-w-md">
              Where every dish tells a tale of passion, tradition, and culinary excellence. 
              Experience the finest in luxury dining.
            </p>
            <div className="flex space-x-4">
             <a
  href="https://www.instagram.com/themasalatalesfzr"
  target="_blank"
  rel="noopener noreferrer"
  className="text-cream/80 hover:text-gold transition-colors"
>
  <Instagram size={24} />
</a>

              <a href="#" className="text-cream/80 hover:text-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Service Options */}
          <div>
            <h4 className="text-xl font-montserrat font-semibold text-gold mb-4">Service Options</h4>
            <div className="space-y-3 font-cormorant">
              <div className="flex items-center gap-3">
                <Utensils size={18} className="text-gold" />
                <span>All you can eat</span>
              </div>
              <div className="flex items-center gap-3">
                <Utensils size={18} className="text-gold" />
                <span>Vegan options</span>
              </div>
              <div className="flex items-center gap-3">
                <Utensils size={18} className="text-gold" />
                <span>High chairs available</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-montserrat font-semibold text-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <p className="font-cormorant">
                  The Masala Tales, Anil Baghi road<br />
                  Model Town, Firozpur, Punjab 152001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <p className="font-cormorant">062831 08103</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <p className="font-cormorant">info@masalatales.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <p className="font-cormorant text-cream/80 flex items-center justify-center">
            © 2025 Masala Tales. All rights reserved. | 
            Crafted with <Heart size={16} className="text-accent mx-1" /> for culinary excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};