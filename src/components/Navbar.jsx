import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Bed, Utensils, MapPin, Phone, Mail, Star } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = {
    "Accommodations": [
      { name: "Presidential Suite", desc: "The pinnacle of luxury", link: "#suites" },
      { name: "Royal Deluxe", desc: "Regal comfort and elegance", link: "#deluxe" },
      { name: "Executive Wing", desc: "For the modern professional", link: "#executive" },
    ],
    "Gastronomy": [
      { name: "The Grand Atrium", desc: "Fine dining experience", link: "#dining" },
      { name: "Celestial Lounge", desc: "Rooftop cocktails", link: "#lounge" },
      { name: "Zen Garden Cafe", desc: "Organic and mindful eating", link: "#cafe" },
    ],
    "Experiences": [
      { name: "Imperial Spa", desc: "Ancient healing rituals", link: "#spa" },
      { name: "Azure Pool", desc: "Infinite horizons", link: "#pool" },
      { name: "City Curated Tours", desc: "Hidden gems of the city", link: "#tours" },
    ]
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md text-white border-b border-gold-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tighter text-gold-400"
        >
          HOTEL <span className="text-white">MAKE</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {Object.keys(menuItems).map((item) => (
            <div
              key={item}
              className="relative group"
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-gold-400 transition-colors py-2">
                {item} <ChevronDown size={16} />
              </button>

              <AnimatePresence>
                {activeMenu === item && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-slate-800 border border-gold-500/20 shadow-2xl p-4 rounded-b-lg"
                  >
                    {menuItems[item].map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.link}
                        className="block p-3 hover:bg-slate-700 rounded transition-colors group/sub"
                      >
                        <div className="font-medium text-gold-400 group-hover/sub:text-white">{sub.name}</div>
                        <div className="text-xs text-slate-400">{sub.desc}</div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <button className="bg-gold-600 hover:bg-gold-500 text-slate-900 px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 bg-slate-900 z-40 md:hidden p-6"
          >
            <div className="flex flex-col space-y-6 mt-12">
              {Object.entries(menuItems).map(([category, items]) => (
                <div key={category} className="border-b border-slate-700 pb-4">
                  <h3 className="text-gold-400 font-bold mb-4 text-xl">{category}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {items.map(item => (
                      <a key={item.name} href={item.link} className="text-slate-300 text-lg" onClick={() => setIsOpen(false)}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <button className="bg-gold-600 text-slate-900 p-4 rounded-xl font-bold text-xl">
                Book Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
