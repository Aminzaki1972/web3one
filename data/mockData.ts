import {
  BlockchainNetwork,
  WalletAsset,
  MarketIndex,
  GlobalStock,
  BondYield,
  CommodityItem,
  WeatherData,
  NewsArticle,
  SocialPost,
  StreamingChannel,
  MovieShow,
  Web3ProjectListing,
  Web3JobListing
} from '../types';

export const WEB3_JOB_LISTINGS: Web3JobListing[] = [
  {
    id: 'job-1',
    title: 'Senior Solidity & Smart Contract Engineer',
    company: 'Web3Jobs Protocol',
    logoBg: 'bg-indigo-600',
    salaryRangeUSD: '$130,000 - $180,000',
    location: 'Remote (عن بُعد عالمياً)',
    jobType: 'Full-time',
    skills: ['Solidity', 'Foundry', 'Hardhat', 'EVM Gas Optimization'],
    postedAt: 'منذ ساعتين',
    description: 'تطوير عقود ذكية متقدمة للضمان المالي (Escrow) والتبادل اللامركزي مع التركيز على الأمان وتفادي ثغرات Reentrancy.',
    cryptoPaymentToken: 'USDT / USDC',
    applicantsCount: 19
  },
  {
    id: 'job-2',
    title: 'Full-Stack Web3 Frontend Developer (Next.js / Wagmi)',
    company: 'WEB3ONE Labs',
    logoBg: 'bg-cyan-600',
    salaryRangeUSD: '$110,000 - $150,000',
    location: 'Remote (الشرق الأوسط / أوروبا)',
    jobType: 'Full-time',
    skills: ['React', 'Next.js 15', 'Wagmi', 'Tailwind', 'RainbowKit'],
    postedAt: 'اليوم',
    description: 'بناء واجهات مستخدم فائقة الاستجابة لتطبيقات Super-Apps وتكامل المحافظ متعددة الشبكات وشارتات التداول اللحظية.',
    cryptoPaymentToken: 'USDT / ETH',
    applicantsCount: 34
  },
  {
    id: 'job-3',
    title: 'Solana & Rust Core Protocol Architect',
    company: 'Solana Ecosystem DAO',
    logoBg: 'bg-purple-600',
    salaryRangeUSD: '$140,000 - $200,000',
    location: 'Remote (عالمي)',
    jobType: 'Contract',
    skills: ['Rust', 'Anchor', 'Solana Web3.js', 'DeFi'],
    postedAt: 'منذ يوم',
    description: 'تصميم وتنفيذ برامج Anchor عالية السرعة لحساب السيولة الفورية وبوتات المراجحة Arbitrage على سولانا.',
    cryptoPaymentToken: 'SOL / USDC',
    applicantsCount: 12
  },
  {
    id: 'job-4',
    title: 'Smart Contract Security Auditor & Bounty Hunter',
    company: 'CertiK & Web3Market Security',
    logoBg: 'bg-emerald-600',
    salaryRangeUSD: '$8,000 - $25,000 / مكافأة',
    location: 'Remote / Flexible',
    jobType: 'Bounty',
    skills: ['Slither', 'Mythril', 'Echidna', 'Formal Verification'],
    postedAt: 'منذ 3 ساعات',
    description: 'مراجعة وتدقيق أمني لعقود الإسكرو المالي والبحث عن ثغرات الصلاحيات مقابل مكافآت فورية بالعملات المشفرة.',
    cryptoPaymentToken: 'USDC',
    applicantsCount: 8
  },
  {
    id: 'job-5',
    title: 'Web3 Community Lead & Growth Strategist',
    company: 'web3jbos.xyz Talent Hub',
    logoBg: 'bg-rose-600',
    salaryRangeUSD: '$75,000 - $105,000',
    location: 'Remote',
    jobType: 'Full-time',
    skills: ['Discord', 'Telegram Alpha', 'Crypto Marketing', 'DAO Ops'],
    postedAt: 'منذ يومين',
    description: 'إدارة مجتمعات المطورين ورواد الأعمال في الويب 3 وتنسيق حملات الاستحواذ على المشاريع والتوظيف.',
    cryptoPaymentToken: 'USDT',
    applicantsCount: 42
  }
];

