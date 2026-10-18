import React, { useState } from 'react';
import { WalletAsset } from './index';
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
  ShieldCheck,
  Copy,
  CheckCircle2,
  ExternalLink,
  Layers,
  Key,
  QrCode,
  AlertCircle,
  X,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';

interface WalletModuleProps {
  lang: 'ar' | 'en';
  walletAddress: string | null;
  chainId: string | null;
  nativeBalance: string | null;
}

export const WalletModule: React.FC<WalletModuleProps> = ({ lang, walletAddress, chainId, nativeBalance }) => {
  const isAr = lang === 'ar';
  const chainNames: Record<string, string> = { '0x1': 'Ethereum', '0x38': 'BNB Smart Chain', '0x89': 'Polygon', '0xa4b1': 'Arbitrum One', '0xa': 'Optimism', '0x2105': 'Base', '0xaa36a7': 'Sepolia Testnet', '0x61': 'BNB Testnet' };
  const activeChainName = chainId ? (chainNames[chainId.toLowerCase()] ?? 'Unknown network') : 'Not connected';
  const nativeSymbol = chainId?.toLowerCase() === '0x38' || chainId?.toLowerCase() === '0x61' ? 'BNB' : chainId?.toLowerCase() === '0x1' || chainId?.toLowerCase() === '0xaa36a7' ? 'ETH' : chainId?.toLowerCase() === '0x89' ? 'POL' : chainId?.toLowerCase() === '0xa4b1' || chainId?.toLowerCase() === '0xa' || chainId?.toLowerCase() === '0x2105' ? 'ETH' : '';

  const [assets, setAssets] = useState<WalletAsset[]>([]);
  const [activeModal, setActiveModal] = useState<'send' | 'receive' | 'swap' | 'backup' | null>(null);
  
  // Send state
  const [sendSymbol, setSendSymbol] = useState('USDT');
  const [sendRecipient, setSendRecipient] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [sendSuccess, setSendSuccess] = useState(false);

  // Swap state
  const [swapFrom, setSwapFrom] = useState('USDT');
  const [swapTo, setSwapTo] = useState('ETH');
  const [swapAmount, setSwapAmount] = useState('1000');
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapComplete, setSwapComplete] = useState(false);

  // Backup seed phrase reveal state
  const [showSeed, setShowSeed] = useState(false);
  const seedWords: string[] = [];

  // Total balance computation

  // Handle Send action
  const handleExecuteSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sendRecipient || !sendAmount) return;
    const numAmt = parseFloat(sendAmount);
    setAssets(prev => prev.map(a => {
      if (a.symbol === sendSymbol) {
        return { ...a, balance: Math.max(0, a.balance - numAmt) };
      }
      return a;
    }));
    setSendSuccess(true);
    setTimeout(() => {
      setSendSuccess(false);
      setActiveModal(null);
      setSendAmount('');
      setSendRecipient('');
    }, 2000);
  };

  // Handle Swap action
  const handleExecuteSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      const fromAsset = assets.find(a => a.symbol === swapFrom);
      const toAsset = assets.find(a => a.symbol === swapTo);
      if (fromAsset && toAsset) {
        const fromValUSD = parseFloat(swapAmount) * fromAsset.priceUSD;
        const toAmt = fromValUSD / toAsset.priceUSD;

        setAssets(prev => prev.map(a => {
          if (a.symbol === swapFrom) {
            return { ...a, balance: Math.max(0, a.balance - parseFloat(swapAmount)) };
          }
          if (a.symbol === swapTo) {
            return { ...a, balance: a.balance + toAmt };
          }
          return a;
        }));
      }
      setIsSwapping(false);
      setSwapComplete(true);
      setTimeout(() => {
        setSwapComplete(false);
        setActiveModal(null);
      }, 1500);
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner: Multi-Chain Wallet Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{isAr ? 'محفظة لا مركزية ذاتية الحفظ (Non-Custodial Multi-Chain)' : 'Non-Custodial Multi-Chain Engine'}</span>
            </div>
            <div className="text-2xl lg:text-3xl font-black text-white tracking-tight">
              {walletAddress ? (isAr ? 'المحفظة متصلة' : 'Wallet connected') : (isAr ? 'المحفظة غير متصلة' : 'Wallet not connected')}
            </div>
            <p className="text-xs text-slate-400 mt-2 flex items-center gap-2">
              <span>{isAr ? 'عنوان محفظتك المتصلة:' : 'Connected wallet address:'}</span>
              <span className="font-mono text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                {walletAddress ?? (isAr ? 'لم يتم ربط محفظة' : 'No wallet connected')}
              </span>
            </p>
          </div>

          {/* Wallet Actions Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveModal('send')}
              disabled
              title={isAr ? 'سيتم تفعيل التحويل بعد تنفيذ معاملات بلوكتشين حقيقية' : 'Sending will be enabled after real on-chain transactions are implemented'}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/20 transition active:scale-95"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>{isAr ? 'إرسال' : 'Send'}</span>
            </button>
            <button
              onClick={() => setActiveModal('receive')}
              disabled
              title={isAr ? 'سيتم تفعيل الاستلام بعد إنشاء QR حقيقي والتحقق من الشبكة' : 'Receive will be enabled after real QR generation and network verification'}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/20 transition active:scale-95"
            >
              <ArrowDownLeft className="w-4 h-4" />
              <span>{isAr ? 'استلام' : 'Receive'}</span>
            </button>
            <button
              onClick={() => setActiveModal('swap')}
              disabled
              title={isAr ? 'سيتم تفعيل التبديل بعد ربط بروتوكول DEX حقيقي' : 'Swap will be enabled after a real DEX integration'}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition active:scale-95"
            >
              <RefreshCw className="w-4 h-4 text-cyan-400" />
              <span>{isAr ? 'تبديل فوري (Swap)' : 'Instant Swap'}</span>
            </button>
            <button
              onClick={() => setActiveModal('backup')}
              disabled
              title={isAr ? 'عبارة الاسترداد تبقى داخل محفظتك الخارجية' : 'Recovery phrase stays in your external wallet'}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 border border-amber-500/30 font-semibold text-xs transition"
            >
              <Key className="w-4 h-4 text-amber-400" />
              <span>{isAr ? 'عبارة الاسترداد' : 'Backup Vault'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs leading-6 text-amber-100">
        {isAr
          ? 'تنبيه: تم تفعيل واجهة الاتصال بالمحفظة فقط. الأرصدة والتحويلات والتبديل متعدد الشبكات لم تُربط بعد ببيانات بلوكتشين حقيقية، لذلك أوقفنا هذه الإجراءات مؤقتًا لحمايتك.'
          : 'Notice: wallet connection UI is enabled only. Live balances, transfers, and multi-chain swaps are not yet connected to blockchain data, so these actions are temporarily disabled for your safety.'}
      </div>

      {/* Current injected-wallet network; network switching is not yet enabled. */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>{isAr ? 'الشبكة الحالية للمحفظة' : 'Current wallet network'}</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            {isAr ? 'الشبكة:' : 'Network:'} <span className={walletAddress ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>{walletAddress ? activeChainName : (isAr ? 'غير متصل' : 'Not connected')}</span>
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <div className="text-xs text-slate-400">{isAr ? 'الرصيد الأصلي على الشبكة الحالية' : 'Native balance on current network'}</div>
        <div className="mt-1 text-lg font-bold text-white">{walletAddress ? (nativeBalance === null ? (isAr ? 'غير متاح حاليًا' : 'Unavailable') : nativeBalance) : (isAr ? 'اربط المحفظة أولاً' : 'Connect wallet first')}</div>
        <div className="text-xs text-slate-500 mt-1">{activeChainName} · {chainId ?? '—'}</div>
      </div>

      {/* Assets Breakdown Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">
            {isAr ? 'الأصول والعملات في المحفظة' : 'Token Portfolio & Balances'}
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            {assets.length} {isAr ? 'عملات نشطة' : 'Assets Tracked'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead className="bg-slate-950 text-slate-400 font-mono uppercase border-b border-slate-800">
              <tr>
                <th className="py-3 px-6">{isAr ? 'الأصل / العملة' : 'Asset'}</th>
                <th className="py-3 px-6">{isAr ? 'الشبكة' : 'Chain'}</th>
                <th className="py-3 px-6">{isAr ? 'السعر الحالي (USD)' : 'Price'}</th>
                <th className="py-3 px-6">{isAr ? 'التغير 24h' : '24h Change'}</th>
                <th className="py-3 px-6">{isAr ? 'الرصيد' : 'Holdings'}</th>
                <th className="py-3 px-6">{isAr ? 'القيمة الإجمالية' : 'Total Value'}</th>
                <th className="py-3 px-6 text-center">{isAr ? 'إجراءات' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {assets.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-slate-400">
                    {isAr
                      ? 'أرصدة العملات والرموز غير مفعّلة بعد. المعروض حاليًا هو الرصيد الأصلي للشبكة المتصلة فقط.'
                      : 'Token balances are not integrated yet. Only the connected network native balance is currently read.'}
                  </td>
                </tr>
              )}
              {assets.map((asset) => {
                const totalAssetVal = asset.balance * asset.priceUSD;
                return (
                  <tr key={asset.symbol} className="hover:bg-slate-800/30 transition">
                    <td className="py-3 px-6 font-bold text-white flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg ${asset.iconBg} flex items-center justify-center font-mono text-xs font-black`}>
                        {asset.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <div className="text-white">{asset.name}</div>
                        <div className="text-[11px] text-slate-500 font-mono">{asset.symbol}</div>
                      </div>
                    </td>
                    <td className="py-3 px-6 font-mono text-slate-400 uppercase">
                      {asset.networkId}
                    </td>
                    <td className="py-3 px-6 font-mono font-semibold tabular-nums text-slate-200">
                      ${asset.priceUSD.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-3 px-6 font-mono font-bold tabular-nums">
                      <span className={asset.change24h >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                        {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                      </span>
                    </td>
                    <td className="py-3 px-6 font-mono font-bold text-white tabular-nums">
                      {asset.balance.toLocaleString()} {asset.symbol}
                    </td>
                    <td className="py-3 px-6 font-mono font-extrabold text-cyan-400 tabular-nums">
                      ${totalAssetVal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button
                        onClick={() => {
                          setSendSymbol(asset.symbol);
                          setActiveModal('send');
                        }}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition"
                      >
                        {isAr ? 'إرسال' : 'Send'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: Send Crypto */}
      {activeModal === 'send' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 left-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-white mb-4">
              {isAr ? 'إرسال عملات رقمية مشفرة' : 'Send Crypto Assets'}
            </h3>

            {sendSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-base font-bold text-white">
                  {isAr ? 'تم إرسال المعاملة بنجاح إلى البلوكتشين!' : 'Transaction Broadcasted Successfully!'}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  TxHash: 0x93b4...119c
                </p>
              </div>
            ) : (
              <form onSubmit={handleExecuteSend} className="space-y-4 text-xs">
                <div>
                  <label className="text-slate-400 block mb-1 font-semibold">
                    {isAr ? 'اختر العملة المراد إرسالها:' : 'Select Asset:'}
                  </label>
                  <select
                    value={sendSymbol}
                    onChange={(e) => setSendSymbol(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  >
                    {assets.map(a => (
                      <option key={a.symbol} value={a.symbol}>
                        {a.name} ({a.symbol}) - المتاح: {a.balance}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1 font-semibold">
                    {isAr ? 'عنوان المستلم (Recipient Address):' : 'Recipient Address:'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="0x... or sol... or bc1..."
                    value={sendRecipient}
                    onChange={(e) => setSendRecipient(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1 font-semibold">
                    {isAr ? 'الكمية المراد إرسالها:' : 'Amount to Send:'}
                  </label>
                  <input
                    type="number"
                    step="any"
                    required
                    placeholder="0.00"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  />
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>{isAr ? 'رسوم الغاز المقدرة:' : 'Estimated Gas:'}</span>
                    <span className="font-mono text-emerald-400">~$0.45 USD</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{isAr ? 'الشبكة المستهدفة:' : 'Target Network:'}</span>
                    <span className="font-mono text-slate-200">{selectedNetwork.name}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition shadow-lg shadow-indigo-600/30"
                >
                  {isAr ? 'تأكيد الإرسال والتوقيع المشفر' : 'Sign & Broadcast Transaction'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL: Receive Crypto */}
      {activeModal === 'receive' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative text-center">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 left-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-white mb-2">
              {isAr ? 'استلام عملات رقمية' : 'Receive Crypto'}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {isAr ? `عنوانك على شبكة ${selectedNetwork.name}` : `Your address on ${selectedNetwork.name}`}
            </p>

            <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center mb-4">
              <QrCode className="w-40 h-40 text-slate-950" />
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 mb-4 text-xs font-mono text-slate-300 break-all select-all">
              {walletAddress ?? (isAr ? 'اربط محفظتك أولاً' : 'Connect a wallet first')}
            </div>

            <button
              onClick={() => {
                if (walletAddress) navigator.clipboard.writeText(walletAddress);
                alert(isAr ? 'تم نسخ العنوان إلى الحافظة' : 'Address copied to clipboard');
              }}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition flex items-center justify-center gap-2 text-xs"
            >
              <Copy className="w-4 h-4" />
              <span>{isAr ? 'نسخ العنوان' : 'Copy Address'}</span>
            </button>
          </div>
        </div>
      )}

      {/* MODAL: Swap Simulator */}
      {activeModal === 'swap' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 left-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-cyan-400" />
              <span>{isAr ? 'التبديل الفوري اللامركزي (DEX Swap)' : 'Decentralized Token Swap'}</span>
            </h3>

            {swapComplete ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  {isAr ? 'تم التبديل بنجاح!' : 'Swap Executed!'}
                </h4>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                {/* Pay Box */}
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-slate-400">
                    <span>{isAr ? 'أنت تدفع:' : 'You Pay:'}</span>
                    <span>{isAr ? 'الرصيد: ' : 'Bal: '} 14,250 USDT</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={swapAmount}
                      onChange={(e) => setSwapAmount(e.target.value)}
                      className="w-full bg-transparent text-white font-mono text-base font-bold focus:outline-none"
                    />
                    <select
                      value={swapFrom}
                      onChange={(e) => setSwapFrom(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-lg px-2 text-white font-mono"
                    >
                      <option value="USDT">USDT</option>
                      <option value="ETH">ETH</option>
                      <option value="SOL">SOL</option>
                      <option value="BTC">BTC</option>
                    </select>
                  </div>
                </div>

                {/* Receive Box */}
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-slate-400">
                    <span>{isAr ? 'أنت تستلم تقريباً:' : 'You Receive (approx):'}</span>
                    <span className="text-emerald-400">سعر الصرف الأفضل ✓</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-full text-emerald-400 font-mono text-base font-bold py-1">
                      {((parseFloat(swapAmount) || 0) / 3620.80).toFixed(4)}
                    </div>
                    <select
                      value={swapTo}
                      onChange={(e) => setSwapTo(e.target.value)}
                      className="bg-slate-900 border border-slate-700 rounded-lg px-2 text-white font-mono"
                    >
                      <option value="ETH">ETH</option>
                      <option value="SOL">SOL</option>
                      <option value="BTC">BTC</option>
                      <option value="TON">TON</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-xl text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>{isAr ? 'الانزلاق السعري (Slippage):' : 'Slippage:'}</span>
                    <span className="font-mono text-slate-300">0.5% (Auto)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isAr ? 'رسوم البروتوكول:' : 'Protocol Fee:'}</span>
                    <span className="font-mono text-emerald-400">0.0% (Zero Fee)</span>
                  </div>
                </div>

                <button
                  onClick={handleExecuteSwap}
                  disabled={isSwapping}
                  className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white font-bold transition flex items-center justify-center gap-2"
                >
                  {isSwapping ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <span>{isAr ? 'تنفيذ التبديل الفوري' : 'Execute Swap'}</span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: Seed Phrase Backup */}
      {activeModal === 'backup' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 left-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <Lock className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">
                {isAr ? 'عبارة الاسترداد السرية (Seed Phrase)' : 'Secret Recovery Phrase'}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              {isAr
                ? 'لا تشارك هذه الكلمات مع أي شخص أبداً. من يمتلك هذه الكلمات يمتلك كامل أصولك الرقمية.'
                : 'Never share these 12 words with anyone. Anyone with this phrase has full access to your funds.'}
            </p>

            <div className="relative p-4 bg-slate-950 rounded-xl border border-slate-800 mb-4">
              {!showSeed ? (
                <div className="flex flex-col items-center justify-center py-6 space-y-2">
                  <Lock className="w-8 h-8 text-slate-600" />
                  <span className="text-xs text-slate-400">
                    {isAr ? 'عبارة الاسترداد لا تنشئها WEB3ONE ولا تخزنها. افتح محفظتك الخارجية لإدارتها بأمان.' : 'WEB3ONE does not create or store your recovery phrase. Manage it securely inside your external wallet.'}
                  </span>
                  <button
                    onClick={() => setShowSeed(true)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isAr ? 'افتح المحفظة الخارجية' : 'Open external wallet'}</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {seedWords.map((word, idx) => (
                    <div key={idx} className="p-2 bg-slate-900 rounded border border-slate-800 text-xs font-mono text-center">
                      <span className="text-slate-500 mr-1">{idx + 1}.</span>
                      <span className="text-amber-300 font-bold">{word}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {showSeed && (
              <button
                onClick={() => setShowSeed(false)}
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
