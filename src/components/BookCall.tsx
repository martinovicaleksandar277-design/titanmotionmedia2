import { ArrowLeft, Calendar, Clock, Video, ExternalLink } from 'lucide-react';

interface BookCallProps {
  onBack: () => void;
}

function BookCall({ onBack }: BookCallProps) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950"></div>

      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="absolute left-[5%] top-[20%] w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] rotate-[-15deg]" viewBox="0 0 200 150" fill="none">
          <path d="M20,80 L40,80 L40,100 L60,100 L60,70 L80,70 L100,50 L120,50 L130,60 L130,100 L140,100 L140,110 L20,110 Z" fill="white" opacity="0.4"/>
          <circle cx="35" cy="110" r="8" fill="white" opacity="0.5"/>
          <circle cx="125" cy="110" r="8" fill="white" opacity="0.5"/>
        </svg>

        <svg className="absolute right-[8%] bottom-[25%] w-[250px] sm:w-[500px] h-[175px] sm:h-[350px] rotate-[20deg]" viewBox="0 0 180 140" fill="none">
          <path d="M30,90 L50,90 L50,70 L70,70 L70,50 L90,50 L90,40 L110,40 L120,50 L130,50 L140,60 L140,100 L150,100 L150,110 L30,110 Z" fill="white" opacity="0.35"/>
          <circle cx="45" cy="110" r="7" fill="white" opacity="0.5"/>
          <circle cx="135" cy="110" r="7" fill="white" opacity="0.5"/>
        </svg>
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-amber-600/20 rounded-full blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/20 rounded-full blur-[80px] sm:blur-[120px]"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] w-[150px] sm:w-[300px] h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm"></div>
        <div className="absolute top-[40%] right-[15%] w-[125px] sm:w-[250px] h-[2px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent blur-sm rotate-[-15deg]"></div>
        <div className="absolute bottom-[30%] left-[20%] w-[100px] sm:w-[200px] h-[2px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent blur-sm rotate-[10deg]"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.8)]"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-700 shadow-[0_0_15px_rgba(251,146,60,0.8)]"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-1000 shadow-[0_0_18px_rgba(252,211,77,0.8)]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="px-4 sm:px-6 py-6 sm:py-8">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-zinc-400 hover:text-amber-500 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-start px-4 sm:px-6 pb-12 pt-4">
          <div className="w-full max-w-6xl">
            <div className="text-center mb-8 sm:mb-12">
              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-amber-500/90 font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                  Schedule Your Consultation
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Book a{' '}
                <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-transparent bg-clip-text">
                  Free Call
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
                Let's discuss how we can transform your machines into cinematic ads. Pick a time that works for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-amber-500/10 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Pick Your Time</h3>
                  <p className="text-zinc-400">Choose a slot that fits your schedule perfectly</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-orange-500/10 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">30-Minute Call</h3>
                  <p className="text-zinc-400">Quick consultation to discuss your project needs</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-amber-600/10 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-lg p-6 hover:border-amber-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-600/10 rounded-lg flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Video Meeting</h3>
                  <p className="text-zinc-400">Face-to-face discussion via your preferred platform</p>
                </div>
              </div>
            </div>

            <div className="relative group mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-lg blur-2xl"></div>
              <div className="relative">
                <a
                  href="https://calendly.com/martinovicaleksandar277/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-12 py-8 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black text-2xl rounded-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] hover:scale-[1.02] flex items-center justify-center gap-4"
                >
                  <Calendar className="w-8 h-8" strokeWidth={3} />
                  Schedule Your Free Consultation
                  <ExternalLink className="w-6 h-6" strokeWidth={3} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Discuss Your Vision</h4>
                    <p className="text-zinc-400 text-sm">Share your ideas and what you want to achieve</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Review Portfolio</h4>
                    <p className="text-zinc-400 text-sm">See examples of our cinematic work</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Custom Strategy</h4>
                    <p className="text-zinc-400 text-sm">Get a tailored plan for your machines</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Next Steps</h4>
                    <p className="text-zinc-400 text-sm">Clear timeline and pricing information</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-zinc-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
                  <span>30-minute call</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCall;
