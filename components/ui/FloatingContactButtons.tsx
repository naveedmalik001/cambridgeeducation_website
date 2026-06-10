'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, X, Headset } from 'lucide-react';
import { getWhatsAppLink, CONTACT } from '@/lib/utils';

const YoutubeIcon = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={style}>
    <path d="M23.498 6.163c-.272-.98-1.04-1.748-2.02-2.02C19.693 3.6 12 3.6 12 3.6s-7.693 0-9.478.543c-.98.272-1.748 1.04-2.02 2.02C0 7.948 0 12 0 12s0 4.052.502 5.837c.272.98 1.04 1.748 2.02 2.02C4.307 20.4 12 20.4 12 20.4s7.693 0 9.478-.543c.98-.272 1.748-1.04 2.02-2.02C24 16.052 24 12 24 12s0-4.052-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

let globalAudioCtx: AudioContext | null = null;

const playWelcomeSound = () => {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    if (!globalAudioCtx) {
      globalAudioCtx = new AudioContextClass();
    }
    
    const ctx = globalAudioCtx;
    if (ctx.state === 'suspended') {
      ctx.resume().catch((err) => console.warn('Could not resume AudioContext', err));
    }
    
    const now = ctx.currentTime;
    
    // Dual-note chime (D5 to A5) - clean, professional welcome sound
    const playChime = (time: number, freq: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      
      gain.gain.setValueAtTime(0.15, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
      
      osc.start(time);
      osc.stop(time + 0.15);
    };
    
    playChime(now, 587.33); // D5
    playChime(now + 0.08, 880.00); // A5
  } catch (e) {
    console.warn('Welcome sound failed', e);
  }
};

const playPopSound = () => {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    if (!globalAudioCtx) {
      globalAudioCtx = new AudioContextClass();
    }
    
    const ctx = globalAudioCtx;
    
    if (ctx.state === 'suspended') {
      ctx.resume().catch((err) => console.warn('Could not resume AudioContext', err));
    }
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    const now = ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
    
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    
    osc.start(now);
    osc.stop(now + 0.08);
  } catch (e) {
    console.warn('AudioContext failed to play sound', e);
  }
};

