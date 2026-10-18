import React, { useState, useEffect, useRef } from 'react';
import {
  GLOBAL_INDICES,
  GLOBAL_STOCKS,
  BOND_YIELDS,
  GLOBAL_COMMODITIES
} from '../data/mockData';
import {
  TrendingUp,
  BarChart3,
  Globe2,
  DollarSign,
  Droplet,
  Flame,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  Search,
  Maximize2
} from 'lucide-react';

interface MarketsModuleProps {
  lang: 'ar' | 'en';
}

export const MarketsModule: React.FC<MarketsModuleProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeSubTab, setActiveSubTab] = useState<'tv' | 'indices' | 'stocks' | 'bonds' | 'commodities'>('tv');
  const [selectedTvSymbol, setSelectedTvSymbol] = useState<string>('NASDAQ:NDX');
  const tvContainerRef = useRef<HTMLDivElement>(null);

  // Available TradingView symbols for quick switching
  const tvSymbols = [
    { label: 'ناسداك (NASDAQ 100)', symbol: 'NASDAQ:NDX' },
    { label: 'النفط - برنت (Brent Oil)', symbol: 'TVC:UKOIL' },
    { label: 'النفط - تكساس (WTI Oil)', symbol: 'TVC:USOIL' },
    { label: 'الذهب (Gold XAU)', symbol: 'TVC:GOLD' },
    { label: 'البتكوين (BTC / USD)', symbol: 'BITSTAMP:BTCUSD' },
    { label: 'سهم إنفيديا (NVIDIA)', symbol: 'NASDAQ:NVDA' },
    { label: 'إس آند بي 500 (S&P 500)', symbol: 'FOREXCOM:SPXUSD' },
  ];

  // Embed TradingView interactive widget
  useEffect(() => {
    if (activeSubTab !== 'tv' || !tvContainerRef.current) return;
    tvContainerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: selectedTvSymbol,
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: isAr ? 'ar' : 'en',
      enable_publishing: false,
      backgroundColor: 'rgba(15, 23, 42, 1)',
      gridColor: 'rgba(30, 41, 59, 0.4)',
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      calendar: false,
      studies: [
        'RSI@tv-basicstudies',
        'MASimple@tv-basicstudies'
      ],
      support_host: 'https://www.tradingview.com'
    });

    tvContainerRef.current.appendChild(script);
  }, [selectedTvSymbol, activeSubTab, isAr]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Module Navigation Sub-Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveSubTab('tv')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              activeSubTab === 'tv'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{isAr ? 'مؤشر وتريدنج فيو الحي' : 'TradingView Live Chart'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('indices')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              activeSubTab === 'indices'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'المؤشرات العالمية (ناسداك، اليابان، أوروبا، الصين)' : 'Global Indices'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('commodities')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              activeSubTab === 'commodities'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Droplet className="w-3.5 h-3.5 text-amber-400" />
            <span>{isAr ? 'النفط والسلع العالمية' : 'Oil & Commodities'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('stocks')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              activeSubTab === 'stocks'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{isAr ? 'الأسهم العالمية (أرامكو، إنفيديا، أبل)' : 'Global Stocks'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('bonds')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              activeSubTab === 'bonds'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isAr ? 'السندات السيادية والعوائد' : 'Sovereign Bonds'}</span>
          </button>
        </div>
      </div>

      {/* 1. TradingView Advanced Chart Integration */}
      {activeSubTab === 'tv' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300">
              {isAr ? 'اختر المؤشر أو الأصل لعرضه على شارت تريدنج فيو:' : 'Quick Chart Selector:'}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {tvSymbols.map((item) => (
                <button
                  key={item.symbol}
                  onClick={() => setSelectedTvSymbol(item.symbol)}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition ${
                    selectedTvSymbol === item.symbol
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-[580px] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
            <div
              ref={tvContainerRef}
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* 2. Global Indices (Nasdaq, Nikkei, Euro Stoxx, Shanghai, etc.) */}
      {activeSubTab === 'indices' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GLOBAL_INDICES.map((idx) => {
              const isPositive = idx.changePct >= 0;
              return (
                <div
                  key={idx.symbol}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase">
                      {idx.symbol}
                    </span>
                    <span className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded font-mono">
                      {idx.region}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    {isAr ? idx.nameAr : idx.nameEn}
                  </h4>
                  <div className="flex items-baseline justify-between">
                    <div className="text-2xl font-black text-white font-mono tabular-nums">
                      {idx.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                    <div className={`flex items-center font-mono font-bold text-xs tabular-nums ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {isPositive ? <ArrowUpRight className="w-4 h-4 ml-0.5" /> : <ArrowDownRight className="w-4 h-4 ml-0.5" />}
                      <span>{isPositive ? '+' : ''}{idx.changePct}%</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-800 flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>{isAr ? 'المدى اليومي:' : 'Day Range:'} {idx.dayLow} - {idx.dayHigh}</span>
                    <span>{isAr ? 'الحجم:' : 'Vol:'} {idx.volume}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Global Commodities & Oil */}
      {activeSubTab === 'commodities' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Droplet className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'أسعار النفط والطاقة والمعادن النفيسة' : 'Energy, Crude Oil & Precious Metals'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {GLOBAL_COMMODITIES.map((c) => {
                const isPos = c.changePct >= 0;
                return (
                  <div key={c.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-xs">{isAr ? c.nameAr : c.nameEn}</span>
                      <span className="font-mono text-[10px] text-slate-500">{c.symbol}</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <div className="text-xl font-black text-white font-mono tabular-nums">
                        ${c.priceUSD.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <div className={`font-mono text-xs font-bold ${isPos ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isPos ? '+' : ''}{c.changePct}%
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      الوحدة: {c.unit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 4. Global Stocks */}
      {activeSubTab === 'stocks' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white">
              {isAr ? 'أسعار الأسهم العالمية الكبرى' : 'Global Mega-Cap Stocks'}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-slate-950 text-slate-400 font-mono uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-6">{isAr ? 'السهم / الشركة' : 'Company / Ticker'}</th>
                  <th className="py-3 px-6">{isAr ? 'السعر' : 'Price'}</th>
                  <th className="py-3 px-6">{isAr ? 'التغير اليومي' : 'Change'}</th>
                  <th className="py-3 px-6">{isAr ? 'القيمة السوقية' : 'Market Cap'}</th>
                  <th className="py-3 px-6">{isAr ? 'مكرر الربحية (P/E)' : 'P/E Ratio'}</th>
                  <th className="py-3 px-6">{isAr ? 'عائد التوزيعات' : 'Yield'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {GLOBAL_STOCKS.map((stock) => {
                  const isPos = stock.changePct >= 0;
                  return (
                    <tr key={stock.ticker} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 px-6">
                        <div className="font-bold text-white">{stock.name}</div>
                        <div className="font-mono text-[11px] text-indigo-400">{stock.ticker}</div>
                      </td>
                      <td className="py-3 px-6 font-mono font-bold text-white tabular-nums">
                        {stock.price} {stock.currency}
                      </td>
                      <td className="py-3 px-6 font-mono font-bold tabular-nums">
                        <span className={isPos ? 'text-emerald-400' : 'text-rose-400'}>
                          {isPos ? '+' : ''}{stock.changePct}%
                        </span>
                      </td>
                      <td className="py-3 px-6 font-mono text-slate-300">{stock.marketCap}</td>
                      <td className="py-3 px-6 font-mono text-slate-400">{stock.peRatio}</td>
                      <td className="py-3 px-6 font-mono text-cyan-400">{stock.dividendYield}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. Sovereign Bonds & Yields */}
      {activeSubTab === 'bonds' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white">
              {isAr ? 'عوائد السندات الحكومية السيادية العالمية' : 'Global Sovereign Bond Yields'}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-slate-950 text-slate-400 font-mono uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-6">{isAr ? 'السند السيادي' : 'Bond'}</th>
                  <th className="py-3 px-6">{isAr ? 'الدولة / الجهة' : 'Country'}</th>
                  <th className="py-3 px-6">{isAr ? 'تاريخ الاستحقاق' : 'Maturity'}</th>
                  <th className="py-3 px-6">{isAr ? 'العائد الحالي (Yield)' : 'Yield'}</th>
                  <th className="py-3 px-6">{isAr ? 'التغير (نقاط أساس)' : 'Change (Bps)'}</th>
                  <th className="py-3 px-6">{isAr ? 'الكوبون' : 'Coupon'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {BOND_YIELDS.map((bond) => (
                  <tr key={bond.identifier} className="hover:bg-slate-800/40 transition">
                    <td className="py-3 px-6 font-mono font-bold text-indigo-400">{bond.identifier}</td>
                    <td className="py-3 px-6 font-semibold text-white">{bond.country}</td>
                    <td className="py-3 px-6 text-slate-400">{bond.maturity}</td>
                    <td className="py-3 px-6 font-mono font-extrabold text-emerald-400 text-sm tabular-nums">
                      {bond.yieldPct}%
                    </td>
                    <td className="py-3 px-6 font-mono tabular-nums text-slate-300">
                      {bond.changeBps} bps
                    </td>
                    <td className="py-3 px-6 font-mono text-slate-400">{bond.coupon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
