import React from 'react';
import { DollarSign, Shield, Code, Award, CheckCircle2, AlertTriangle, TrendingUp, Cpu, Sparkles, ArrowUpRight, Lock, Key, Server } from 'lucide-react';

interface ExecutiveSummaryProps {
  lang: 'ar' | 'en';
  onNavigateTab: (tab: string) => void;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ lang, onNavigateTab }) => {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner Alert / Audit Attestation */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950/70 via-slate-900 to-purple-950/70 border border-indigo-500/30 p-6 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isAr ? 'نتائج الفحص والتدقيق الفني الصارم' : 'Comprehensive Due Diligence & Audit Findings'}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {isAr ? 'تقرير تقييم شامل لمنصة web3market.xyz ومستودع الأكواد' : 'Full Evaluation Report for web3market.xyz & Codebase'}
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed">
              {isAr
                ? 'فحص تفصيلي للمنصة، كود المستودع، معمارية العقود الذكية للضمان (Escrow)، خوارزمية الفحص بالذكاء الاصطناعي، والتقييم العادل للنطاق والجدوى الاقتصادية.'
                : 'In-depth audit of platform architecture, smart contract escrow mechanics, AI code audit crawler, domain valuation, and venture feasibility.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onNavigateTab('valuation')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition"
            >
              <span>{isAr ? 'حاسبة التقييم التفاعلية' : 'Interactive Valuation'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateTab('code')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center justify-center gap-2 transition"
            >
              <span>{isAr ? 'فحص الأكواد والأمان' : 'Code & Security'}</span>
              <Code className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Primary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: Domain Value */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/40 transition group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              {isAr ? 'السعر التقديري للنطاق' : 'Domain Appraisal'}
            </span>
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono mb-1">
            $4,500 – $8,500
          </div>
          <div className="text-xs text-slate-400 leading-normal">
            {isAr
              ? 'القيمة السوقية العادلة (تصل إلى 15,000$+ لمستثمر استراتيجي في الكريبتو)'
              : 'Fair market value (up to $15k+ for strategic Web3 M&A players)'}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-mono">web3market.xyz</span>
            <span className="text-emerald-400 font-medium">{isAr ? 'فئة نادرة ومرغوبة' : 'High Tier .xyz'}</span>
          </div>
        </div>

        {/* Card 2: Technical Rating */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/40 transition group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              {isAr ? 'التقييم الفني العام' : 'Technical Score'}
            </span>
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition">
              <Shield className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <div className="text-2xl font-black text-white font-mono">78 / 100</div>
            <span className="text-xs font-bold text-indigo-400 px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
              Grade B+
            </span>
          </div>
          <div className="text-xs text-slate-400 leading-normal">
            {isAr
              ? 'بنية برمجية نظيفة وحديثة مع حاجة لتدعيم أمان الإسكرو وتفادي المركزية'
              : 'Clean modern Next.js/EVM stack with room for escrow decentralization'}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-500">{isAr ? 'مستوى الأمان' : 'Security Level'}</span>
            <span className="text-amber-400 font-medium">{isAr ? 'متوسط إلى عالي' : 'Moderate - High'}</span>
          </div>
        </div>

        {/* Card 3: Codebase Replacement Cost */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-purple-500/40 transition group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              {isAr ? 'تكلفة تطوير الأكواد' : 'Codebase Dev Cost'}
            </span>
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition">
              <Code className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-white font-mono mb-1">
            $12,000 – $22,000
          </div>
          <div className="text-xs text-slate-400 leading-normal">
            {isAr
              ? 'تكلفة بناء منصة مماثلة من الصفر (Front + Escrow Contracts + AI Worker)'
              : 'Replacement cost from scratch (Full-stack Next.js, Smart Contracts, AI scanner)'}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-500">{isAr ? 'الجهد التقديري' : 'Dev Effort'}</span>
            <span className="text-purple-300 font-mono">350 - 500 {isAr ? 'ساعة برمجة' : 'Hours'}</span>
          </div>
        </div>

        {/* Card 4: Total Project Valuation */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 transition group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {isAr ? 'التقييم الإجمالي للمشروع' : 'Total Project Value'}
            </span>
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-400 font-mono mb-1">
            $25,000 – $45,000
          </div>
          <div className="text-xs text-slate-400 leading-normal">
            {isAr
              ? 'كحزمة متكاملة (النطاق + كود المنصة + العلامة التجارية + عقود الإسكرو)'
              : 'As a turnkey venture (Domain + Full Source + Brand + Deployed infrastructure)'}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-500">{isAr ? 'مضاعف التوسع' : 'Growth Upside'}</span>
            <span className="text-emerald-400 font-medium">10x - 20x {isAr ? 'مع الترويج' : 'with GMV'}</span>
          </div>
        </div>
      </div>

      {/* Executive Direct Answers Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Platform Profile & Reality Check */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span>{isAr ? 'ما هي منصة web3market.xyz وماذا تقدم فعلياً؟' : 'What is web3market.xyz and What Does it Deliver?'}</span>
            </h3>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                {isAr
                  ? 'منصة web3market.xyz هي سوق رقمي متخصص (Niche M&A Marketplace) موجه لبيع وشراء مشاريع وتطبيقات الويب 3 (Web3 Projects & dApps). تسعى المنصة لتكون بمثابة "Acquire.com أو Flippa مخصص لعالم البلوكتشين".'
                  : 'web3market.xyz is a specialized on-chain marketplace for acquiring and selling Web3 projects, decentralized applications (dApps), and smart contract repos — acting as an "Acquire.com for the crypto ecosystem".'}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isAr ? 'الميزات الأساسية للمنصة' : 'Core Features'}</span>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>{isAr ? 'فحص تلقائي لأكواد GitHub بالذكاء الاصطناعي (AI Due Diligence)' : 'AI GitHub repository due diligence scanner'}</li>
                    <li>{isAr ? 'غرفة صفقات وضمان مالي مشفر (On-Chain Escrow Deal Room)' : 'On-chain multi-sig escrow & deal room'}</li>
                    <li>{isAr ? 'خوارزمية لتقييم سعر مشاريع الويب 3 (AI Valuation)' : 'AI-assisted Web3 project valuation algorithm'}</li>
                    <li>{isAr ? 'تسجيل دخول بالمحافظ المشفرة (SIWE / RainbowKit)' : 'Wallet native authentication (Sign-in with Ethereum)'}</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span>{isAr ? 'نموذج الأعمال والربح (Monetization)' : 'Monetization Model'}</span>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>{isAr ? 'إدراج المشاريع مجاناً بالكامل (0% Listing Fee) لجذب البائعين' : '100% Free project listing (0% listing fee) to bootstrap supply'}</li>
                    <li>{isAr ? 'عمولة نجاح 7.5% تقتطع تلقائياً فقط عند إغلاق الصفقة' : '7.5% success fee deducted on-chain upon successful deal close'}</li>
                    <li>{isAr ? 'أرخص وأكثر جاذبية من Flippa و Acquire (تأخذان 10% - 15%)' : 'Significantly more competitive than Flippa/Acquire (10-15%)'}</li>
                    <li>{isAr ? 'إمكانية إضافة رسوم فحص متقدم (Premium Audit Services)' : 'Upsell potential for deep human audits & fast-track Escrow'}</li>
                  </ul>
                </div>
              </div>

              {/* Developer & Origin Insight */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/50 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {isAr ? 'معلومات الفريق والمطور (The Core Developer)' : 'Core Developer Profile'}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isAr
                        ? 'الفريق البرمجي (Web3Market Team) له نشاط في بناء تطبيقات مفتوحة المصدر مثل منصة إدارة محافظ الـ NFT (web3market.site)، وبناء برمجيات dApps للتخزين (Staking) والـ ICO، مع تواجد على منصات بيع الكود ومواقع المطورين. يمتلك المطور كفاءة ملحوظة في دمج واجهات Web3 الحديثة (React/Next.js, Tailwind, RainbowKit, Moralis) لكنه يحتاج لتعزيز الجانب المؤسسي والقانوني لخدمات الضمان المالي.'
                        : 'The developer/team has a documented track record of open-source tooling (e.g. NFT portfolio management on web3market.site, staking dApps, ICO contracts). Their front-end Web3 ergonomics are polished, but the operational/legal escrow layer requires institutional hardening.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Technical Findings Table */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>{isAr ? 'خلاصة الفحص الفني والمخاطر الحرجة' : 'Technical Findings & Risk Matrix'}</span>
            </h3>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-emerald-300">{isAr ? 'جودة وتكامل الواجهة (UI/UX): ' : 'UI/UX & Web3 Integrations: '}</span>
                  <span className="text-slate-300">
                    {isAr
                      ? 'تصميم عصري متقن، سرعة استجابة عالية، وربط محافظ سلس يدعم شبكات EVM (Ethereum, Polygon, Arbitrum, Base).'
                      : 'Modern reactive interface, rapid TTFB, seamless wallet onboarding across top EVM networks.'}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-amber-300">{isAr ? 'نقطة انتباه أمنية (التحكيم المركزي للإسكرو): ' : 'Security Attention (Escrow Centralization): '}</span>
                  <span className="text-slate-300">
                    {isAr
                      ? 'عقد الضمان يعتمد على محفظة مسؤول المنصة لفض النزاعات. هذا يضع المنصة تحت مسؤولية قانونية ويتطلب التحول إلى تحكيم لامركزي متعدد الأطراف.'
                      : 'Escrow dispute settlement currently routes through an admin resolver key, creating platform liability and central point of failure.'}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-900/40 flex items-start gap-3">
                <Lock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-blue-300">{isAr ? 'حدود فحص الكود بالذكاء الاصطناعي: ' : 'AI Audit Limitations: '}</span>
                  <span className="text-slate-300">
                    {isAr
                      ? 'محرك الفحص عبر الذكاء الاصطناعي ممتاز للكشف السريع عن الأنماط الشائعة والمكتبات القديمة، ولكنه لا يغني عن اختبارات التدقيق الرياضية (Formal Verification).'
                      : 'AI repo inspection is great for rapid reconnaissance but cannot substitute rigorous formal verification or unit test coverage.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Expert Verdict Card */}
        <div className="space-y-6">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>{isAr ? 'الرأي النهائي للخبير المستشار' : 'Advisor Executive Verdict'}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              {isAr ? 'مشروع واعد جداً بفكرة استراتيجية وتوقيت ممتاز' : 'High-Potential Niche with Prime Market Timing'}
            </h3>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                {isAr
                  ? 'سوق مشاريع الويب 3 يعاني من فوضى بيع المشاريع عبر مجموعات تيليجرام ودسكورد دون ضمانات، ووجود منصة احترافية تجمع النطاق القوي (web3market.xyz) مع محرك فحص ذكي وضمان مالي يمثل فرصة استثمارية هائلة.'
                  : 'Web3 project transfers are currently scattered across Telegram and Discord OTC desks with rampant fraud. A dedicated marketplace with this domain brand and escrow infrastructure bridges a major gap.'}
              </p>
              
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">{isAr ? 'تقييم الفكرة (Concept):' : 'Concept Score:'}</span>
                  <span className="font-bold text-emerald-400 font-mono">9.2 / 10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">{isAr ? 'تقييم النطاق (Domain):' : 'Domain Score:'}</span>
                  <span className="font-bold text-cyan-400 font-mono">8.9 / 10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">{isAr ? 'تقييم كود المنصة (Code):' : 'Code Score:'}</span>
                  <span className="font-bold text-indigo-400 font-mono">7.8 / 10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">{isAr ? 'صعوبة التنفيذ والتسويق:' : 'Execution Barrier:'}</span>
                  <span className="font-bold text-amber-400 font-mono">عالي (سيولة الأطراف)</span>
                </div>
              </div>

              <div className="pt-2 text-slate-300">
                <span className="font-semibold text-white">{isAr ? 'التوصية الاستثمارية:' : 'Investment Recommendation:'}</span>
                <p className="mt-1 text-slate-400">
                  {isAr
                    ? 'الاستحواذ على المنصة والنطاق بسعر تحت 35,000$ يعتبر صفقة رابحة جداً (Under-valued Asset). القيمة الأكبر تكمن في قوة النطاق كمرجع عالمي للعلامة التجارية وقاعدة الكود الجاهزة للاستخدام الفوري.'
                    : 'Acquiring the platform & domain under $35k is a high-alpha purchase. The brand equity of web3market.xyz combined with turnkey code saves months of engineering.'}
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => onNavigateTab('opinion')}
                className="w-full py-2 px-3 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-200 text-xs font-semibold text-center transition"
              >
                {isAr ? 'قراءة التحليل الاستراتيجي وخطة التوسع الكاملة' : 'Read Strategic Deep Dive & Roadmap'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
