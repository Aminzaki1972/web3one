import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, HelpCircle, Layers, Sparkles, RefreshCw, BarChart3, PieChart } from 'lucide-react';

interface ValuationCalculatorProps {
  lang: 'ar' | 'en';
}

export const ValuationCalculator: React.FC<ValuationCalculatorProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  // State variables for dynamic valuation modeling
  const [monthlyDeals, setMonthlyDeals] = useState<number>(6);
  const [avgDealSize, setAvgDealSize] = useState<number>(12000);
  const [successFeePct, setSuccessFeePct] = useState<number>(7.5);
  const [monthlyServerCost, setMonthlyServerCost] = useState<number>(350);
  const [valuationMultiple, setValuationMultiple] = useState<number>(4.0);
  const [includeDomainAsset, setIncludeDomainAsset] = useState<boolean>(true);
  const [domainAssetValue, setDomainAssetValue] = useState<number>(7500);
  const [includeCodebaseAsset, setIncludeCodebaseAsset] = useState<boolean>(true);
  const [codebaseAssetValue, setCodebaseAssetValue] = useState<number>(16000);

  // Derived financial calculations
  const monthlyGMV = monthlyDeals * avgDealSize;
  const annualGMV = monthlyGMV * 12;
  const monthlyRevenue = (monthlyGMV * (successFeePct / 100));
  const annualRevenue = monthlyRevenue * 12;
  const annualOperatingCosts = monthlyServerCost * 12;
  const annualNetProfit = Math.max(0, annualRevenue - annualOperatingCosts);

  // Business revenue multiple valuation
  const businessValuation = annualRevenue * valuationMultiple;

  // Tangible assets
  const tangibleAssets = (includeDomainAsset ? domainAssetValue : 0) + (includeCodebaseAsset ? codebaseAssetValue : 0);

  // Total Platform Valuation
  const totalValuation = Math.round(businessValuation + tangibleAssets);
  const minValuationRange = Math.round(totalValuation * 0.75);
  const maxValuationRange = Math.round(totalValuation * 1.35);

  const resetToRealisticPreset = () => {
    setMonthlyDeals(6);
    setAvgDealSize(12000);
    setSuccessFeePct(7.5);
    setMonthlyServerCost(350);
    setValuationMultiple(4.0);
    setDomainAssetValue(7500);
    setCodebaseAssetValue(16000);
  };

  const setEarlyStagePreset = () => {
    setMonthlyDeals(2);
    setAvgDealSize(5000);
    setSuccessFeePct(7.5);
    setMonthlyServerCost(150);
    setValuationMultiple(3.0);
    setDomainAssetValue(5000);
    setCodebaseAssetValue(12000);
  };

  const setBullMarketPreset = () => {
    setMonthlyDeals(25);
    setAvgDealSize(28000);
    setSuccessFeePct(7.5);
    setMonthlyServerCost(800);
    setValuationMultiple(5.5);
    setDomainAssetValue(15000);
    setCodebaseAssetValue(25000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>{isAr ? 'محرك التقييم المالي التفاعلي' : 'Interactive Valuation Model'}</span>
          </div>
          <h2 className="text-2xl font-bold text-white">
            {isAr ? 'حاسبة التقييم السعري لمنصة web3market.xyz' : 'Valuation Engine for web3market.xyz'}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            {isAr
              ? 'نموذج هجين يجمع بين الأصول الملموسة (النطاق + كود المستودع) والتدفقات النقدية المستقبلية (DCF / Multiple of ARR)'
              : 'Hybrid model compounding tangible IP assets (Domain + Codebase) with multiple of ARR based on 7.5% success fee'}
          </p>
        </div>

        {/* Quick Scenario Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500">{isAr ? 'سيناريوهات جاهزة:' : 'Presets:'}</span>
          <button
            onClick={setEarlyStagePreset}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition"
          >
            {isAr ? 'مرحلة الانطلاق (MVP)' : 'MVP / Launch'}
          </button>
          <button
            onClick={resetToRealisticPreset}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/40 transition"
          >
            {isAr ? 'متوسط معقول (Realistic)' : 'Realistic Base'}
          </button>
          <button
            onClick={setBullMarketPreset}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/40 transition"
          >
            {isAr ? 'سوق صاعد نشط (Bull Market)' : 'Growth Bull Run'}
          </button>
        </div>
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center justify-between">
              <span>{isAr ? 'متغيرات النشاط والصفقات الشهرية' : 'Transaction & Operational Inputs'}</span>
              <span className="text-xs text-indigo-400 font-mono">{isAr ? 'تعديل حي' : 'Live Adjust'}</span>
            </h3>

            {/* Slider 1: Monthly Deals */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">
                  {isAr ? 'عدد الصفقات المغلقة شهرياً (Closed Deals / Month):' : 'Monthly Closed Deals:'}
                </span>
                <span className="font-mono text-white font-bold bg-slate-800 px-2 py-0.5 rounded">
                  {monthlyDeals} {isAr ? 'صفقة' : 'deals'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="1"
                value={monthlyDeals}
                onChange={(e) => setMonthlyDeals(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>0</span>
                <span>25</span>
                <span>50 {isAr ? 'صفقة' : 'deals'}</span>
              </div>
            </div>

            {/* Slider 2: Average Deal Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">
                  {isAr ? 'متوسط قيمة الصفقة الواحدة (Average Deal Size):' : 'Average Deal Size (USD):'}
                </span>
                <span className="font-mono text-emerald-400 font-bold bg-slate-800 px-2 py-0.5 rounded">
                  ${avgDealSize.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={avgDealSize}
                onChange={(e) => setAvgDealSize(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$1,000 (Small dApp/Bot)</span>
                <span>$50,000</span>
                <span>$100,000 (Major Protocol)</span>
              </div>
            </div>

            {/* Success Fee & Valuation Multiple */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{isAr ? 'نسبة عمولة المنصة:' : 'Success Fee (%):'}</span>
                  <span className="font-mono text-cyan-400 font-bold">{successFeePct}%</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="0.5"
                  value={successFeePct}
                  onChange={(e) => setSuccessFeePct(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 block">
                  {isAr ? 'المنصة تحدد 7.5% رسمياً' : 'Platform native is 7.5%'}
                </span>
              </div>

              <div className="space-y-2 p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{isAr ? 'مضاعف التقييم للأرباح:' : 'ARR Multiple:'}</span>
                  <span className="font-mono text-purple-400 font-bold">{valuationMultiple}x</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.5"
                  value={valuationMultiple}
                  onChange={(e) => setValuationMultiple(Number(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 block">
                  {isAr ? 'معيار منصات الوساطة: 3x - 5x' : 'Marketplace standard is 3x-5x'}
                </span>
              </div>
            </div>

            {/* Tangible Asset Inclusions (Domain & Code) */}
            <div className="border-t border-slate-800 pt-5 space-y-4">
              <span className="text-xs font-bold text-slate-300 block uppercase tracking-wider">
                {isAr ? 'تقييم الأصول الملموسة المرافقة (Tangible Core Assets)' : 'Tangible Core Assets Valuation'}
              </span>

              {/* Domain Asset Toggle & Input */}
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-300 select-none">
                  <input
                    type="checkbox"
                    checked={includeDomainAsset}
                    onChange={(e) => setIncludeDomainAsset(e.target.checked)}
                    className="w-4 h-4 rounded text-indigo-600 accent-indigo-500"
                  />
                  <span>{isAr ? 'إدراج قيمة النطاق (web3market.xyz)' : 'Include Domain Value'}</span>
                </label>
                {includeDomainAsset && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-mono">$</span>
                    <input
                      type="number"
                      value={domainAssetValue}
                      onChange={(e) => setDomainAssetValue(Number(e.target.value))}
                      className="w-28 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-white font-mono"
                    />
                  </div>
                )}
              </div>

              {/* Codebase Asset Toggle & Input */}
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-300 select-none">
                  <input
                    type="checkbox"
                    checked={includeCodebaseAsset}
                    onChange={(e) => setIncludeCodebaseAsset(e.target.checked)}
                    className="w-4 h-4 rounded text-purple-600 accent-purple-500"
                  />
                  <span>{isAr ? 'إدراج تكلفة تطوير الكود والمستودع' : 'Include Codebase Dev Cost'}</span>
                </label>
                {includeCodebaseAsset && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-mono">$</span>
                    <input
                      type="number"
                      value={codebaseAssetValue}
                      onChange={(e) => setCodebaseAssetValue(Number(e.target.value))}
                      className="w-28 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs text-white font-mono"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Output Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/40 rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-bold mb-2 uppercase tracking-wider">
              <span>{isAr ? 'التقييم التقديري النهائي للمنصة' : 'Total Estimated Platform Value'}</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>

            <div className="text-4xl font-black text-white font-mono tracking-tight my-2">
              ${totalValuation.toLocaleString()}
            </div>

            <div className="text-xs text-slate-400 mb-6">
              {isAr ? 'نطاق التقييم العادل في السوق:' : 'Estimated Fair Market Range:'}{' '}
              <span className="font-mono text-slate-300 font-semibold">
                ${minValuationRange.toLocaleString()} – ${maxValuationRange.toLocaleString()}
              </span>
            </div>

            {/* Financial Breakdown Table */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div className="flex justify-between items-center text-slate-400">
                <span>{isAr ? 'إجمالي حجم الصفقات السنوي (GMV):' : 'Annual GMV:'}</span>
                <span className="font-mono text-slate-200 font-bold">${annualGMV.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>{isAr ? 'الإيراد السنوي للمنصة (7.5%):' : 'Annual Revenue (7.5% fee):'}</span>
                <span className="font-mono text-emerald-400 font-bold">${Math.round(annualRevenue).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>{isAr ? 'تكاليف الخوادم والـ AI السنوية:' : 'Annual Cloud & AI Costs:'}</span>
                <span className="font-mono text-rose-400 font-bold">-${annualOperatingCosts.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>{isAr ? 'صافي الربح السنوي المتوقع:' : 'Net Projected Profit:'}</span>
                <span className="font-mono text-emerald-300 font-bold">${Math.round(annualNetProfit).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-slate-400 pt-2 border-t border-slate-800/80">
                <span>{isAr ? 'قيمة الأصول الملموسة المضافة:' : 'Tangible Core IP Added:'}</span>
                <span className="font-mono text-cyan-400 font-bold">${tangibleAssets.toLocaleString()}</span>
              </div>
            </div>

            {/* Benchmark Note */}
            <div className="mt-6 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              <span className="text-white font-semibold block mb-0.5">
                {isAr ? 'ملاحظة للمستثمر والمشتري:' : 'Buyer & Valuation Advisory Note:'}
              </span>
              {isAr
                ? 'إذا كانت المنصة بدون صفقات مسبقة (Pre-revenue)، فإن قيمتها الصافية ترتكز على قيمة النطاق (web3market.xyz) + تكلفة برمجة الكود والعقود الجاهزة، والتي تقدر بين 20,000$ إلى 35,000$. أما بمجرد إتمام أول 10 صفقات، تتضاعف القيمة فوراً إلى أكثر من 80,000$.'
                : 'If acquiring pre-revenue, platform intrinsic value anchors around domain asset + turnkey engineering code ($20k-$35k). Closing the first 10 deals vaults valuation above $80k+ immediately.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