export const WEB3_PROJECT_LISTINGS: Web3ProjectListing[] = [
  {
    id: 'proj-1',
    title: 'Web3Jobs v3 - Decentralized Tech Recruitment DApp',
    category: 'DApp',
    askingPriceUSD: 14500,
    monthlyRevenueUSD: 1850,
    aiScore: 88,
    auditGrade: 'A',
    githubRepo: 'https://github.com/aminzaki1972/-Web3Jobs_v3',
    author: 'aminzaki1972',
    description: 'منصة توظيف وتقييم كوادر الويب 3 الذكية مع ربط مباشر بحسابات GitHub ومحافظ Web3 ونظام مكافآت تلقائي بالعملات المستقرة.',
    escrowStatus: 'verified_escrow',
    chain: 'Ethereum / Base',
    salesMultiple: '7.8x Monthly Rev'
  },
  {
    id: 'proj-2',
    title: 'Staking MARS Web3 - Multi-Chain APY Protocol',
    category: 'DeFi Protocol',
    askingPriceUSD: 9800,
    monthlyRevenueUSD: 1200,
    aiScore: 84,
    auditGrade: 'B+',
    githubRepo: 'https://github.com/web3market/staking-mars-core',
    author: 'Web3Market Team',
    description: 'عقود ذكية لحصص التخزين اللامركزي (Staking) تدعم فترات قفل مرنة ونظام توزيع عوائد ديناميكي بالـ ERC20.',
    escrowStatus: 'available',
    chain: 'BNB Smart Chain',
    salesMultiple: '8.1x Monthly Rev'
  },
  {
    id: 'proj-3',
    title: 'DEXSCREENER & Telegram Alpha Signal Bot',
    category: 'Trading Bot',
    askingPriceUSD: 6500,
    monthlyRevenueUSD: 950,
    aiScore: 92,
    auditGrade: 'A+',
    githubRepo: 'https://github.com/web3market/dex-alpha-caller',
    author: 'Web3Market Team',
    description: 'بوت تداول وتحليل فوري لسيولة العملات الجديدة على شبكات Solana و Ethereum مع إشعارات مباشرة للمشتركين.',
    escrowStatus: 'available',
    chain: 'Solana / EVM',
    salesMultiple: '6.8x Monthly Rev'
  },
  {
    id: 'proj-4',
    title: 'web3market.xyz - Premium Category Domain & Brand Assets',
    category: 'Category Domain',
    askingPriceUSD: 8500,
    monthlyRevenueUSD: 0,
    aiScore: 96,
    auditGrade: 'A+',
    githubRepo: 'https://github.com/aminzaki1972/web3market-xyz',
    author: 'Amin Zaki',
    description: 'النطاق الاستراتيجي الأول لسوق مشاريع الويب 3 مع كافة حقوق العلامة التجارية والملكية الفكرية والتكاملات الجاهزة.',
    escrowStatus: 'in_deal_room',
    chain: 'DNS / ENS Linked',
    salesMultiple: 'Strategic Brand'
  },
  {
    id: 'proj-5',
    title: 'NFT Portfolio Manager & Multi-Market Aggregator',
    category: 'DApp',
    askingPriceUSD: 11200,
    monthlyRevenueUSD: 1400,
    aiScore: 82,
    auditGrade: 'B+',
    githubRepo: 'https://github.com/web3market/nft-portfolio-suite',
    author: 'Web3Market Team',
    description: 'تطبيق مفتوح المصدر لإدارة المحافظ وربط OpenSea و LooksRare و NFTGo عبر Moralis و RainbowKit.',
    escrowStatus: 'available',
    chain: 'Polygon / Arbitrum',
    salesMultiple: '8.0x Monthly Rev'
  }
];

