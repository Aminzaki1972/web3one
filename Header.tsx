import React from 'react';
import { ShieldCheck, Globe, Activity, FileText, Sparkles, ExternalLink, Calculator, Award } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  onOpenReport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenReport,
}) => {
  const isAr = lang === 'ar';

  const navItems = [
    { id: 'summary', labelAr: 'الملخص التنفيذي', labelEn: 'Executive Summary', icon: Activity },
    { id: 'code', labelAr: 'فحص الأكواد والمعمارية', labelEn: 'Code & Architecture Audit', icon: ShieldCheck },
    { id: 'valuation', labelAr: 'حاسبة التقييم المالي', labelEn: 'Valuation Engine', icon: Calculator },
    { id: 'domain', labelAr: 'تقييم النطاق والمقارنات', labelEn: 'Domain Appraisal', icon: Globe },
    { id: 'opinion', labelAr: 'الرأي الاستراتيجي والمطور', labelEn: 'Strategic & Dev Opinion', icon: Award },
  ];

  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Platform Info */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono text-xl">W3</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-mono">
                  web3market.xyz
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1.5"></span>
                  {isAr ? 'فحص شامل نشط' : 'Audited Platform'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {isAr ? 'تقرير التدقيق الفني الشامل، فحص المستودع، وتقييم النطاق والمشروع' : 'Full Technical Due Diligence, Repository Audit & Valuation'}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            {/* View live target */}
            <a
              href="https://web3market.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white rounded-lg border border-slate-700/60 transition"
            >
              <span>{isAr ? 'زيارة المنصة' : 'Visit Platform'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* Print/Download Report Button */}
            <button
              onClick={onOpenReport}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg shadow-md shadow-indigo-500/20 transition active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isAr ? 'تصدير التقرير التنفيذي' : 'Export Executive Report'}</span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="px-2.5 py-1.5 text-xs font-mono font-semibold rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 hover:bg-slate-700 transition"
              title={isAr ? 'Switch to English' : 'التحويل للعربية'}
            >
              {isAr ? 'English' : 'عربي'}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 space-x-reverse overflow-x-auto pb-2 scrollbar-none border-t border-slate-800/60 pt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-sm shadow-indigo-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span>{isAr ? item.labelAr : item.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
