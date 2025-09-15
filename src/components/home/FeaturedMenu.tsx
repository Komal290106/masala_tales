import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Crown } from 'lucide-react';
import { menuItems } from '../../data/mockData';
import { Link } from 'react-router-dom';

export const FeaturedMenu = () => {
  // Filter special dishes from the imported menuItems
  const specialDishes = menuItems.filter(item => item.isSpecial).slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="text-gold" size={28} />
            <h2 className="text-4xl lg:text-5xl font-parisienne text-gold">
              Chef's Signature
            </h2>
            <Crown className="text-gold" size={28} />
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4"></div>
          <p className="text-xl font-cormorant text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Exquisite culinary masterpieces that showcase the heritage and artistry of Indian fine dining
          </p>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {specialDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-gold/20 transition-all duration-700 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                
                {/* Special Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-gold to-accent text-gray-900 px-4 py-2 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-montserrat font-bold">Chef's Choice</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-1 group-hover:text-gold transition-colors duration-300">
                    {dish.name}
                  </h3>
                </div>

                <p className="font-cormorant text-gray-700 text-lg leading-relaxed mb-6 line-clamp-3">
                  {dish.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="text-3xl font-montserrat font-bold text-gold">
                    ${dish.price}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                      <ArrowRight size={18} className="text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50 backdrop-blur-sm border border-gold/30 rounded-full p-2">
            <Link 
              to="/menu" 
              className="group flex items-center gap-3 bg-gradient-to-r from-gold to-accent hover:from-accent hover:to-gold text-gray-900 px-8 py-4 rounded-2xl font-montserrat font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 transform hover:scale-105"
            >
              Explore Full Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <p className="mt-6 text-gray-600 font-cormorant text-lg italic">
            "Every dish tells a story of tradition, passion, and culinary excellence"
          </p>
        </div>
      </div>

      <style>
        {`
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </section>
  );
};