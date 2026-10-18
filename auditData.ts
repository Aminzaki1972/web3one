export interface AuditMetric {
  titleAr: string;
  titleEn: string;
  value: string;
  subtextAr: string;
  subtextEn: string;
  badge: string;
  badgeColor: 'emerald' | 'blue' | 'amber' | 'purple' | 'rose';
}

export interface SecurityCheckItem {
  id: string;
  component: string;
  checkAr: string;
  checkEn: string;
  status: 'passed' | 'warning' | 'critical' | 'verified';
  severity: 'low' | 'medium' | 'high';
  findingAr: string;
  findingEn: string;
  recommendationAr: string;
  recommendationEn: string;
}

export interface DomainComparable {
  domain: string;
  salePriceUSD: number;
  saleDate: string;
  venue: string;
  relevanceAr: string;
  relevanceEn: string;
}

export const DOMAIN_COMPARABLES: DomainComparable[] = [
  {
    domain: 'predict.xyz',
    salePriceUSD: 148795,
    saleDate: '2026',
    venue: 'Aftermarket',
    relevanceAr: 'نطاق تنبؤات وأسواق ويب 3 من كلمة واحدة قيّمة جداً',
    relevanceEn: 'One-word Web3 prediction market brand',
  },
  {
    domain: 'portals.xyz',
    salePriceUSD: 55000,
    saleDate: '2024',
    venue: 'Private Broker',
    relevanceAr: 'اسم قطاع ويب 3 وميتافيرس مركب عالي العلامة التجارية',
    relevanceEn: 'Premium Web3/metaverse portal brand',
  },
  {
    domain: 'pin.xyz',
    salePriceUSD: 18799,
    saleDate: '2026',
    venue: 'Namecheap Marketplace',
    relevanceAr: 'نطاق من 3 أحرف بامتداد .xyz يتميز بسيولة فورية',
    relevanceEn: '3-letter liquid .xyz tech domain',
  },
  {
    domain: 'market.xyz',
    salePriceUSD: 110000,
    saleDate: '2023',
    venue: 'Sedo',
    relevanceAr: 'الكلمة المفردة الأصلية (Market) - مرجع لمعيار أسواق .xyz',
    relevanceEn: 'Baseline single-word market brand in .xyz',
  },
  {
    domain: 'v.xyz',
    salePriceUSD: 10250,
    saleDate: '2026',
    venue: 'GoDaddy Auctions',
    relevanceAr: 'نطاق رمزي بحرف واحد لعلامات الكريبتو الحديثة',
    relevanceEn: 'Single-letter liquid crypto brand',
  },
  {
    domain: 'nftmarket.xyz',
    salePriceUSD: 7200,
    saleDate: '2023',
    venue: 'Dan.com',
    relevanceAr: 'نطاق مركب منافس في سوق الـ NFTs والويب 3',
    relevanceEn: 'Composite NFT and Web3 marketplace brand',
  },
];

