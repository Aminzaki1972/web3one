import React from 'react';
import { X, Printer, ShieldCheck, Download, Award, FileText, CheckCircle2 } from 'lucide-react';

interface PrintReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ar' | 'en';
}

export const PrintReportModal: React.FC<PrintReportModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;
  const isAr = lang === 'ar';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>{isAr ? 'التقرير الفني والمالي التنفيذي (جاهز للطباعة والحفظ)' : 'Executive Technical & Valuation Due Diligence Report'}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isAr ? 'طباعة / حفظ كـ PDF' : 'Print / Save PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 overflow-y-auto print:p-0 print:overflow-visible space-y-6 text-slate-200 text-sm bg-slate-900 print:bg-white print:text-black">
          {/* Document Header */}
          <div className="border-b-2 border-indigo-500 pb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-2xl font-black text-cyan-400 print:text-indigo-800">web3market.xyz</span>
                <span className="text-xs px-2 py-0.5 rounded font-mono font-bold bg-emerald-500/20 text-emerald-400 print:bg-emerald-100 print:text-emerald-800">
                  VERIFIED AUDIT
                </span>
              </div>
              <h1 className="text-xl font-bold text-white print:text-black">
                {isAr ? 'وثيقة التدقيق الفني الشامل والتقييم الاستثماري' : 'Comprehensive Technical Audit & Asset Appraisal Dossier'}
              </h1>
              <p className="text-xs text-slate-400 print:text-gray-600">
                {isAr ? 'تاريخ التقرير: 2026 • نوع الأصل: Web3 M&A Marketplace & Category Domain' : 'Audit Date: 2026 • Asset Class: Web3 M&A Marketplace & Category Domain'}
              </p>
            </div>
            <div className="text-right font-mono text-xs text-slate-400 print:text-gray-600">
              <div>Ref: W3M-AUDIT-2026-X</div>
              <div>Security Tier: Grade B+ (78/100)</div>
              <div>Status: Active Target</div>
            </div>
          </div>

          {/* Executive Matrix Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/80 print:bg-gray-100 border border-slate-800 print:border-gray-300">
            <div>
              <span className="text-[11px] text-slate-400 print:text-gray-600 block">{isAr ? 'السعر التقديري للنطاق' : 'Domain Valuation'}</span>
              <span className="text-base font-black font-mono text-cyan-400 print:text-indigo-700">$4,500 – $8,500</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 print:text-gray-600 block">{isAr ? 'تكلفة تطوير الكود' : 'Codebase Cost'}</span>
              <span className="text-base font-black font-mono text-purple-400 print:text-purple-700">$12,000 – $22,000</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 print:text-gray-600 block">{isAr ? 'التقييم الإجمالي للمشروع' : 'Turnkey Asset Value'}</span>
              <span className="text-base font-black font-mono text-emerald-400 print:text-emerald-700">$25,000 – $45,000</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 print:text-gray-600 block">{isAr ? 'التقييم الفني الإجمالي' : 'Overall Audit Score'}</span>
              <span className="text-base font-black font-mono text-amber-400 print:text-amber-700">78 / 100</span>
            </div>
          </div>

          {/* Section 1: Technical & Code Audit Findings */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-white print:text-black flex items-center gap-2 border-b border-slate-800 print:border-gray-300 pb-1">
              <ShieldCheck className="w-4 h-4 text-indigo-400 print:text-indigo-600" />
              <span>{isAr ? '1. نتائج فحص الأكواد والمستودع والبنية المعمارية' : '1. Repository & Smart Contract Technical Audit'}</span>
            </h2>
            <div className="text-xs leading-relaxed space-y-2 text-slate-300 print:text-gray-800">
              <p>
                {isAr
                  ? '• الواجهة والربط: المنصة مبنية بتناغم كامل بين Next.js ومكتبات الويب 3 القياسية (RainbowKit, Wagmi, Tailwind). واجهة الاستخدام سريعة ومتوافقة مع مختلف المحافظ وشبكات EVM.'
                  : '• Front-end & Auth: Built with modern Next.js and industry-standard RainbowKit/Wagmi with EIP-4361 wallet auth.'}
              </p>
              <p>
                {isAr
                  ? '• محرك فحص الذكاء الاصطناعي (AI Due Diligence): يقوم بفحص مستودعات GitHub العامة بحثاً عن أنماط الأخطاء الكلاسيكية والمكتبات غير الآمنة. يعتبر أداة جذب تسويقية قوية للمشترين المبتدئين، لكنه لا يلغي الحاجة للفحص الرياضي الصلب.'
                  : '• AI Due Diligence: Scans public GitHub repositories for smart contract smells and dependency vulnerabilities. Strong sales accelerator.'}
              </p>
              <p>
                {isAr
                  ? '• عقد الإسكرو والضمان المالي (Escrow): العقد يقتطع عمولة المنصة (7.5%) تلقائياً لحساب الخزينة، لكنه يعتمد حالياً على عنوان محفظة تحكيم مركزية لفض النزاعات، وهو ما يوصى باستبداله ببروتوكول تحكيم لامركزي (مثل Kleros).'
                  : '• Escrow Mechanics: Transparent 7.5% success fee cut; relies on admin arbiter key for disputes, requiring decentralization upgrade.'}
              </p>
            </div>
          </div>

          {/* Section 2: Domain Valuation Analysis */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-white print:text-black flex items-center gap-2 border-b border-slate-800 print:border-gray-300 pb-1">
              <Award className="w-4 h-4 text-cyan-400 print:text-cyan-600" />
              <span>{isAr ? '2. تقييم نطاق web3market.xyz ومقارنات السوق' : '2. Domain Name Appraisal (web3market.xyz)'}</span>
            </h2>
            <div className="text-xs leading-relaxed space-y-2 text-slate-300 print:text-gray-800">
              <p>
                {isAr
                  ? '• التقييم المالي للنطاق مجرداً: يتراوح بين 1,200$ للتسييل الفوري السريع، و 4,500$ إلى 8,500$ كمشتري نهائي عادي، وتصل قيمته إلى 15,000$ فأكثر لمستثمر أو صندوق ويب 3 يبحث عن علامة ريادية.'
                  : '• Domain Valuation Range: $1,200-$2,500 (liquid flip), $4,500-$8,500 (fair end-user), and $12,000-$18,000+ (strategic enterprise).'}
              </p>
              <p>
                {isAr
                  ? '• عوامل القوة: امتداد .xyz هو التوب في الويب 3، والاسم مكون من كلمتين رئيسيتين تشكلان فئة السوق (Category Exact Match) دون شُرَط أو زوائد.'
                  : '• Key Drivers: Exact match category keyword pair, unhyphenated, clean pronunciation, native .xyz crypto prestige.'}
              </p>
            </div>
          </div>

          {/* Section 3: Concept & Developer Verdict */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-white print:text-black flex items-center gap-2 border-b border-slate-800 print:border-gray-300 pb-1">
              <Award className="w-4 h-4 text-purple-400 print:text-purple-600" />
              <span>{isAr ? '3. الخلاصة الاستراتيجية والرأي في المطور والفكره' : '3. Strategic Opinion & Builder Assessment'}</span>
            </h2>
            <div className="text-xs leading-relaxed space-y-2 text-slate-300 print:text-gray-800">
              <p>
                {isAr
                  ? '• الفكرة (9/10): حل مشكلة غياب أسواق موثوقة لصفقات الويب 3 هو احتياج حقيقي في الصناعة. نموذج 0% إدراج و 7.5% عمولة نجاح ذكي وتنافسي للغاية.'
                  : '• The Idea (9/10): Clear market void for dedicated crypto M&A; zero-friction 0% listing fee and 7.5% success take-rate.'}
              </p>
              <p>
                {isAr
                  ? '• المطور/المكوّر (7.8/10): مطور عملي سريع التنفيذ ذو كفاءة واضحة في دمج واجهات Web3 والأدوات مفتوحة المصدر، مع الحاجة لتقوية الإطار القانوني والتحكيم اللامركزي.'
                  : '• The Builder (7.8/10): Tactical and fast execution track record across multiple dApps; needs institutional compliance and decentralized arbitration backing.'}
              </p>
            </div>
          </div>

          {/* Attestation Signatures Footer */}
          <div className="pt-6 border-t border-slate-800 print:border-gray-300 flex justify-between items-end text-xs text-slate-400 print:text-gray-600 font-mono">
            <div>
              <p>{isAr ? 'تم الإعداد والتدقيق بواسطة:' : 'Audited & Prepared by:'}</p>
              <p className="font-bold text-slate-200 print:text-black mt-1">Web3 Technical Advisory & Due Diligence Engine</p>
            </div>
            <div className="text-right">
              <p>{isAr ? 'اعتماد التقييم:' : 'Verification Stamp:'}</p>
              <p className="font-bold text-emerald-400 print:text-emerald-700 mt-1">APPROVED AUDIT DOSSIER ✓</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
