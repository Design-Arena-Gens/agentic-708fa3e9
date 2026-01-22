'use client';

import { useMemo, useState } from "react";

type Bias = "Bullish" | "Bearish" | "Neutral";
type Volatility = "Low" | "Medium" | "High";
type MarketState = "Trend" | "Range" | "Choppy";

type Structure = {
  id: string;
  name: string;
  summary: string;
  bias: Bias[];
  volatility: Volatility[];
  marketState: MarketState[];
  playbook: {
    key: string;
    items: string[];
  }[];
};

const STRUCTURES: Structure[] = [
  {
    id: "opening-drive",
    name: "Opening Drive Continuation",
    summary:
      "Capitalize on strong directional flows during the first 45 minutes when higher-timeframe bias aligns with session imbalance.",
    bias: ["Bullish", "Bearish"],
    volatility: ["Medium", "High"],
    marketState: ["Trend"],
    playbook: [
      {
        key: "Pre-Market Map",
        items: [
          "Anchor VWAP to 08:30 ET economic release and project value area",
          "Mark overnight high/low and 4h supply-demand pivots",
          "Track delta imbalance from futures open (09:30 ET) for confirmation",
        ],
      },
      {
        key: "Execution",
        items: [
          "Enter on first pullback to anchored VWAP or session POC",
          "Require 5m structure hold above developing value (bull) / below (bear)",
          "Target prior session range extension with 1.5R trailing stop",
        ],
      },
      {
        key: "Risk Controls",
        items: [
          "Invalidate on 5m close back inside opening range",
          "Cut size by 50% when cumulative delta diverges by >20%",
        ],
      },
    ],
  },
  {
    id: "liquidity-sweep",
    name: "Liquidity Sweep Reversal",
    summary:
      "Fade algorithmic stop hunts at session extremes when higher timeframe auctions are exhausted.",
    bias: ["Bullish", "Bearish", "Neutral"],
    volatility: ["Low", "Medium"],
    marketState: ["Range", "Choppy"],
    playbook: [
      {
        key: "Structure Map",
        items: [
          "Define accumulation + distribution zones on 15m anchored profile",
          "Wait for liquidity grab ≥0.25% outside key range reference",
          "Confirm with divergence on cumulative delta or TICK/TICKQ",
        ],
      },
      {
        key: "Execution",
        items: [
          "Enter on engulfing candle back inside range (2m/5m)",
          "Stop below/above liquidity wick; partial at mid-point, final at opposite range extreme",
          "Trail stop behind structure pivots as volume tapers",
        ],
      },
      {
        key: "Risk Controls",
        items: [
          "Avoid during major economic releases or opening 15 minutes",
          "Exit if reclaimed level fails to hold for two consecutive closes",
        ],
      },
    ],
  },
  {
    id: "midday-expansion",
    name: "Midday Compression Expansion",
    summary:
      "Exploit volatility contraction after lunch lull when order flow resets into the closing session.",
    bias: ["Bullish", "Bearish", "Neutral"],
    volatility: ["Low", "Medium"],
    marketState: ["Range", "Trend"],
    playbook: [
      {
        key: "Setup Build",
        items: [
          "Identify 30m compression pattern (inside bars or value overlap)",
          "Overlay session VWAP bands and 20 EMA for slope confirmation",
          "Use DOM or footprint to verify absorption at range edges",
        ],
      },
      {
        key: "Execution",
        items: [
          "Enter on break and retest of compression boundary",
          "Scale into second position on retest of micro-balance area",
          "First target at 1.0x measured move; final into closing imbalance",
        ],
      },
      {
        key: "Risk Controls",
        items: [
          "Reduce risk if average true range < 60% of 20-day ATR",
          "Hard stop outside compression +/- liquidity sweep threshold",
        ],
      },
    ],
  },
  {
    id: "closing-auction",
    name: "Closing Auction Fade",
    summary:
      "Trade end-of-day imbalances when market makers unwind during the final 30 minutes.",
    bias: ["Bullish", "Bearish"],
    volatility: ["Medium", "High"],
    marketState: ["Range", "Choppy"],
    playbook: [
      {
        key: "Context",
        items: [
          "Use Market Internals (ADD, VOLD) to confirm exhaustion",
          "Plot 1m cumulative delta to detect absorption",
          "Track imbalance from NYSE Closing Auction indications",
        ],
      },
      {
        key: "Execution",
        items: [
          "Enter fade after final liquidity sweep (15:40-15:50 ET)",
          "Stop beyond auction extreme; target VWAP or 50% retrace",
          "Flatten by 15:58 ET to avoid auction repricing",
        ],
      },
      {
        key: "Risk Controls",
        items: [
          "Skip on index rebalance dates or earnings clusters",
          "Require session ATR > 0.8x 20-day average",
        ],
      },
    ],
  },
];

