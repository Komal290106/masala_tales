import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const chefQuotes = [
  "Food is an emotion, not just a taste.",
  "Every ingredient has a story to tell.",
  "Cooking is the art of transformation.",
  "In the kitchen, passion becomes flavor."
];

export const ChefIntro = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % chefQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-bgDark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Chef Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
                alt="Chef Vipul Sharma"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Chef Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-Parisienne font-bold text-gold">
              Meet Chef Vipul Sharma
            </h2>
            
            <div className="space-y-4 text-lg font-cormorant text-cream leading-relaxed">
              <p>
                Chef Vipul Sharma is the visionary gourmet chef behind The Masala Tales, 
                a premium food delivery kitchen and restaurant in Ferozepur, Punjab.
              </p>
              <p>
                What began as a passion project from home has evolved into a full-time 
                sip-and-dine establishment under his creative direction and dedication 
                to quality food.
              </p>
              <p>
                At Masala Tales, Chef Vipul crafts each dish as a narrative—a story 
                of culture, passion, and the artistry of fine Indian dining.
              </p>
            </div>

            {/* Rotating Quote */}
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative p-6 bg-bgLight/30 rounded-2xl border border-gold/20"
            >
              <Quote className="text-gold mb-4" size={32} />
              <p className="text-xl font-cormorant italic text-gold">
                "{chefQuotes[currentQuote]}"
              </p>
              <p className="text-sm font-montserrat text-cream/80 mt-4">
                — Chef Vipul Sharma
              </p>
            </motion.div>

            {/* Instagram Link */}
            <div className="pt-4">
              <a 
                href="https://instagram.com/i.am.vipulsharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accentDark text-white rounded-2xl font-montserrat font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Follow on Instagram
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};