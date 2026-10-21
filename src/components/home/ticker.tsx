const TICKER_TEXT =
  "AVAILABLE FOR WORK ✦ 97% FASTER CORE FLOWS ✦ 2S → 50MS ✦ −90% MEMORY ✦ WCAG 100% ✦ REACT · NEXT.JS · TYPESCRIPT ✦\u00A0";

export function Ticker() {
  return (
    <div aria-hidden="true" className="overflow-hidden bg-accent py-[13px] text-bg">
      <div className="flex animate-marquee whitespace-nowrap font-mono text-[13px] font-bold tracking-[1.5px]">
        <span>{TICKER_TEXT}</span>
        <span>{TICKER_TEXT}</span>
      </div>
    </div>
  );
}
