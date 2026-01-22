'use client';

import { useEffect, useRef } from "react";

type TradingViewWidgetProps = {
  symbol?: string;
  theme?: "dark" | "light";
};

export function TradingViewWidget({
  symbol = "NASDAQ:QQQ",
  theme = "dark",
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: "15",
      timezone: "Etc/UTC",
      theme,
      style: "2",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      withdateranges: true,
      range: "1D",
      calendar: true,
      hide_volume: false,
      hide_top_toolbar: false,
      hide_legend: false,
      unique_id: "intraday-structures-widget",
      studies: ["STD;Bollinger Bands", "STD;Relative Strength Index", "STD;MACD"],
    });

    containerRef.current.appendChild(script);
  }, [symbol, theme]);

  return (
    <div className="tradingview-widget-container h-full w-full">
      <div
        className="tradingview-widget-container__widget h-[420px]"
        ref={containerRef}
      />
    </div>
  );
}