export function FloatingContactButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [showYoutubeModal, setShowYoutubeModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Try to play welcome sound on load (might be blocked by browser autoplay rules)
    playWelcomeSound();
    
    // User interaction callback to play sound if blocked by autoplay
    let interacted = false;
    const handleFirstInteraction = () => {
      if (interacted) return;
      interacted = true;
      playWelcomeSound();
      
      // Clean up event listeners
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
    
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  if (!mounted) return null;

  const ctaCount = 4; // Live Counselling, Phone, WhatsApp, YouTube

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-center gap-3">
        {/* Expandable Stack of CTA buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 15 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: 15 }}
              className="flex flex-col gap-3"
            >
              {/* Live Counselling Button */}
              <motion.div
                onClick={playPopSound}
                aria-label="Live Counselling Session Active"
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all text-white relative group cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #14B8C4 0%, #083B7A 100%)',
                  boxShadow: '0 4px 20px rgba(20, 184, 196, 0.4)',
                }}
                initial={{ scale: 0, y: 25, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0, y: 25, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="absolute inset-0 rounded-full animate-pulse-ring"
                  style={{ background: '#14B8C4', zIndex: 0 }}
                />
                <Headset size={22} style={{ position: 'relative', zIndex: 1 }} />
                
                {/* Blinking Live Badge */}
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 bg-red-600 border border-white/20 rounded-full text-[7px] font-black text-white tracking-wider flex items-center gap-0.5 shadow-sm select-none z-10">
                  <span className="w-1.2 h-1.2 rounded-full bg-white animate-live-blink" />
                  LIVE
                </span>
                
                {/* Tooltip (visible on hover on desktop) */}
                <span
                  className="absolute right-full mr-3 whitespace-nowrap text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900/90 shadow-md transition-all duration-200 hidden md:block"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  Live Counselling (Active)
                </span>
              </motion.div>

              {/* Call Button */}
              <motion.a
                onClick={playPopSound}
                href={`tel:${CONTACT.phones[2]}`}
                aria-label="Call Counsellor"
                id="call-float-btn"
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all text-white relative group"
                style={{
                  background: 'linear-gradient(135deg, #14B8C4, #0e8a94)',
                  boxShadow: '0 4px 20px rgba(20, 184, 196, 0.35)',
                }}
                initial={{ scale: 0, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0, y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="absolute inset-0 rounded-full animate-pulse-ring"
                  style={{ background: '#14B8C4', zIndex: 0 }}
                />
                <Phone size={22} style={{ position: 'relative', zIndex: 1 }} />
                
                {/* Tooltip */}
                <span
                  className="absolute right-full mr-3 whitespace-nowrap text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900/90 shadow-md transition-all duration-200 hidden md:block"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  Call Counsellor
                </span>
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                onClick={playPopSound}
                href={getWhatsAppLink(CONTACT.whatsapp, 'Hello! I am interested in studying abroad. Please guide me.')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                id="whatsapp-float-btn"
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all text-white relative group"
                style={{
                  background: '#25D366',
                  boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                }}
                initial={{ scale: 0, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0, y: 15, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="absolute inset-0 rounded-full animate-pulse-ring"
                  style={{ background: '#25D366', zIndex: 0 }}
                />
                <svg
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="white"
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.504 3.938 1.394 5.617L.05 23.5l6.09-1.327A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.867 0-3.617-.491-5.14-1.35l-.37-.218-3.816.832.876-3.709-.24-.382A9.791 9.791 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>

                {/* Tooltip */}
                <span
                  className="absolute right-full mr-3 whitespace-nowrap text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900/90 shadow-md transition-all duration-200 hidden md:block"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  Chat on WhatsApp
                </span>
              </motion.a>

              {/* YouTube Button */}
              <motion.button
                onClick={() => { playPopSound(); setShowYoutubeModal(true); }}
                aria-label="Open YouTube Hub"
                id="youtube-float-btn"
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all text-white relative group cursor-pointer border-0"
                style={{
                  background: 'linear-gradient(135deg, #FF0000, #cc0000)',
                  boxShadow: '0 4px 20px rgba(255, 0, 0, 0.4)',
                }}
                initial={{ scale: 0, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0, y: 10, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="absolute inset-0 rounded-full animate-pulse-ring"
                  style={{ background: '#FF0000', zIndex: 0 }}
                />
                <YoutubeIcon size={24} style={{ position: 'relative', zIndex: 1 }} />

                {/* Tooltip */}
                <span
                  className="absolute right-full mr-3 whitespace-nowrap text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900/90 shadow-md transition-all duration-200 hidden md:block"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  Watch YouTube Hub
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Trigger Button */}
        <motion.button
          onClick={() => { playPopSound(); setIsOpen(!isOpen); }}
          aria-label="Toggle contact menu"
          id="contact-menu-toggle"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white z-20 relative cursor-pointer border-0"
          style={{
            background: 'linear-gradient(135deg, #083B7A, #052a58)',
            boxShadow: '0 4px 24px rgba(8, 59, 122, 0.4)',
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={isOpen ? { rotate: 180, scale: 1 } : { 
            rotate: 0,
            scale: [1, 1.05, 1],
            y: [0, -4, 0]
          }}
          transition={isOpen ? { type: 'spring', stiffness: 260, damping: 20 } : {
            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}

          {/* Glowing Ripple Pulse Ring (only when collapsed) */}
          {!isOpen && (
            <span
              className="absolute inset-0 rounded-full bg-[#083B7A] animate-ping opacity-35 pointer-events-none"
              style={{ zIndex: -1 }}
            />
          )}

          {/* Notification Badge (only when collapsed) */}
          {!isOpen && (
            <span
              className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-black border-2 border-white shadow-lg animate-pulse"
              style={{ zIndex: 30 }}
            >
              {ctaCount}
            </span>
          )}
        </motion.button>
      </div>

      {/* YOUTUBE IFRAME PORTAL MODAL */}
      <AnimatePresence>
        {showYoutubeModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { playPopSound(); setShowYoutubeModal(false); }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-[9999]"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-[10000] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-slate-950/60 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
                    <YoutubeIcon size={18} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm md:text-base text-white font-display">
                      Cambridge YouTube Hub
                    </h3>
                    <p className="text-[10px] md:text-xs text-slate-450">
                      Official Admission & Seminar Videos
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => { playPopSound(); setShowYoutubeModal(false); }}
                  className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border-0"
                  aria-label="Close video player"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Video Player */}
              <div className="w-full aspect-video bg-black relative">
                <iframe
                  className="w-full h-full absolute inset-0 border-0"
                  src={`https://www.youtube.com/embed/${CONTACT.youtubeVideoId}?si=1fJf736yN5i5fXX8`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Footer */}
              <div className="p-5 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="space-y-1 text-left">
                  <p className="text-sm font-semibold text-white">
                    Want to see more departures and briefings?
                  </p>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Subscribe to our channel for campus vlogs, seminars, and student testimonials.
                  </p>
                </div>
                <div className="flex gap-2.5 w-full sm:w-auto">
                  <a
                    href={CONTACT.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer shadow-lg shadow-red-900/20 text-decoration-none"
                  >
                    <YoutubeIcon size={16} />
                    Visit Channel
                  </a>
                  <button
                    onClick={() => { playPopSound(); setShowYoutubeModal(false); }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer border-0"
                  >
                    Close Player
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
