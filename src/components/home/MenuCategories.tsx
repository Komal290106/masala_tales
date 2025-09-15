import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { menuCategories } from '../../data/mockData';
import { Link } from 'react-router-dom';

export const MenuCategories = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-parisienne font-bold text-[#C6A35C] mb-4">
            Masala Tales Menu
          </h2>
          <div className="w-24 h-1 bg-[#D45C33] mx-auto mb-4"></div>
          <p className="text-lg font-cormorant text-[#0B2C3A] max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of authentic Indian cuisine, each dish crafted with traditional recipes and passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 border border-[#C6A35C]/20"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C3A]/90 via-[#0B2C3A]/40 to-transparent group-hover:from-[#D45C33]/30 group-hover:via-[#D45C33]/20 transition-all duration-500"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-2">
                  <span className="inline-block bg-[#D45C33] text-white text-xs font-montserrat font-semibold px-3 py-1 rounded-full mb-2">
                    {category.itemsCount}+ Items
                  </span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-white mb-2 group-hover:text-[#F4F1E7] transition-colors">
                  {category.name}
                </h3>
                <p className="font-cormorant text-[#F4F1E7] text-sm leading-relaxed mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  {category.description}
                </p>
                
               <Link
  to={`/menu#${category.id}`}
  className="inline-flex items-center gap-2 bg-[#C6A35C] hover:bg-[#D45C33] text-white px-3 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-300 group-hover:gap-3 w-fit"
>
  Explore Category
  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
</Link>

              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 border-2 border-[#C6A35C] text-[#0B2C3A] hover:bg-[#F4F1E7] px-8 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 hover:shadow-md"
          >
            View Full Menu
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};