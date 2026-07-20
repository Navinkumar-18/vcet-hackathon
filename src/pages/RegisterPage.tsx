import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { HACKATHON_PROBLEMS, PAPER_PRESENTATION_TOPICS } from '../data/eventQuestions';
import {
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  Target,
  BookOpen,
  Sparkles,
  Edit3,
  Copy,
  Check,
  Code2,
  FileText
} from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedProblemId = queryParams.get('problem');

  // Default Google Form link
  const [googleFormUrl, setGoogleFormUrl] = useState<string>(
    'https://forms.gle/nX6WSxo9KhGrD5sB9'
  );
  const [showUrlEditor, setShowUrlEditor] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'form' | 'problems' | 'topics'>('form');

  const selectedProblem = HACKATHON_PROBLEMS.find((p) => p.id === selectedProblemId);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(googleFormUrl.replace('?embedded=true', ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 w-full">
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-[#712ae2]/10 text-[#712ae2] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            Official Google Form Registration
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Register for CS-SYMPOSIUM '26
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 sm:mt-3 leading-relaxed">
            Complete your registration for the Intra Department Hackathon, IEEE Paper Presentations, and Technical Masterclasses using the official Google Form below.
          </p>
        </div>

        {/* Selected Problem Highlight Alert */}
        {selectedProblem && (
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8 bg-blue-50/90 border border-blue-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004ac6] text-white flex items-center justify-center shrink-0 font-extrabold text-sm">
                #{selectedProblem.number}
              </div>
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                  Selected Hackathon Challenge
                </p>
                <h3 className="text-sm font-bold text-gray-900">{selectedProblem.title} ({selectedProblem.category})</h3>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-white text-[#004ac6] rounded-full border border-blue-200 self-start sm:self-auto">
              Selected in Form
            </span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 max-w-full overflow-x-auto">
          <div className="bg-gray-200/80 p-1.5 rounded-2xl flex flex-wrap sm:flex-nowrap justify-center gap-1.5 sm:gap-2 max-w-full">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${
                activeTab === 'form'
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#004ac6] shrink-0" />
              <span>Google Registration Form</span>
            </button>
            <button
              onClick={() => setActiveTab('problems')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${
                activeTab === 'problems'
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
              <span>Hackathon Statements ({HACKATHON_PROBLEMS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('topics')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${
                activeTab === 'topics'
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 shrink-0" />
              <span>Paper Topics ({PAPER_PRESENTATION_TOPICS.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: GOOGLE FORM VIEW */}
        {activeTab === 'form' && (
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Top Toolbar / Direct Links */}
            <GlassCard className="p-5 border border-white/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  GF
                </div>
                <div>
                  <h2 className="text-sm font-bold text-gray-900">Official Google Registration Form</h2>
                  <p className="text-xs text-gray-500">Fill out directly below or open in a separate window</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Link Copied!' : 'Copy Form Link'}
                </button>

                <a
                  href={googleFormUrl.replace('?embedded=true', '')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-[#004ac6] text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-all shadow-md flex items-center gap-1.5"
                >
                  Open in New Tab
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setShowUrlEditor(!showUrlEditor)}
                  className="p-2 text-gray-400 hover:text-gray-700 rounded-xl hover:bg-gray-100"
                  title="Configure Google Form Link"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>
            </GlassCard>

            {/* Optional URL Customizer (for admin/organizers) */}
            {showUrlEditor && (
              <GlassCard className="p-4 border border-amber-200 bg-amber-50/60 text-xs space-y-2">
                <label className="block font-bold text-amber-900">
                  Organizers: Paste your Google Form Share Link or Embed URL below:
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={googleFormUrl}
                    onChange={(e) => setGoogleFormUrl(e.target.value)}
                    placeholder="https://docs.google.com/forms/d/e/.../viewform"
                    className="flex-1 px-3 py-2 bg-white border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004ac6]"
                  />
                  <button
                    onClick={() => setShowUrlEditor(false)}
                    className="px-4 py-2 bg-amber-900 text-white font-bold rounded-xl"
                  >
                    Save URL
                  </button>
                </div>
              </GlassCard>
            )}

            {/* Google Form Frame Container */}
            <GlassCard className="p-2 border border-white/80 shadow-2xl ambient-glow overflow-hidden rounded-3xl">
              <div className="relative w-full bg-white rounded-2xl overflow-hidden min-h-[750px]">
                <iframe
                  src={googleFormUrl}
                  className="w-full h-[800px] border-0 rounded-2xl"
                  title="CS-Symposium 26 Registration Google Form"
                >
                  <div className="p-12 text-center space-y-4">
                    <p className="text-gray-600 font-medium">Loading Google Form...</p>
                    <a
                      href={googleFormUrl.replace('?embedded=true', '')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#004ac6] text-white font-bold rounded-xl"
                    >
                      Click here to open form in Google Forms
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </iframe>
              </div>
            </GlassCard>

            {/* Registration FAQ Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <GlassCard className="p-6 border border-white/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#004ac6] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-gray-900">1. Instant Confirmation</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Upon submitting the Google Form, a copy of your response & registration confirmation code will be emailed immediately.
                </p>
              </GlassCard>

              <GlassCard className="p-6 border border-white/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#712ae2] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-gray-900">2. Track Selection</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  You can register for either the 6hr Hackathon, IEEE Paper Presentation, or both through a single Google Form response.
                </p>
              </GlassCard>

              <GlassCard className="p-6 border border-white/80 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-gray-900">3. Support & Queries</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Need to update team details or facing issues with the form? Reach out to our organizing committee at the event desk.
                </p>
              </GlassCard>
            </div>
          </div>
        )}

        {/* TAB 2: HACKATHON PROBLEM STATEMENTS PREVIEW */}
        {activeTab === 'problems' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-gray-900">Official Hackathon Problem Statements</h2>
              <p className="text-xs text-gray-500 mt-1">Review these statements before filling out the Google Form</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HACKATHON_PROBLEMS.map((p) => (
                <GlassCard key={p.id} className="p-6 border border-white/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center font-black text-sm">
                      #{p.number}
                    </span>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${p.badgeColor}`}>
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{p.title}</h3>
                  <div className="p-3 bg-gray-50 rounded-xl text-xs text-gray-700">
                    <strong>Statement:</strong> {p.problemStatement}
                  </div>
                  <div className="p-3 bg-purple-50/70 rounded-xl text-xs text-purple-900">
                    <strong>Challenge:</strong> {p.challenge}
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setActiveTab('form')}
                className="px-7 py-3 bg-[#004ac6] text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all text-xs"
              >
                ← Back to Google Registration Form
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: PAPER PRESENTATION TOPICS PREVIEW */}
        {activeTab === 'topics' && (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-gray-900">IEEE Paper Presentation Topics</h2>
              <p className="text-xs text-gray-500 mt-1">Select your preferred research topic in the Google Form</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PAPER_PRESENTATION_TOPICS.map((t) => (
                <GlassCard key={t.id} className="p-6 border border-white/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-[#712ae2]/10 text-[#712ae2] flex items-center justify-center font-black text-sm">
                      #{t.number}
                    </span>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${t.badgeColor}`}>
                      {t.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{t.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{t.description}</p>
                </GlassCard>
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setActiveTab('form')}
                className="px-7 py-3 bg-[#712ae2] text-white font-bold rounded-xl shadow-lg hover:bg-purple-700 transition-all text-xs"
              >
                ← Back to Google Registration Form
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
