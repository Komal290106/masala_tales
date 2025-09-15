import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingCTA = () => {
  const location = useLocation();
  
  // Don't show on booking page
  if (location.pathname === '/book') return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 left-4 right-4 z-40 lg:hidden"
    >
      <Link
        to="/book"
        className="flex items-center justify-center gap-2 bg-luxGold hover:bg-luxGold/90 text-darkBg px-6 py-4 rounded-full font-montserrat font-bold shadow-2xl hover:shadow-luxGold/25 transition-all duration-300 w-full"
      >
        <Calendar size={20} />
        Book Now
      </Link>
    </motion.div>
  );
};