export const BLOCKCHAIN_NETWORKS: BlockchainNetwork[] = [
  {
    id: 'eth',
    name: 'Ethereum Mainnet',
    nativeSymbol: 'ETH',
    rpcStatus: 'healthy',
    gasPriceGwei: 18.4,
    blockHeight: 21045892,
    iconBg: 'bg-indigo-600',
    color: '#627EEA',
    explorerUrl: 'https://etherscan.io'
  },
  {
    id: 'btc',
    name: 'Bitcoin Network',
    nativeSymbol: 'BTC',
    rpcStatus: 'healthy',
    gasPriceGwei: 35.0,
    blockHeight: 894520,
    iconBg: 'bg-amber-600',
    color: '#F7931A',
    explorerUrl: 'https://mempool.space'
  },
  {
    id: 'sol',
    name: 'Solana High-Speed',
    nativeSymbol: 'SOL',
    rpcStatus: 'healthy',
    gasPriceGwei: 0.0001,
    blockHeight: 298410220,
    iconBg: 'bg-purple-600',
    color: '#14F195',
    explorerUrl: 'https://solscan.io'
  },
  {
    id: 'bnb',
    name: 'BNB Smart Chain (BSC)',
    nativeSymbol: 'BNB',
    rpcStatus: 'healthy',
    gasPriceGwei: 3.2,
    blockHeight: 41850230,
    iconBg: 'bg-yellow-500',
    color: '#F3BA2F',
    explorerUrl: 'https://bscscan.com'
  },
  {
    id: 'polygon',
    name: 'Polygon PoS',
    nativeSymbol: 'POL',
    rpcStatus: 'healthy',
    gasPriceGwei: 32.5,
    blockHeight: 63102450,
    iconBg: 'bg-violet-600',
    color: '#8247E5',
    explorerUrl: 'https://polygonscan.com'
  },
  {
    id: 'arbitrum',
    name: 'Arbitrum One (L2)',
    nativeSymbol: 'ETH',
    rpcStatus: 'healthy',
    gasPriceGwei: 0.1,
    blockHeight: 245091240,
    iconBg: 'bg-blue-600',
    color: '#28A0F0',
    explorerUrl: 'https://arbiscan.io'
  },
  {
    id: 'base',
    name: 'Base Network (Coinbase L2)',
    nativeSymbol: 'ETH',
    rpcStatus: 'healthy',
    gasPriceGwei: 0.08,
    blockHeight: 19842100,
    iconBg: 'bg-blue-500',
    color: '#0052FF',
    explorerUrl: 'https://basescan.org'
  },
  {
    id: 'avalanche',
    name: 'Avalanche C-Chain',
    nativeSymbol: 'AVAX',
    rpcStatus: 'healthy',
    gasPriceGwei: 26.0,
    blockHeight: 51204910,
    iconBg: 'bg-red-600',
    color: '#E84142',
    explorerUrl: 'https://snowtrace.io'
  },
  {
    id: 'ton',
    name: 'The Open Network (TON)',
    nativeSymbol: 'TON',
    rpcStatus: 'healthy',
    gasPriceGwei: 0.05,
    blockHeight: 43901240,
    iconBg: 'bg-sky-500',
    color: '#0098EA',
    explorerUrl: 'https://tonviewer.com'
  },
  {
    id: 'tron',
    name: 'TRON DAO Network',
    nativeSymbol: 'TRX',
    rpcStatus: 'healthy',
    gasPriceGwei: 1.0,
    blockHeight: 66340190,
    iconBg: 'bg-rose-600',
    color: '#EF0027',
    explorerUrl: 'https://tronscan.org'
  }
];

export const INITIAL_WALLET_ASSETS: WalletAsset[] = [
  { symbol: 'BTC', name: 'Bitcoin', networkId: 'btc', balance: 0.845, priceUSD: 68420.50, change24h: 3.42, iconBg: 'bg-amber-500/20 text-amber-400' },
  { symbol: 'ETH', name: 'Ethereum', networkId: 'eth', balance: 4.62, priceUSD: 3620.80, change24h: -1.15, iconBg: 'bg-indigo-500/20 text-indigo-400' },
  { symbol: 'SOL', name: 'Solana', networkId: 'sol', balance: 48.5, priceUSD: 184.30, change24h: 7.85, iconBg: 'bg-purple-500/20 text-purple-400' },
  { symbol: 'BNB', name: 'BNB Coin', networkId: 'bnb', balance: 6.2, priceUSD: 595.40, change24h: 1.28, iconBg: 'bg-yellow-500/20 text-yellow-400' },
  { symbol: 'USDT', name: 'Tether USD', networkId: 'tron', balance: 14250.00, priceUSD: 1.00, change24h: 0.01, iconBg: 'bg-emerald-500/20 text-emerald-400' },
  { symbol: 'TON', name: 'Toncoin', networkId: 'ton', balance: 520.0, priceUSD: 6.75, change24h: 4.12, iconBg: 'bg-sky-500/20 text-sky-400' },
  { symbol: 'POL', name: 'Polygon', networkId: 'polygon', balance: 2400.0, priceUSD: 0.54, change24h: -2.30, iconBg: 'bg-violet-500/20 text-violet-400' },
];

