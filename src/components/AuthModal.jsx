import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogIn } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const AuthModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-md bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-slate-400 text-sm">Access your Imperial membership and reservations</p>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-4 px-6 py-4 rounded-xl bg-white text-slate-900 font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
              Sign in with Google
            </>
          )}
        </button>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-400 text-xs font-medium"
          >
            {error}
          </motion.p>
        )}

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-slate-500 text-xs">
            By signing in, you agree to our <a href="#" className="text-gold-400 hover:underline">Terms of Service</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