const biasOptions: Bias[] = ["Bullish", "Bearish", "Neutral"];
const volatilityOptions: Volatility[] = ["Low", "Medium", "High"];
const marketStateOptions: MarketState[] = ["Trend", "Range", "Choppy"];

export function StructurePlanner() {
  const [selectedBias, setSelectedBias] = useState<Bias>("Bullish");
  const [selectedVolatility, setSelectedVolatility] =
    useState<Volatility>("Medium");
  const [selectedMarketState, setSelectedMarketState] =
    useState<MarketState>("Trend");

  const recommendation = useMemo(() => {
    return (
      STRUCTURES.find(
        (structure) =>
          structure.bias.includes(selectedBias) &&
          structure.volatility.includes(selectedVolatility) &&
          structure.marketState.includes(selectedMarketState),
      ) ?? STRUCTURES[0]
    );
  }, [selectedBias, selectedVolatility, selectedMarketState]);

  return (
    <section className="rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(14,116,144,0.25)] backdrop-blur">
      <header className="mb-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
          Playbook Builder
        </p>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Structure Planner
        </h2>
        <p className="text-sm text-slate-300">
          Align bias, volatility, and market state to receive an execution
          playbook you can paste directly into your TradingView notes.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Bias
          </h3>
          <div className="flex flex-wrap gap-2">
            {biasOptions.map((bias) => (
              <button
                key={bias}
                type="button"
                onClick={() => setSelectedBias(bias)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedBias === bias
                    ? "bg-cyan-500/90 text-slate-950 shadow-lg shadow-cyan-500/40"
                    : "border border-slate-700/80 bg-slate-900 text-slate-200 hover:border-cyan-500/40"
                }`}
              >
                {bias}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Volatility
          </h3>
          <div className="flex flex-wrap gap-2">
            {volatilityOptions.map((volatility) => (
              <button
                key={volatility}
                type="button"
                onClick={() => setSelectedVolatility(volatility)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedVolatility === volatility
                    ? "bg-emerald-500/90 text-slate-950 shadow-lg shadow-emerald-500/40"
                    : "border border-slate-700/80 bg-slate-900 text-slate-200 hover:border-emerald-400/40"
                }`}
              >
                {volatility}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Market State
          </h3>
          <div className="flex flex-wrap gap-2">
            {marketStateOptions.map((state) => (
              <button
                key={state}
                type="button"
                onClick={() => setSelectedMarketState(state)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedMarketState === state
                    ? "bg-indigo-500/90 text-slate-950 shadow-lg shadow-indigo-500/40"
                    : "border border-slate-700/80 bg-slate-900 text-slate-200 hover:border-indigo-400/40"
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>
      </div>

      <article className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-100">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Recommended Structure
            </p>
            <h3 className="text-xl font-semibold text-white">
              {recommendation.name}
            </h3>
          </div>
          <span className="whitespace-nowrap rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cyan-200">
            {selectedBias} · {selectedVolatility} · {selectedMarketState}
          </span>
        </div>
        <p className="mt-3 text-sm text-slate-300">{recommendation.summary}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {recommendation.playbook.map((block) => (
            <div
              key={block.key}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                {block.key}
              </h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-slate-800/70 bg-slate-900/70 p-2"
                  >
                    <span className="mt-1 size-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

