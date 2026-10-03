import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Waves, Map, Star, Wind, Camera } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: "spa",
      title: "Imperial Spa",
      subtitle: "Ancient Healing Rituals",
      desc: "A sanctuary of serenity where time stands still. Our signature rituals combine Himalayan salts and gold-infused oils to rejuvenate the soul.",
      image: "https://images.unsplash.com/photo-1544161515-7f0b37f72970?auto=format&fit=crop&w=1200&q=80",
      colSpan: "lg:col-span-7",
      icon: <Sparkles className="text-gold-400" />,
      features: ["Gold-Leaf Massage", "Crystal Steam Room", "Ayurvedic Therapy"]
    },
    {
      id: "pool",
      title: "Azure Pool",
      subtitle: "Infinite Horizons",
      desc: "Float above the city skyline in our temperature-controlled infinity pool. The ultimate intersection of water and sky.",
      image: "https://images.unsplash.com/photo-1576013551627-07f377499d77?auto=format&fit=crop&w=800&q=80",
      colSpan: "lg:col-span-5",
      icon: <Waves className="text-gold-400" />,
      features: ["Skyline View", "Underwater Sound System", "Private Cabanas"]
    },
    {
      id: "tours",
      title: "City Curated Tours",
      subtitle: "Hidden Gems of the Metropolis",
      desc: "Our expert concierges lead you through the city's most exclusive galleries, underground jazz clubs, and secret gardens.",
      image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1200&q=80",
      colSpan: "lg:col-span-12",
      icon: <Map className="text-gold-400" />,
      features: ["VIP Gallery Access", "Private Chauffeur", "Gourmet Street Tasting"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-serif font-bold mb-4">Beyond <span className="text-gold-400">Staying</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Luxury is not a place, it's an experience. Discover the curated rituals of Hotel Make.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              id={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`${exp.colSpan} group relative h-[500px] overflow-hidden rounded-3xl border border-white/10`}
            >
              {/* Image Background */}
              <img
                src={exp.image}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gold-600/20 backdrop-blur-md rounded-lg border border-gold-500/30">
                    {exp.icon}
                  </div>
                  <span className="text-gold-400 uppercase tracking-widest text-xs font-bold">
                    {exp.subtitle}
                  </span>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-3 group-hover:text-gold-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-4">
                  {exp.features.map((feat, idx) => (
                    <span key={idx} className="flex items-center gap-1 text-[10px] uppercase tracking-tighter px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-slate-300">
                      <Star size={10} className="text-gold-500" /> {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
