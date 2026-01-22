import { StructurePlanner } from "@/components/structure-planner";
import { TradingViewWidget } from "@/components/trading-view-widget";

export default function Home() {
  const sessionPhases = [
    {
      label: "Pre-Market",
      window: "07:00 – 09:20 ET",
      objective: "Build higher timeframe narrative",
      focus: [
        "Anchor VWAP to 04:00 ET futures open",
        "Plot overnight high/low and Asia range extremes",
        "Mark economic events with expected volatility",
      ],
      tools: ["Volume Profile HD", "Session Volume", "Economic Calendar"],
    },
    {
      label: "Opening Rotation",
      window: "09:30 – 10:45 ET",
      objective: "Define opening auction structure",
      focus: [
        "Opening range first 15m + developing value",
        "Delta divergence & tick index confirmation",
        "Liquidity pools above/below session structure",
      ],
      tools: ["Opening Range Indicator", "CVD/Delta", "Liquidity Heatmap"],
    },
    {
      label: "Midday Balance",
      window: "11:00 – 13:30 ET",
      objective: "Monitor compression + absorption",
      focus: [
        "Identify micro composite value areas",
        "Track regression channels for compression",
        "Record cumulative volume delta slow-down",
      ],
      tools: ["Anchored VWAP", "Regression Trend", "Volume Delta"],
    },
    {
      label: "Closing Auction",
      window: "14:30 – 16:00 ET",
      objective: "Exploit imbalance release",
      focus: [
        "Map imbalance rate vs. VWAP bands",
        "Look for liquidity sweeps of session extremes",
        "Fade/Follow based on internals confirmation",
      ],
      tools: ["Imbalance Meter", "Breadth Indicators", "VWAP Bands"],
    },
  ];

  const structureStacks = [
    {
      title: "Bias Layer",
      description:
        "Frame price discovery by aligning daily/weekly auction with session narrative.",
      bullets: [
        "Top-down HTF bias: Weekly → Daily → 4H order blocks",
        "Assess sessions in control: Asia, London, New York",
        "Synchronize with macro catalysts and liquidity map",
      ],
    },
    {
      title: "Execution Layer",
      description:
        "Translate directional thesis into repeatable execution via objective triggers.",
      bullets: [
        "Trigger: ORB retest, VWAP reclaim, or liquidity sweep",
        "Confirm: Delta, TICK/TICKQ, book imbalance",
        "Manage: Partial on first structure break, trail behind pivots",
      ],
    },
    {
      title: "Risk Layer",
      description:
        "Define invalidation, risk splits, and trade management prior to execution.",
      bullets: [
        "Hard stop: 1.2x structure width or opposite liquidity pool",
        "Risk splits: 60/40 core vs. runner allocation",
        "Session max loss: 1.5R with volatility-adjusted sizing",
      ],
    },
  ];

  const tradeJournal = [
    {
      setup: "Opening Drive Continuation",
      primary: "Trend",
      metrics: ["RR ≥ 1.7", "Win% 58", "Avg Hold 32m"],
      notes: "Ideal on CPI/FOMC drift days with strong internals alignment.",
    },
    {
      setup: "Liquidity Sweep Reversal",
      primary: "Range",
      metrics: ["RR ≥ 2.4", "Win% 46", "Avg Hold 18m"],
      notes: "Tag impulses only when sweep >0.3% and tick divergence fires.",
    },
    {
      setup: "Midday Compression Expansion",
      primary: "Compression",
      metrics: ["RR ≥ 1.9", "Win% 52", "Avg Hold 41m"],
      notes: "Works best when NYSE advance/decline stabilizes near zero.",
    },
    {
      setup: "Closing Auction Fade",
      primary: "Auction",
      metrics: ["RR ≥ 1.6", "Win% 55", "Avg Hold 21m"],
      notes: "Avoid on triple witching or rebalance days; volatility erratic.",
    },
  ];

  return (
    <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-16 px-6 pb-24 pt-12 md:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 blur-[140px]">
        <div className="absolute left-12 top-14 h-64 w-64 rounded-full bg-cyan-500/20" />
        <div className="absolute right-24 top-36 h-72 w-72 rounded-full bg-indigo-500/20" />
        <div className="absolute bottom-12 right-10 h-60 w-60 rounded-full bg-emerald-500/10" />
      </div>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Intraday Structures
          </p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            A precision framework for TradingView based intraday execution.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Align directional bias, order flow, and liquidity to map your
            trading day. Built for traders who demand clarity before the bell
            and disciplined execution after it.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5">
              Session Layouts
            </span>
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5">
              Liquidity Mapping
            </span>
            <span className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1.5">
              Execution Playbooks
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/60 p-4 shadow-[0_0_70px_rgba(14,165,233,0.18)]">
          <TradingViewWidget />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
              Session Blueprint
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Structure each session before the bell rings.
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              Map the auction, liquidity, and order flow context at a glance.
              Each block links to TradingView tools so you can replicate the
              view instantly.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-200"
            href="https://www.tradingview.com/"
            target="_blank"
            rel="noreferrer"
          >
            Launch TradingView
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {sessionPhases.map((phase) => (
            <div
              key={phase.label}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900/70"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  {phase.label}
                </span>
                <span className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-slate-300">
                  {phase.window}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {phase.objective}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {phase.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                  >
                    <span className="mt-1 size-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                {phase.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-700/80 bg-slate-950 px-3 py-1 uppercase tracking-wider text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <StructurePlanner />

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-indigo-300">
              Execution Stack
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Layer your decision making.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Each card defines foundational components to prepare before the
              session starts. Treat them as building blocks for your TradingView
              templates.
            </p>

            <div className="mt-6 space-y-5">
              {structureStacks.map((stack) => (
                <div
                  key={stack.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {stack.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {stack.description}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {stack.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-indigo-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-950 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              Playbook Export
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Copy to TradingView Notes
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Paste the checklist into a TradingView note on your symbol to keep
              the structure visible beside the live chart.
            </p>
            <ol className="mt-4 space-y-2 text-sm text-slate-200">
              <li>1. Open TradingView &gt; Right sidebar &gt; Notes</li>
              <li>2. Create a new note with the structure output</li>
              <li>
                3. Pair with Chart Layouts: Premarket, Opening, Midday, Closing
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/50 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              Performance Tracker
            </p>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Maintain your structured playbooks.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Log each execution and review weekly to retire underperforming
              structures and scale the ones with edge.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-200"
            href="https://www.tradingview.com/chart/?solution=43000653767"
            target="_blank"
            rel="noreferrer"
          >
            Load Execution Journal Template
          </a>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/70">
          <div className="grid grid-cols-[2fr_1fr_1fr_2fr] border-b border-slate-800 bg-slate-900/80 px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300">
            <span>Setup</span>
            <span>Structure</span>
            <span>Metrics</span>
            <span>Notes</span>
          </div>
          <div className="divide-y divide-slate-800 text-sm text-slate-200">
            {tradeJournal.map((entry) => (
              <div
                key={entry.setup}
                className="grid grid-cols-[2fr_1fr_1fr_2fr] gap-4 px-6 py-4"
              >
                <span className="font-medium text-white">{entry.setup}</span>
                <span className="uppercase tracking-wider text-slate-300">
                  {entry.primary}
                </span>
                <span className="space-x-2 text-slate-200">
                  {entry.metrics.map((metric) => (
                    <code
                      key={metric}
                      className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-cyan-200"
                    >
                      {metric}
                    </code>
                  ))}
                </span>
                <span className="text-slate-300">{entry.notes}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

