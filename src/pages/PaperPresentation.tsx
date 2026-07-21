import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { PAPER_PRESENTATION_TOPICS, PaperTopic } from '../data/eventQuestions';
import {
  Sparkles,
  ExternalLink,
  Users,
  Layers,
  ShieldAlert,
  BookOpen,
  Search,
  Award,
  CheckCircle2,
  ArrowRight,
  Bot,
  ShieldCheck,
  Cloud,
  Cpu,
  Wifi,
  Brain,
  Radio,
  Eye,
  Lock,
  Network,
  Leaf,
  FileText,
  Filter,
} from 'lucide-react';

// Map icons to topics
const getTopicIcon = (topicId: string) => {
  switch (topicId) {
    case 'ai-agents':
      return Bot;
    case 'zero-trust-security':
      return ShieldCheck;
    case 'serverless-computing':
      return Cloud;
    case 'quantum-computing':
      return Cpu;
    case 'rag-knowledge':
      return Sparkles;
    case 'edge-ai-iot':
      return Wifi;
    case 'brain-computer-interfaces':
      return Brain;
    case '6g-networks':
      return Radio;
    case 'explainable-ai':
      return Eye;
    case 'post-quantum-cryptography':
      return Lock;
    case 'federated-learning':
      return Network;
    case 'green-computing':
      return Leaf;
    default:
      return FileText;
  }
};

