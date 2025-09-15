import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart, Clock, MapPin, Instagram, Star } from 'lucide-react';
import { customerReviews } from '../data/mockData';
import { Link } from 'react-router-dom';

export const About = () => {
  const milestones = [
    { year: '2018', title: 'Restaurant Opening', description: 'Masala Tales opens its doors in Ferozepur' },
    { year: '2019', title: 'Premium Delivery Launch', description: 'Started gourmet food delivery service' },
    { year: '2021', title: 'Expansion', description: 'Added full dine-in experience' },
    { year: '2023', title: 'Award Recognition', description: 'Featured in Punjab Food Guide' },
    { year: '2024', title: 'Culinary Innovation', description: 'Introduced seasonal tasting menus' }
  ];

  const awards = [
    { name: 'Punjab Food Excellence', year: '2023' },
    { name: 'Best Fine Dining Experience', year: '2022' },
    { name: 'Chef Vipul Sharma Recognition', year: '2021' },
    { name: 'Local Favorite Award', year: '2020' }
  ];

  return (
          <div className="bg-bgDark min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 lg:py-24"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-overlay"></div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-parisienne font-bold text-gold mb-6">
            Our Story
          </h1>
          <p className="text-xl font-cormorant text-cream max-w-3xl mx-auto leading-relaxed">
            A tale of passion, tradition, and culinary excellence that began with a simple dream
          </p>
        </div>
      </motion.section>

      {/* Chef Section */}
      <section className="py-16 lg:py-20 bg-bgLight">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-bgDark p-8 rounded-lg border border-gold/30 shadow-lg">
                <h2 className="text-3xl lg:text-4xl font-parisienne text-gold mb-4">Meet Chef Vipul Sharma</h2>
                <p className="font-cormorant text-lg text-cream mb-6 leading-relaxed">
                  Chef Vipul Sharma is the visionary gourmet chef behind The Masala Tales, a premium food delivery 
                  kitchen and restaurant in Ferozepur, Punjab. What began as a passion project from home has evolved 
                  into a full-time sip-and-dine establishment under his creative direction and dedication to quality food.
                </p>
                <p className="font-cormorant text-lg text-cream mb-6 leading-relaxed">
                  At Masala Tales, Chef Vipul crafts each dish as a narrative—a story of culture, passion, and the 
                  artistry of fine Indian dining.
                </p>
                <div className="border-t border-gold/20 pt-6 mt-6">
                  <p className="font-parisienne text-2xl text-gold italic">"In the kitchen, passion becomes flavor."</p>
                  <p className="font-cormorant text-cream mt-2">—Chef Vipul Sharma</p>
                </div>
                <div className="mt-6 flex items-center">
                  <a href="#" className="flex items-center text-accent hover:text-accentDark transition-colors">
                    <Instagram size={20} className="mr-2" />
                    <span className="font-montserrat">Follow on Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Heart, title: 'Passion', description: 'Every dish crafted with love' },
                { icon: Globe, title: 'Heritage', description: 'Authentic Indian flavors' },
                { icon: Users, title: 'Community', description: 'Bringing people together' },
                { icon: Award, title: 'Excellence', description: 'Uncompromising quality' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-bgDark p-6 rounded-lg text-center border border-gold/20 hover:border-gold/50 transition-colors"
                >
                  <item.icon className="text-accent mx-auto mb-3" size={32} />
                  <h3 className="font-montserrat font-semibold text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="font-cormorant text-sm text-cream/80">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

{/* Timeline Section */}
<section className="py-16 lg:py-20 bg-cream">
  <div className="container mx-auto px-4 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl lg:text-5xl font-parisienne text-gold mb-4">Our Journey</h2>
      <p className="text-lg font-cormorant text-gray-700/80 max-w-2xl mx-auto">
        Milestones that shaped our culinary legacy
      </p>
    </motion.div>

    <div className="max-w-4xl mx-auto relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30"></div>
      {milestones.map((milestone, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}
        >
          <div className="w-5/12">
            <div className={`p-6 bg-gray-50 rounded-lg border border-gold/20 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <div className="text-2xl font-parisienne text-accent mb-2">{milestone.year}</div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2">
                {milestone.title}
              </h3>
              <p className="font-cormorant text-gray-700/80">
                {milestone.description}
              </p>
            </div>
          </div>
          <div className="w-2/12 flex justify-center">
            <div className="w-6 h-6 bg-accent rounded-full border-4 border-gold"></div>
          </div>
          <div className="w-5/12"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Awards Section */}
      <section className="py-16 lg:py-20 bg-bgLight">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-parisienne text-gold mb-4">Awards & Recognition</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bgDark p-6 rounded-lg text-center border border-gold/20 hover:border-gold/50 transition-colors"
              >
                <Award className="text-accent mx-auto mb-4" size={32} />
                <h3 className="font-montserrat font-semibold text-cream mb-2">
                  {award.name}
                </h3>
                <p className="font-cormorant text-cream/80">
                  {award.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 lg:py-20 bg-bgDark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-bgLight p-8 rounded-lg border border-gold/30"
            >
              <h3 className="text-2xl font-parisienne text-gold mb-6">Visit Us</h3>
              <div className="flex items-start mb-6">
                <MapPin className="text-accent mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-montserrat font-semibold text-cream mb-1">Location</h4>
                  <p className="font-cormorant text-cream/80">
                    The Masala Tales, Anil Baghi road<br />
                    Model Town, Ferozepur, Punjab 152001
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-accent mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-montserrat font-semibold text-cream mb-1">Opening Hours</h4>
                  <p className="font-cormorant text-cream/80">
                    Monday - Saturday: 12:30PM - 10:45 PM<br />
                    Sunday: 12:30 PM - 11:00PM
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-bgLight p-8 rounded-lg border border-gold/30"
            >
              <h3 className="text-2xl font-parisienne text-gold mb-6">Make a Reservation</h3>
              <p className="font-cormorant text-cream mb-6 leading-relaxed">
                Experience the rich flavors and vibrant culture of India at Masala Tales. 
                Book your table for an unforgettable dining experience.
              </p>
              <Link
  to="/book"
  className="inline-block bg-gold hover:bg-gold/90 text-darkBg px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300"
>
  Reserve a Table
</Link>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-parisienne text-gold mb-4">What Our Guests Say</h2>
            <p className="text-lg font-cormorant text-bg-bgLight max-w-2xl mx-auto">
              Hear from our valued customers about their experience at Masala Tales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerReviews.slice(0, 3).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-bgDark p-6 rounded-lg border border-gold/20 shadow-sm"
              >
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-500'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="font-cormorant text-cream italic mb-4 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="border-t border-gold/20 pt-4">
                  <p className="font-montserrat font-semibold text-accent text-sm">
                    {review.name}
                  </p>
                  <p className="font-cormorant text-cream/80 text-xs">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};