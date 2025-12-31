import React, { useState, useEffect } from 'react';
import { X, Gift, Tag, Sparkles, TrendingUp } from 'lucide-react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = sessionStorage.getItem('promoBannerDismissed');
    if (dismissed) {
      setIsVisible(false);
    }

    // Countdown to Jan 15, 2026
    const countdownInterval = setInterval(() => {
      const now = new Date();
      const endDate = new Date('2026-01-15T23:59:59');
      const difference = endDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('promoBannerDismissed', 'true');
  };

  if (!isVisible) return null;

  const isOfferEnded = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-3 sm:py-4 px-4 overflow-hidden shadow-2xl animate-slideUp">
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
      {/* Animated sparkles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute animate-pulse" style={{ top: '20%', left: '10%' }}>✨</div>
          <div className="absolute animate-pulse" style={{ top: '60%', left: '15%', animationDelay: '0.5s' }}>⭐</div>
          <div className="absolute animate-pulse" style={{ top: '40%', left: '85%', animationDelay: '1s' }}>✨</div>
          <div className="absolute animate-pulse" style={{ top: '70%', left: '80%', animationDelay: '1.5s' }}>⭐</div>
          <div className="absolute animate-pulse" style={{ top: '30%', left: '50%', animationDelay: '0.7s' }}>✨</div>
        </div>
        
        {/* Diagonal stripes animation */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,.15) 20px, rgba(255,255,255,.15) 40px)',
          animation: 'slide 20s linear infinite'
        }}></div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(-40px); }
          100% { transform: translateX(0); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5); }
        }
        .glow-text {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 flex-1 flex-wrap">
            {/* Animated gift icon */}
            <div className="hidden md:flex relative">
              <Gift className="w-6 h-6 sm:w-7 sm:h-7 animate-bounce text-yellow-300" />
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-1 -right-1 text-yellow-200 animate-pulse" />
            </div>
            
            {/* Compact horizontal layout */}
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap flex-1">
              {/* Main offer text - more compact */}
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                <span className="font-black text-base sm:text-lg md:text-xl tracking-tight glow-text">
                  🎉 NEW YEAR SALE
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border-2 border-yellow-300">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
                <span className="text-sm sm:text-base font-extrabold text-yellow-200">
                  40% OFF
                </span>
              </div>

              <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                on orders <span className="font-bold text-yellow-300">₹499+</span>
              </span>
                
              {/* Countdown timer - horizontal compact */}
              {!isOfferEnded ? (
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-xs font-medium opacity-90 hidden lg:inline">⏰</span>
                  <div className="flex items-center gap-1">
                    <div className="bg-white/25 backdrop-blur-sm px-1.5 sm:px-2 py-1 rounded text-center border border-white/30">
                      <div className="font-bold text-xs sm:text-sm leading-none">{timeLeft.days}</div>
                      <div className="text-[0.5rem] sm:text-[0.6rem] uppercase opacity-80 leading-none">d</div>
                    </div>
                    <span className="font-bold text-xs sm:text-sm">:</span>
                    <div className="bg-white/25 backdrop-blur-sm px-1.5 sm:px-2 py-1 rounded text-center border border-white/30">
                      <div className="font-bold text-xs sm:text-sm leading-none">{timeLeft.hours}</div>
                      <div className="text-[0.5rem] sm:text-[0.6rem] uppercase opacity-80 leading-none">h</div>
                    </div>
                    <span className="font-bold text-xs sm:text-sm">:</span>
                    <div className="bg-white/25 backdrop-blur-sm px-1.5 sm:px-2 py-1 rounded text-center border border-white/30">
                      <div className="font-bold text-xs sm:text-sm leading-none">{timeLeft.minutes}</div>
                      <div className="text-[0.5rem] sm:text-[0.6rem] uppercase opacity-80 leading-none">m</div>
                    </div>
                    <span className="font-bold text-xs sm:text-sm hidden sm:inline">:</span>
                    <div className="bg-white/25 backdrop-blur-sm px-1.5 sm:px-2 py-1 rounded text-center border border-white/30 hidden sm:block">
                      <div className="font-bold text-xs sm:text-sm leading-none">{timeLeft.seconds}</div>
                      <div className="text-[0.5rem] sm:text-[0.6rem] uppercase opacity-80 leading-none">s</div>
                    </div>
                  </div>
                </div>
              ) : (
                <span className="text-xs sm:text-sm font-bold text-red-200">⚠️ Ended</span>
              )}
            </div>
          </div>
          
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="text-white hover:bg-white/25 hover:rotate-90 rounded-full p-1.5 transition-all duration-300 flex-shrink-0 backdrop-blur-sm"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
