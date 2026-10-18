import React, { useState } from 'react';
import { Code, ShieldCheck, AlertCircle, CheckCircle, Terminal, Layers, Lock, Cpu, Database, Network, ChevronDown, ChevronUp, FileCode } from 'lucide-react';
import { SECURITY_CHECKS, TECHNICAL_SCORES } from '../data/auditData';

interface CodeAuditSectionProps {
  lang: 'ar' | 'en';
}

export const CodeAuditSection: React.FC<CodeAuditSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeCodeTab, setActiveCodeTab] = useState<'escrow' | 'ai_worker' | 'frontend'>('escrow');
  const [expandedCheck, setExpandedCheck] = useState<string | null>('sec-1');

  const toggleExpand = (id: string) => {
    setExpandedCheck(expandedCheck === id ? null : id);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Code className="w-4 h-4" />
            <span>{isAr ? 'الفحص الفني المعمق للأكواد والمستودع' : 'Repository Code & Architecture Audit'}</span>
          </div>
          <h2 className="text-2xl font-bold text-white">
            {isAr ? 'تشريح البنية البرمجية، العقود الذكية، ومحرك الذكاء الاصطناعي' : 'Deconstruction of Codebase, Smart Contracts & AI Scanner'}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-mono">
            {isAr ? 'معيار الفحص: EVM Security & Clean Architecture' : 'Audit standard: EVM Security & Clean Architecture'}
          </span>
        </div>
      </div>

      {/* Technical Scorecard Grid */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
          <span>{isAr ? 'بطاقة التقييم الفني المفصلة (Scorecard: 78/100)' : 'Technical Audit Scorecard (78/100)'}</span>
          <span className="text-sm font-normal text-slate-400">
            {isAr ? 'تقييم شامل عبر 5 محاور' : 'Across 5 Core Dimensions'}
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TECHNICAL_SCORES.breakdown.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-200">
                  {isAr ? item.titleAr : item.titleEn}
                </span>
                <span className={`text-base font-extrabold font-mono ${item.color}`}>
                  {item.score} / {item.max}
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.progress} transition-all duration-500 rounded-full`}
                  style={{ width: `${(item.score / item.max) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Topology View */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          <span>{isAr ? 'معمارية المنصة وتدفق البيانات (System Architecture Topology)' : 'Platform System Architecture Topology'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Layer 1 */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <Terminal className="w-4 h-4" />
              <span>{isAr ? '1. واجهة المستخدم والمحافظ' : '1. UI & Wallet Layer'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'مبنية باستخدام Next.js (App Router) مع Tailwind CSS للتصميم المتجاوب، ومكتبة RainbowKit + Wagmi لربط المحافظ (MetaMask, Coinbase, WalletConnect) بتوقيع SIWE القياسي.'
                : 'Next.js App Router, Tailwind CSS, RainbowKit + Wagmi with SIWE (EIP-4361) for deterministic cryptographic wallet sign-in.'}
            </p>
            <div className="text-[11px] font-mono text-indigo-300 bg-indigo-950/40 p-2 rounded border border-indigo-900/40">
              Next.js • RainbowKit • Wagmi • Viem • Tailwind
            </div>
          </div>

          {/* Layer 2 */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Cpu className="w-4 h-4" />
              <span>{isAr ? '2. خادم ومحرك الفحص بالذكاء الاصطناعي' : '2. Backend & AI Scanner'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'خادم Node.js / Serverless Functions يقوم بربط حساب GitHub عبر OAuth وقراءة مستودعات الكود العامة، ثم تمرير ملفات العقود الذكية لنموذج ذكاء اصطناعي لتحليل نقاط الضعف.'
                : 'Node.js runtime parsing GitHub AST trees, fetching public repo contracts, running AST tokenizers and dispatching LLM prompts for heuristic flaw scans.'}
            </p>
            <div className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 p-2 rounded border border-cyan-900/40">
              GitHub Octokit • AST Parser • Gemini/OpenAI API • Fastify
            </div>
          </div>

          {/* Layer 3 */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Network className="w-4 h-4" />
              <span>{isAr ? '3. طبقة التعاقد الذكي والإسكرو' : '3. On-chain Escrow Layer'}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {isAr
                ? 'عقد ذكي (EVM Escrow Contract) لحجز أموال المشتري (USDT, USDC, ETH)، مع قفل زمني، واقتطاع عمولة 7.5% لحساب الخزينة، وإتاحة نافذة تحكيم قبل الإفراج عن المبلغ للبائع.'
                : 'Solidity escrow contract holding USDT/USDC deposits, deducting 7.5% protocol cut to treasury, with timelocked milestones and arbitrator intervention.'}
            </p>
            <div className="text-[11px] font-mono text-emerald-300 bg-emerald-950/40 p-2 rounded border border-emerald-900/40">
              Solidity 0.8.20+ • ERC20 Escrow • OpenZeppelin ReentrancyGuard
            </div>
          </div>
        </div>
      </div>

      {/* Code Inspector Sandbox (Deconstructed Repo Code) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white font-mono text-sm font-semibold">
            <FileCode className="w-4 h-4 text-indigo-400" />
            <span>{isAr ? 'عينة الأكواد التشريحية للمنصة (Deconstructed Architecture Snippets)' : 'Deconstructed Code Architecture Snippets'}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveCodeTab('escrow')}
              className={`px-3 py-1 text-xs font-mono rounded-md transition ${
                activeCodeTab === 'escrow' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Web3MarketEscrow.sol
            </button>
            <button
              onClick={() => setActiveCodeTab('ai_worker')}
              className={`px-3 py-1 text-xs font-mono rounded-md transition ${
                activeCodeTab === 'ai_worker' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              aiDueDiligenceWorker.ts
            </button>
            <button
              onClick={() => setActiveCodeTab('frontend')}
              className={`px-3 py-1 text-xs font-mono rounded-md transition ${
                activeCodeTab === 'frontend' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              DealRoomEscrowFlow.tsx
            </button>
          </div>
        </div>

        <div className="p-5 font-mono text-xs overflow-x-auto bg-slate-950/95 text-slate-300 leading-relaxed border-b border-slate-800/80 max-h-96">
          {activeCodeTab === 'escrow' && (
            <pre className="text-slate-300">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Web3MarketEscrow
 * @notice Manages escrow deposits for Web3 code repositories, domains, and dApps
 * @dev Fee is 7.5% (750 basis points) deducted upon successful deal completion
 */
contract Web3MarketEscrow is ReentrancyGuard, Ownable {
    uint256 public constant FEE_BPS = 750; // 7.5% success fee
    address public treasuryWallet;
    address public arbitrator;

    enum DealStatus { Created, Funded, AssetHandedOver, Completed, Disputed, Refunded }

    struct Deal {
        address buyer;
        address seller;
        address paymentToken; // e.g. USDT / USDC
        uint256 amount;
        uint256 inspectWindowDeadline;
        DealStatus status;
        string repoUrlHash;
    }

    mapping(bytes32 => Deal) public deals;

    event DealFunded(bytes32 indexed dealId, address buyer, uint256 amount);
    event DealCompleted(bytes32 indexed dealId, uint256 sellerPayout, uint256 feePaid);

    function completeDeal(bytes32 dealId) external nonReentrant {
        Deal storage deal = deals[dealId];
        require(msg.sender == deal.buyer || msg.sender == arbitrator, "Unauthorized");
        require(deal.status == DealStatus.AssetHandedOver, "Invalid status");

        deal.status = DealStatus.Completed;
        uint256 fee = (deal.amount * FEE_BPS) / 10000;
        uint256 sellerAmount = deal.amount - fee;

        IERC20(deal.paymentToken).transfer(treasuryWallet, fee);
        IERC20(deal.paymentToken).transfer(deal.seller, sellerAmount);

        emit DealCompleted(dealId, sellerAmount, fee);
    }
}`}
            </pre>
          )}

          {activeCodeTab === 'ai_worker' && (
            <pre className="text-slate-300">
{`import { Octokit } from '@octokit/rest';
import { GoogleGenAI } from '@google/genai';

/**
 * Technical Due Diligence Scanner for Web3Market.xyz
 * Crawls public GitHub repositories, flags Solidity smells, dependencies, & tokenomics
 */
export async function runAIDueDiligence(repoUrl: string) {
  const octokit = new Octokit({ auth: process.env.GITHUB_SCAN_TOKEN });
  const { owner, repo } = parseRepoUrl(repoUrl);

  // 1. Fetch smart contract files (.sol, .cairo, .rs)
  const tree = await octokit.git.getTree({ owner, repo, tree_sha: 'HEAD', recursive: 'true' });
  const contracts = tree.data.tree.filter(f => f.path?.endsWith('.sol') || f.path?.endsWith('.rs'));

  // 2. Perform static heuristics check
  const heuristicFlags = [];
  // Detect known pitfalls: tx.origin, delegatecall to untrusted, unindexed reentrancy
  
  // 3. Prompt AI Security Engine for reasoning & vulnerability summary
  const aiPrompt = \`Review this Web3 codebase: \${contracts.length} contracts detected.
  Evaluate:
  - Smart contract reentrancy & authorization
  - Hidden mint or rug-pull logic
  - Dependency vulnerabilities & npm/forge supply chain\`;
  
  return {
    repo,
    contractsCount: contracts.length,
    securityGrade: "B+",
    findings: heuristicFlags,
  };
}`}
            </pre>
          )}

          {activeCodeTab === 'frontend' && (
            <pre className="text-slate-300">
{`import React from 'react';
import { useAccount, useContractWrite } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function DealRoomView({ dealId, askingPriceUSD, repoOwner }) {
  const { isConnected, address } = useAccount();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-bold">Deal Room #{dealId.slice(0, 8)}</h3>
        <ConnectButton />
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
        <div>Asking Price: \${askingPriceUSD.toLocaleString()}</div>
        <div>Success Fee: 7.5% (included)</div>
        <div>GitHub Source: verified ✓</div>
        <div>AI Due Diligence Score: 82 / 100</div>
      </div>

      <button className="mt-4 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-xl">
        Lock Deposit into On-Chain Escrow
      </button>
    </div>
  );
}`}
            </pre>
          )}
        </div>
      </div>

      {/* Security Checklist Table with expandable items */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-400" />
            <span>{isAr ? 'مصفوفة التدقيق الأمني وفحص الثغرات (Security Audit Matrix)' : 'Security Audit Checklist Matrix'}</span>
          </h3>
          <p className="text-xs text-slate-400">
            {isAr
              ? 'انقر على أي عنصر لاستعراض النتيجة الفنية والتوصيات التصحيحية'
              : 'Click on any item to view detailed technical findings and remediation guidelines'}
          </p>
        </div>

        <div className="space-y-3">
          {SECURITY_CHECKS.map((check) => {
            const isExpanded = expandedCheck === check.id;
            return (
              <div
                key={check.id}
                className="border border-slate-800 rounded-xl bg-slate-950/60 overflow-hidden transition"
              >
                <div
                  onClick={() => toggleExpand(check.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-800/40 transition select-none"
                >
                  <div className="flex items-center gap-3">
                    {check.status === 'verified' && <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />}
                    {check.status === 'passed' && <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />}
                    {check.status === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />}
                    <div>
                      <div className="text-xs font-bold text-slate-400">{check.component}</div>
                      <div className="text-sm font-semibold text-white">
                        {isAr ? check.checkAr : check.checkEn}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded uppercase font-mono ${
                        check.severity === 'high'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                          : check.severity === 'medium'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {check.severity} {isAr ? 'خطورة' : 'severity'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 bg-slate-900/50 space-y-3 text-xs">
                    <div>
                      <span className="font-bold text-slate-300 block mb-1">
                        {isAr ? 'النتيجة الفنية المرصودة:' : 'Technical Finding:'}
                      </span>
                      <p className="text-slate-400 leading-relaxed bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                        {isAr ? check.findingAr : check.findingEn}
                      </p>
                    </div>
                    <div>
                      <span className="font-bold text-emerald-400 block mb-1">
                        {isAr ? 'التوصية البرمجية والمعمارية:' : 'Engineering Recommendation:'}
                      </span>
                      <p className="text-slate-300 leading-relaxed bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-900/40">
                        {isAr ? check.recommendationAr : check.recommendationEn}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
