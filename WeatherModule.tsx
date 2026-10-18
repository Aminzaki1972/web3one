import React, { useState } from 'react';
import { CITIES_WEATHER } from './mockData';
import { WeatherData } from './index';
import {
  CloudSun,
  Sun,
  CloudRain,
  Wind,
  Droplets,
  Thermometer,
  Search,
  Compass,
  AlertTriangle,
  MapPin
} from 'lucide-react';

interface WeatherModuleProps {
  lang: 'ar' | 'en';
}

export const WeatherModule: React.FC<WeatherModuleProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedCityKey, setSelectedCityKey] = useState<string>('cairo');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentWeather: WeatherData = CITIES_WEATHER[selectedCityKey] || CITIES_WEATHER['cairo'];

  const quickCities = [
    { key: 'cairo', name: 'القاهرة' },
    { key: 'riyadh', name: 'الرياض' },
    { key: 'dubai', name: 'دبي' },
    { key: 'london', name: 'لندن' },
    { key: 'newyork', name: 'نيويورك' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    const foundKey = Object.keys(CITIES_WEATHER).find(k =>
      k.includes(query) ||
      CITIES_WEATHER[k].city.toLowerCase().includes(query)
    );
    if (foundKey) {
      setSelectedCityKey(foundKey);
    } else {
      alert(isAr ? 'المدينة غير مسجلة حالياً، تم عرض القاهرة كمدينة افتراضية' : 'City not found in database, defaulting to Cairo');
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Search & Quick Selector */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CloudSun className="w-5 h-5 text-amber-400" />
            <span>{isAr ? 'أحوال الطقس المحلية والعالمية' : 'Global & Local Weather Station'}</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isAr ? 'رصد حي لدرجات الحرارة، سرعة الرياح، الرطوبة، والتنبؤات الخمسية' : 'Real-time meteorological metrics, forecasts, wind and UV index'}
          </p>
        </div>

        <form onSubmit={handleSearch} className="flex items-center gap-2 max-w-sm w-full">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute top-2.5 right-3" />
            <input
              type="text"
              placeholder={isAr ? 'ابحث عن مدينتك (القاهرة، الرياض، دبي...)' : 'Search city (Cairo, Riyadh, Dubai)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pr-9 pl-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
          >
            {isAr ? 'بحث' : 'Search'}
          </button>
        </form>
      </div>

      {/* Quick City Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs text-slate-500 whitespace-nowrap">{isAr ? 'مدن سريعة:' : 'Quick Select:'}</span>
        {quickCities.map((city) => (
          <button
            key={city.key}
            onClick={() => setSelectedCityKey(city.key)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
              selectedCityKey === city.key
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {city.name}
          </button>
        ))}
      </div>

      {/* Main Weather Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold mb-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{currentWeather.city} · {currentWeather.country}</span>
              </div>
              <div className="text-6xl font-black text-white font-mono tracking-tight my-2">
                {currentWeather.tempC}°<span className="text-3xl text-slate-400 font-normal">C</span>
              </div>
              <div className="text-sm font-bold text-amber-300 mt-1">
                {isAr ? currentWeather.conditionAr : currentWeather.conditionEn}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {isAr ? `الحرارة المحسوسة: ${currentWeather.feelsLikeC}°C` : `Feels like: ${currentWeather.feelsLikeC}°C`}
              </div>
            </div>

            <div className="w-28 h-28 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-xl self-center">
              <Sun className="w-16 h-16 animate-spin-slow" />
            </div>
          </div>

          {/* Sub Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800/80">
            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Droplets className="w-4 h-4 text-cyan-400" />
                <span>{isAr ? 'الرطوبة' : 'Humidity'}</span>
              </div>
              <div className="text-lg font-black text-white font-mono">
                {currentWeather.humidity}%
              </div>
            </div>

            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Wind className="w-4 h-4 text-teal-400" />
                <span>{isAr ? 'سرعة الرياح' : 'Wind Speed'}</span>
              </div>
              <div className="text-lg font-black text-white font-mono">
                {currentWeather.windKmh} <span className="text-xs font-normal">km/h</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Compass className="w-4 h-4 text-purple-400" />
                <span>{isAr ? 'مؤشر الأشعة (UV)' : 'UV Index'}</span>
              </div>
              <div className="text-lg font-black text-white font-mono">
                {currentWeather.uvIndex} <span className="text-xs font-normal">/ 10</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            {isAr ? 'توقعات الطقس للأيام الخمسة القادمة' : '5-Day Forecast'}
          </h3>

          <div className="space-y-3">
            {currentWeather.forecast.map((f, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs"
              >
                <span className="font-bold text-slate-300 w-16">{f.day}</span>
                <span className="text-slate-400">{f.condition}</span>
                <div className="font-mono font-bold text-white">
                  <span className="text-amber-400">{f.tempMax}°</span>
                  <span className="text-slate-500 mx-1">/</span>
                  <span className="text-slate-400">{f.tempMin}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
