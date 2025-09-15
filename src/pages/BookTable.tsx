import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';
import { ReservationForm } from '../components/booking/ReservationForm';
import { Reservation } from '../types';

export const BookTable = () => {
  const [recentReservations, setRecentReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    setRecentReservations(savedReservations.slice(-3).reverse());
  }, []);

  return (
    <div className="bg-bgLight min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 lg:py-24"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-bgLight/50"></div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-luxGold mb-6">
            Reserve Your Experience
          </h1>
          <p className="text-xl font-cormorant text-warmCream max-w-2xl mx-auto leading-relaxed">
            Book your table and embark on a culinary journey like no other
          </p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <ReservationForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Restaurant Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-xl font-montserrat font-bold text-luxGold mb-4">
                Dining Information
              </h3>
              <div className="space-y-4 font-cormorant text-warmCream">
                <div className="flex items-start gap-3">
                  <Calendar className="text-luxGold mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Advance Booking</p>
                    <p className="text-sm text-softGray">Reservations recommended 2-3 days in advance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-luxGold mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Dining Duration</p>
                    <p className="text-sm text-softGray">2.5 hours for optimal experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-luxGold mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Group Bookings</p>
                    <p className="text-sm text-softGray">Private dining available for 8+ guests</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Reservations */}
            {recentReservations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-montserrat font-bold text-luxGold mb-4 ">
                  Recent Bookings
                </h3>
                <div className="space-y-3">
                  {recentReservations.map((reservation) => (
                    <div key={reservation.id} className="p-3 bg-darkBg/30 rounded-xl">
                      <p className="font-montserrat font-semibold text-warmCream text-sm">
                        {reservation.name}
                      </p>
                      <p className="font-cormorant text-softGray text-xs">
                        {new Date(reservation.date).toLocaleDateString()} at {reservation.time}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};