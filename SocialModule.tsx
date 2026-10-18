import React, { useState, useRef, useEffect } from 'react';
import { SOCIAL_POSTS } from './mockData';
import { SocialPost, ChatMessage } from './index';
import {
  MessageCircle,
  Video,
  Phone,
  Send,
  Heart,
  Share2,
  Image,
  Mic,
  MicOff,
  VideoOff,
  PhoneOff,
  Sparkles,
  DollarSign,
  CheckCircle2,
  UserCheck,
  Smile,
  Shield,
  Volume2
} from 'lucide-react';

interface SocialModuleProps {
  lang: 'ar' | 'en';
}

export const SocialModule: React.FC<SocialModuleProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [subTab, setSubTab] = useState<'feed' | 'chat' | 'call'>('feed');

  // Feed State
  const [posts, setPosts] = useState<SocialPost[]>(SOCIAL_POSTS);
  const [newPostText, setNewPostText] = useState('');
  const [newPostTag, setNewPostTag] = useState('');

  // Chat State
  const [activeContact, setActiveContact] = useState('أمين زكي (Amin Zaki)');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'other', senderName: 'أمين زكي', text: 'أهلاً بك في منصة AL in1! كيف تسير متابعة أسعار الأسهم والنفط اليوم؟', timestamp: '11:15 AM' },
    { id: '2', sender: 'me', senderName: 'أنا', text: 'المنصة ممتازة جداً، شارتات تريدنج فيو ومحفظة الـ 10 شبكات مذهلة وسريعة!', timestamp: '11:18 AM' },
    { id: '3', sender: 'other', senderName: 'أمين زكي', text: 'يسعدني سماع ذلك! يمكنك أيضاً إرسال عملات مشفرة أو بدء اتصال فيديو مشفر ومباشر في أي وقت.', timestamp: '11:20 AM' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Call & Video State
  const [isCalling, setIsCalling] = useState(false);
  const [callType, setCallType] = useState<'video' | 'audio'>('video');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [callSeconds, setCallSeconds] = useState(0);
  const localVideoRef = useRef<HTMLVideoElement>(null);

  // Timer for active call
  useEffect(() => {
    let interval: any;
    if (isCalling) {
      interval = setInterval(() => {
        setCallSeconds(prev => prev + 1);
      }, 1000);
    } else {
      setCallSeconds(0);
    }
    return () => clearInterval(interval);
  }, [isCalling]);

  // Handle local webcam stream
  const startCall = async (type: 'video' | 'audio') => {
    setCallType(type);
    setIsCalling(true);
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: type === 'video',
          audio: true
        });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      }
    } catch (err) {
      console.log('Media devices preview fallback mode', err);
    }
  };

  const endCall = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      localVideoRef.current.srcObject = null;
    }
    setIsCalling(false);
  };

  // Add new post
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;
    const newPost: SocialPost = {
      id: Date.now().toString(),
      author: {
        name: 'المستخدم الحالي (Web3 Pro)',
        handle: '@my_handle',
        avatarUrl: '/src/assets/images/superapp_avatar_vip_1792350305759.jpg',
        badge: 'Verified Investor',
        isVerified: true
      },
      content: newPostText,
      timestamp: isAr ? 'الآن' : 'Just now',
      likes: 1,
      commentsCount: 0,
      shares: 0,
      likedByMe: true,
      taggedSymbol: newPostTag || 'AL in1'
    };
    setPosts([newPost, ...posts]);
    setNewPostText('');
    setNewPostTag('');
  };

  // Send message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'me',
      senderName: 'أنا',
      text: inputMessage,
      timestamp: 'الآن'
    };
    setChatMessages([...chatMessages, newMsg]);
    setInputMessage('');

    // Simulated reply
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'other',
          senderName: activeContact,
          text: isAr ? 'شكراً على رسالتك! تم تأكيد الاتصال المشفر عبر شبكة AL in1.' : 'Received! Encrypted P2P connection verified.',
          timestamp: 'الآن'
        }
      ]);
    }, 1500);
  };

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Sub-navigation */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSubTab('feed')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              subTab === 'feed'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{isAr ? 'منصة التواصل والتغريدات' : 'Social Feed'}</span>
          </button>

          <button
            onClick={() => setSubTab('chat')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              subTab === 'chat'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isAr ? 'الشات المشفر (Web3 Messenger)' : 'Encrypted Chat'}</span>
          </button>

          <button
            onClick={() => setSubTab('call')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
              subTab === 'call'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isAr ? 'استوديو مكالمات الصوت والفيديو' : 'Voice & Video Calling'}</span>
          </button>
        </div>
      </div>

      {/* 1. SOCIAL FEED */}
      {subTab === 'feed' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {/* Create Post Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <form onSubmit={handleCreatePost} className="space-y-3">
                <div className="flex gap-3">
                  <img
                    src="/src/assets/images/superapp_avatar_vip_1792350305759.jpg"
                    alt="My Avatar"
                    className="w-10 h-10 rounded-xl object-cover shrink-0 border border-slate-700"
                  />
                  <textarea
                    rows={3}
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder={isAr ? 'ماذا تفكر؟ شارك تحليلك للأسهم، الكريبتو، أو الأخبار...' : 'Share your crypto, stocks, or news analysis...'}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder={isAr ? 'وسم (مثال: #NASDAQ)' : 'Tag (e.g. #BTC)'}
                      value={newPostTag}
                      onChange={(e) => setNewPostTag(e.target.value)}
                      className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-xs text-slate-300 w-36 font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition"
                  >
                    {isAr ? 'نشر التغريدة' : 'Post'}
                  </button>
                </div>
              </form>
            </div>

            {/* Posts List */}
            {posts.map((post) => (
              <div key={post.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatarUrl}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-xl object-cover border border-slate-700"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white text-xs">{post.author.name}</span>
                        {post.author.isVerified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">{post.author.handle} · {post.timestamp}</span>
                    </div>
                  </div>
                  {post.taggedSymbol && (
                    <span className="px-2 py-0.5 rounded bg-indigo-950 border border-indigo-500/30 text-indigo-300 font-mono text-[11px] font-bold">
                      #{post.taggedSymbol}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 text-xs text-slate-400">
                  <button
                    onClick={() => {
                      setPosts(prev => prev.map(p => {
                        if (p.id === post.id) {
                          return {
                            ...p,
                            likedByMe: !p.likedByMe,
                            likes: p.likedByMe ? p.likes - 1 : p.likes + 1
                          };
                        }
                        return p;
                      }));
                    }}
                    className={`flex items-center gap-1.5 transition ${post.likedByMe ? 'text-rose-400' : 'hover:text-rose-400'}`}
                  >
                    <Heart className={`w-4 h-4 ${post.likedByMe ? 'fill-rose-400' : ''}`} />
                    <span className="font-mono">{post.likes}</span>
                  </button>

                  <div className="flex items-center gap-1.5 hover:text-slate-200 cursor-pointer">
                    <MessageCircle className="w-4 h-4" />
                    <span className="font-mono">{post.commentsCount}</span>
                  </div>

                  <div className="flex items-center gap-1.5 hover:text-slate-200 cursor-pointer">
                    <Share2 className="w-4 h-4" />
                    <span className="font-mono">{post.shares}</span>
                  </div>

                  <button
                    onClick={() => alert(isAr ? 'تم إرسال إكرامية 5 USDT للمؤلف مباشرة من المحفظة!' : 'Sent 5 USDT crypto tip to author!')}
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 px-2 py-0.5 rounded bg-emerald-950/30 border border-emerald-500/30 font-mono text-[11px]"
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>{isAr ? 'إكرامية كود كريبتو' : 'Tip Author'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Social Right Sidebar */}
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                {isAr ? 'المواضيع الأكثر تداولاً (Trending)' : 'Trending Topics'}
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 flex justify-between">
                  <div>
                    <div className="font-bold text-white">#NASDAQ_Rally</div>
                    <div className="text-[10px] text-slate-500">24.5K Posts</div>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold">+18%</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 flex justify-between">
                  <div>
                    <div className="font-bold text-white">#Brent_Crude_Oil</div>
                    <div className="text-[10px] text-slate-500">18.2K Posts</div>
                  </div>
                  <span className="text-amber-400 font-mono font-bold">Hot</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 flex justify-between">
                  <div>
                    <div className="font-bold text-white">#AL_in1_SuperApp</div>
                    <div className="text-[10px] text-slate-500">31.0K Posts</div>
                  </div>
                  <span className="text-cyan-400 font-mono font-bold">Trending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. ENCRYPTED CHAT */}
      {subTab === 'chat' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-3 h-[580px]">
          {/* Contacts Sidebar */}
          <div className="border-b md:border-b-0 md:border-l border-slate-800 bg-slate-950/60 p-4 space-y-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {isAr ? 'المحادثات المشفرة P2P' : 'Encrypted Chats'}
              </span>
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>

            <div
              onClick={() => setActiveContact('أمين زكي (Amin Zaki)')}
              className="p-3 rounded-xl bg-slate-900 border border-indigo-500/40 cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/src/assets/images/superapp_avatar_vip_1792350305759.jpg"
                  alt="Amin Zaki"
                  className="w-9 h-9 rounded-xl object-cover border border-indigo-400"
                />
                <div>
                  <div className="text-xs font-bold text-white">أمين زكي (Amin Zaki)</div>
                  <div className="text-[10px] text-emerald-400 font-mono">متصل الآن (Online)</div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveContact('Dr. Sarah Chen')}
              className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 cursor-pointer flex items-center justify-between hover:bg-slate-900"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-purple-600/30 text-purple-300 font-bold flex items-center justify-center text-xs">
                  SC
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Dr. Sarah Chen</div>
                  <div className="text-[10px] text-slate-500 font-mono">آخر ظهور منذ 15 دقيقة</div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Chat Conversation */}
          <div className="md:col-span-2 flex flex-col justify-between bg-slate-900">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <div>
                  <div className="text-xs font-bold text-white">{activeContact}</div>
                  <div className="text-[10px] text-slate-400 font-mono">E2E End-to-End Encrypted</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => startCall('audio')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                  title="اتصال صوتي"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                </button>
                <button
                  onClick={() => startCall('video')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                  title="اتصال فيديو"
                >
                  <Video className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 overflow-y-auto flex-1">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'me'
                        ? 'bg-indigo-600 text-white rounded-br-none'
                        : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-[10px] opacity-60 block mt-1 text-right font-mono">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 bg-slate-950 flex items-center gap-2">
              <input
                type="text"
                placeholder={isAr ? 'اكتب رسالتك المشفرة هنا...' : 'Type encrypted message...'}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. VOICE & VIDEO CALLING STUDIO */}
      {subTab === 'call' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-cyan-400" />
                <span>{isAr ? 'استوديو الاتصال الصوتي والفيديو المشفر (WebRTC Calls)' : 'Decentralized P2P Calling Studio'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isAr
                  ? 'اتصال مباشر عالي الدقة (HD Audio/Video) بدون خوادم وسيطة تتجسس على مكالماتك'
                  : 'High-definition WebRTC voice and video streams with end-to-end cryptographic shielding'}
              </p>
            </div>

            {!isCalling ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => startCall('audio')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isAr ? 'بدء اتصال صوتي' : 'Start Audio Call'}</span>
                </button>
                <button
                  onClick={() => startCall('video')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-600/30 transition"
                >
                  <Video className="w-4 h-4" />
                  <span>{isAr ? 'بدء مكالمة فيديو' : 'Start Video Call'}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="font-mono text-emerald-400 text-sm font-bold bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                  {formatTimer(callSeconds)}
                </span>
                <button
                  onClick={endCall}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg shadow-rose-600/30 transition"
                >
                  <PhoneOff className="w-4 h-4" />
                  <span>{isAr ? 'إنهاء المكالمة' : 'End Call'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Video / Call Screen Viewport */}
          <div className="relative w-full h-[450px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center shadow-inner">
            {isCalling ? (
              <>
                {/* Remote Participant Mock Feed */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950">
                  <img
                    src="/src/assets/images/superapp_avatar_vip_1792350305759.jpg"
                    alt="Caller"
                    className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-2xl object-cover mb-4 animate-pulse"
                  />
                  <h4 className="text-lg font-bold text-white">{activeContact}</h4>
                  <p className="text-xs text-emerald-400 font-mono mt-1">
                    {callType === 'video' ? 'HD Video Call Connected' : 'Encrypted Audio Stream Active'}
                  </p>
                </div>

                {/* Local Camera Picture-in-Picture */}
                {callType === 'video' && !isVideoOff && (
                  <div className="absolute bottom-5 right-5 w-48 h-36 bg-black rounded-xl overflow-hidden border-2 border-indigo-500 shadow-2xl z-20">
                    <video
                      ref={localVideoRef}
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-2 text-[10px] text-white/80 bg-black/60 px-1 rounded font-mono">
                      {isAr ? 'كاميرتك' : 'You'}
                    </span>
                  </div>
                )}

                {/* On-Call Controls Bar */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-700 shadow-2xl z-30">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-3 rounded-xl transition ${isMuted ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}
                  >
                    {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`p-3 rounded-xl transition ${isVideoOff ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-200 hover:bg-slate-700'}`}
                  >
                    {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={endCall}
                    className="p-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white transition"
                  >
                    <PhoneOff className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center space-y-3 p-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-cyan-400">
                  <Video className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {isAr ? 'الكاميرا والميكروفون في وضع الاستعداد' : 'Calling Studio Ready'}
                </h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  {isAr
                    ? 'اختر جهة اتصال أو اضغط "بدء اتصال" للتواصل الفوري بالصوت والفيديو فائق الوضوح.'
                    : 'Select a contact and start encrypted WebRTC audio or video conversation immediately.'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
