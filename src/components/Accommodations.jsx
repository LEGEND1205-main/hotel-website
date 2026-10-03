import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Wind, Coffee, ShieldCheck, Star, Maximize } from 'lucide-react';

const Accommodations = () => {
  const rooms = [
    {
      id: "suites",
      name: "Presidential Suite",
      price: "$2,500 / night",
      desc: "The pinnacle of luxury. A sprawling sanctuary with panoramic city views, private terrace, and a personal butler service.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      amenities: ["Private Infinity Pool", "24/7 Butler", "Gold-Plated Fittings", "Panoramic View"],
      size: "2,500 sq ft"
    },
    {
      id: "deluxe",
      name: "Royal Deluxe",
      price: "$1,200 / night",
      desc: "Regal comfort and timeless elegance. Designed for those who appreciate the finer things in life.",
      image: "https://images.unsplash.com/photo-1590490361648-8b4731c688e3?auto=format&fit=crop&w=800&q=80",
      amenities: ["King-Sized Bed", "Marble Bath", "Smart Home Control", "Espresso Station"],
      size: "1,100 sq ft"
    },
    {
      id: "executive",
      name: "Executive Wing",
      price: "$800 / night",
      desc: "For the modern professional. A perfect blend of productivity and relaxation in the heart of the city.",
      image: "https://images.unsplash.com/photo-1631049307264-da07df03a566?auto=format&fit=crop&w=800&q=80",
      amenities: ["Ergonomic Workspace", "High-Speed Fiber", "Soundproof Walls", "City Skyline View"],
      size: "650 sq ft"
    }
  ];

  return (
    <section id="accommodations" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-serif font-bold mb-4">Curated <span className="text-gold-400">Sanctuaries</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">From regal suites to modern wings, every room is a masterpiece of design and comfort.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              id={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group bg-slate-800/40 border border-white/5 rounded-3xl overflow-hidden hover:border-gold-500/30 transition-all hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-4 py-1 rounded-full text-gold-400 font-bold text-sm border border-gold-500/30">
                  {room.price}
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold group-hover:text-gold-400 transition-colors">{room.name}</h3>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Maximize size={14} /> {room.size}
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {room.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Star size={12} className="text-gold-500" />
                      {amenity}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-gold-600 hover:text-slate-900 text-white font-bold transition-all border border-white/10 hover:border-transparent">
                  Reserve Room
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
