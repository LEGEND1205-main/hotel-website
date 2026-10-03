import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, BedDouble, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const Booking = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1 Guest',
    roomType: 'Presidential Suite'
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.checkIn || !formData.checkOut) {
      setErrorMessage('Please select both check-in and check-out dates.');
      setStatus('error');
      return;
    }

    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      setErrorMessage('Check-out date must be after check-in date.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();

      const bookingData = {
        user_id: user?.id || null, // null for guest bookings
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        guests: parseInt(formData.guests),
        room_type: formData.roomType,
        status: 'Pending'
      };

      const { error } = await supabase.from('bookings').insert([bookingData]);

      if (error) throw error;

      setStatus('success');
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-gold-500/20 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 blur-3xl rounded-full -mr-32 -mt-32"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-serif font-bold mb-6">Secure Your <span className="text-gold-400">Sanctuary</span></h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our reservation system is designed for absolute precision. Please specify your preferences, and our concierge will handle the rest.
              </p>
              <ul className="space-y-4">
                {['Complimentary Champagne on Arrival', 'Personal Butler Service', 'Private Airport Transfer'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 justify-center lg:justify-start">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-slate-800 p-12 rounded-2xl border border-gold-500/30 text-center shadow-2xl"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12 }}
                      className="flex justify-center mb-6"
                    >
                      <div className="p-4 bg-gold-600 rounded-full text-slate-900">
                        <CheckCircle2 size={48} />
                      </div>
                    </motion.div>
                    <h3 className="text-3xl font-serif font-bold mb-4">Reservation Secured</h3>
                    <p className="text-slate-400 mb-8">Your sanctuary awaits. Our concierge will contact you shortly to finalize the details.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all"
                    >
                      Make Another Booking
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleBooking} className="bg-slate-800 p-8 rounded-2xl shadow-inner border border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Check In</label>
                        <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700 focus-within:border-gold-500/50 transition-colors">
                          <Calendar size={18} className="text-gold-400" />
                          <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleInputChange}
                            className="bg-transparent outline-none text-sm w-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Check Out</label>
                        <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700 focus-within:border-gold-500/50 transition-colors">
                          <Calendar size={18} className="text-gold-400" />
                          <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleInputChange}
                            className="bg-transparent outline-none text-sm w-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Guests</label>
                        <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700 focus-within:border-gold-500/50 transition-colors">
                          <Users size={18} className="text-gold-400" />
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="bg-transparent outline-none text-sm w-full"
                          >
                            <option>1 Guest</option>
                            <option>2 Guests</option>
                            <option>3+ Guests</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Room Type</label>
                        <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg border border-slate-700 focus-within:border-gold-500/50 transition-colors">
                          <BedDouble size={18} className="text-gold-400" />
                          <select
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleInputChange}
                            className="bg-transparent outline-none text-sm w-full"
                          >
                            <option>Presidential Suite</option>
                            <option>Royal Deluxe</option>
                            <option>Executive Wing</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {errorMessage && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs text-center mt-4 font-medium"
                      >
                        {errorMessage}
                      </motion.p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full mt-8 bg-gold-600 hover:bg-gold-500 text-slate-900 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg flex justify-center items-center gap-3 disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Securing your stay...
                        </>
                      ) : (
                        'Confirm Reservation'
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