export const GLOBAL_INDICES: MarketIndex[] = [
  {
    symbol: 'NASDAQ',
    nameAr: 'مؤشر ناسداك الأمريكي المجمع',
    nameEn: 'Nasdaq Composite Index',
    region: 'US',
    value: 18398.24,
    changeUSD: 164.80,
    changePct: 0.90,
    dayHigh: 18450.10,
    dayLow: 18270.50,
    volume: '5.24B'
  },
  {
    symbol: 'S&P 500',
    nameAr: 'مؤشر إس آند بي 500 الأمريكي',
    nameEn: 'S&P 500 Index',
    region: 'US',
    value: 5864.67,
    changeUSD: 23.40,
    changePct: 0.40,
    dayHigh: 5878.20,
    dayLow: 5845.00,
    volume: '4.18B'
  },
  {
    symbol: 'DOW JONES',
    nameAr: 'مؤشر داو جونز الصناعي',
    nameEn: 'Dow Jones Industrial Average',
    region: 'US',
    value: 43275.91,
    changeUSD: -48.20,
    changePct: -0.11,
    dayHigh: 43380.00,
    dayLow: 43150.30,
    volume: '380M'
  },
  {
    symbol: 'NIKKEI 225',
    nameAr: 'مؤشر نيكاي 225 الياباني',
    nameEn: 'Nikkei 225 (Japan)',
    region: 'Asia',
    value: 38981.75,
    changeUSD: 112.50,
    changePct: 0.29,
    dayHigh: 39120.00,
    dayLow: 38740.00,
    volume: '1.22B'
  },
  {
    symbol: 'EURO STOXX 50',
    nameAr: 'المؤشر الأوروبي يورو ستوكس 50',
    nameEn: 'Euro Stoxx 50 (Europe)',
    region: 'Europe',
    value: 4947.22,
    changeUSD: 36.10,
    changePct: 0.74,
    dayHigh: 4960.00,
    dayLow: 4920.00,
    volume: '890M'
  },
  {
    symbol: 'SHANGHAI COMP',
    nameAr: 'مؤشر شنغهاي الصيني المجمع',
    nameEn: 'Shanghai Composite (China)',
    region: 'China',
    value: 3261.56,
    changeUSD: 92.40,
    changePct: 2.91,
    dayHigh: 3280.00,
    dayLow: 3195.00,
    volume: '8.45B'
  },
  {
    symbol: 'HANG SENG',
    nameAr: 'مؤشر هانغ سنغ - هونغ كونغ',
    nameEn: 'Hang Seng Index (HK)',
    region: 'China',
    value: 20804.11,
    changeUSD: 725.30,
    changePct: 3.61,
    dayHigh: 20950.00,
    dayLow: 20210.00,
    volume: '6.70B'
  }
];

export const GLOBAL_STOCKS: GlobalStock[] = [
  { ticker: 'NVDA', name: 'NVIDIA Corporation', price: 138.25, currency: 'USD', changePct: 2.85, marketCap: '$3.39T', peRatio: 64.2, dividendYield: '0.03%' },
  { ticker: 'AAPL', name: 'Apple Inc.', price: 235.00, currency: 'USD', changePct: 1.23, marketCap: '$3.58T', peRatio: 35.1, dividendYield: '0.43%' },
  { ticker: 'MSFT', name: 'Microsoft Corporation', price: 418.50, currency: 'USD', changePct: 0.75, marketCap: '$3.11T', peRatio: 36.0, dividendYield: '0.72%' },
  { ticker: 'TSLA', name: 'Tesla Inc.', price: 220.70, currency: 'USD', changePct: -1.45, marketCap: '$705B', peRatio: 58.4, dividendYield: 'N/A' },
  { ticker: 'AMZN', name: 'Amazon.com Inc.', price: 187.90, currency: 'USD', changePct: 1.10, marketCap: '$1.96T', peRatio: 44.1, dividendYield: 'N/A' },
  { ticker: '2222.SR', name: 'أرامكو السعودية (Saudi Aramco)', price: 27.25, currency: 'SAR', changePct: 0.55, marketCap: '$1.76T', peRatio: 15.8, dividendYield: '7.12%' },
  { ticker: 'GOOGL', name: 'Alphabet Inc. (Google)', price: 164.30, currency: 'USD', changePct: 0.62, marketCap: '$2.04T', peRatio: 23.5, dividendYield: '0.49%' },
];

