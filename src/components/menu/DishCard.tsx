import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Dish } from '../../types';

interface DishCardProps {
  dish: Dish;
  index: number;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>

        {dish.isSpecial && (
          <div className="absolute top-4 left-4 bg-[#C6A35C] text-[#0B2C3A] px-3 py-1 rounded-full text-xs font-montserrat font-semibold flex items-center gap-1 shadow-md">
            <Star size={14} fill="currentColor" />
            Chef's Special
          </div>
        )}

        {/* Price Badge in Rupees */}
        <div className="absolute bottom-4 right-4 bg-[#0B2C3A]/90 text-[#C6A35C] px-3 py-1 rounded-full text-lg font-montserrat font-bold shadow">
          ₹{dish.price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 group-hover:text-[#D45C33] transition-colors">
          {dish.name}
        </h3>
        <p className="font-cormorant text-gray-600 leading-relaxed text-sm">
          {dish.description}
        </p>

        {dish.allergens && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs font-montserrat text-gray-500">
              Allergens: {dish.allergens.join(', ')}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};
