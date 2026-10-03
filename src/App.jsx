import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accommodations from './components/Accommodations';
import Experience from './components/Experience';
import HotelMenu from './components/HotelMenu';
import Booking from './components/Booking';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen selection:bg-gold-500 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Accommodations />
        <Experience />
        <HotelMenu />
        <Booking />

        {/* Luxury Footer */}
        <footer className="py-12 px-6 bg-slate-950 text-white border-t border-gold-500/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-serif font-bold text-gold-400">
              HOTEL <span className="text-white">MAKE</span>
            </div>
            <div className="flex gap-8 text-slate-400 text-sm">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Contact</a>
            </div>
            <div className="text-slate-500 text-xs">
              © 2026 Hotel Make. All Rights Reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
