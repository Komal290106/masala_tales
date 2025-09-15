import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star } from 'lucide-react';
import { DishCard } from '../components/menu/DishCard';
import { menuItems, menuCategories } from '../data/mockData';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = menuItems.filter(dish => {
    const matchesCategory = activeCategory === 'all' || dish.category.id === activeCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const dishOfTheDay = menuItems.find(dish => dish.id === '2');

  return (
    <div className="bg-[#0B2C3A] min-h-screen pt-20 lg:pt-24 font-montserrat">
      {/* Dish of the Day Banner */}
      {dishOfTheDay && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#123D4D] to-[#0B2C3A] py-12 lg:py-16"
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-[#C6A35C]" size={24} fill="currentColor" />
                  <span className="font-semibold text-[#C6A35C]">Dish of the Day</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#F4F1E7] mb-4">
                  {dishOfTheDay.name}
                </h2>
                <p className="font-cormorant text-lg text-[#E2E8F0] leading-relaxed mb-6">
                  {dishOfTheDay.description}
                </p>
                <div className="text-3xl font-bold text-[#C6A35C]">
                  ${dishOfTheDay.price}
                </div>
              </div>
              <div className="relative">
                <img
                  src={dishOfTheDay.image}
                  alt={dishOfTheDay.name}
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C3A]/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[#C6A35C] mb-4">
            Our Menu
          </h1>
          <p className="text-lg font-cormorant text-[#F4F1E7] max-w-2xl mx-auto leading-relaxed">
            Explore our carefully curated selection of international cuisine
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-md mx-auto mb-8"
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dishes..."
            className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-12 pr-4 py-3 text-gray-800 focus:border-[#C6A35C] focus:outline-none transition-colors"
          />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12"
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-[#C6A35C] text-[#0B2C3A] shadow-lg'
                : 'bg-gray-50 text-gray-700 hover:text-[#D45C33] border border-gray-300'
            }`}
          >
            All Items
          </button>
          {menuCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#C6A35C] text-[#0B2C3A] shadow-lg'
                  : 'bg-gray-50 text-gray-700 hover:text-[#D45C33] border border-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </motion.div>

        {filteredDishes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl font-cormorant text-gray-400">
              No dishes found matching your search.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