export const PaperPresentation: React.FC = () => {
  const PAPER_FORM_URL = 'https://forms.gle/p1Ws2rRoqbyH2yf77';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories list
  const categories = useMemo(() => {
    const cats = Array.from(new Set(PAPER_PRESENTATION_TOPICS.map((t) => t.category)));
    return ['All', ...cats];
  }, []);

  // Filter topics
  const filteredTopics = useMemo(() => {
    return PAPER_PRESENTATION_TOPICS.filter((topic) => {
      const matchesCategory =
        selectedCategory === 'All' || topic.category === selectedCategory;
      const matchesSearch =
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex flex-col relative">
      <Navbar />

      {/* GPU Accelerated ambient light matching HomePage */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#004ac6]/15 to-[#712ae2]/15 blur-[120px] rounded-full -z-10 pointer-events-none transform-gpu" />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-12 sm:space-y-16">
        
        {/* HERO BANNER SECTION - 2 Column Desktop Split */}
        <section className="vibrant-flow rounded-3xl p-6 sm:p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Geometric decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-purple-100 shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
                <span>IEEE Symposium '26 • Research Track</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                IEEE Paper <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-200">
                  Presentation '26
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/95 font-medium leading-relaxed max-w-2xl">
                Present original research across 12 emerging technology tracks for peer review by distinguished IEEE academic chairs and industry researchers.
              </p>

              {/* Quick specs pills */}
              <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <Users className="w-4 h-4 text-purple-200" />
                  <span>Team: 2 Members</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <Layers className="w-4 h-4 text-blue-200" />
                  <span>10 - 12 Slides</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <ShieldAlert className="w-4 h-4 text-pink-200" />
                  <span>Strictly 0% AI Tools</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <BookOpen className="w-4 h-4 text-emerald-200" />
                  <span>12 Research Tracks</span>
                </div>
              </div>

              {/* Hero CTA buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={PAPER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-[#712ae2] font-black rounded-full hover:bg-gray-100 transition-all shadow-xl text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105 group"
                >
                  Register Paper Now
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#topics-section"
                  className="px-6 py-4 bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white font-bold rounded-full transition-all text-sm flex items-center justify-center gap-2"
                >
                  Browse 12 Tracks
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Desktop Control / Summary Glass Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6 transform-gpu">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <h3 className="font-extrabold text-lg sm:text-xl flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-300" />
                    Presentation Guidelines
                  </h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 px-2.5 py-1 rounded-full">
                    Official IEEE Format
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Originality & Peer Review</span>
                      <span className="text-white/80">Submitted papers must be original research. No AI-generated manuscripts allowed.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Presentation Format</span>
                      <span className="text-white/80">5 minutes presentation + 2 minutes Q&A by judging panel.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Certification & Recognition</span>
                      <span className="text-white/80">Certificates awarded to all presenters.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-white/90 font-medium">
                  <span>Entry Fee: Free</span>
                  <span className="font-bold text-amber-300">Registration Closes Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GUIDELINES & HIGHLIGHTS GRID (4-Column Desktop) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <GlassCard className="p-6 border border-white/80 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base">Team Structure</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Teams of 2 members or solo authors. Both co-authors receive official IEEE participation certificates.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 border border-white/80 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base">10-12 Slide Deck</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Structured slides containing Abstract, Problem, Proposed Methodology, Results, and Future Directions.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 border border-white/80 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base">Academic Integrity</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Strict adherence to research ethics. Automated plagiarism checks are conducted on submitted decks.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 border border-white/80 hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base">IEEE Recognition</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cash prizes for top presenters, expert feedback from chairs, and potential research publishing support.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* TOPICS SECTION */}
        <section id="topics-section" className="space-y-8 scroll-mt-20">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#712ae2] mb-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Research Tracks</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                Official Paper Presentation Topics
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
                Explore the 12 official IEEE technology domains. Select a research topic to view its focus areas and register your submission.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative min-w-[280px] sm:min-w-[320px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#712ae2] focus:border-transparent transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills (Desktop Horizontal Scroll/Wrap) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  selectedCategory === cat
                    ? 'bg-[#712ae2] text-white shadow-md shadow-purple-500/20'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Result Count */}
          <div className="flex items-center justify-between text-xs font-semibold text-gray-500 px-1">
            <span>
              Showing <span className="text-gray-900 font-bold">{filteredTopics.length}</span> of {PAPER_PRESENTATION_TOPICS.length} IEEE Tracks
            </span>
            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-[#712ae2] hover:underline font-bold"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* TOPICS GRID - Desktop 3-Column Enhanced Glass Cards */}
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic: PaperTopic) => {
                const IconComponent = getTopicIcon(topic.id);
                return (
                  <GlassCard
                    key={topic.id}
                    className="p-6 border border-white/80 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-transform duration-200 group bg-white/95 relative overflow-hidden transform-gpu"
                  >
                    {/* Top gradient accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#712ae2] to-[#004ac6] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="space-y-4">
                      {/* Top Bar: Icon, Number Badge, Category */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#712ae2]/10 text-[#712ae2] flex items-center justify-center font-black group-hover:bg-[#712ae2] group-hover:text-white transition-all shrink-0 shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 font-mono border border-gray-200">
                            #{topic.number.toString().padStart(2, '0')}
                          </span>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${topic.badgeColor}`}>
                            {topic.category}
                          </span>
                        </div>
                      </div>

                      {/* Topic Title */}
                      <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-snug group-hover:text-[#712ae2] transition-colors">
                        {topic.title}
                      </h3>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/60 rounded-3xl border border-dashed border-gray-300">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3 animate-bounce" />
              <h3 className="text-lg font-bold text-gray-800">No matching research topics found</h3>
              <p className="text-xs text-gray-500 mt-1">Try adjusting your search terms or category filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-[#712ae2] text-white text-xs font-bold rounded-xl shadow-md"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </section>

        {/* BOTTOM REGISTRATION CTA SECTION */}
        <section className="bg-gradient-to-r from-[#712ae2] via-[#4d2db7] to-[#004ac6] rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-6 text-center relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              Official IEEE Paper Registration
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to Present Your Innovation?
            </h2>

            <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium max-w-xl mx-auto">
              Submit your paper details and register your team via the official IEEE Google Registration Form.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={PAPER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 bg-white text-[#712ae2] font-black rounded-full hover:bg-gray-100 transition-all shadow-xl text-base flex items-center justify-center gap-2.5 hover:scale-105 group"
              >
                Register For Presentation
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