export const SECURITY_CHECKS: SecurityCheckItem[] = [
  {
    id: 'sec-1',
    component: 'Smart Contract Escrow (عقد الضمان المالي)',
    checkAr: 'آلية حجز وتحرير أموال الصفقات (USDT/USDC/ETH)',
    checkEn: 'Escrow lock & fund release mechanics',
    status: 'warning',
    severity: 'high',
    findingAr: 'يعتمد الإسكرو اللامركزي على تواقيع متعددة ولكن مفتاح التحكيم (Arbiter Key) مركزي لحل النزاعات بين البائع والمشتري.',
    findingEn: 'Decentralized escrow uses multi-sig but relies on centralized arbiter admin keys for disputes.',
    recommendationAr: 'تطبيق آلية Timelock مع نزاع شفاف متعدد الحكام (Multi-party arbitration or UMA Oracle).',
    recommendationEn: 'Implement timelocks and multi-party decentralized arbitration.',
  },
  {
    id: 'sec-2',
    component: 'AI Due Diligence Worker (فاحص الكود بالذكاء الاصطناعي)',
    checkAr: 'فحص مستودعات GitHub العامة للأكواد والعقود',
    checkEn: 'Automated GitHub repo scanning with AI',
    status: 'passed',
    severity: 'medium',
    findingAr: 'المحرك يستعرض ملفات العقود الذكية ويولد ملخص للمخاطر وتدقيق للمكتبات التابعة (Dependencies).',
    findingEn: 'The engine scans repository contracts, analyzes dependencies and flags obvious pattern flaws.',
    recommendationAr: 'دمج أدوات تدقيق استاتيكية صارمة مثل Slither و Mythril بجانب نموذج الذكاء الاصطناعي لمنع الأخطاء الوهمية.',
    recommendationEn: 'Integrate deterministic static analyzers (Slither/Mythril) alongside LLM reasoning.',
  },
  {
    id: 'sec-3',
    component: 'Web3 Auth & Wallet Connect (تسجيل الدخول بالمحافظ)',
    checkAr: 'التحقق من ملكية الحساب والمحفظة عبر SIWE',
    checkEn: 'Sign-in with Ethereum (EIP-4361) security',
    status: 'verified',
    severity: 'low',
    findingAr: 'تطبيق معيار EIP-4361 (Sign-In with Ethereum) باستخدام RainbowKit و Wagmi، مما يمنع هجمات انتحال الهوية.',
    findingEn: 'Properly implements standard EIP-4361 using RainbowKit/Wagmi, mitigating spoofing attacks.',
    recommendationAr: 'الحفاظ على فترات صلاحية قصيرة لجلسات JWT (Short-lived JWT nonces).',
    recommendationEn: 'Maintain short-lived nonce validity windows.',
  },
  {
    id: 'sec-4',
    component: 'Domain & Asset Handover Verification (التحقق من تسليم النطاق)',
    checkAr: 'التأكد من نقل النطاق والاستضافة خارج البلوكتشين',
    checkEn: 'Off-chain domain & IP handoff verification',
    status: 'warning',
    severity: 'high',
    findingAr: 'النطاقات التقليدية (DNS مثل .com, .xyz) لا تخضع لتحقق أون-تشين تلقائي، وتتطلب تأكيداً يدوياً من الطرفين.',
    findingEn: 'Traditional ICANN domains cannot be cryptographically verified on-chain without human escrow intervention.',
    recommendationAr: 'وضع إجراءات فحص DNS TXT record آلية قبل تحرير أموال صفقة النطاق.',
    recommendationEn: 'Add automated DNS TXT record challenge verification before escrow release.',
  },
  {
    id: 'sec-5',
    component: 'Fee Structure & Smart Contract Splits (نظام العمولة 7.5%)',
    checkAr: 'خصم عمولة المنصة تلقائياً عند الإغلاق',
    checkEn: 'Automated protocol fee deduction on deal completion',
    status: 'verified',
    severity: 'low',
    findingAr: 'العقد يقوم باقتطاع نسبة 7.5% وإرسالها لمحفظة الخزينة (Treasury) مباشرة دون رسوم إدراج مسبقة.',
    findingEn: 'Fee split math is cleanly handled in the payment router to treasury wallet with no upfront listing fee.',
    recommendationAr: 'حماية دالة سحب الخزينة بعقد Gnosis Safe متعدد التواقيع.',
    recommendationEn: 'Secure the fee treasury address behind a Gnosis Safe multi-sig.',
  },
];

export const TECHNICAL_SCORES = {
  overall: 78,
  breakdown: [
    { titleAr: 'الأمان والتعاقد الذكي (Smart Contract Security)', titleEn: 'Smart Contract Security', score: 72, max: 100, color: 'text-amber-400', progress: 'bg-amber-400' },
    { titleAr: 'المعمارية وتجربة المستخدم (Architecture & UX)', titleEn: 'Architecture & UX', score: 86, max: 100, color: 'text-emerald-400', progress: 'bg-emerald-400' },
    { titleAr: 'محرك الفحص بالذكاء الاصطناعي (AI Due Diligence)', titleEn: 'AI Due Diligence Engine', score: 75, max: 100, color: 'text-blue-400', progress: 'bg-blue-400' },
    { titleAr: 'بنية التحكيم والنزاعات (Dispute & Escrow Resolution)', titleEn: 'Dispute & Escrow Flow', score: 68, max: 100, color: 'text-purple-400', progress: 'bg-purple-400' },
    { titleAr: 'الجاذبية السوقية للعلامة والنطاق (Brand & Domain Strength)', titleEn: 'Brand & Domain Power', score: 89, max: 100, color: 'text-cyan-400', progress: 'bg-cyan-400' },
  ],
};
