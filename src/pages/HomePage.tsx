import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { CountdownTimer } from '../components/ui/CountdownTimer';
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
      tag: '6 Problem Statements',
      description: 'Solve real-world challenges in Hallucination Detection, Deepfakes, Academic Integrity, Phishing, Cloud Vaults, or Smart Expense Tracking.',
      icon: Code2,
      path: '/hackathon',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Paper Presentation',
      tag: '6 IEEE Topics',
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
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#004ac6]/20 to-[#712ae2]/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-card border border-[#004ac6]/20 mb-6 sm:mb-8 ambient-glow max-w-full">
            <Sparkles className="w-4 h-4 text-[#712ae2] animate-spin shrink-0" />
            <span className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-800 truncate">
              Intra Department Hackathon & Paper Presentation&nbsp;'26
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Empowering the Next Generation of <span className="vibrant-flow-text">Tech Innovators</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
            Join over 500+ developers & researchers for 6 hours of intense coding and research paper presentations across 12 official topics.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <CountdownTimer />
          </div>

          {/* Single Register CTA */}
          <div className="flex justify-center">
            <Link
              to="/hackathon"
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white vibrant-flow rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              Register for Event
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Symposium Tracks */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Featured Event Tracks
          </h2>
          <p className="text-base text-gray-600">
            Choose your arena: compete in our 6-hour hackathon or present original research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredEvents.map((evt, idx) => {
            const Icon = evt.icon;
            return (
              <GlassCard key={idx} className="flex flex-col justify-between p-8 border border-white/80">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${evt.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#712ae2]/10 text-[#712ae2]">
                      {evt.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{evt.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {evt.description}
                  </p>
                </div>

                <Link
                  to={evt.path}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#004ac6] hover:text-[#712ae2] transition-colors group"
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
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="vibrant-flow rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Ready to Showcase Your Innovations?
            </h2>
            <p className="text-lg text-white/90 font-medium max-w-xl mx-auto">
              Registration closes soon! Secure your slot for the hackathon and paper presentation.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/hackathon"
                className="px-8 py-4 bg-white text-[#004ac6] font-extrabold rounded-full hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Register Now — Free Entry
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
