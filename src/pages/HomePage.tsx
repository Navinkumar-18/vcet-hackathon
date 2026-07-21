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
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#004ac6]/15 to-[#712ae2]/15 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-4">
            Department Technical Symposium <span className="vibrant-flow-text">'26</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto mb-8 font-medium">
            Intra Department 6-Hour Hackathon & IEEE Paper Presentation
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-8">
            <CountdownTimer />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold text-white vibrant-flow rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/papers"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Browse IEEE Topics</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
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
            Choose your arena: compete in our 6-hour hackathon and present original research.
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
