import { ArrowLeft, Upload, CheckCircle, Phone, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { uploadDemoPhotos, submitDemoRequest } from '../lib/supabase';

interface DemoRequestProps {
  onBack: () => void;
}

export default function DemoRequest({ onBack }: DemoRequestProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    notes: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 3);
      setFiles(selectedFiles);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const photoUrls = await uploadDemoPhotos(files);

      await submitDemoRequest({
        name: formData.name,
        company: formData.company || undefined,
        email: formData.email,
        notes: formData.notes || undefined,
        photo_urls: photoUrls,
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', company: '', email: '', notes: '' });
        setFiles([]);
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'Failed to submit demo request. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" onClick={onBack} className="flex items-center transition-opacity hover:opacity-80">
            <img
              src="/ChatGPT Image Nov 27, 2025, 08_31_34 AM.png"
              alt="TitanMotion Media Logo"
              className="h-16 w-auto"
            />
          </a>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-300 hover:text-amber-500 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </nav>

      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
              Request Your Free Cinematic Demo
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
              Upload your machine photos and receive the first 10 seconds of your AI-powered cinematic video within 24–48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
              <a
                href="#demo-form"
                className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-lg rounded-sm overflow-hidden hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] transition-all"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Upload className="w-5 h-5" />
                  Upload Photos & Get Started
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <button
                onClick={onBack}
                className="group flex items-center gap-3 px-10 py-5 border-2 border-zinc-600 text-zinc-200 font-bold text-lg rounded-sm transition-all duration-300 hover:border-amber-500 hover:text-amber-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
              >
                <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Back to Home
              </button>
            </div>
          </div>
        </section>

        <section id="demo-form" className="max-w-3xl mx-auto px-6 mb-24">
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-lg p-8 md:p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Submit Your Details</h2>

            {submitSuccess ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-amber-500 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Request Submitted!</h3>
                <p className="text-zinc-300">Your demo preview will be delivered to your email within 24-48 hours.</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-200 text-sm">{error}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-zinc-300 font-medium mb-2">
                    Your Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 rounded-sm text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-zinc-300 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 rounded-sm text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="Your Company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-zinc-300 font-medium mb-2">
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 rounded-sm text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-zinc-300 font-medium mb-2">
                    Project Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-zinc-700 rounded-sm text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                    placeholder="Any specific details or requirements..."
                  />
                </div>

                <div>
                  <label htmlFor="photos" className="block text-zinc-300 font-medium mb-2">
                    Photo Upload (1-3 images) <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="photos"
                      accept="image/*"
                      multiple
                      required={files.length === 0}
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-black/50 border border-zinc-700 rounded-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-amber-500 file:text-black file:font-semibold hover:file:bg-amber-600 focus:border-amber-500 focus:outline-none transition-all"
                    />
                  </div>
                  {files.length > 0 && (
                    <p className="mt-2 text-sm text-zinc-400">
                      {files.length} file{files.length > 1 ? 's' : ''} selected
                    </p>
                  )}
                </div>

                <p className="text-sm text-zinc-400 text-center pt-4">
                  Your demo preview (first 10 seconds) will be delivered to your email.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-lg rounded-sm overflow-hidden hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? 'Submitting...' : 'Generate My Free Demo'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
              </>
            )}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-24">
          <h2 className="text-4xl font-bold text-center text-white mb-12">What You'll Receive</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-zinc-300 leading-relaxed">
                A 10-second cinematic preview created from your uploaded photos
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Film-grade motion, lighting, and transitions
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Delivered to your inbox within 24–48 hours
              </p>
            </div>
          </div>
          <p className="text-center text-zinc-400 mt-12 text-lg">
            No cost. No commitments. See the quality before making any decisions.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-xl border border-zinc-800/50 rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to discuss full production, pricing, or turnaround times?
            </h2>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-lg rounded-sm overflow-hidden hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] transition-all">
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Book a Call
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </section>

        <footer className="border-t border-zinc-800/50 bg-black/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center">
                <img
                  src="/ChatGPT Image Nov 27, 2025, 08_31_34 AM.png"
                  alt="TitanMotion Media Logo"
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex items-center gap-8">
                <button onClick={onBack} className="text-zinc-400 hover:text-amber-500 transition-colors">Home</button>
                <a href="#how-it-works" className="text-zinc-400 hover:text-amber-500 transition-colors">How It Works</a>
                <a href="#why-us" className="text-zinc-400 hover:text-amber-500 transition-colors">Why Us</a>
                <a href="#contact" className="text-zinc-400 hover:text-amber-500 transition-colors">Contact</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-zinc-800/50 text-center text-zinc-500 text-sm">
              © 2025 Titan Motion Media. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
