import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MessageSquare, Check } from 'lucide-react';
import { availableTimeSlots } from '../../data/mockData';
import { Reservation } from '../../types';

export const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const reservation: Reservation = {
      id: Date.now().toString(),
      ...formData,
      guests: parseInt(formData.guests),
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    const existingReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    localStorage.setItem('reservations', JSON.stringify([...existingReservations, reservation]));

    setIsSubmitting(false);
    setShowConfirmation(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  if (showConfirmation) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gray-50 rounded-2xl p-8 text-center shadow-2xl max-w-md mx-auto"
      >
        <div className="mb-6">
          <div className="w-16 h-16 bg-luxGold rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-darkBg" />
          </div>
          <h3 className="text-2xl font-montserrat font-bold text-luxGold mb-2">
            Reservation Confirmed!
          </h3>
          <p className="font-cormorant text-darkBg">
            We've saved your booking. (This is just a demo confirmation 😉)
          </p>
        </div>
        <button
          onClick={closeConfirmation}
          className="bg-gold hover:bg-gold/90 text-darkBg px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300"
        >
          Close
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="bg-gray-50 rounded-2xl p-6 lg:p-8 shadow-2xl max-w-2xl mx-auto"
    >
      <h3 className="text-2xl lg:text-3xl font-montserrat font-bold text-gold mb-6 text-center">
        Reserve Your Table
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block font-montserrat text-darkBg mb-2">Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-darkBg/80 border border-gold/30 rounded-xl px-4 py-3 text-warmCream focus:border-gold focus:outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block font-montserrat text-darkBg mb-2">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-darkBg/80 border border-gold/30 rounded-xl px-4 py-3 text-warmCream focus:border-gold focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block font-montserrat text-darkBg mb-2">Phone *</label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-darkBg/80 border border-gold/30 rounded-xl px-4 py-3 text-warmCream focus:border-gold focus:outline-none transition-colors"
            placeholder="1234567890"
          />
        </div>

        <div>
          <label className="block font-montserrat text-darkBg mb-2 flex items-center gap-2">
            <Users size={16} />
            Number of Guests *
          </label>
          <select
            required
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full bg-darkBg/80 border border-gold/30 rounded-xl px-4 py-3 text-warmCream focus:border-gold focus:outline-none transition-colors"
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-montserrat text-darkBg mb-2 flex items-center gap-2">
            <Calendar size={16} />
            Date *
          </label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
            className="w-full bg-darkBg/80 border border-gold/30 rounded-xl px-4 py-3 text-warmCream focus:border-gold focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block font-montserrat text-darkBg mb-2 flex items-center gap-2">
            <Clock size={16} />
            Time *
          </label>
          <select
            required
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full bg-darkBg/80 border border-gold/30 rounded-xl px-4 py-3 text-warmCream focus:border-gold focus:outline-none transition-colors"
          >
            <option value="">Select time</option>
            {availableTimeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-montserrat text-darkBg mb-2 flex items-center gap-2">
          <MessageSquare size={16} />
          Special Requests
        </label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          className="w-full bg-darkBg/80 border border-gold/30 rounded-xl px-4 py-3 text-warmCream focus:border-gold focus:outline-none transition-colors h-24 resize-none"
          placeholder="Dietary restrictions, celebrations, seating preferences..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gold hover:bg-gold/90 disabled:opacity-50 text-darkBg px-8 py-4 rounded-full font-montserrat font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
      >
        {isSubmitting ? 'Confirming Reservation...' : 'Confirm Reservation'}
      </motion.button>
    </motion.form>
  );
};
