import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Utensils, Star, ChevronRight, Calendar, Menu, Clock, MapPin } from 'lucide-react';
import bgImage from './bgimage.png';

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-bgDark overflow-hidden relative">
      
      {/* Background decorative circles - subtle elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-64 h-64 border border-gold/10 rounded-full opacity-30 hidden md:block"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-gold/5 rounded-full opacity-20 hidden md:block"></div>
      
      {/* Text Column */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 relative z-10"
      >
        <div className="max-w-md mx-auto">
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex items-center"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-3 border border-gold/20">
              <Utensils className="w-6 h-6 text-gold" />
            </div>
            <span className="font-parisienne text-2xl text-gold">Masala Tales</span>
          </motion.div>
          
          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center bg-bgLight px-4 py-2 rounded-full mb-6 border border-gold/10"
          >
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-current mr-1" />
              ))}
            </div>
            <span className="text-cream font-montserrat text-sm">4.2 (388 reviews)</span>
          </motion.div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-semibold text-cream mb-4 leading-tight">
            Exquisite Culinary <span className="text-gold">Experiences</span>
          </h1>
          
          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-0.5 bg-gradient-to-r from-gold to-transparent mb-6"
          ></motion.div>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-cream/80 mb-8 font-cormorant leading-relaxed"
          >
            Where traditional recipes meet contemporary artistry in an ambiance of refined elegance.
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link
              to="/menu"
              className="bg-accent hover:bg-accentDark text-white px-6 py-4 rounded-lg font-montserrat font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <Menu className="w-5 h-5" />
              Explore Our Menu
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/book"
              className="border-2 border-gold text-gold hover:bg-gold/10 px-6 py-4 rounded-lg font-montserrat font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Reserve a Table
            </Link>
          </motion.div>
          
          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-cream/80 font-montserrat text-sm"
          >
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-gold mr-3 mt-0.5" />
              <div>
                <p className="font-semibold text-cream mb-1">Opening Hours</p>
                <p>Monday - Saturday: 12:30PM - 10:45 PM</p>
                <p>Sunday: 12:30 PM - 11:00PM</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-gold mr-3 mt-0.5" />
              <div>
                <p className="font-semibold text-cream mb-1">Location</p>
                <p>The Masala Tales, Anil Baghi road, Model Town, Firozpur, Punjab 152001</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Image Column */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-1/2 relative"
      >
        {/* Main image with overlay */}
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-bgDark/90 via-bgDark/40 to-transparent md:bg-gradient-to-r md:from-bgDark/90 md:via-bgDark/40 md:to-transparent"></div>
        </div>
        
        {/* Decorative text overlay */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <p className="font-parisienne text-gold text-2xl rotate-12 transform">Est. 2015</p>
        </motion.div>
      </motion.div>
    </div>
  );
};