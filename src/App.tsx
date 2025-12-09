import { Film, Play, Upload, Wand2, Download, Sparkles, Camera, Cog, Zap, ArrowRight, Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import DemoRequest from './components/DemoRequest';
import BookCall from './components/BookCall';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [showDemoRequest, setShowDemoRequest] = useState(false);
  const [showBookCall, setShowBookCall] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  if (showDemoRequest) {
    return <DemoRequest onBack={() => setShowDemoRequest(false)} />;
  }

  if (showBookCall) {
    return <BookCall onBack={() => setShowBookCall(false)} />;
  }

  if (showPrivacyPolicy) {
    return <PrivacyPolicy onBack={() => setShowPrivacyPolicy(false)} />;
  }

  if (showTermsOfService) {
    return <TermsOfService onBack={() => setShowTermsOfService(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <a href="#" className="flex items-center transition-opacity hover:opacity-80">
            <img
              src="/ChatGPT Image Nov 27, 2025, 08_31_34 AM.png"
              alt="TitanMotion Media Logo"
              className="h-12 sm:h-16 w-auto"
            />
          </a>
          <div className="flex items-center gap-3 sm:gap-8">
            <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="hidden md:block text-zinc-300 hover:text-amber-500 transition-colors font-medium">How It Works</a>
            <a href="#why-us" onClick={(e) => scrollToSection(e, 'why-us')} className="hidden md:block text-zinc-300 hover:text-amber-500 transition-colors font-medium">Why Us</a>
            <button onClick={() => setShowBookCall(true)} className="hidden lg:flex items-center gap-2 text-zinc-300 hover:text-amber-500 transition-colors font-medium">
              <Phone className="w-4 h-4" />
              Book a Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-300 hover:text-amber-500 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setShowDemoRequest(true)}
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-xs sm:text-sm rounded-sm hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all"
            >
              Get Started
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#how-it-works"
                onClick={(e) => scrollToSection(e, 'how-it-works')}
                className="text-zinc-300 hover:text-amber-500 transition-colors font-medium py-2"
              >
                How It Works
              </a>
              <a
                href="#why-us"
                onClick={(e) => scrollToSection(e, 'why-us')}
                className="text-zinc-300 hover:text-amber-500 transition-colors font-medium py-2"
              >
                Why Us
              </a>
              <button
                onClick={() => setShowBookCall(true)}
                className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 transition-colors font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950"></div>

      <div className="absolute inset-0 opacity-[0.05] sm:opacity-[0.07]">
        <svg className="absolute left-[5%] top-[20%] w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] rotate-[-15deg]" viewBox="0 0 200 150" fill="none">
          <path d="M20,80 L40,80 L40,100 L60,100 L60,70 L80,70 L100,50 L120,50 L130,60 L130,100 L140,100 L140,110 L20,110 Z" fill="white" opacity="0.4"/>
          <rect x="60" y="100" width="40" height="8" fill="white" opacity="0.3"/>
          <circle cx="35" cy="110" r="8" fill="white" opacity="0.5"/>
          <circle cx="125" cy="110" r="8" fill="white" opacity="0.5"/>
        </svg>

        <svg className="absolute right-[8%] bottom-[25%] w-[250px] sm:w-[500px] h-[175px] sm:h-[350px] rotate-[20deg]" viewBox="0 0 180 140" fill="none">
          <path d="M30,90 L50,90 L50,70 L70,70 L70,50 L90,50 L90,40 L110,40 L120,50 L130,50 L140,60 L140,100 L150,100 L150,110 L30,110 Z" fill="white" opacity="0.35"/>
          <rect x="70" y="100" width="35" height="8" fill="white" opacity="0.3"/>
          <circle cx="45" cy="110" r="7" fill="white" opacity="0.5"/>
          <circle cx="135" cy="110" r="7" fill="white" opacity="0.5"/>
        </svg>

        <svg className="absolute left-[45%] bottom-[15%] w-[225px] sm:w-[450px] h-[150px] sm:h-[300px] rotate-[8deg]" viewBox="0 0 160 120" fill="none">
          <path d="M20,70 L35,70 L35,85 L50,85 L50,60 L65,60 L80,45 L95,45 L100,50 L100,85 L110,85 L110,95 L20,95 Z" fill="white" opacity="0.3"/>
          <circle cx="32" cy="95" r="6" fill="white" opacity="0.4"/>
          <circle cx="98" cy="95" r="6" fill="white" opacity="0.4"/>
        </svg>
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-amber-600/20 rounded-full blur-[80px] sm:blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/20 rounded-full blur-[80px] sm:blur-[120px]"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.8)]"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-700 shadow-[0_0_15px_rgba(251,146,60,0.8)]"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-1000 shadow-[0_0_18px_rgba(252,211,77,0.8)]"></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] w-[150px] sm:w-[300px] h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm"></div>
        <div className="absolute top-[40%] right-[15%] w-[125px] sm:w-[250px] h-[2px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent blur-sm rotate-[-15deg]"></div>
        <div className="absolute bottom-[30%] left-[20%] w-[100px] sm:w-[200px] h-[2px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent blur-sm rotate-[10deg]"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20 pt-24 sm:pt-32">
        <div className="mb-6 sm:mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
          <p className="text-xs sm:text-sm md:text-base text-amber-500/90 text-center font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2">
            AI-Powered Cinematic Ads for Heavy-Duty Brands
          </p>
        </div>

        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent blur-3xl"></div>
          <h1 className="relative text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-center text-white leading-[1.15] sm:leading-[1.1] max-w-6xl opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards] px-2">
            Transform a Single Photo Into a{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-transparent bg-clip-text">
              $20,000-Level
            </span>{' '}
            Cinematic Ad
          </h1>
        </div>

        <p className="text-base sm:text-xl md:text-2xl text-zinc-300 text-center mb-8 sm:mb-12 max-w-3xl font-light leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards] px-4">
          We turn your machines into film-grade commercial videos using only your photos and logo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards] w-full px-4 sm:px-0">
          <button
            onClick={() => setShowDemoRequest(true)}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-base sm:text-lg rounded hover:from-amber-600 hover:to-orange-700 transition-all duration-200"
          >
            Request a Free Demo
          </button>

          <button
            onClick={() => setShowBookCall(true)}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-zinc-700 text-zinc-200 font-bold text-base sm:text-lg rounded hover:border-amber-500 hover:text-amber-500 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Book a Call
          </button>

          <a
            href="#how-it-works"
            onClick={(e) => scrollToSection(e, 'how-it-works')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-zinc-700 text-zinc-200 font-bold text-base sm:text-lg rounded hover:border-amber-500 hover:text-amber-500 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            See How It Works
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 text-zinc-300 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards] px-4">
          <div className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 sm:mt-2.5 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-shadow flex-shrink-0"></div>
            <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide">Done From 3–10 Photos</span>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 sm:mt-2.5 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-shadow flex-shrink-0"></div>
            <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide">Hollywood-Style Cinematics</span>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 sm:mt-2.5 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-shadow flex-shrink-0"></div>
            <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide">Delivered in 48 Hours</span>
          </div>
        </div>
      </div>

      <section className="relative bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="absolute left-[10%] top-[30%] w-[200px] sm:w-[400px] h-[140px] sm:h-[280px] rotate-[25deg]" viewBox="0 0 180 130" fill="none">
            <path d="M25,75 L40,75 L40,90 L55,90 L55,65 L70,65 L85,50 L100,50 L108,57 L108,90 L118,90 L118,98 L25,98 Z" fill="white" opacity="0.35"/>
            <circle cx="35" cy="98" r="6" fill="white" opacity="0.4"/>
            <circle cx="108" cy="98" r="6" fill="white" opacity="0.4"/>
          </svg>

          <svg className="absolute right-[15%] top-[20%] w-[175px] sm:w-[350px] h-[125px] sm:h-[250px] rotate-[-12deg]" viewBox="0 0 160 110" fill="none">
            <path d="M20,60 L32,60 L32,70 L42,70 L42,50 L55,50 L65,40 L78,40 L83,45 L83,70 L90,70 L90,78 L20,78 Z" fill="white" opacity="0.3"/>
            <circle cx="28" cy="78" r="5" fill="white" opacity="0.35"/>
            <circle cx="82" cy="78" r="5" fill="white" opacity="0.35"/>
          </svg>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-amber-600/15 rounded-full blur-[80px] sm:blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-orange-500/15 rounded-full blur-[80px] sm:blur-[100px]"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[25%] right-[20%] w-[100px] sm:w-[200px] h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent blur-[1px] rotate-[20deg]"></div>
          <div className="absolute bottom-[35%] left-[15%] w-[90px] sm:w-[180px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-[1px] rotate-[-25deg]"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[20%] left-[25%] w-1 h-1 bg-amber-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]"></div>
          <div className="absolute top-[60%] right-[30%] w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse delay-500 shadow-[0_0_15px_rgba(251,146,60,0.6)]"></div>
          <div className="absolute bottom-[40%] left-[40%] w-1 h-1 bg-amber-300 rounded-full animate-pulse delay-1000 shadow-[0_0_10px_rgba(252,211,77,0.6)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              See What We Create From a{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-transparent bg-clip-text">
                Single Photo
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed px-4">
              These demos were made using random images from the internet — your real photos will look even better.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <a
              href="https://youtu.be/NRvBwINYN5Q"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-sm opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative aspect-video bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-sm border border-zinc-800 group-hover:border-amber-500/50 transition-all duration-500 overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/NRvBwINYN5Q/maxresdefault.jpg"
                  alt="Demo Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.6)]">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black fill-black ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
                    Demo Created From a Random Image
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://youtu.be/mRatBcsLzu4"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-sm opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative aspect-video bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-sm border border-zinc-800 group-hover:border-amber-500/50 transition-all duration-500 overflow-hidden">
                <img
                  src="/image.png"
                  alt="Demo Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.6)]">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black fill-black ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
                    Demo Created From a Random Image
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://youtu.be/2gTAv7ughLU"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block sm:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-sm opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative aspect-video bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-sm border border-zinc-800 group-hover:border-amber-500/50 transition-all duration-500 overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/2gTAv7ughLU/maxresdefault.jpg"
                  alt="Demo Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.6)]">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black fill-black ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
                    Demo Created From a Random Image
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="absolute right-[5%] top-[15%] w-[275px] sm:w-[550px] h-[190px] sm:h-[380px] rotate-[-20deg]" viewBox="0 0 200 150" fill="none">
            <path d="M20,85 L38,85 L38,98 L56,98 L56,72 L76,72 L94,54 L114,54 L123,62 L123,98 L134,98 L134,107 L20,107 Z" fill="white" opacity="0.35"/>
            <rect x="56" y="98" width="38" height="7" fill="white" opacity="0.25"/>
            <circle cx="32" cy="107" r="7" fill="white" opacity="0.4"/>
            <circle cx="122" cy="107" r="7" fill="white" opacity="0.4"/>
          </svg>

          <svg className="absolute left-[8%] bottom-[20%] w-[240px] sm:w-[480px] h-[170px] sm:h-[340px] rotate-[18deg]" viewBox="0 0 180 140" fill="none">
            <path d="M28,88 L46,88 L46,68 L64,68 L64,50 L82,50 L82,42 L102,42 L112,50 L122,50 L132,60 L132,98 L142,98 L142,108 L28,108 Z" fill="white" opacity="0.3"/>
            <rect x="64" y="98" width="32" height="7" fill="white" opacity="0.25"/>
            <circle cx="42" cy="108" r="6" fill="white" opacity="0.35"/>
            <circle cx="128" cy="108" r="6" fill="white" opacity="0.35"/>
          </svg>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-600/15 rounded-full blur-[90px] sm:blur-[110px]"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/15 rounded-full blur-[90px] sm:blur-[110px]"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[12%] w-[110px] sm:w-[220px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/25 to-transparent blur-[1px] rotate-[-18deg]"></div>
          <div className="absolute bottom-[28%] right-[18%] w-[100px] sm:w-[200px] h-[1px] bg-gradient-to-r from-transparent via-amber-500/25 to-transparent blur-[1px] rotate-[22deg]"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[30%] right-[22%] w-1 h-1 bg-orange-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(251,146,60,0.6)]"></div>
          <div className="absolute bottom-[45%] left-[28%] w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse delay-700 shadow-[0_0_15px_rgba(251,191,36,0.6)]"></div>
          <div className="absolute top-[55%] left-[15%] w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-300 shadow-[0_0_10px_rgba(253,186,116,0.6)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              How It <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-transparent bg-clip-text">Works</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
              A simple process that delivers Hollywood-level results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-600/10 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 mb-6 sm:mb-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-full group-hover:border-orange-500/50 transition-all duration-500">
                  <Upload className="w-8 sm:w-10 h-8 sm:h-10 text-zinc-600 group-hover:text-orange-500 transition-colors duration-500" strokeWidth={2} />
                </div>

                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>
                    <span className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Step 1</span>
                    <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>
                  </div>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full"></div>
                    <h3 className="relative text-xl sm:text-2xl md:text-3xl font-black text-white mb-4">
                      Send 3–10 Photos
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-sm mx-auto px-4">
                  Upload any photos of your machine — even simple smartphone images work.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 mb-6 sm:mb-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-full group-hover:border-amber-500/50 transition-all duration-500">
                  <Wand2 className="w-8 sm:w-10 h-8 sm:h-10 text-zinc-600 group-hover:text-amber-500 transition-colors duration-500" strokeWidth={2} />
                </div>

                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>
                    <span className="text-xs sm:text-sm font-bold text-amber-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Step 2</span>
                    <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>
                  </div>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full"></div>
                    <h3 className="relative text-xl sm:text-2xl md:text-3xl font-black text-white mb-4">
                      We Create a Cinematic Story
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-sm mx-auto px-4">
                  Using advanced AI tools, we transform your photos and logo into a film-grade cinematic ad.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-600/10 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 sm:w-24 h-20 sm:h-24 mb-6 sm:mb-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-full group-hover:border-orange-500/50 transition-all duration-500">
                  <Download className="w-8 sm:w-10 h-8 sm:h-10 text-zinc-600 group-hover:text-orange-500 transition-colors duration-500" strokeWidth={2} />
                </div>

                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>
                    <span className="text-xs sm:text-sm font-bold text-orange-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Step 3</span>
                    <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>
                  </div>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full"></div>
                    <h3 className="relative text-xl sm:text-2xl md:text-3xl font-black text-white mb-4">
                      Receive Your Video in 48 Hours
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-sm mx-auto px-4">
                  Delivered in multiple formats for social media, websites, and marketing campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="relative bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

        <div className="absolute inset-0 opacity-[0.06]">
          <svg className="absolute left-[3%] top-[25%] w-[260px] sm:w-[520px] h-[180px] sm:h-[360px] rotate-[12deg]" viewBox="0 0 190 140" fill="none">
            <path d="M25,82 L42,82 L42,96 L58,96 L58,70 L74,70 L90,54 L108,54 L116,61 L116,96 L126,96 L126,104 L25,104 Z" fill="white" opacity="0.38"/>
            <rect x="58" y="96" width="36" height="6" fill="white" opacity="0.28"/>
            <circle cx="36" cy="104" r="6.5" fill="white" opacity="0.42"/>
            <circle cx="115" cy="104" r="6.5" fill="white" opacity="0.42"/>
          </svg>

          <svg className="absolute right-[6%] top-[18%] w-[240px] sm:w-[480px] h-[165px] sm:h-[330px] rotate-[-16deg]" viewBox="0 0 175 130" fill="none">
            <path d="M22,76 L38,76 L38,88 L52,88 L52,64 L68,64 L82,50 L98,50 L105,56 L105,88 L114,88 L114,96 L22,96 Z" fill="white" opacity="0.32"/>
            <rect x="52" y="88" width="32" height="6" fill="white" opacity="0.24"/>
            <circle cx="32" cy="96" r="6" fill="white" opacity="0.38"/>
            <circle cx="104" cy="96" r="6" fill="white" opacity="0.38"/>
          </svg>

          <svg className="absolute left-[40%] bottom-[15%] w-[230px] sm:w-[460px] h-[155px] sm:h-[310px] rotate-[8deg]" viewBox="0 0 170 120" fill="none">
            <path d="M20,68 L34,68 L34,80 L46,80 L46,58 L60,58 L72,46 L86,46 L92,52 L92,80 L100,80 L100,88 L20,88 Z" fill="white" opacity="0.3"/>
            <circle cx="30" cy="88" r="5.5" fill="white" opacity="0.36"/>
            <circle cx="90" cy="88" r="5.5" fill="white" opacity="0.36"/>
          </svg>
        </div>

        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/3 left-1/5 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-amber-600/15 rounded-full blur-[100px] sm:blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/5 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-orange-500/15 rounded-full blur-[100px] sm:blur-[120px]"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[18%] right-[25%] w-[140px] sm:w-[280px] h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent blur-sm rotate-[15deg] animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute top-[45%] left-[20%] w-[125px] sm:w-[250px] h-[1.5px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent blur-sm rotate-[-20deg] animate-[pulse_5s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[30%] right-[15%] w-[110px] sm:w-[220px] h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent blur-sm rotate-[12deg] animate-[pulse_6s_ease-in-out_infinite]"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[25%] left-[20%] w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse shadow-[0_0_14px_rgba(251,191,36,0.7)]"></div>
          <div className="absolute top-[55%] right-[25%] w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-500 shadow-[0_0_12px_rgba(251,146,60,0.7)]"></div>
          <div className="absolute bottom-[35%] left-[35%] w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-1000 shadow-[0_0_13px_rgba(252,211,77,0.7)]"></div>
          <div className="absolute top-[70%] right-[40%] w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-300 shadow-[0_0_11px_rgba(253,186,116,0.7)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              Why <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-transparent bg-clip-text">TitanMotion Media</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Professional results without the cost, risk, or logistics of traditional production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

              <div className="relative bg-gradient-to-br from-zinc-950 to-black border border-zinc-800 rounded-lg p-6 sm:p-8 lg:p-10 group-hover:border-amber-500/40 group-hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-6 sm:top-8 left-6 sm:left-8">
                  <div className="absolute inset-0 bg-amber-500/30 blur-xl rounded-full"></div>
                  <div className="relative inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-lg group-hover:border-amber-500/50 transition-all duration-500">
                    <Sparkles className="w-7 sm:w-8 h-7 sm:h-8 text-amber-500" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="mt-24 sm:mt-28">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4">
                    Hollywood-Level Quality
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                    Film-grade motion, lighting, and realism — created entirely from your photos.
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-lg"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-600/10 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

              <div className="relative bg-gradient-to-br from-zinc-950 to-black border border-zinc-800 rounded-lg p-6 sm:p-8 lg:p-10 group-hover:border-orange-500/40 group-hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-6 sm:top-8 left-6 sm:left-8">
                  <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full"></div>
                  <div className="relative inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-lg group-hover:border-orange-500/50 transition-all duration-500">
                    <Camera className="w-7 sm:w-8 h-7 sm:h-8 text-orange-500" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="mt-24 sm:mt-28">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4">
                    Zero Filming Required
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                    Skip shooting days, equipment, crew, and scheduling. Just send photos.
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-lg"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

              <div className="relative bg-gradient-to-br from-zinc-950 to-black border border-zinc-800 rounded-lg p-6 sm:p-8 lg:p-10 group-hover:border-amber-500/40 group-hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-6 sm:top-8 left-6 sm:left-8">
                  <div className="absolute inset-0 bg-amber-500/30 blur-xl rounded-full"></div>
                  <div className="relative inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-lg group-hover:border-amber-500/50 transition-all duration-500">
                    <Cog className="w-7 sm:w-8 h-7 sm:h-8 text-amber-500" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="mt-24 sm:mt-28">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4">
                    Built for Heavy-Duty Brands
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                    Specialized in tractors, excavators, harvesters, loaders, and industrial machinery.
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-lg"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-600/10 rounded-lg opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

              <div className="relative bg-gradient-to-br from-zinc-950 to-black border border-zinc-800 rounded-lg p-6 sm:p-8 lg:p-10 group-hover:border-orange-500/40 group-hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-6 sm:top-8 left-6 sm:left-8">
                  <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full"></div>
                  <div className="relative inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-zinc-800 rounded-lg group-hover:border-orange-500/50 transition-all duration-500">
                    <Zap className="w-7 sm:w-8 h-7 sm:h-8 text-orange-500" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="mt-24 sm:mt-28">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4">
                    Delivered in 48 Hours
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                    Lightning-fast turnaround without sacrificing cinematic quality.
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-20 sm:py-32 md:py-40 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60"></div>

        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[240px] sm:h-[480px]" viewBox="0 0 220 160" fill="none">
            <path d="M30,95 L50,95 L50,110 L70,110 L70,82 L90,82 L108,64 L130,64 L140,72 L140,110 L152,110 L152,120 L30,120 Z" fill="white" opacity="0.4"/>
            <rect x="70" y="110" width="45" height="8" fill="white" opacity="0.32"/>
            <circle cx="44" cy="120" r="8" fill="white" opacity="0.45"/>
            <circle cx="138" cy="120" r="8" fill="white" opacity="0.45"/>
            <path d="M108,64 L115,58 L125,58 L130,62" stroke="white" strokeWidth="2" opacity="0.35" fill="none"/>
            <rect x="90" y="74" width="12" height="8" fill="white" opacity="0.28"/>
          </svg>
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-amber-600/20 rounded-full blur-[120px] sm:blur-[140px]"></div>
          <div className="absolute top-1/3 left-1/3 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-orange-500/20 rounded-full blur-[100px] sm:blur-[120px]"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[15%] w-[160px] sm:w-[320px] h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent blur-sm rotate-[25deg] animate-[pulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute top-[35%] right-[12%] w-[140px] sm:w-[280px] h-[2px] bg-gradient-to-r from-transparent via-orange-500/35 to-transparent blur-sm rotate-[-22deg] animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[25%] left-[20%] w-[150px] sm:w-[300px] h-[2px] bg-gradient-to-r from-transparent via-amber-400/35 to-transparent blur-sm rotate-[18deg] animate-[pulse_5s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[35%] right-[18%] w-[130px] sm:w-[260px] h-[2px] bg-gradient-to-r from-transparent via-orange-400/30 to-transparent blur-sm rotate-[-15deg] animate-[pulse_6s_ease-in-out_infinite]"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[20%] left-[18%] w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse shadow-[0_0_16px_rgba(251,191,36,0.8)]"></div>
          <div className="absolute top-[30%] right-[22%] w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-400 shadow-[0_0_14px_rgba(251,146,60,0.8)]"></div>
          <div className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-800 shadow-[0_0_15px_rgba(252,211,77,0.8)]"></div>
          <div className="absolute bottom-[40%] right-[28%] w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-200 shadow-[0_0_13px_rgba(253,186,116,0.8)]"></div>
          <div className="absolute top-[60%] left-[40%] w-1 h-1 bg-amber-500 rounded-full animate-pulse delay-600 shadow-[0_0_14px_rgba(245,158,11,0.8)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] px-2 sm:px-4">
              Ready to Transform Your Machines Into{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-transparent bg-clip-text">
                Cinematic Ads
              </span>?
            </h2>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto px-4">
              Send us your photos — we'll create a film-grade commercial in 48 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 w-full max-w-2xl mx-auto px-4 sm:px-0">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 bg-amber-500/40 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <button
                onClick={() => setShowDemoRequest(true)}
                className="relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black text-base sm:text-lg md:text-xl rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.7)] hover:scale-105 group">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Request a Free Demo
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="relative group w-full sm:w-auto">
              <button
                onClick={() => setShowBookCall(true)}
                className="relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 border-2 border-zinc-600 text-zinc-200 font-bold text-base sm:text-lg md:text-xl rounded-sm transition-all duration-300 hover:border-amber-500 hover:text-amber-500 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] group flex items-center justify-center">
                <span className="flex items-center justify-center gap-3">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                  Book a Call
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 text-zinc-500 text-xs sm:text-sm md:text-base px-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
              <span>No upfront payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
              <span>48-hour delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
              <span>Film-grade results</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing-faq" className="relative bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="absolute left-[8%] top-[20%] w-[250px] sm:w-[500px] h-[175px] sm:h-[350px] rotate-[15deg]" viewBox="0 0 180 140" fill="none">
            <path d="M25,82 L42,82 L42,96 L58,96 L58,70 L74,70 L90,54 L108,54 L116,61 L116,96 L126,96 L126,104 L25,104 Z" fill="white" opacity="0.35"/>
            <circle cx="36" cy="104" r="6.5" fill="white" opacity="0.4"/>
            <circle cx="115" cy="104" r="6.5" fill="white" opacity="0.4"/>
          </svg>

          <svg className="absolute right-[12%] bottom-[25%] w-[230px] sm:w-[460px] h-[160px] sm:h-[320px] rotate-[-18deg]" viewBox="0 0 170 130" fill="none">
            <path d="M22,76 L38,76 L38,88 L52,88 L52,64 L68,64 L82,50 L98,50 L105,56 L105,88 L114,88 L114,96 L22,96 Z" fill="white" opacity="0.3"/>
            <circle cx="32" cy="96" r="6" fill="white" opacity="0.35"/>
            <circle cx="104" cy="96" r="6" fill="white" opacity="0.35"/>
          </svg>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-600/15 rounded-full blur-[90px] sm:blur-[110px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/15 rounded-full blur-[90px] sm:blur-[110px]"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[25%] left-[18%] w-[120px] sm:w-[240px] h-[1px] bg-gradient-to-r from-transparent via-amber-500/25 to-transparent blur-[1px] rotate-[20deg]"></div>
          <div className="absolute bottom-[30%] right-[15%] w-[110px] sm:w-[220px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/25 to-transparent blur-[1px] rotate-[-25deg]"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[28%] left-[22%] w-1 h-1 bg-amber-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]"></div>
          <div className="absolute top-[65%] right-[28%] w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse delay-600 shadow-[0_0_15px_rgba(251,146,60,0.6)]"></div>
          <div className="absolute bottom-[38%] left-[35%] w-1 h-1 bg-amber-300 rounded-full animate-pulse delay-300 shadow-[0_0_10px_rgba(252,211,77,0.6)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-transparent bg-clip-text">
                Pricing FAQ
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed px-4">
              We customize every project for your business. Here are answers to the most common questions.
            </p>
          </div>

          <div className="space-y-4 mb-16 sm:mb-20">
            {[
              {
                question: "How much does a cinematic ad cost?",
                answer: "Pricing depends on the complexity of the project. Most clients invest between $500 and $5,000 depending on the video length, branding requirements, realism level, and number of images provided. Every project is custom-made."
              },
              {
                question: "Do you offer more affordable options?",
                answer: "Yes. We also create budget-friendly deliveries such as short 5–10 second cinematic clips, logo-only animations, and AI-enhanced social media reels for businesses that need quick promotional content."
              },
              {
                question: "What's included in the price?",
                answer: "Every project includes cinematic editing, motion design, color grading, licensed music, AI-powered storytelling, and delivery in multiple formats (Reels, TikTok, YouTube, website headers). No hidden fees."
              },
              {
                question: "Do you require payment upfront?",
                answer: "No payment is required for the demo. Full payment is made only after we agree on the project scope and deliverables."
              },
              {
                question: "Do you offer revisions?",
                answer: "Yes. Every project includes two free revisions. Additional revisions are available for a small added cost depending on complexity."
              },
              {
                question: "Do you offer discounts for multiple videos?",
                answer: "Yes—monthly packages for dealerships, rental companies, and construction firms receive discounted rates based on volume."
              },
              {
                question: "Can you make a cinematic video from just one photo?",
                answer: "Yes. Titan Motion Media specializes in transforming a single image into a cinematic AI-powered ad. More photos allow for more movement, but one is enough for a full video."
              },
              {
                question: "How long does the project take?",
                answer: "Demo previews are delivered in 24–48 hours. Full cinematic ads usually take 3–5 days depending on complexity. Rush delivery is available."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                <div className="relative bg-gradient-to-br from-zinc-950 to-black border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-amber-500/30">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 transition-colors duration-300"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-0">
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-5"></div>
                      <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-lg blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-zinc-950 to-black border border-zinc-800 rounded-lg p-8 sm:p-12 lg:p-16 text-center">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Want Exact Pricing for{' '}
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-transparent bg-clip-text">
                    Your Project
                  </span>?
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="relative group w-full sm:w-auto">
                  <div className="absolute inset-0 bg-amber-500/30 blur-2xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button
                    onClick={() => setShowBookCall(true)}
                    className="relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-black text-base sm:text-lg rounded-sm inline-flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] hover:scale-105"
                  >
                    <Phone className="w-5 h-5" strokeWidth={3} />
                    Book a Call
                  </button>
                </div>

                <button
                  onClick={() => setShowDemoRequest(true)}
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-zinc-700 text-zinc-200 font-bold text-base sm:text-lg rounded-sm transition-all duration-300 hover:border-amber-500 hover:text-amber-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] flex items-center justify-center gap-3"
                >
                  Request a Free Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-black border-t border-zinc-800/50 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200px] sm:h-[300px] opacity-15">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[150px] sm:h-[200px] bg-amber-600/40 rounded-full blur-[100px] sm:blur-[120px]"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[150px] sm:h-[200px] bg-orange-500/40 rounded-full blur-[100px] sm:blur-[120px]"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[100px] sm:h-[150px] bg-amber-500/30 rounded-full blur-[80px] sm:blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="md:col-span-2">
              <a href="#" className="inline-block mb-6 transition-opacity hover:opacity-80">
                <img
                  src="/ChatGPT Image Nov 27, 2025, 08_31_34 AM.png"
                  alt="TitanMotion Media Logo"
                  className="h-12 sm:h-14 w-auto"
                />
              </a>
              <p className="text-zinc-400 leading-relaxed max-w-md text-sm sm:text-base">
                Transforming heavy-duty machinery into Hollywood-level cinematic commercials using advanced AI technology. No filming, no crew, no hassle.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="#how-it-works" className="text-zinc-400 hover:text-amber-500 transition-colors">How It Works</a></li>
                <li><a href="#why-us" className="text-zinc-400 hover:text-amber-500 transition-colors">Why Us</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Examples</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="mailto:titanmotionmediainfo@gmail.com" className="text-zinc-400 hover:text-amber-500 transition-colors break-all">titanmotionmediainfo@gmail.com</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Get a Quote</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Request Demo</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-zinc-800/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
              <p className="text-zinc-500 text-center sm:text-left">
                © 2025 TitanMotion Media. All rights reserved.
              </p>
              <div className="flex items-center gap-4 sm:gap-6">
                <button onClick={() => setShowPrivacyPolicy(true)} className="text-zinc-500 hover:text-amber-500 transition-colors">Privacy Policy</button>
                <button onClick={() => setShowTermsOfService(true)} className="text-zinc-500 hover:text-amber-500 transition-colors">Terms of Service</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
