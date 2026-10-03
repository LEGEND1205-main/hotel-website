import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Leaf, Flame, Clock } from 'lucide-react';

const HotelMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Signature');

  const menuData = {
    "Signature": [
      { name: "Truffle Infused Wagyu", price: "$120", desc: "A5 Wagyu, shaved black truffle, gold leaf garnish", tag: "Chef's Choice" },
      { name: "Lobster Thermidor", price: "$85", desc: "Creamy cognac sauce, gruyère crust, micro-greens", tag: "Legendary" },
      { name: "Saffron Risotto", price: "$65", desc: "Iranian saffron, arborio rice, 24-month aged parmesan", tag: "Vegetarian" },
    ],
    "Celestial": [
      { name: "Moonlight Cocktail", price: "$28", desc: "Butterfly pea flower, gin, elderflower, lemon zest", tag: "Bestseller" },
      { name: "Nebula Martini", price: "$32", desc: "Vodka, blue curacao, edible silver glitter", tag: "Visual Art" },
      { name: "Solar Flare Shot", price: "$20", desc: "Spiced rum, chili infusion, cinnamon rim", tag: "Bold" },
    ],
    "Wellness": [
      { name: "Avocado Zen Bowl", price: "$35", desc: "Organic quinoa, avocado, pomegranate, tahini drizzle", tag: "Vegan" },
      { name: "Kombucha Flight", price: "$22", desc: "Three artisanal ferments from around the globe", tag: "Probiotic" },
      { name: "Matcha Ritual Tea", price: "$18", desc: "Ceremonial grade matcha, whisked traditionally", tag: "Calming" },
    ]
  };

  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4">Gastronomic <span className="text-gold-400">Artistry</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A symphony of flavors designed to awaken your senses. Every dish is a masterpiece.</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat
                ? 'bg-gold-600 text-slate-900 scale-110'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {menuData[activeCategory].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-gold-500/30 transition-colors flex justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-gold-600 text-slate-900 rounded font-bold">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                  <div className="text-gold-400 font-serif font-bold text-lg">{item.price}</div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default HotelMenu;
