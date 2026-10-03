import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, BedDouble, MapPin } from 'lucide-react';

const Booking = () => {
  return (
    <section className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-gold-500/20 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 blur-3xl rounded-full -mr-32 -mt-32"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Secure Your <span className="text-gold-400">Sanctuary</span></h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our reservation system is designed for absolute precision. Please specify your preferences, and our concierge will handle the rest.
              </p>
              <ul className="space-y-4">
                {['Complimentary Champagne on Arrival', 'Personal Butler Service', 'Private Airport Transfer'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl shadow-inner border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Check In</label>
                  <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700">
                    <Calendar size={18} className="text-gold-400" />
                    <input type="date" className="bg-transparent outline-none text-sm w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Check Out</label>
                  <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700">
                    <Calendar size={18} className="text-gold-400" />
                    <input type="date" className="bg-transparent outline-none text-sm w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Guests</label>
                  <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700">
                    <Users size={18} className="text-gold-400" />
                    <select className="bg-transparent outline-none text-sm w-full">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Room Type</label>
                  <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700">
                    <BedDouble size={18} className="text-gold-400" />
                    <select className="bg-transparent outline-none text-sm w-full">
                      <option>Presidential Suite</option>
                      <option>Royal Deluxe</option>
                      <option>Executive Wing</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 bg-gold-600 hover:bg-gold-500 text-slate-900 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg">
                Confirm Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
