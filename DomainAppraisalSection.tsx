import React from 'react';
import { Globe, DollarSign, Award, CheckCircle2, TrendingUp, Sparkles, ExternalLink, ShieldAlert, BarChart2 } from 'lucide-react';
import { DOMAIN_COMPARABLES } from '../data/auditData';

interface DomainAppraisalSectionProps {
  lang: 'ar' | 'en';
}

export const DomainAppraisalSection: React.FC<DomainAppraisalSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Globe className="w-4 h-4" />
            <span>{isAr ? 'تقييم النطاق والمقارنات السوقية' : 'Domain Appraisal & Aftermarket Benchmarks'}</span>
          </div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="font-mono text-cyan-400">web3market.xyz</span>
            <span className="text-sm font-normal px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {isAr ? 'نطاق استراتيجي عالي القيمة' : 'Category Defining Tier'}
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            {isAr
              ? 'تقييم شامل لنطاق web3market.xyz وفق معايير أسواق النطاقات العالمية ومبيعات .xyz المماثلة في قطاع الكريبتو'
              : 'Holistic appraisal based on aftermarket sales volume, keyword search intent, and Web3 industry sentiment'}
          </p>
        </div>
      </div>

      {/* Domain Value Spectrum (3 Tiers) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Tier 1: Wholesale */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {isAr ? 'سعر التسييل السريع (Wholesale)' : 'Wholesale / Quick Flip'}
            </span>
            <span className="text-xs font-mono text-slate-500">{isAr ? 'خلال 7-14 يوم' : '7-14 Days'}</span>
          </div>
          <div className="text-2xl font-black text-slate-200 font-mono">
            $1,200 – $2,500
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {isAr
              ? 'السعر النقدي الفوري عند البيع لتجار النطاقات (Domain Investors) دون انتظار المشتري النهائي.'
              : 'Immediate liquidity price when offloading to domain portfolio traders and flippers without marketing.'}
          </p>
        </div>

        {/* Tier 2: End-User (Recommended Market Value) */}
        <div className="bg-gradient-to-b from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl p-5 space-y-3 relative overflow-hidden shadow-lg shadow-cyan-950/30">
          <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-bl-lg font-mono">
            {isAr ? 'القيمة السوقية العادلة' : 'Fair Market Value'}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              {isAr ? 'سعر المشتري النهائي (End-User)' : 'End-User Valuation'}
            </span>
          </div>
          <div className="text-3xl font-black text-white font-mono">
            $4,500 – $8,500
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {isAr
              ? 'السعر العادل لشركة أو فريق يريد تأسيس منصة تداول ومشاريع Web3 تحت اسم علامة تجارية قوية وموثوقة.'
              : 'The fair acquisition price for a startup or DAO launching a dedicated Web3 marketplace.'}
          </p>
        </div>

        {/* Tier 3: Strategic Buyer */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
              {isAr ? 'مستثمر استراتيجي (Strategic Buyer)' : 'Strategic Enterprise Value'}
            </span>
            <span className="text-xs font-mono text-purple-400 font-bold">Web3 Unicorn</span>
          </div>
          <div className="text-2xl font-black text-purple-300 font-mono">
            $12,000 – $18,000+
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {isAr
              ? 'عند البيع لجهة كبرى مثل منصات M&A (مثل Acquire.com) للتوسع في Web3 أو صندوق استثماري مشفر.'
              : 'Acquisition by tier-1 M&A brokers or crypto venture syndicates seeking the prime authority brand.'}
          </p>
        </div>
      </div>

      {/* Why web3market.xyz is strong - Pillars */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-cyan-400" />
          <span>{isAr ? 'العوامل الخمسة التي تمنح النطاق قيمته العالية' : '5 Core Drivers of web3market.xyz Valuation'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-mono">1</span>
              <span>{isAr ? 'تطابق الكلمات المفتاحية (Exact Match)' : 'Exact Category Match'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'يحتوي على الكلمتين الأكثر بحثاً وتحديداً للمجال (Web3 + Market)، مما يمنحه أفضلية فورية في محركات البحث (SEO Authority) وسهولة الحفظ.'
                : 'Contains the two highest-intent industry keywords (Web3 + Market), conferring instant organic SEO authority.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono">2</span>
              <span>{isAr ? 'مكانة امتداد .xyz في قطاع الكريبتو' : 'Prestige of .xyz in Web3'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'امتداد .xyz هو الامتداد المفضل وغير المنازع لمشاريع الويب 3 ومجتمعات التشفير (Crypto-native TLD)، ويُعد في هذا القطاع مكافئاً أو متفوقاً في رمزيته على .com.'
                : '.xyz is the undisputed native top-level domain for crypto protocols (Base, Uniswap, ENS, Alphabet).'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono">3</span>
              <span>{isAr ? 'القابلية للعلامة التجارية (Brandability)' : 'Supreme Brandability'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'اسم مكون من كلمتين فقط بدون شُرَط (-) أو أرقام عشوائية، سهل النطق بالإنجليزية وواضح المعنى لجميع المستخدمين حول العالم.'
                : 'Only two clean words without hyphens or numbers. Globally phonetically fluent and unambiguous.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-mono">4</span>
              <span>{isAr ? 'الارتباط بمنصة عاملة (Active Utility)' : 'Active Utility & Working App'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'النطاق ليس مجرد صفحة معطلة، بل يرتبط بموقع نشط وتطبيق متكامل مع أرشفة في محركات البحث وتواجد على منصات التواصل.'
                : 'Not an idle parked page; backed by working dApp infrastructure, search indexing, and active presence.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-mono">5</span>
              <span>{isAr ? 'النمو السريع لحجم سوق الويب 3' : 'Explosive Web3 TAM'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'حجم سوق خدمات وتطبيقات الويب 3 ينمو بمعدل سنوي يتجاوز 40%، مما يزيد الطلب بشكل مستمر على النطاقات القيادية للقطاع.'
                : 'Web3 tech market is compounding at over 40% annually, driving relentless buy-side pressure on flagship category names.'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-mono">6</span>
              <span>{isAr ? 'قلة البدائل المتاحة (Scarcity)' : 'Scarcity of Category Names'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'جميع النطاقات المماثلة مثل web3.xyz و crypto.xyz و market.xyz محجوزة وتباع بمئات آلاف الدولارات، مما يجعل هذا النطاق بديلاً استراتيجياً نادراً.'
                : 'Single-tier substitutes (web3.xyz, market.xyz) trade for $100k+, leaving web3market.xyz as the prime accessible category handle.'}
            </p>
          </div>
        </div>
      </div>

      {/* Comparable Sales Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span>{isAr ? 'مقارنات المبيعات الحقيقية في سوق نطاقات .xyz' : 'Verified .xyz Aftermarket Sales Benchmarks'}</span>
          </h3>
          <p className="text-xs text-slate-400">
            {isAr
              ? 'مبيعات حقيقية موثقة في سوق النطاقات توضح السيولة والقوة السعرية للأسماء التقنية والويب 3'
              : 'Publicly reported sales indicating market appetite and price ceilings for premium .xyz assets'}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead className="bg-slate-950 text-slate-400 font-mono uppercase border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">{isAr ? 'النطاق' : 'Domain'}</th>
                <th className="py-3 px-4">{isAr ? 'سعر البيع الموثق' : 'Sale Price (USD)'}</th>
                <th className="py-3 px-4">{isAr ? 'سنة البيع' : 'Year'}</th>
                <th className="py-3 px-4">{isAr ? 'سوق البيع' : 'Venue'}</th>
                <th className="py-3 px-4">{isAr ? 'وجه الشبه والأهمية' : 'Market Relevance'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium text-slate-300">
              {DOMAIN_COMPARABLES.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition">
                  <td className="py-3 px-4 font-mono font-bold text-cyan-400">
                    {item.domain}
                  </td>
                  <td className="py-3 px-4 font-mono font-black text-emerald-400 text-sm">
                    ${item.salePriceUSD.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-400">
                    {item.saleDate}
                  </td>
                  <td className="py-3 px-4 text-slate-400">
                    {item.venue}
                  </td>
                  <td className="py-3 px-4 text-slate-300">
                    {isAr ? item.relevanceAr : item.relevanceEn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
