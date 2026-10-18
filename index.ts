export type SuperAppTab = 'wallet' | 'markets' | 'web3market' | 'web3jobs' | 'social' | 'news' | 'weather' | 'cinema';

export interface Web3ProjectListing {
  id: string;
  title: string;
  category: 'DApp' | 'Smart Contract' | 'Trading Bot' | 'DeFi Protocol' | 'Category Domain';
  askingPriceUSD: number;
  monthlyRevenueUSD: number;
  aiScore: number;
  auditGrade: 'A+' | 'A' | 'B+' | 'B';
  githubRepo: string;
  author: string;
  description: string;
  escrowStatus: 'verified_escrow' | 'in_deal_room' | 'available';
  chain: string;
  salesMultiple: string;
}

export interface Web3JobListing {
  id: string;
  title: string;
  company: string;
  logoBg: string;
  salaryRangeUSD: string;
  location: string;
  jobType: 'Full-time' | 'Remote' | 'Contract' | 'Bounty';
  skills: string[];
  postedAt: string;
  description: string;
  cryptoPaymentToken: string;
  applicantsCount: number;
}

export interface BlockchainNetwork {
  id: string;
  name: string;
  nativeSymbol: string;
  rpcStatus: 'healthy' | 'congested';
  gasPriceGwei: number;
  blockHeight: number;
  iconBg: string;
  color: string;
  explorerUrl: string;
}

export interface WalletAsset {
  symbol: string;
  name: string;
  networkId: string;
  balance: number;
  priceUSD: number;
  change24h: number;
  iconBg: string;
}

export interface MarketIndex {
  symbol: string;
  nameAr: string;
  nameEn: string;
  region: 'US' | 'Asia' | 'Europe' | 'China';
  value: number;
  changeUSD: number;
  changePct: number;
  dayHigh: number;
  dayLow: number;
  volume: string;
}

export interface GlobalStock {
  ticker: string;
  name: string;
  price: number;
  currency: string;
  changePct: number;
  marketCap: string;
  peRatio: number;
  dividendYield: string;
}

export interface BondYield {
  identifier: string;
  country: string;
  maturity: string;
  yieldPct: number;
  changeBps: number;
  coupon: string;
}

export interface CommodityItem {
  id: string;
  nameAr: string;
  nameEn: string;
  symbol: string;
  unit: string;
  priceUSD: number;
  changePct: number;
  category: 'energy' | 'precious' | 'industrial';
}

export interface WeatherData {
  city: string;
  country: string;
  tempC: number;
  conditionAr: string;
  conditionEn: string;
  humidity: number;
  windKmh: number;
  feelsLikeC: number;
  uvIndex: number;
  forecast: {
    day: string;
    tempMax: number;
    tempMin: number;
    icon: string;
    condition: string;
  }[];
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: 'الجزيرة' | 'CNN' | 'BBC News' | 'Bloomberg' | 'Reuters';
  category: 'عاجل' | 'اقتصاد' | 'أسواق' | 'تكنولوجيا' | 'سياسة' | 'طاقة';
  timestamp: string;
  imageUrl?: string;
  readTimeMin: number;
  url?: string;
}

export interface SocialPost {
  id: string;
  author: {
    name: string;
    handle: string;
    avatarUrl: string;
    badge?: string;
    isVerified: boolean;
  };
  content: string;
  timestamp: string;
  likes: number;
  commentsCount: number;
  shares: number;
  likedByMe?: boolean;
  mediaUrl?: string;
  taggedSymbol?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'me' | 'other';
  senderName: string;
  text: string;
  timestamp: string;
  type?: 'text' | 'crypto_tip' | 'voice_note';
  amount?: number;
  token?: string;
}

export interface StreamingChannel {
  id: string;
  name: string;
  category: 'news' | 'crypto' | 'entertainment';
  language: string;
  streamUrl: string;
  isLive: boolean;
  thumbnail: string;
}

export interface MovieShow {
  id: string;
  title: string;
  titleEn: string;
  genre: 'Action' | 'Sci-Fi' | 'Crypto Documentary' | 'Finance Thriller' | 'Drama';
  duration: string;
  year: number;
  rating: string;
  matchScore: number;
  description: string;
  backdropUrl: string;
  trailerId?: string;
}
