import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { CountdownTimer } from '../components/ui/CountdownTimer';
import { PAPER_PRESENTATION_TOPICS, HACKATHON_PROBLEMS } from '../data/eventQuestions';
import {
  Sparkles,
  Code2,
  FileCheck,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export const HomePage: React.FC = () => {

  const featuredEvents = [
    {
      title: 'Department 6hr Hackathon',
      tag: `${HACKATHON_PROBLEMS.length} Problem Statements`,
      description: 'Solve real-world challenges in Hallucination Detection, Deepfakes, Academic Integrity, Phishing, Cloud Vaults, or Smart Expense Tracking.',
      icon: Code2,
      path: '/hackathon',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Paper Presentation',
      tag: `${PAPER_PRESENTATION_TOPICS.length} IEEE Topics`,
      description: 'Present original research on AI Agents, Zero Trust Security, Serverless, Quantum Computing, RAG, and Edge AI & IoT.',
      icon: FileCheck,
      path: '/papers',
      color: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-50/50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-blue-50 border border-blue-200 text-[#1e3a8a] text-xs font-bold mb-6">
            <span>Intra Department Event • Velalar College of Engineering & Technology</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-4">
            Department Technical Symposium <span className="text-[#1e3a8a]">2026</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Join us for the 6-Hour Intra Department Hackathon & IEEE Paper Presentation
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-8">
            <CountdownTimer />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/papers"
              className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Browse IEEE Topics</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Symposium Tracks */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Featured Event Tracks
          </h2>
          <p className="text-sm text-slate-600">
            Choose your track: compete in our 6-hour hackathon or present original research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredEvents.map((evt, idx) => {
            const Icon = evt.icon;
            return (
              <GlassCard key={idx} className="flex flex-col justify-between p-8 border border-slate-200 bg-white rounded-xl shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-md bg-blue-50 text-[#1e3a8a] border border-blue-100">
                      {evt.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{evt.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {evt.description}
                  </p>
                </div>

                <Link
                  to={evt.path}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1e3a8a] hover:text-blue-700 transition-colors group"
                >
                  Explore Details
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#0f172a] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-md">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Ready to Showcase Your Innovations?
            </h2>
            <p className="text-sm md:text-base text-slate-300 font-normal max-w-xl mx-auto">
              Secure your slot for the hackathon and paper presentation.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/hackathon"
                className="px-8 py-3.5 bg-[#2563eb] hover:bg-blue-600 text-white font-bold rounded-md transition-all shadow-xs flex items-center justify-center gap-2 text-sm"
              >
                <span>Register Now — Free Entry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