export const BOND_YIELDS: BondYield[] = [
  { identifier: 'US10Y', country: 'الولايات المتحدة (US Treasury)', maturity: '10 سنوات', yieldPct: 4.08, changeBps: -2.4, coupon: '4.25%' },
  { identifier: 'US02Y', country: 'الولايات المتحدة (US Treasury)', maturity: 'سنتان', yieldPct: 3.95, changeBps: -1.8, coupon: '4.50%' },
  { identifier: 'DE10Y', country: 'ألمانيا (German Bund)', maturity: '10 سنوات', yieldPct: 2.18, changeBps: 1.2, coupon: '2.20%' },
  { identifier: 'UK10Y', country: 'المملكة المتحدة (UK Gilt)', maturity: '10 سنوات', yieldPct: 4.05, changeBps: 3.1, coupon: '3.75%' },
  { identifier: 'JP10Y', country: 'اليابان (Japan JGB)', maturity: '10 سنوات', yieldPct: 0.96, changeBps: 0.5, coupon: '1.00%' },
];

export const GLOBAL_COMMODITIES: CommodityItem[] = [
  { id: 'brent', nameAr: 'خام برنت العالمي (Brent Crude)', nameEn: 'Brent Crude Oil', symbol: 'BRENT', unit: 'USD / برميل', priceUSD: 74.29, changePct: -1.35, category: 'energy' },
  { id: 'wti', nameAr: 'خام غرب تكساس الأمريكي (WTI)', nameEn: 'WTI Crude Oil', symbol: 'WTI', unit: 'USD / برميل', priceUSD: 70.04, changePct: -1.48, category: 'energy' },
  { id: 'gold', nameAr: 'الذهب الفوري (Spot Gold)', nameEn: 'Gold XAU/USD', symbol: 'XAU/USD', unit: 'USD / أونصة', priceUSD: 2721.40, changePct: 1.08, category: 'precious' },
  { id: 'silver', nameAr: 'الفضة الفورية (Spot Silver)', nameEn: 'Silver XAG/USD', symbol: 'XAG/USD', unit: 'USD / أونصة', priceUSD: 33.72, changePct: 2.45, category: 'precious' },
  { id: 'natgas', nameAr: 'الغاز الطبيعي (Natural Gas)', nameEn: 'Natural Gas Henry Hub', symbol: 'NG', unit: 'USD / MMBtu', priceUSD: 2.25, changePct: -3.10, category: 'energy' },
];

