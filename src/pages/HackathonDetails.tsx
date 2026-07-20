import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { HACKATHON_PROBLEMS, HackathonProblem } from '../data/eventQuestions';
import {
  Code2,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
  Target,
  Sparkles,
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

export const HackathonDetails: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(HACKATHON_PROBLEMS.map((p) => p.category)))];

  const filteredProblems = HACKATHON_PROBLEMS.filter((problem) => {
    const matchesCategory = selectedCategory === 'All' || problem.category === selectedCategory;
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.challenge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const HACKATHON_FORM_URL = 'https://forms.gle/nX6WSxo9KhGrD5sB9';

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 w-full">
        {/* Banner Hero */}
        <div className="vibrant-flow rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-white mb-10 sm:mb-16 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Department Hackathon&nbsp;'26
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed">
              Transform ideas into production-ready software. Choose from our 6 official problem statements spanning AI, Cybersecurity, EdTech, Cloud, and FinTech.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm font-bold">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200" />
                <span>6 Hour Hackathon</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" />
                <span>Team Size: 3 Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200" />
                <span>6 Official Problem Statements</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statements Section */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#712ae2]">Official Challenges</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mt-1 mb-3">
              Hackathon Problem Statements
            </h2>
            <p className="text-sm text-gray-600">
              Select one of the official challenges below to solve during the 6-hour hackathon.
            </p>
          </div>

          {/* Controls: Search & Category Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#004ac6] text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search problem statements..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#004ac6] focus:outline-none shadow-xs"
              />
            </div>
          </div>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProblems.map((prob: HackathonProblem) => {
              const isExpanded = expandedId === prob.id;
              return (
                <GlassCard
                  key={prob.id}
                  className="p-6 md:p-8 border border-white/80 flex flex-col justify-between hover:shadow-xl transition-all relative overflow-hidden"
                >
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="w-8 h-8 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center font-black text-sm">
                        #{prob.number}
                      </span>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${prob.badgeColor}`}>
                        {prob.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{prob.title}</h3>

                    {/* Problem Statement Box */}
                    <div className="bg-gray-50/90 rounded-2xl p-4 border border-gray-100 mb-4 space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
                        Problem Statement
                      </span>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        {prob.problemStatement}
                      </p>
                    </div>

                    {/* Challenge Box */}
                    <div className="bg-purple-50/60 rounded-2xl p-4 border border-purple-100/80 mb-4 space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#712ae2] block flex items-center gap-1">
                        <Target className="w-3 h-3 text-[#712ae2]" />
                        The Challenge
                      </span>
                      <p className="text-xs text-gray-800 font-medium leading-relaxed">
                        {prob.challenge}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          {filteredProblems.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-gray-200">
              <p className="text-sm text-gray-500">No problem statements match your search criteria.</p>
            </div>
          )}
        </section>

        {/* Bottom Registration CTA Section */}
        <section className="bg-gradient-to-r from-[#004ac6] via-[#4d2db7] to-[#712ae2] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-white shadow-2xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 relative z-10">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-white/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              Official Registration
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Ready to Register Your Team?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-medium">
              Click the button below to fill out the official Google Form for Department Hackathon '26 registration.
            </p>
            <div className="pt-2 flex justify-center">
              <a
                href={HACKATHON_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#004ac6] font-black rounded-full hover:bg-gray-100 transition-all shadow-xl text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105"
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
