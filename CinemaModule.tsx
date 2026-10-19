import React, { useState } from 'react';
import { STREAMING_CHANNELS, NETFLIX_STYLE_SHOWS } from './mockData';
import { StreamingChannel, MovieShow } from './index';
import {
  Tv,
  Film,
  Play,
  Info,
  Radio,
  Volume2,
  VolumeX,
  Maximize,
  Star,
  Check,
  Plus,
  X,
  Sparkles
} from 'lucide-react';

interface CinemaModuleProps {
  lang: 'ar' | 'en';
}

export const CinemaModule: React.FC<CinemaModuleProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [cinemaTab, setCinemaTab] = useState<'cinema' | 'livetv'>('cinema');
  const [selectedChannel, setSelectedChannel] = useState<StreamingChannel>(STREAMING_CHANNELS[0]);
  const [activeShow, setActiveShow] = useState<MovieShow | null>(null);
  const [isPlayingTrailer, setIsPlayingTrailer] = useState<boolean>(false);
  const [myWatchlist, setMyWatchlist] = useState<string[]>(['show-1']);

  const heroMovie = NETFLIX_STYLE_SHOWS[0];

  const toggleWatchlist = (id: string) => {
    setMyWatchlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
        {isAr ? 'تنبيه: الأفلام والقنوات المعروضة بيانات تجريبية؛ تشغيل الفيديو وقائمة المشاهدة لا يمثلان خدمة بث متكاملة.' : 'Notice: movie and channel entries are sample data; playback and watchlist are not a complete streaming service.'}
      </div>
      {/* Module Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Tv className="w-5 h-5 text-purple-400" />
            <span>{isAr ? 'سينما AL in1 وقنوات البث المباشر (Cinema & Live TV)' : 'Cinema & Live Broadcast Hub'}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isAr
              ? 'مكتبة سينمائية بنمط نتفليكس (أفلام الخيال العلمي والمال والويب3) مع بث القنوات الإخبارية المباشرة'
              : 'Netflix-style entertainment stream, crypto documentaries, and official global live TV channels'}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setCinemaTab('cinema')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              cinemaTab === 'cinema'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>{isAr ? 'سينما AL in1 (نتفليكس)' : 'AL in1 Cinema'}</span>
          </button>

          <button
            onClick={() => setCinemaTab('livetv')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              cinemaTab === 'livetv'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-rose-300" />
            <span>{isAr ? 'البث التلفزيوني المباشر' : 'Live Channels'}</span>
          </button>
        </div>
      </div>

      {/* 1. CINEMA & NETFLIX EXPERIENCE */}
      {cinemaTab === 'cinema' && (
        <div className="space-y-8">
          {/* Hero Feature Banner */}
          <div className="relative w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src={heroMovie.backdropUrl}
              alt={heroMovie.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-transparent"></div>

            <div className="absolute bottom-8 right-8 left-8 md:max-w-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold font-mono">
                <span className="text-emerald-400">{heroMovie.matchScore}% Match</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300 font-semibold">{heroMovie.year}</span>
                <span className="text-slate-500">·</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px]">
                  {heroMovie.rating}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-cyan-400">{heroMovie.duration}</span>
              </div>

              <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {heroMovie.title}
              </h1>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3">
                {heroMovie.description}
              </p>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveShow(heroMovie);
                    setIsPlayingTrailer(true);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-black text-xs shadow-lg transition active:scale-95"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>{isAr ? 'مشاهدة العرض الآن' : 'Play Preview'}</span>
                </button>

                <button
                  onClick={() => toggleWatchlist(heroMovie.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-xs border border-slate-700 transition"
                >
                  {myWatchlist.includes(heroMovie.id) ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{isAr ? 'في قائمتي' : 'In Watchlist'}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>{isAr ? 'أضف لقائمتي' : 'My List'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setActiveShow(heroMovie)}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300"
                  title="تفاصيل إضافية"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Catalog Row: Trending & Recommended Shows */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>{isAr ? 'الأفلام والوثائقيات الأكثر مشاهدة' : 'Trending Web3 & Finance Movies'}</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">Ultra HD 4K</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {NETFLIX_STYLE_SHOWS.map((show) => (
                <div
                  key={show.id}
                  onClick={() => setActiveShow(show)}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition cursor-pointer group flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={show.backdropUrl}
                      alt={show.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/80 text-purple-300 border border-purple-500/30">
                      {show.genre}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveShow(show);
                        setIsPlayingTrailer(true);
                      }}
                      className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition"
                    >
                      <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                    </button>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-emerald-400 font-bold">{show.matchScore}% Match</span>
                      <span className="text-slate-400">{show.duration}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug group-hover:text-purple-300 transition">
                      {show.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {show.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. LIVE TV BROADCASTS */}
      {cinemaTab === 'livetv' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Broadcast Player */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-full h-[400px] md:h-[480px] bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/live_stream?channel=UCfiwzLy-8yKzIbsmZTtxDgw&autoplay=1&mute=0`}
                title={selectedChannel.name}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></span>
                <div>
                  <h3 className="text-sm font-bold text-white">{selectedChannel.name}</h3>
                  <span className="text-xs text-slate-400 font-mono">
                    بث مباشر عالي الجودة (Official Live Broadcast)
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-1 rounded bg-emerald-950/30 border border-emerald-500/30">
                1080p HD LIVE
              </span>
            </div>
          </div>

          {/* Channels Selection List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              {isAr ? 'القنوات التلفزيونية المتاحة للبث' : 'Available Broadcast Channels'}
            </h3>

            <div className="space-y-2">
              {STREAMING_CHANNELS.map((ch) => {
                const isSelected = selectedChannel.id === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChannel(ch)}
                    className={`w-full p-3 rounded-xl border text-left transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-rose-950/30 border-rose-500/50 shadow-md'
                        : 'bg-slate-900 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-rose-400 font-bold text-xs">
                        TV
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{ch.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{ch.language} · {ch.category}</div>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-950 px-2 py-0.5 rounded border border-rose-500/40">
                        يعمل الآن
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Show Details / Video Player Modal */}
      {activeShow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl relative overflow-hidden space-y-4">
            <button
              onClick={() => {
                setActiveShow(null);
                setIsPlayingTrailer(false);
              }}
              className="absolute top-4 left-4 p-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-950/80 hover:bg-slate-800 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video preview / Backdrop */}
            <div className="relative h-64 w-full bg-black">
              {isPlayingTrailer ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 p-6 text-center space-y-3">
                  <Play className="w-12 h-12 text-purple-400 animate-pulse" />
                  <span className="text-sm font-bold text-white font-mono">
                    عرض المقطع الدعائي المشفر (Ultra HD 4K Streaming...)
                  </span>
                  <p className="text-xs text-slate-400 max-w-sm">
                    {isAr ? 'يتم تشغيل المعاينة عبر شبكة بث AL in1 المشفرة بجودة سينمائية.' : 'Playing high-fidelity media stream.'}
                  </p>
                </div>
              ) : (
                <img
                  src={activeShow.backdropUrl}
                  alt={activeShow.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-6 pt-0 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-emerald-400 font-bold">{activeShow.matchScore}% Match</span>
                <span className="text-slate-400">{activeShow.year}</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">{activeShow.rating}</span>
                <span className="text-purple-400 font-bold">{activeShow.genre}</span>
              </div>

              <h2 className="text-xl font-bold text-white leading-tight">
                {activeShow.title}
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed">
                {activeShow.description}
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <button
                  onClick={() => setIsPlayingTrailer(true)}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{isAr ? 'بدء المشاهدة' : 'Play Video'}</span>
                </button>
                <button
                  onClick={() => toggleWatchlist(activeShow.id)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition"
                >
                  {myWatchlist.includes(activeShow.id) ? (isAr ? 'تمت الإضافة للمفضلة ✓' : 'In Watchlist ✓') : (isAr ? 'أضف لقائمتي' : 'Add to List')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
