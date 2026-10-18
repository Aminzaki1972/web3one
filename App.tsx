import React, { useEffect, useState } from 'react';
import { SuperAppTab } from './index';
import { Navbar } from './Navbar';
import { WalletModule } from './WalletModule';
import { MarketsModule } from './MarketsModule';
import { SocialModule } from './SocialModule';
import { WeatherModule } from './WeatherModule';
import { NewsModule } from './NewsModule';
import { CinemaModule } from './CinemaModule';
import { Web3MarketModule } from './Web3MarketModule';
import { Web3JobsModule } from './Web3JobsModule';
import {
  Wallet,
  TrendingUp,
  MessageCircle,
  CloudSun,
  Newspaper,
  Tv,
  Globe,
  Sparkles,
  ShieldCheck,
  Globe2,
  FileText,
  Briefcase,
  Download
} from 'lucide-react';

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on?: (event: string, listener: (...args: unknown[]) => void) => void;
      removeListener?: (event: string, listener: (...args: unknown[]) => void) => void;
    };
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<SuperAppTab>('wallet');
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);
  const [nativeBalance, setNativeBalance] = useState<string | null>(null);
  const walletConnected = Boolean(walletAddress);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert(isAr
        ? 'لم يتم العثور على محفظة متوافقة. افتح التطبيق داخل متصفح MetaMask أو Trust Wallet، أو ثبّت محفظة متوافقة.'
        : 'No compatible wallet detected. Open this app in MetaMask or Trust Wallet browser, or install a compatible wallet.');
      return;
    }
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[];
      const account = Array.isArray(accounts) ? accounts[0] : undefined;
      if (typeof account !== 'string' || !/^0x[a-fA-F0-9]{40}$/.test(account)) {
        setWalletAddress(null);
        alert(lang === 'ar'
          ? 'لم تُرجع المحفظة عنوان حساب صالحًا. تحقق من اختيار حساب في المحفظة ثم أعد المحاولة.'
          : 'The wallet did not return a valid account address. Select an account in your wallet and try again.');
        return;
      }
      const activeChain = await window.ethereum.request({ method: 'eth_chainId' }) as string;
      if (typeof activeChain !== 'string' || !/^0x[0-9a-fA-F]+$/.test(activeChain)) {
        setWalletAddress(null);
        setChainId(null);
        throw new Error('Wallet returned an invalid chain ID');
      }
      setWalletAddress(account);
      setChainId(activeChain);
    } catch (error) {
      console.error('Wallet connection was not completed', error);
      const message = error && typeof error === 'object' && 'code' in error && error.code === 4001
        ? (lang === 'ar' ? 'تم رفض طلب ربط المحفظة. يمكنك المحاولة مرة أخرى عند الاستعداد.' : 'Wallet connection was rejected. You can try again when ready.')
        : (lang === 'ar' ? 'تعذر ربط المحفظة. تحقق من فتح التطبيق داخل متصفح المحفظة ثم أعد المحاولة.' : 'Could not connect wallet. Open the app in your wallet browser and try again.');
      alert(message);
    }
  };

  useEffect(() => {
    const provider = window.ethereum;
    if (!provider) return;

    let cancelled = false;
    const handleAccountsChanged = (...args: unknown[]) => {
      const accounts = args[0] as unknown;
      const account = Array.isArray(accounts) ? accounts[0] : undefined;
      setWalletAddress(typeof account === 'string' && /^0x[a-fA-F0-9]{40}$/.test(account) ? account : null);
    };
    const handleChainChanged = (...args: unknown[]) => {
      const nextChain = args[0];
      setChainId(typeof nextChain === 'string' && /^0x[0-9a-fA-F]+$/.test(nextChain) ? nextChain : null);
    };

    // Restore an already-authorized connection silently; never trigger a wallet prompt on page load.
    provider.request({ method: 'eth_accounts' })
      .then((value) => {
        if (cancelled) return;
        const accounts = value as unknown;
        const account = Array.isArray(accounts) ? accounts[0] : undefined;
        setWalletAddress(typeof account === 'string' && /^0x[a-fA-F0-9]{40}$/.test(account) ? account : null);
      })
      .catch(() => {
        if (!cancelled) setWalletAddress(null);
      });

    provider.request({ method: 'eth_chainId' })
      .then((value) => {
        if (!cancelled) setChainId(typeof value === 'string' && /^0x[0-9a-fA-F]+$/.test(value) ? value : null);
      })
      .catch(() => {
        if (!cancelled) setChainId(null);
      });

    provider.on?.('accountsChanged', handleAccountsChanged);
    provider.on?.('chainChanged', handleChainChanged);
    return () => {
      cancelled = true;
      provider.removeListener?.('accountsChanged', handleAccountsChanged);
      provider.removeListener?.('chainChanged', handleChainChanged);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const provider = window.ethereum;
    if (!provider || !walletAddress) {
      setNativeBalance(null);
      return;
    }
    provider.request({ method: 'eth_getBalance', params: [walletAddress, 'latest'] })
      .then((value) => {
        if (cancelled) return;
        const wei = BigInt(value as string);
        const baseUnit = 10n ** 18n;
        const whole = wei / baseUnit;
        const fraction = (wei % baseUnit).toString().padStart(18, '0').slice(0, 6).replace(/0+$/, '');
        setNativeBalance(fraction ? `${whole}.${fraction}` : whole.toString());
      })
      .catch(() => { if (!cancelled) setNativeBalance(null); });
    return () => { cancelled = true; };
  }, [walletAddress, chainId]);

  const isAr = lang === 'ar';
  const totalBalanceUSD = 0;

  return (
    <div
      className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Cairo',sans-serif] selection:bg-indigo-500/30 selection:text-indigo-200 ${
        isAr ? 'rtl' : 'ltr'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Top Universal Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        walletConnected={walletConnected}
        onConnectWallet={connectWallet}
        walletAddress={walletAddress}
        totalBalanceUSD={totalBalanceUSD}
      />

      {/* Main Viewport Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'wallet' && (
          <WalletModule lang={lang} walletAddress={walletAddress} chainId={chainId} nativeBalance={nativeBalance} />
        )}

        {activeTab === 'markets' && (
          <MarketsModule lang={lang} />
        )}

        {activeTab === 'web3market' && (
          <Web3MarketModule lang={lang} />
        )}

        {activeTab === 'web3jobs' && (
          <Web3JobsModule lang={lang} />
        )}

        {activeTab === 'social' && (
          <SocialModule lang={lang} />
        )}

        {activeTab === 'news' && (
          <NewsModule lang={lang} />
        )}

        {activeTab === 'weather' && (
          <WeatherModule lang={lang} />
        )}

        {activeTab === 'cinema' && (
          <CinemaModule lang={lang} />
        )}
      </main>

      {/* Bottom Sticky Mobile Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-2 py-1.5 flex items-center justify-around">
        <button
          onClick={() => setActiveTab('wallet')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
            activeTab === 'wallet' ? 'text-cyan-400' : 'text-slate-500'
          }`}
        >
          <Wallet className="w-4 h-4 mb-0.5" />
          <span>{isAr ? 'المحفظة' : 'Wallet'}</span>
        </button>

        <button
          onClick={() => setActiveTab('markets')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
            activeTab === 'markets' ? 'text-indigo-400' : 'text-slate-500'
          }`}
        >
          <TrendingUp className="w-4 h-4 mb-0.5" />
          <span>{isAr ? 'الأسواق' : 'Markets'}</span>
        </button>

        <button
          onClick={() => setActiveTab('web3market')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
            activeTab === 'web3market' ? 'text-cyan-400' : 'text-slate-500'
          }`}
        >
          <Globe className="w-4 h-4 mb-0.5" />
          <span>{isAr ? 'web3market' : 'Market'}</span>
        </button>

        <button
          onClick={() => setActiveTab('web3jobs')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
            activeTab === 'web3jobs' ? 'text-purple-400' : 'text-slate-500'
          }`}
        >
          <Briefcase className="w-4 h-4 mb-0.5" />
          <span>{isAr ? 'web3jbos' : 'Jobs'}</span>
        </button>

        <button
          onClick={() => setActiveTab('social')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
            activeTab === 'social' ? 'text-purple-400' : 'text-slate-500'
          }`}
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>{isAr ? 'التواصل' : 'Social'}</span>
        </button>

        <button
          onClick={() => setActiveTab('news')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
            activeTab === 'news' ? 'text-rose-400' : 'text-slate-500'
          }`}
        >
          <Newspaper className="w-4 h-4 mb-0.5" />
          <span>{isAr ? 'الأخبار' : 'News'}</span>
        </button>

        <button
          onClick={() => setActiveTab('weather')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
            activeTab === 'weather' ? 'text-amber-400' : 'text-slate-500'
          }`}
        >
          <CloudSun className="w-4 h-4 mb-0.5" />
          <span>{isAr ? 'الطقس' : 'Weather'}</span>
        </button>

        <button
          onClick={() => setActiveTab('cinema')}
          className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition ${
            activeTab === 'cinema' ? 'text-emerald-400' : 'text-slate-500'
          }`}
        >
          <Tv className="w-4 h-4 mb-0.5" />
          <span>{isAr ? 'السينما' : 'Cinema'}</span>
        </button>
      </div>

      {/* App Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500 pb-16 lg:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-300">WEB3ONE Super App</span>
            <span>•</span>
            <span>{isAr ? 'المنظومة الشاملة المدمجة مع web3market.xyz و web3jbos.xyz' : 'Integrated with web3market.xyz & web3jbos.xyz'}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="/web3one_source_code.zip"
              download="web3one_source_code.zip"
              className="text-emerald-400 hover:text-emerald-300 font-bold transition flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isAr ? 'تحميل الكود المصدري (.ZIP)' : 'Download Source (.ZIP)'}</span>
            </a>
            <span>•</span>
            <span className="hover:text-indigo-400 cursor-pointer" onClick={() => setActiveTab('wallet')}>
              {isAr ? 'اتصال EVM تجريبي' : 'EVM Connection Beta'}
            </span>
            <span>•</span>
            <span className="hover:text-cyan-400 cursor-pointer" onClick={() => setActiveTab('web3market')}>
              web3market.xyz
            </span>
            <span>•</span>
            <span className="hover:text-purple-400 cursor-pointer" onClick={() => setActiveTab('web3jobs')}>
              web3jbos.xyz
            </span>
            <span>•</span>
            <span className="hover:text-indigo-400 cursor-pointer" onClick={() => setActiveTab('markets')}>
              TradingView
            </span>
            <span>•</span>
            <span className="hover:text-emerald-400 cursor-pointer" onClick={() => setActiveTab('cinema')}>
              {isAr ? 'سينما وبث' : 'Cinema'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