export const CITIES_WEATHER: Record<string, WeatherData> = {
  cairo: {
    city: 'القاهرة',
    country: 'مصر',
    tempC: 28,
    conditionAr: 'مشمس ومعتدل',
    conditionEn: 'Sunny & Pleasant',
    humidity: 48,
    windKmh: 14,
    feelsLikeC: 29,
    uvIndex: 6,
    forecast: [
      { day: 'اليوم', tempMax: 29, tempMin: 18, icon: 'sun', condition: 'مشمس' },
      { day: 'غداً', tempMax: 30, tempMin: 19, icon: 'sun', condition: 'مشمس وصافي' },
      { day: 'الثلاثاء', tempMax: 28, tempMin: 18, icon: 'cloud-sun', condition: 'غائم جزئياً' },
      { day: 'الأربعاء', tempMax: 27, tempMin: 17, icon: 'sun', condition: 'معتدل' },
      { day: 'الخميس', tempMax: 29, tempMin: 18, icon: 'sun', condition: 'دافئ' }
    ]
  },
  riyadh: {
    city: 'الرياض',
    country: 'السعودية',
    tempC: 33,
    conditionAr: 'صافٍ وجاف',
    conditionEn: 'Clear & Dry',
    humidity: 16,
    windKmh: 19,
    feelsLikeC: 32,
    uvIndex: 8,
    forecast: [
      { day: 'اليوم', tempMax: 34, tempMin: 21, icon: 'sun', condition: 'صافٍ' },
      { day: 'غداً', tempMax: 35, tempMin: 22, icon: 'sun', condition: 'حار نهاراً' },
      { day: 'الثلاثاء', tempMax: 33, tempMin: 20, icon: 'sun', condition: 'صافٍ' },
      { day: 'الأربعاء', tempMax: 32, tempMin: 19, icon: 'cloud-sun', condition: 'غائم جزئياً' },
      { day: 'الخميس', tempMax: 34, tempMin: 20, icon: 'sun', condition: 'صافٍ' }
    ]
  },
  dubai: {
    city: 'دبي',
    country: 'الإمارات',
    tempC: 32,
    conditionAr: 'مشمس ورطب',
    conditionEn: 'Sunny & Humid',
    humidity: 58,
    windKmh: 16,
    feelsLikeC: 36,
    uvIndex: 7,
    forecast: [
      { day: 'اليوم', tempMax: 33, tempMin: 25, icon: 'sun', condition: 'مشمس' },
      { day: 'غداً', tempMax: 34, tempMin: 26, icon: 'sun', condition: 'صافٍ' },
      { day: 'الثلاثاء', tempMax: 33, tempMin: 25, icon: 'sun', condition: 'مشمس' },
      { day: 'الأربعاء', tempMax: 32, tempMin: 24, icon: 'sun', condition: 'معتدل' },
      { day: 'الخميس', tempMax: 33, tempMin: 25, icon: 'sun', condition: 'مشمس' }
    ]
  },
  london: {
    city: 'لندن',
    country: 'المملكة المتحدة',
    tempC: 15,
    conditionAr: 'غائم مع رذاذ خفيف',
    conditionEn: 'Overcast & Light Drizzle',
    humidity: 82,
    windKmh: 24,
    feelsLikeC: 14,
    uvIndex: 2,
    forecast: [
      { day: 'اليوم', tempMax: 16, tempMin: 10, icon: 'cloud-rain', condition: 'ماطر خفيف' },
      { day: 'غداً', tempMax: 15, tempMin: 9, icon: 'cloud', condition: 'غائم' },
      { day: 'الثلاثاء', tempMax: 14, tempMin: 8, icon: 'cloud-sun', condition: 'شمس متقطعة' },
      { day: 'الأربعاء', tempMax: 16, tempMin: 11, icon: 'cloud-rain', condition: 'أمطار متفرقة' },
      { day: 'الخميس', tempMax: 15, tempMin: 9, icon: 'cloud', condition: 'غائم' }
    ]
  },
  newyork: {
    city: 'نيويورك',
    country: 'الولايات المتحدة',
    tempC: 18,
    conditionAr: 'صافٍ ومنعش',
    conditionEn: 'Clear & Crisp',
    humidity: 42,
    windKmh: 18,
    feelsLikeC: 17,
    uvIndex: 4,
    forecast: [
      { day: 'اليوم', tempMax: 19, tempMin: 11, icon: 'sun', condition: 'صافٍ' },
      { day: 'غداً', tempMax: 21, tempMin: 12, icon: 'sun', condition: 'مشمس معتدل' },
      { day: 'الثلاثاء', tempMax: 20, tempMin: 13, icon: 'cloud-sun', condition: 'غائم جزئياً' },
      { day: 'الأربعاء', tempMax: 18, tempMin: 10, icon: 'cloud-rain', condition: 'فرصة أمطار' },
      { day: 'الخميس', tempMax: 17, tempMin: 9, icon: 'sun', condition: 'صافٍ خريفي' }
    ]
  }
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'مؤشر ناسداك يسجل مستويات قياسية مدفوعاً بأسهم الذكاء الاصطناعي وتقارير أرباح الشركات الكبرى',
    summary: 'قفز مؤشر ناسداك المركب بنسبة 0.9% في تداولات اليوم وسط إقبال استثماري كبير على قطاع الرقائق الإلكترونية والتقنيات السحابية.',
    source: 'الجزيرة',
    category: 'أسواق',
    timestamp: 'منذ 18 دقيقة',
    readTimeMin: 3
  },
  {
    id: 'news-2',
    title: 'CNN Exclusive: أسعار النفط تستقر قرب 74 دولاراً لخام برنت مع ترقب حركة الإمدادات واجتماعات أوبك+',
    summary: 'تذبذبت أسعار النفط العالمية بين مكاسب وخسائر طفيفة، مع استقرار خام غرب تكساس حول 70 دولاراً للبرميل وسط مخاوف تباطؤ الطلب الصناعي العالمي.',
    source: 'CNN',
    category: 'طاقة',
    timestamp: 'منذ 35 دقيقة',
    readTimeMin: 4
  },
  {
    id: 'news-3',
    title: 'BBC World: الذهب يسجل قمة تاريخية جديدة متجاوزاً 2720 دولاراً للأونصة كملاذ آمن عالمي',
    summary: 'واصلت أسعار المعدن الأصفر موجة صعودها التاريخية مسجلة مستويات قياسية مدفوعة بتخفيضات أسعار الفائدة والتوترات الجيوسياسية الدولية.',
    source: 'BBC News',
    category: 'اقتصاد',
    timestamp: 'منذ ساعة',
    readTimeMin: 3
  },
  {
    id: 'news-4',
    title: 'الجزيرة عاجل: تطورات متسارعة في أسواق السندات السيادية مع هبوط عوائد الخزانة الأمريكية لأجل 10 سنوات',
    summary: 'تراجعت عوائد السندات الأمريكية إلى 4.08% مما منح متنفساً لأسواق الأسهم الناشئة وأدى إلى تدفقات إيجابية في السيولة الدولية.',
    source: 'الجزيرة',
    category: 'عاجل',
    timestamp: 'منذ ساعتين',
    readTimeMin: 2
  },
  {
    id: 'news-5',
    title: 'Bloomberg: تقرير خاص عن تدفق رؤوس أموال Web3 وتنامي منصات الاندماج والاستحواذ الرقمي',
    summary: 'تشهد مشاريع البلوكتشين ومطورو التطبيقات اللامركزية حركة نشطة لبيع وشراء المشاريع عبر حلول الإسكرو المشفرة وحلول الذكاء الاصطناعي.',
    source: 'Bloomberg',
    category: 'تكنولوجيا',
    timestamp: 'منذ ساعتين وربع',
    readTimeMin: 5
  },
  {
    id: 'news-6',
    title: 'Reuters: البنوك المركزية الكبرى تبحث سياسات التيسير النقدي ومكافحة التضخم',
    summary: 'أشار تقرير رويترز الأسبوعي إلى توجه البنك المركزي الأوروبي والفيدرالي الأمريكي لمواصلة التيسير لضمان هبوط سلس للاقتصاد.',
    source: 'Reuters',
    category: 'سياسة',
    timestamp: 'منذ 3 ساعات',
    readTimeMin: 4
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'post-1',
    author: {
      name: 'أمين زكي (Amin Zaki)',
      handle: '@aminzaki',
      avatarUrl: '/src/assets/images/superapp_avatar_vip_1792350305759.jpg',
      badge: 'Core Builder',
      isVerified: true
    },
    content: 'أطلقنا للتو النسخة الشاملة من WEB3ONE! تم دمج منصة web3market.xyz مع المحفظة متعددة الشبكات وشارتات تريدنج فيو وأخبار CNN والجزيرة وخدمة البث. كل ما تحتاجه في تطبيق واحد لا مركزي وسريع.',
    timestamp: 'منذ 15 دقيقة',
    likes: 142,
    commentsCount: 28,
    shares: 45,
    likedByMe: true,
    taggedSymbol: 'AL in1 SuperApp'
  },
  {
    id: 'post-2',
    author: {
      name: 'Dr. Sarah Chen',
      handle: '@sarah_quant',
      avatarUrl: '/src/assets/images/superapp_avatar_vip_1792350305759.jpg',
      badge: 'Macro Analyst',
      isVerified: true
    },
    content: 'الملاحظ اليوم: ارتباط قوي بين صعود مؤشر ناسداك وارتفاع البيتكوين فوق 68 ألف دولار، بينما عوائد سندات الخزانة لأجل 10 سنوات تهدأ عند 4.08%. بيئة مثالية لأسواق المخاطر العالية.',
    timestamp: 'منذ 42 دقيقة',
    likes: 89,
    commentsCount: 14,
    shares: 19,
    taggedSymbol: 'NASDAQ / BTC'
  },
  {
    id: 'post-3',
    author: {
      name: 'Tarek Al-Mansoor',
      handle: '@tarek_energy',
      avatarUrl: '/src/assets/images/superapp_avatar_vip_1792350305759.jpg',
      badge: 'Commodities Trader',
      isVerified: false
    },
    content: 'خام برنت عند 74.20$ يمثل نقطة دعم تاريخية ممتازة. أي خبر عن تراجع المخزونات الأمريكية أو تخفيضات إنتاج مفاجئة قد يقفز به نحو 78$ مجدداً.',
    timestamp: 'منذ ساعتين',
    likes: 54,
    commentsCount: 9,
    shares: 8,
    taggedSymbol: 'BRENT'
  }
];

