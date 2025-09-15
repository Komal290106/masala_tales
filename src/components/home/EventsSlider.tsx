import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';

// Updated mock data with Indian-themed events
const upcomingEvents = [
  {
    id: 1,
    title: "Diwali Festival Dinner",
    description: "Celebrate the festival of lights with our special 5-course Diwali menu featuring traditional delicacies and live music performances.",
    date: "2023-10-24",
    image: "https://plus.unsplash.com/premium_photo-1698500035179-edd84b64f527?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGl3YWxpJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    time: "6:30 PM",
    location: "Main Dining Hall"
  },
  {
    id: 2,
    title: "Tandoori Night Special",
    description: "Experience the authentic flavors of our clay oven with an unlimited tandoori menu including kebabs, naans, and traditional breads.",
    date: "2023-11-05",
    image: "https://media.istockphoto.com/id/641708210/photo/chicken-barbecue-or-sheekh-kebab.webp?a=1&b=1&s=612x612&w=0&k=20&c=Oeznjg7mJ1Ep_5YfskImXwylhUdDZ8IjmO-oY6l7-iI=",
    time: "7:00 PM",
    location: "Outdoor Patio"
  },
  {
    id: 3,
    title: "Bollywood Dinner Show",
    description: "Enjoy an evening of Bollywood hits performed by professional dancers while savoring our special chef's tasting menu.",
    date: "2023-11-12",
    image: "https://media.istockphoto.com/id/996188546/photo/assorted-indian-food-for-lunch-or-dinner-rice-lentils-paneer-dal-makhani-naan-chutney-spices.webp?a=1&b=1&s=612x612&w=0&k=20&c=kzBXPs_2haEsttmgDHhAMVsHVzYss8OPOkcX-wAMeaE=",
    time: "8:00 PM",
    location: "Grand Hall"
  }
];

export const EventsSlider = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [direction, setDirection] = useState(0); // 0: right, 1: left

  const nextEvent = () => {
    setDirection(0);
    setCurrentEvent((prev) => (prev + 1) % upcomingEvents.length);
  };

  const prevEvent = () => {
    setDirection(1);
    setCurrentEvent((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  };

  const goToEvent = (index: number) => {
    setDirection(index > currentEvent ? 0 : 1);
    setCurrentEvent(index);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-parisienne font-bold text-[#C6A35C] mb-4">
            Masala Tales Events
          </h2>
          <div className="w-24 h-1 bg-[#D45C33] mx-auto mb-4"></div>
          <p className="text-lg font-cormorant text-[#0B2C3A] max-w-2xl mx-auto">
            Experience the rich flavors and vibrant culture of India through our exclusive events and celebrations
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentEvent}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#C6A35C]/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-72 lg:h-96">
                  <img
                    src={upcomingEvents[currentEvent].image}
                    alt={upcomingEvents[currentEvent].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C3A]/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#D45C33] text-white font-montserrat text-sm font-semibold px-3 py-1 rounded-full">
                      Featured Event
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl lg:text-3xl font-montserrat font-bold text-[#0B2C3A] mb-4"
                  >
                    {upcomingEvents[currentEvent].title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-cormorant text-lg text-[#123D4D] mb-6 leading-relaxed"
                  >
                    {upcomingEvents[currentEvent].description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3 mb-6"
                  >
                    <div className="flex items-center gap-3 text-[#0B2C3A]">
                      <div className="bg-[#F4F1E7] p-2 rounded-full">
                        <Calendar size={18} className="text-[#D45C33]" />
                      </div>
                      <span className="font-montserrat text-sm">
                        {formatDate(upcomingEvents[currentEvent].date)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-[#0B2C3A]">
                      <div className="bg-[#F4F1E7] p-2 rounded-full">
                        <Clock size={18} className="text-[#D45C33]" />
                      </div>
                      <span className="font-montserrat text-sm">{upcomingEvents[currentEvent].time}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-[#0B2C3A]">
                      <div className="bg-[#F4F1E7] p-2 rounded-full">
                        <MapPin size={18} className="text-[#D45C33]" />
                      </div>
                      <span className="font-montserrat text-sm">{upcomingEvents[currentEvent].location}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4"
                  >
                    <button className="bg-[#D45C33] hover:bg-[#C24A2C] text-white px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 hover:shadow-lg">
                      Reserve Table
                    </button>
                    <button className="border border-[#C6A35C] text-[#0B2C3A] hover:bg-[#F4F1E7] px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300">
                      View Details
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevEvent}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#D45C33] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextEvent}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#D45C33] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {upcomingEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToEvent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentEvent ? 'bg-[#D45C33]' : 'bg-[#C6A35C]/40'
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};