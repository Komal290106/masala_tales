import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, X, Heart, MessageCircle } from "lucide-react";

// Import local assets (adjust path if your assets are in a different folder)
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import image10 from "../../assets/image10.png";

// Instagram feed posts
const instagramPosts = [
  { id: 1, image: image1, caption: "Plating perfection ✨" },
  { id: 2, image: image2, caption: "Our chef’s special moment 🍴" },
  { id: 3, image: image3, caption: "Fresh, vibrant, authentic 🌿" },
  { id: 4, image: image4, caption: "Behind the scenes at Masala Tales 🔥" },
  { id: 5, image: image5, caption: "Serving stories, not just food 📖" },
  { id: 6, image: image6, caption: "Luxury dining in Ferozepur ❤️" },
  { id: 7, image: image7, caption: "Crafting memories over meals 🍷" },
  { id: 8, image: image8, caption: "Every dish tells a tale 🍛" },
  { id: 9, image: image9, caption: "Authentic flavors, modern touch 👨‍🍳" },
  { id: 10, image: image10, caption: "Good food = good mood 😍" },
];

export const InstagramFeed = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="text-[#C13584]" size={28} />
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900">
              @themasalatalesfzr
            </h2>
          </div>
          <p className="text-lg font-cormorant text-gray-600 max-w-2xl mx-auto">
            Follow our culinary journey & behind-the-scenes stories
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
              onClick={() => setSelectedPost(index)}
            >
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Instagram className="text-white" size={22} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/themasalatalesfzr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-montserrat font-semibold text-sm transition-all duration-300 hover:shadow-md"
          >
            <Instagram size={18} />
            Follow us on Instagram
          </a>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPost !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full max-h-[85vh] shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-all"
                >
                  <X size={20} />
                </button>

                <img
                  src={instagramPosts[selectedPost].image}
                  alt="Instagram post"
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Heart size={18} />
                      <span className="font-montserrat text-sm">247</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MessageCircle size={18} />
                      <span className="font-montserrat text-sm">12</span>
                    </div>
                  </div>
                  <p className="font-cormorant text-gray-800 leading-relaxed">
                    {instagramPosts[selectedPost].caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