export const STREAMING_CHANNELS: StreamingChannel[] = [
  {
    id: 'ch-aljazeera',
    name: 'الجزيرة الإخبارية مباشر (Al Jazeera)',
    category: 'news',
    language: 'العربية',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCfiwzLy-8yKzIbsmZTtxDgw',
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'ch-bbc',
    name: 'BBC News International Live',
    category: 'news',
    language: 'English',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UC16niRr50-MSBwiO3YDb3RA',
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'ch-bloomberg',
    name: 'Bloomberg Television Global Markets',
    category: 'news',
    language: 'English',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCIALMKvObZNtJ6AmdCLP7Lg',
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'ch-dw',
    name: 'DW News Arabic (دويتشه فيله)',
    category: 'news',
    language: 'العربية',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCXwU0bI0R4O9o9_0uIq0uFA',
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'ch-coindesk',
    name: 'CoinDesk TV Web3 Broadcast',
    category: 'crypto',
    language: 'English',
    streamUrl: 'https://www.youtube.com/embed/live_stream?channel=UCzRh8_P4v4y1z2u3v0Q2BJA',
    isLive: true,
    thumbnail: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&auto=format&fit=crop&q=80'
  }
];

export const NETFLIX_STYLE_SHOWS: MovieShow[] = [
  {
    id: 'show-1',
    title: 'Cybernetic Noir: The Future is Forgotten',
    titleEn: 'Cybernetic Noir',
    genre: 'Sci-Fi',
    duration: '2h 18m',
    year: 2026,
    rating: '16+',
    matchScore: 98,
    description: 'في مستقبل متقدم تقنياً تحكمه العقود الذكية والذكاء الاصطناعي، يكتشف عميل سري مؤامرة للتلاعب بالأسواق المالية العالمية عبر ثغرة في البلوكتشين.',
    backdropUrl: '/src/assets/images/cinema_hero_banner_1792350305270.jpg',
    trailerId: 'dQw4w9WgXcQ'
  },
  {
    id: 'show-2',
    title: 'Wall Street Algorithm: أسرار التداول الخوارزمي',
    titleEn: 'Wall Street Algorithm',
    genre: 'Finance Thriller',
    duration: '1h 54m',
    year: 2025,
    rating: '13+',
    matchScore: 95,
    description: 'قصة صعود فريق من المبرمجين الشباب الذين استطاعوا اختراق أكبر صناديق التحوط في نيويورك والتنبؤ بأسعار أسهم ناسداك والنفط لحظياً.',
    backdropUrl: '/src/assets/images/trading_room_abstract_1792350306463.jpg',
    trailerId: 'dQw4w9WgXcQ'
  },
  {
    id: 'show-3',
    title: 'Bitcoin: The Decentralized Revolution',
    titleEn: 'The Decentralized Revolution',
    genre: 'Crypto Documentary',
    duration: '1h 45m',
    year: 2024,
    rating: 'All',
    matchScore: 92,
    description: 'وثائقي استقصائي شامل يروي ولادة البتكوين، الصراع مع النظام المصرفي التقليدي، وتطور المحافظ اللامركزية عبر العقد الماضي.',
    backdropUrl: '/src/assets/images/cinema_hero_banner_1792350305270.jpg',
    trailerId: 'dQw4w9WgXcQ'
  },
  {
    id: 'show-4',
    title: 'Deep State Protocol: بروتوكول الظل',
    titleEn: 'Deep State Protocol',
    genre: 'Action',
    duration: '2h 05m',
    year: 2025,
    rating: '18+',
    matchScore: 89,
    description: 'مهمة مستحيلة لفريق أمني لحماية مفاتيح التشفير الخاصة بشبكة الطاقة العالمية من هجوم إلكتروني منسق.',
    backdropUrl: '/src/assets/images/trading_room_abstract_1792350306463.jpg',
    trailerId: 'dQw4w9WgXcQ'
  }
];
