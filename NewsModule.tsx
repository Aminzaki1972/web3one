import React, { useState } from 'react';
import { NEWS_ARTICLES } from './mockData';
import { NewsArticle } from './index';
import {
  Newspaper,
  Clock,
  ExternalLink,
  Filter,
  Search,
  Bookmark,
  Share2,
  X,
  Flame,
  Radio
} from 'lucide-react';

interface NewsModuleProps {
  lang: 'ar' | 'en';
}

export const NewsModule: React.FC<NewsModuleProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<NewsArticle | null>(null);

  const sources = [
    { id: 'all', label: isAr ? 'جميع القنوات' : 'All Channels' },
    { id: 'الجزيرة', label: 'الجزيرة (Al Jazeera)' },
    { id: 'CNN', label: 'CNN International' },
    { id: 'BBC News', label: 'BBC World News' },
    { id: 'Bloomberg', label: 'Bloomberg Markets' },
    { id: 'Reuters', label: 'Reuters' },
  ];

  const categories = [
    { id: 'all', label: isAr ? 'الكل' : 'All' },
    { id: 'عاجل', label: isAr ? 'عاجل' : 'Breaking' },
    { id: 'أسواق', label: isAr ? 'أسواق ومال' : 'Markets' },
    { id: 'طاقة', label: isAr ? 'طاقة ونفط' : 'Energy' },
    { id: 'اقتصاد', label: isAr ? 'اقتصاد عالمي' : 'Economy' },
    { id: 'تكنولوجيا', label: isAr ? 'تكنولوجيا وويب3' : 'Tech' },
  ];

  const filteredNews = NEWS_ARTICLES.filter((item) => {
    const matchesSource = selectedSource === 'all' || item.source === selectedSource;
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = !searchKeyword.trim() ||
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesSource && matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top News Control Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Radio className="w-5 h-5 text-rose-500 animate-pulse" />
              <span>{isAr ? 'مركز الأخبار العالمية العاجلة (الجزيرة · CNN · BBC)' : 'Global Live News Wire'}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {isAr
                ? 'تغطية إخبارية فورية وموثوقة من كبرى الوكالات العالمية'
                : 'Curated breaking alerts from Al Jazeera, CNN, BBC, Bloomberg and Reuters'}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative max-w-sm w-full">
            <Search className="w-4 h-4 text-slate-500 absolute top-2.5 right-3" />
            <input
              type="text"
              placeholder={isAr ? 'ابحث في الأخبار (نفط، ناسداك، فائدة...)' : 'Search news headlines...'}
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-9 pl-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
            />
          </div>
        </div>

        {/* Source Channels Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-800/80 pt-3">
          <span className="text-xs text-slate-500 whitespace-nowrap">{isAr ? 'القناة المصدر:' : 'Source:'}</span>
          {sources.map((src) => (
            <button
              key={src.id}
              onClick={() => setSelectedSource(src.id)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedSource === src.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {src.label}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs text-slate-500 whitespace-nowrap">{isAr ? 'القسم:' : 'Category:'}</span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-0.5 rounded text-xs font-medium whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-slate-800 text-cyan-400 font-bold border border-cyan-500/30'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* News Feed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredNews.map((article) => (
          <div
            key={article.id}
            onClick={() => setReadingArticle(article)}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition cursor-pointer flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className={`font-bold font-mono px-2 py-0.5 rounded ${
                  article.source === 'الجزيرة'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : article.source === 'CNN'
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {article.source}
                </span>
                <span className="text-slate-500 font-mono text-[11px]">{article.timestamp}</span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition leading-snug">
                {article.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-mono">{article.category} · {article.readTimeMin} {isAr ? 'د قراءة' : 'min read'}</span>
              <span className="text-indigo-400 group-hover:underline flex items-center gap-1 font-semibold">
                <span>{isAr ? 'قراءة الخبر كامل' : 'Read Article'}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 max-w-2xl w-full shadow-2xl relative space-y-4">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-4 left-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="font-bold text-indigo-400">{readingArticle.source}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">{readingArticle.timestamp}</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400">{readingArticle.category}</span>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-white leading-snug">
              {readingArticle.title}
            </h2>

            <div className="text-xs md:text-sm text-slate-300 leading-relaxed space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800/80">
              <p>{readingArticle.summary}</p>
              <p>
                {isAr
                  ? 'متابعة مستمرة عبر منصة AL in1 لكافة التطورات الاقتصادية والجيوسياسية وأسواق الطاقة والبلوكتشين حول العالم لحظة بلحظة.'
                  : 'Live ongoing coverage provided through AL in1 aggregation engine monitoring international headlines.'}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs">
              <button
                onClick={() => alert(isAr ? 'ميزة المفضلة غير متصلة بالحفظ الدائم؛ لم يُحفظ المقال بعد إعادة تحميل الصفحة.' : 'Bookmarks are not persisted yet; this article will not remain saved after reloading.')}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white"
              >
                <Bookmark className="w-4 h-4" />
                <span>{isAr ? 'حفظ في المفضلة' : 'Bookmark'}</span>
              </button>
              <button
                onClick={() => setReadingArticle(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
