import React from 'react';
import { Award, Lightbulb, Users, ShieldAlert, Rocket, Target, CheckCircle, AlertTriangle, ChevronRight, Zap } from 'lucide-react';

interface StrategicOpinionSectionProps {
  lang: 'ar' | 'en';
}

export const StrategicOpinionSection: React.FC<StrategicOpinionSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
          <Award className="w-4 h-4" />
          <span>{isAr ? 'التحليل الاستراتيجي والرأي المهني' : 'Strategic Opinion & Venture Due Diligence'}</span>
        </div>
        <h2 className="text-2xl font-bold text-white">
          {isAr ? 'رأي المستشار التقني في: الفكرة، المطور (المكوّر)، والجدوى السوقية' : 'Advisor Verdict: The Core Idea, Builder Profile & Market Timing'}
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          {isAr
            ? 'قراءة نقدية متجردة لنقاط القوة الحقيقية، التحديات التنفيذية، وكيفية تعظيم العائد على الاستثمار'
            : 'Unbiased assessment of concept viability, developer execution velocity, and monetization levers'}
        </p>
      </div>

      {/* Two Main Critique Cards: The Idea vs The Developer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Critique 1: The Idea */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isAr ? '1. الرأي في "الفكرة" (The Core Concept)' : '1. Concept Evaluation'}
                </h3>
                <span className="text-xs text-emerald-400 font-mono font-semibold">
                  {isAr ? 'التقييم: 9.0 / 10 (فكرة ممتازة بتوقيت ملائم)' : 'Score: 9.0 / 10 (High Market Timing)'}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-300 leading-relaxed">
            <p>
              {isAr
                ? 'فكرة إنشاء سوق متخصص للاستحواذ على مشاريع الويب 3 (Web3 MicroAcquire) هي فكرة عبقرية ومطلوبة بشدة. حالياً، منصات البيع التقليدية مثل Flippa و Acquire.com تفشل تماماً في استيعاب طبيعة الويب 3 لأنها لا تدعم التدقيق الأمني للعقود الذكية، ولا تعرف كيفية نقل خزائن الـ Multi-sig، ولا توفر إسكرو مشفر بالعملات المستقرة.'
                : 'The concept of a dedicated Web3 project marketplace is outstanding. Traditional platforms (Flippa, Acquire.com) fundamentally struggle with crypto assets: they cannot audit smart contracts, lack on-chain multisig handovers, and have no crypto escrow infrastructure.'}
            </p>

            <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-indigo-300">
                {isAr ? 'أهم الميزات التنافسية للفكرة:' : 'Competitive Advantages:'}
              </div>
              <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                <li>{isAr ? 'سوق أزرق (Blue Ocean): عدم وجود منافس عملاق مهيمن في مساحة صفقات الويب 3 المتوسطة والصغيرة.' : 'Blue Ocean space with no dominant monopoly yet'}</li>
                <li>{isAr ? 'الجمع بين فحص الذكاء الاصطناعي والإسكرو في مكان واحد يعطي ثقة للمشتري غير المتخصص تقنياً.' : 'Combining AI audit with on-chain escrow builds instant trust for non-dev buyers'}</li>
                <li>{isAr ? 'نموذج العمولة 7.5% بدون رسوم إدراج يخفض حاجز الدخول للبائعين مقارنة بـ 10-15% في المواقع التقليدية.' : '7.5% success fee with 0% listing fee lowers barriers to entry'}</li>
              </ul>
            </div>

            <div className="p-3 bg-amber-950/20 rounded-xl border border-amber-900/30 text-xs text-amber-200">
              <span className="font-bold">{isAr ? 'التحدي الأكبر للفكرة: ' : 'The Core Challenge: '}</span>
              {isAr
                ? 'مشكلة "البيضة والدجاجة" في الأسواق المزدوجة (Two-sided Marketplaces). تحتاج المنصة لجهد تسويقي كثيف لجذب مشاريع حقيقية ذات قيمة وأرباح وليس مجرد كود منسوخ أو مشاريع احتيالية.'
                : 'The classic chicken-and-egg supply liquidity challenge. It requires curated deal sourcing to filter out rug-pull forks and dead projects.'}
            </div>
          </div>
        </div>

        {/* Critique 2: The Developer / Core Builder */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isAr ? '2. الرأي في "المكوّر والمطور" (The Developer)' : '2. Developer & Execution Assessment'}
                </h3>
                <span className="text-xs text-indigo-400 font-mono font-semibold">
                  {isAr ? 'التقييم: 7.8 / 10 (مطور نشط ذو كفاءة تطبيقية جيدة)' : 'Score: 7.8 / 10 (Strong Tactical Full-stack)'}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-300 leading-relaxed">
            <p>
              {isAr
                ? 'المطور (أو الفريق القائم على web3market) يظهر فهماً عملياً ممتازاً لمنظومة تطوير الويب 3 الحديثة. لديه سجل واضح في شحن منتجات فعلية (مثل مشروع NFT Portfolio على web3market.site، وسكربتات التخزين Staking و dApps على منصات مثل Fileev ومجتمعات المطورين).'
                : 'The builder possesses strong practical fluency with modern Web3 web engineering. They have actively shipped functional tools (e.g. NFT Portfolio tool, staking dApps, Telegram crypto bots).'}
            </p>

            <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-purple-300">
                {isAr ? 'نقاط القوة عند المطور:' : 'Developer Strengths:'}
              </div>
              <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                <li>{isAr ? 'سرعة الإنجاز والربط بين واجهات المستخدم والمحافظ المشفرة (Next.js + RainbowKit).' : 'Rapid execution and clean UI/UX integration with crypto wallets'}</li>
                <li>{isAr ? 'حس تجاري ذكي في اختيار النطاقات المميزة واختيار القطاعات الصاعدة.' : 'Astute commercial sense in securing prime category domain names'}</li>
                <li>{isAr ? 'القدرة على دمج واجهات الذكاء الاصطناعي مع تدفقات البلوكتشين.' : 'Pragmatic orchestration of AI APIs with Web3 smart contracts'}</li>
              </ul>
            </div>

            <div className="p-3 bg-indigo-950/20 rounded-xl border border-indigo-900/30 text-xs text-indigo-200">
              <span className="font-bold">{isAr ? 'ما يحتاجه المطور للارتقاء لمستوى الشركات المليارية: ' : 'Improvement Roadmap for Builder: '}</span>
              {isAr
                ? 'الانتقال من "مطور أدوات وفول ستاك فردي" إلى "بنية مؤسسية" تتضمن تدقيق أمني خارجي معتمد لعقود الإسكرو (Audit Report)، وإضافة إجراءات امتثال قانوني لمنع غسيل الأموال في الصفقات الكبرى.'
                : 'Institutionalize the operations: commission third-party smart contract audits and formalize legal escrow terms of service for high-ticket transactions.'}
            </div>
          </div>
        </div>
      </div>

      {/* SWOT Analysis Matrix */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-cyan-400" />
          <span>{isAr ? 'مصفوفة التحليل الرباعي (SWOT Analysis)' : 'Comprehensive SWOT Matrix for web3market.xyz'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Strengths */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>{isAr ? 'نقاط القوة (Strengths)' : 'Strengths'}</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>{isAr ? 'نطاق استثنائي قوي جداً (web3market.xyz) يسهل تذكره ويمنح مصداقية فورية.' : 'Category-killer domain brand with instant authority.'}</li>
              <li>{isAr ? 'كود عصري جاهز ومتكامل يختصر أكثر من 400 ساعة تطوير.' : 'Turnkey production-ready Next.js & EVM architecture.'}</li>
              <li>{isAr ? 'ميزة فحص الأكواد بالذكاء الاصطناعي قبل الشراء توفر قيمة مضافة ملموسة.' : 'AI pre-purchase technical due diligence adds differentiated value.'}</li>
              <li>{isAr ? 'رسوم منافسة (7.5%) بدون تكلفة إدراج مسبقة.' : 'Favorable 7.5% success fee with no upfront seller friction.'}</li>
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>{isAr ? 'نقاط الضعف (Weaknesses)' : 'Weaknesses'}</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>{isAr ? 'اعتماد عقد الإسكرو على مفتاح تحكيم مركزي للمنصة في حالات النزاع.' : 'Centralized admin arbiter key in dispute resolution logic.'}</li>
              <li>{isAr ? 'الحاجة للتحقق اليدوي عند نقل النطاقات التقليدية وحسابات السيرفرات.' : 'Manual off-chain verification required for DNS and cloud hosting handovers.'}</li>
              <li>{isAr ? 'قلة الصفقات الكبرى الموثقة علناً في مرحلتها المبكرة الحالية.' : 'Early-stage supply liquidity and limited public track record of large exits.'}</li>
            </ul>
          </div>

          {/* Opportunities */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/40 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Rocket className="w-4 h-4" />
              <span>{isAr ? 'الفرص الاستثمارية (Opportunities)' : 'Opportunities'}</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>{isAr ? 'الانفجار المتوقع في سوق صفقات الويب 3 مع كل دورة صعود لسوق الكريبتو.' : 'Surging M&A appetite in crypto bull cycles as founders seek exits.'}</li>
              <li>{isAr ? 'إمكانية إطلاق توكن خاص بالمنصة لمكافأة البائعين والمشترين وتخفيض العمولات.' : 'Launch of a governance token or staking tier to discount fees.'}</li>
              <li>{isAr ? 'تقديم خدمات تدقيق أمني بشري مدفوع (Premium Audit) بعائد مرتفع.' : 'Upsell manual smart contract audits alongside the free AI scanner.'}</li>
            </ul>
          </div>

          {/* Threats */}
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>{isAr ? 'التهديدات والمخاطر (Threats)' : 'Threats'}</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>{isAr ? 'مخاطر مشاريع النصب (Rug pulls) والأكواد المسروقة في حال لم يتم التحقق بدقة.' : 'Risk of malicious actors listing backdoored repos or stolen forks.'}</li>
              <li>{isAr ? 'التنظيمات القانونية الخاصة بخدمات الضمان المالي المالي (Escrow Licensing).' : 'Financial escrow compliance and licensing regulations across jurisdictions.'}</li>
              <li>{isAr ? 'دخول منصات كبرى مثل Acquire.com بميزة دعم الكريبتو.' : 'Established Web2 acquisition platforms expanding natively into Web3.'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 6-Step Actionable Scaling Roadmap */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          <span>{isAr ? 'خريطة طريق عملية من 6 خطوات لرفع قيمة المنصة إلى 100,000$+ فوراً' : '6-Step Actionable Roadmap to Scale Valuation Past $100k+'}</span>
        </h3>
        <p className="text-xs text-slate-400 mb-5">
          {isAr
            ? 'خطوات تنفيذية موجهة للمشتري أو المطور لتحويل المشروع إلى شركة ناشئة ذات قيمة سوقية عالية'
            : 'Operational levers to supercharge buyer confidence, liquidity, and acquisition valuation'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0">1</span>
            <div className="text-xs">
              <span className="font-bold text-white block mb-0.5">{isAr ? 'تدقيق عقد الإسكرو' : 'Audit Escrow Contract'}</span>
              <span className="text-slate-400">{isAr ? 'الحصول على تقرير أمان معتمد من شركة تدقيق (مثل CertiK أو Cyfrin) لتعزيز موثوقية أموال المشترين.' : 'Obtain verified audit from reputable security firm to build institutional trust.'}</span>
            </div>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0">2</span>
            <div className="text-xs">
              <span className="font-bold text-white block mb-0.5">{isAr ? 'التحكيم اللامركزي' : 'Decentralized Arbitration'}</span>
              <span className="text-slate-400">{isAr ? 'دمج بروتوكول تحكيم مثل Kleros أو UMA Oracle لإزالة صلاحيات التدخل الأحادي لمدير الموقع.' : 'Integrate Kleros or decentralized dispute oracle to remove admin escrow liability.'}</span>
            </div>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">3</span>
            <div className="text-xs">
              <span className="font-bold text-white block mb-0.5">{isAr ? 'جذب أول 20 بائع موثوق' : 'Bootstrap Verified Sellers'}</span>
              <span className="text-slate-400">{isAr ? 'التواصل المباشر مع مطوري بوتات التداول ومشاريع الـ DApps المربحة لإدراج مشاريعهم حصرياً.' : 'Directly outreach to Telegram bot & utility dApp builders to secure premier listings.'}</span>
            </div>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold shrink-0">4</span>
            <div className="text-xs">
              <span className="font-bold text-white block mb-0.5">{isAr ? 'أتمتة تسليم النطاقات' : 'Automate DNS Handoff'}</span>
              <span className="text-slate-400">{isAr ? 'ربط API مع مسجلي النطاقات والتحقق الآلي من TXT Records قبل الإفراج عن المبلغ للبائع.' : 'Implement automated DNS TXT record challenge verification prior to escrow release.'}</span>
            </div>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0">5</span>
            <div className="text-xs">
              <span className="font-bold text-white block mb-0.5">{isAr ? 'شراكات مع حاضنات Web3' : 'DAO & Incubator Partnerships'}</span>
              <span className="text-slate-400">{isAr ? 'عقد اتفاقيات مع حاضنات الأعمال ومسرعات مشاريع الكريبتو ليكون web3market بوابة التخارج الرسمية.' : 'Partner with Web3 hackathons and accelerators as their secondary exit platform.'}</span>
            </div>
          </div>

          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-bold shrink-0">6</span>
            <div className="text-xs">
              <span className="font-bold text-white block mb-0.5">{isAr ? 'المحتوى والـ SEO للنطاق' : 'SEO & Domain Content'}</span>
              <span className="text-slate-400">{isAr ? 'نشر مقالات دورية عن تقييم مشاريع الويب 3 وكيفية بيع الـ DApps لاستغلال قوة الكلمات المفتاحية للنطاق.' : 'Publish valuation guides for dApps to monopolize organic search rankings.'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
