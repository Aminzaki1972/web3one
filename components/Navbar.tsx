import React from 'react';
import { SuperAppTab } from '../types';
import {
  Wallet,
  TrendingUp,
  MessageCircle,
  CloudSun,
  Newspaper,
  Tv,
  Globe,
  Bell,
  CheckCircle2,
  Copy,
  ChevronDown,
  Briefcase,
  Download
} from 'lucide-react';

interface NavbarProps {
  activeTab: SuperAppTab;
  setActiveTab: (tab: SuperAppTab) => void;
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  walletConnected: boolean;
  setWalletConnected: (val: boolean) => void;
  totalBalanceUSD: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  walletConnected,
  setWalletConnected,
  totalBalanceUSD
}) => {
  const isAr = lang === 'ar';
  const [copied, setCopied] = React.useState(false);
  const userAddress = '0x71C...4e92';

  const navLinks: { id: SuperAppTab; labelAr: string; labelEn: string; icon: any }[] = [
    { id: 'wallet', labelAr: 'المحفظة', labelEn: 'Wallet', icon: Wallet },
    { id: 'markets', labelAr: 'الأسواق وتريدنج فيو', labelEn: 'Markets & TV', icon: TrendingUp },
    { id: 'web3market', labelAr: 'سوق web3market.xyz', labelEn: 'Web3Market', icon: Globe },
    { id: 'web3jobs', labelAr: 'وظائف web3jbos.xyz', labelEn: 'Web3Jobs', icon: Briefcase },
    { id: 'social', labelAr: 'التواصل والشات', labelEn: 'Social & Calls', icon: MessageCircle },
    { id: 'news', labelAr: 'الأخبار العالمية', labelEn: 'News Feed', icon: Newspaper },
    { id: 'weather', labelAr: 'الطقس', labelEn: 'Weather', icon: CloudSun },
    { id: 'cinema', labelAr: 'البث والسينما', labelEn: 'Live TV & Cinema', icon: Tv },
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText('0x71C35B9e01B93A2eA982C991448bFaFa98324e92');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('wallet')}
              className="flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 font-mono text-base tracking-tight">
                    W1
                  </span>
                </div>
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight font-mono">
                  WEB3ONE
                </span>
                <span className="hidden sm:inline-block text-[10px] text-cyan-400 font-semibold mx-1.5 uppercase tracking-wider">
                  Super App
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Single-Line, Anti-Pill) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                  <span>{isAr ? item.labelAr : item.labelEn}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Wallet Action & Quick Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Wallet Connect Button */}
            {walletConnected ? (
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700/80 rounded-xl px-2.5 py-1 text-xs">
                <button
                  onClick={copyAddress}
                  className="flex items-center gap-1 text-slate-300 hover:text-white font-mono"
                  title="Copy Wallet Address"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{userAddress}</span>
                  {copied ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
                </button>
                <span className="text-slate-600">|</span>
                <span className="font-mono text-emerald-400 font-bold tabular-nums">
                  ${totalBalanceUSD.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
              </div>
            ) : (
              <button
                onClick={() => setWalletConnected(true)}
                className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/20 transition whitespace-nowrap"
              >
                {isAr ? 'ربط المحفظة' : 'Connect Wallet'}
              </button>
            )}

            {/* Direct Source Code Download Button */}
            <a
              href="/web3one_source_code.zip"
              download="web3one_source_code.zip"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition active:scale-95 whitespace-nowrap"
              title="تحميل كود التطبيق كاملاً بصيغة ZIP"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isAr ? 'تحميل الكود ZIP' : 'Download ZIP'}</span>
            </a>

            {/* Language switch */}
            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="px-2 py-1 text-xs font-mono font-semibold text-cyan-400 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-lg transition"
            >
              {isAr ? 'EN' : 'عربي'}
            </button>
          </div>
        </div>

        {/* Mobile Nav Strip */}
        <div className="lg:hidden flex items-center space-x-1 space-x-reverse overflow-x-auto pb-2 pt-1 border-t border-slate-900 scrollbar-none">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition ${
                  isActive
                    ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isAr ? item.labelAr : item.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
