import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Coffee, Wifi } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068ce9875ae4?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          alt="Luxury Hotel Lobby"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 border border-gold-400 text-gold-400 rounded-full text-sm tracking-widest uppercase font-medium">
            Experience Transcendence
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            Where Luxury <br />
            <span className="text-gold-400 italic">Meets Art</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Step into Hotel Make, a sanctuary of opulence and avant-garde design.
            Curated for those who demand the extraordinary in every detail.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-gold-600 hover:bg-gold-500 text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-gold-600/20">
              Explore Suites
            </button>
            <button className="px-10 py-4 rounded-full font-bold text-lg border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all">
              Virtual Tour
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Features */}
      <div className="absolute bottom-10 left-0 w-full px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          {[
            { icon: <Star />, text: "Michelin Star Dining" },
            { icon: <ShieldCheck />, text: "Absolute Privacy" },
            { icon: <Coffee />, text: "Artisan Coffee Bar" },
            { icon: <Wifi />, text: "Quantum Fiber Internet" },
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="flex items-center gap-3 text-slate-300 bg-slate-800/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10"
            >
              <span className="text-gold-400">{feat.icon}</span>
              <span className="text-sm font-medium">{feat.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
