import React, { useState } from 'react';
import { WEB3_JOB_LISTINGS } from '../data/mockData';
import { Web3JobListing } from '../types';
import {
  Briefcase,
  Globe,
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  Search,
  Filter,
  CheckCircle2,
  DollarSign,
  MapPin,
  Clock,
  Sparkles,
  Users,
  Send,
  PlusCircle,
  FileText,
  X,
  RefreshCw,
  GitBranch,
  ShieldCheck,
  Check
} from 'lucide-react';

interface Web3JobsModuleProps {
  lang: 'ar' | 'en';
}

export const Web3JobsModule: React.FC<Web3JobsModuleProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [subTab, setSubTab] = useState<'live_site' | 'jobs_board' | 'post_job' | 'passport'>('live_site');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Job list state
  const [jobListings, setJobListings] = useState<Web3JobListing[]>(WEB3_JOB_LISTINGS);
  const [selectedJob, setSelectedJob] = useState<Web3JobListing | null>(null);
  const [applySubmitted, setApplySubmitted] = useState<boolean>(false);
  
  // Application form state
  const [applicantGithub, setApplicantGithub] = useState<string>('https://github.com/aminzaki1972');
  const [applicantNote, setApplicantNote] = useState<string>('');

  // Live site embedded controls
  const [liveUrl, setLiveUrl] = useState<string>('https://web3jbos.xyz');
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState<number>(1);
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);

  // Post Job form state
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newSalary, setNewSalary] = useState('');
  const [newSkills, setNewSkills] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [postSuccess, setPostSuccess] = useState(false);

  // Passport state
  const [passportScore, setPassportScore] = useState<number>(88);

  const jobTypes = [
    { id: 'all', label: isAr ? 'جميع الوظائف' : 'All Roles' },
    { id: 'Full-time', label: isAr ? 'دوام كامل' : 'Full-time' },
    { id: 'Remote', label: isAr ? 'عن بُعد' : 'Remote' },
    { id: 'Contract', label: isAr ? 'عقود برمجية' : 'Contract' },
    { id: 'Bounty', label: isAr ? 'مكافآت ثغرات (Bounties)' : 'Bounties' },
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesType = selectedType === 'all' || job.jobType === selectedType || (selectedType === 'Remote' && job.location.includes('Remote'));
    const matchesSearch = !searchQuery.trim() ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplySubmitted(true);
    setTimeout(() => {
      setApplySubmitted(false);
      setSelectedJob(null);
      alert(isAr ? 'تم إرسال طلب التقديم مشفوعاً بمحفظة WEB3ONE وملف GitHub بنجاح!' : 'Application sent with wallet verification!');
    }, 1500);
  };

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    const newJobItem: Web3JobListing = {
      id: `job-${Date.now()}`,
      title: newTitle,
      company: newCompany,
      logoBg: 'bg-indigo-600',
      salaryRangeUSD: newSalary,
      location: 'Remote (Global)',
      jobType: 'Full-time',
      skills: newSkills.split(',').map(s => s.trim()),
      postedAt: isAr ? 'الآن' : 'Just now',
      description: newDesc,
      cryptoPaymentToken: 'USDT / USDC',
      applicantsCount: 1
    };
    setJobListings([newJobItem, ...jobListings]);
    setPostSuccess(true);
    setTimeout(() => {
      setPostSuccess(false);
      setSubTab('jobs_board');
      setNewTitle('');
      setNewCompany('');
      setNewSalary('');
      setNewSkills('');
      setNewDesc('');
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner: web3jbos.xyz Integration */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-950/40 to-slate-900 border border-purple-500/30 rounded-2xl p-6 lg:p-7 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                web3jbos.xyz
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span>{isAr ? 'منصة التوظيف المدمجة' : 'Web3 Careers Protocol'}</span>
              </span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {isAr ? 'منصة وظائف الويب 3 ومطوري البلوكتشين في WEB3ONE' : 'Decentralized Web3 Careers, Bounties & Developer Passport'}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {isAr
                ? 'تكامل فعلي شامل: تصفح منصة web3jbos.xyz الحية، أو قدم على وظائف العقود الذكية والـ DApps بدوام كامل أو مكافآت Bounties مدفوعة بالعملات المشفرة مع توثيق محفظة WEB3ONE.'
                : 'Direct access to web3jbos.xyz live platform, crypto-compensated bounties, remote blockchain roles, and on-chain AI talent passport.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="https://web3jbos.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition"
            >
              <span>{isAr ? 'رابط خارجي للمنصة' : 'Visit web3jbos.xyz'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
            </a>

            <button
              onClick={() => setSubTab('post_job')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition"
            >
              <PlusCircle className="w-4 h-4 text-white" />
              <span>{isAr ? 'نشر وظيفة جديدة' : 'Post a Web3 Job'}</span>
            </button>
          </div>
        </div>

        {/* Live Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5 border-t border-slate-800/80 text-xs">
          <div>
            <span className="text-slate-400 block">{isAr ? 'الوظائف المتاحة عالمياً' : 'Active Openings'}</span>
            <span className="font-mono font-bold text-purple-400 text-sm">280+ Remote Roles</span>
          </div>
          <div>
            <span className="text-slate-400 block">{isAr ? 'الدفع بالعملات المشفرة' : 'Crypto Compensation'}</span>
            <span className="font-mono font-bold text-emerald-400 text-sm">USDT / USDC / ETH</span>
          </div>
          <div>
            <span className="text-slate-400 block">{isAr ? 'متوسط الرواتب السنوية' : 'Average Comp'}</span>
            <span className="font-mono font-bold text-cyan-400 text-sm">$125,000 / Year</span>
          </div>
          <div>
            <span className="text-slate-400 block">{isAr ? 'التقديم بضغطة واحدة' : 'Application Flow'}</span>
            <span className="font-mono font-bold text-white text-sm">Wallet + GitHub Verified</span>
          </div>
        </div>
      </div>

      {/* Sub-Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setSubTab('live_site')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              subTab === 'live_site'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isAr ? 'المنصة الحية (web3jbos.xyz)' : 'Live web3jbos.xyz'}</span>
          </button>

          <button
            onClick={() => setSubTab('jobs_board')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              subTab === 'jobs_board'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{isAr ? 'سوق الوظائف والمكافآت' : 'Jobs & Bounties'}</span>
          </button>

          <button
            onClick={() => setSubTab('passport')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              subTab === 'passport'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isAr ? 'جواز سفر المطور (AI Developer Passport)' : 'AI Developer Passport'}</span>
          </button>

          <button
            onClick={() => setSubTab('post_job')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              subTab === 'post_job'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5 text-pink-400" />
            <span>{isAr ? 'نشر وظيفة جديدة' : 'Post Vacancy'}</span>
          </button>
        </div>
      </div>

      {/* 1. ACTUAL LIVE PLATFORM EMBED VIEW */}
      {subTab === 'live_site' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1 max-w-xl">
              <span className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></span>
              <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-mono text-slate-300 flex items-center justify-between">
                <span className="truncate">{liveUrl}</span>
                <span className="text-[10px] text-emerald-400 font-bold ml-2">SSL Secure ✓</span>
              </div>
              <button
                onClick={() => {
                  setIframeLoading(true);
                  setIframeKey(prev => prev + 1);
                }}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                title="تحديث"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode('desktop')}
                className={`p-1.5 rounded-lg transition ${viewMode === 'desktop' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
                title="سطح المكتب"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('tablet')}
                className={`p-1.5 rounded-lg transition ${viewMode === 'tablet' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
                title="تابلت"
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`p-1.5 rounded-lg transition ${viewMode === 'mobile' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
                title="موبايل"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <a
              href="https://web3jbos.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1 transition"
            >
              <span>{isAr ? 'فتح في نافذة مستقلة' : 'Direct Link'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Sandbox Iframe */}
          <div className="w-full flex justify-center bg-slate-950/60 rounded-2xl border border-slate-800 p-2 overflow-hidden shadow-2xl min-h-[640px]">
            <div
              className={`transition-all duration-300 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative ${
                viewMode === 'desktop'
                  ? 'w-full h-[680px]'
                  : viewMode === 'tablet'
                  ? 'w-[768px] h-[680px]'
                  : 'w-[390px] h-[680px]'
              }`}
            >
              {iframeLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/90 text-slate-300 space-y-3">
                  <RefreshCw className="w-8 h-8 text-purple-400 animate-spin" />
                  <span className="text-xs font-mono font-bold">
                    {isAr ? 'جارِ تحميل منصة web3jbos.xyz...' : 'Connecting to web3jbos.xyz live platform...'}
                  </span>
                </div>
              )}

              <iframe
                key={iframeKey}
                src="https://web3jbos.xyz"
                title="web3jbos.xyz Live Careers Platform"
                onLoad={() => setIframeLoading(false)}
                className="w-full h-full border-0 bg-slate-950"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. NATIVE WEB3 JOB BOARD */}
      {subTab === 'jobs_board' && (
        <div className="space-y-5">
          {/* Search & Filter */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {jobTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                    selectedType === t.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-slate-500 absolute top-2.5 right-3" />
              <input
                type="text"
                placeholder={isAr ? 'ابحث عن مهارة (Solidity, Rust, React)...' : 'Search skill or role...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-9 pl-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>
          </div>

          {/* Job Listings Grid */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-purple-500/50 transition flex flex-col md:flex-row md:items-center justify-between gap-5 group"
              >
                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-bold text-purple-300 font-mono">{job.company}</span>
                    <span className="text-slate-600">·</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{job.location}</span>
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/30 text-[10px] font-bold">
                      {job.jobType}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">{job.postedAt}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition leading-snug">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                  <div className="text-right">
                    <span className="text-sm md:text-base font-black text-emerald-400 font-mono block">
                      {job.salaryRangeUSD}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {job.cryptoPaymentToken} · {job.applicantsCount} {isAr ? 'متقدم' : 'applicants'}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md shadow-purple-600/30 transition flex items-center gap-1.5 active:scale-95"
                  >
                    <span>{isAr ? 'تقديم فوري بالمحفظة' : '1-Click Apply'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. AI DEVELOPER PASSPORT */}
      {subTab === 'passport' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase font-bold mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Web3 AI Developer Passport #W3P-7192</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                جواز السفر البرمجي الموثق بالذكاء الاصطناعي
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">{isAr ? 'تقييم الكفاءة:' : 'Talent Score:'}</span>
              <span className="text-2xl font-black text-emerald-400 font-mono">{passportScore} / 100</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-500">{isAr ? 'حساب GitHub المربوط:' : 'Linked GitHub:'}</span>
              <div className="text-sm font-bold text-cyan-400">github.com/aminzaki1972</div>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-500">{isAr ? 'محفظة استلام المكافآت:' : 'Payout Wallet:'}</span>
              <div className="text-sm font-bold text-purple-300">0x71C3...4e92 (WEB3ONE)</div>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-500">{isAr ? 'الرتبة في المنظومة:' : 'Developer Rank:'}</span>
              <div className="text-sm font-bold text-emerald-400">Senior Protocol Builder</div>
            </div>
          </div>

          <div className="p-4 bg-purple-950/20 border border-purple-900/40 rounded-xl text-xs text-slate-300 leading-relaxed space-y-2">
            <div className="font-bold text-purple-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{isAr ? 'الأوسمة البرمجية الموثقة على البلوكتشين (Soulbound Badges):' : 'Verified On-Chain Soulbound Badges:'}</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200">
                🛡️ Verified Solidity Auditor (Grade A)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200">
                ⚡ Multi-Chain EVM & L2 Deployer
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200">
                💼 Web3Jobs Verified Creator
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 4. POST VACANCY FORM */}
      {subTab === 'post_job' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 max-w-2xl mx-auto shadow-2xl">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white">
              {isAr ? 'نشر وظيفة أو مكافأة برمجية على web3jbos.xyz' : 'Publish a Web3 Role or Bounty'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isAr
                ? 'اجذب أفضل مطوري العقود الذكية والـ DApps عالمياً مع إمكانية الدفع المباشر بالعملات المستقرة.'
                : 'Connect with top-tier blockchain talent worldwide with native crypto payout options.'}
            </p>
          </div>

          {postSuccess ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">
                {isAr ? 'تم نشر الوظيفة بنجاح في شبكة web3jbos.xyz!' : 'Job vacancy posted successfully!'}
              </h4>
            </div>
          ) : (
            <form onSubmit={handleCreateJob} className="space-y-4 text-xs">
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">{isAr ? 'المسمى الوظيفي:' : 'Job Title:'}</label>
                <input
                  type="text"
                  required
                  placeholder={isAr ? 'مثال: Senior Smart Contract Developer' : 'e.g. Senior Smart Contract Developer'}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-300 block mb-1 font-semibold">{isAr ? 'اسم الشركة أو البروتوكول:' : 'Company / Protocol:'}</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. WEB3ONE DAO"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-300 block mb-1 font-semibold">{isAr ? 'نطاق الراتب (USD):' : 'Salary Range (USD):'}</label>
                  <input
                    type="text"
                    required
                    placeholder="$120k - $160k"
                    value={newSalary}
                    onChange={(e) => setNewSalary(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-semibold">{isAr ? 'المهارات المطلوبة (مفصولة بفاصلة):' : 'Required Skills (comma separated):'}</label>
                <input
                  type="text"
                  required
                  placeholder="Solidity, Foundry, Next.js, Wagmi"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-semibold">{isAr ? 'وصف المسؤوليات والمهام:' : 'Description:'}</label>
                <textarea
                  rows={3}
                  required
                  placeholder={isAr ? 'اشرح تفاصيل الوظيفة والمشروع...' : 'Describe roles and responsibilities...'}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition shadow-lg shadow-purple-600/30 text-xs"
              >
                {isAr ? 'نشر الوظيفة في شبكة web3jbos.xyz' : 'Publish to web3jbos.xyz Network'}
              </button>
            </form>
          )}
        </div>
      )}

      {/* ONE-CLICK APPLICATION MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative space-y-4">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 left-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold font-mono">
              <Send className="w-4 h-4" />
              <span>WEB3 ONE-CLICK APPLICATION</span>
            </div>

            <h3 className="text-base font-bold text-white">
              {selectedJob.title}
            </h3>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>{isAr ? 'الشركة:' : 'Company:'}</span>
                <span className="text-white font-bold">{selectedJob.company}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>{isAr ? 'الراتب المقدر:' : 'Compensation:'}</span>
                <span className="text-emerald-400 font-bold">{selectedJob.salaryRangeUSD}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>{isAr ? 'المحفظة المربوطة:' : 'Verified Wallet:'}</span>
                <span className="text-purple-300">0x71C3...4e92 (WEB3ONE)</span>
              </div>
            </div>

            <form onSubmit={handleApply} className="space-y-3 text-xs">
              <div>
                <label className="text-slate-300 block mb-1 font-semibold">{isAr ? 'رابط ملف GitHub / المحفظة البرمجية:' : 'GitHub Profile / Portfolio:'}</label>
                <input
                  type="url"
                  required
                  value={applicantGithub}
                  onChange={(e) => setApplicantGithub(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1 font-semibold">{isAr ? 'ملاحظة أو رسالة تقديم سريعة:' : 'Quick Note:'}</label>
                <textarea
                  rows={2}
                  placeholder={isAr ? 'خبرتي في Solidity و Web3...' : 'My Web3 experience...'}
                  value={applicantNote}
                  onChange={(e) => setApplicantNote(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition flex items-center justify-center gap-2"
              >
                {applySubmitted ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{isAr ? 'جارِ الإرسال والتوقيع...' : 'Signing Application...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{isAr ? 'إرسال طلب التقديم الموثق' : 'Sign & Submit Application'}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
