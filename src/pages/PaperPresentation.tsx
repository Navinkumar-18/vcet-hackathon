import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { PAPER_PRESENTATION_TOPICS, PaperTopic } from '../data/eventQuestions';
import { Sparkles, ExternalLink } from 'lucide-react';

export const PaperPresentation: React.FC = () => {
  const PAPER_FORM_URL = 'https://forms.gle/p1Ws2rRoqbyH2yf77';

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#712ae2]">Research & Academic Track</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-1 mb-3 sm:mb-4">
            Paper Presentation
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            Explore original technical research paper presentation topics across 12 emerging technology tracks for peer review by distinguished IEEE academic chairs.
          </p>
        </div>

        {/* TOPICS VIEW */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAPER_PRESENTATION_TOPICS.map((topic: PaperTopic) => (
              <GlassCard
                key={topic.id}
                className="p-5 sm:p-6 border border-white/80 flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-xl bg-[#712ae2]/10 text-[#712ae2] flex items-center justify-center font-black text-sm shrink-0">
                      #{topic.number}
                    </span>
                    <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${topic.badgeColor}`}>
                      {topic.category}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                    {topic.title}
                  </h3>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Bottom Registration CTA Section */}
        <section className="bg-gradient-to-r from-[#712ae2] via-[#4d2db7] to-[#004ac6] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-white shadow-2xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 relative z-10">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-white/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              Official Paper Registration
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Ready to Submit Your Research?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-medium">
              Click the button below to fill out the official Google Form for IEEE Paper Presentation registration.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href={PAPER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#712ae2] font-black rounded-full hover:bg-gray-100 transition-all shadow-xl text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105"
              >
                Register Now
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
