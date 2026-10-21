import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TerminalWindowValue = {
  maximized: boolean;
  maximize: () => void;
  restore: () => void;
  close: () => void;
};

const TerminalWindowContext = createContext<TerminalWindowValue | null>(null);

export function useTerminalWindow() {
  const value = useContext(TerminalWindowContext);
  if (!value) throw new Error("useTerminalWindow must be used within <TerminalWindow>");
  return value;
}

/**
 * Wraps the page in a faux terminal window that the top-bar dots can close,
 * maximize (fullscreen + full width) and restore back to its normal size.
 */
export function TerminalWindow({ children }: { children: ReactNode }) {
  const [maximized, setMaximized] = useState(false);
  const [closed, setClosed] = useState(false);

  const close = useCallback(() => setClosed(true), []);

  // The width change stands on its own, so a rejected fullscreen request
  // (unsupported, or not granted) still leaves the window maximized.
  const maximize = useCallback(() => {
    setMaximized(true);
    document.documentElement.requestFullscreen().catch(() => {});
  }, []);

  const restore = useCallback(() => {
    setMaximized(false);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  }, []);

  // Leaving fullscreen by any other means (Esc, browser chrome) unmaximizes.
  useEffect(() => {
    const syncFullscreen = () => {
      if (!document.fullscreenElement) setMaximized(false);
    };
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  useEffect(() => {
    if (!closed) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [closed]);

  return (
    <TerminalWindowContext.Provider value={{ maximized, maximize, restore, close }}>
      <div
        className={cn(
          "relative mx-auto flex min-h-dvh flex-col transition-[max-width] duration-300 ease-out",
          maximized ? "max-w-full" : "max-w-310"
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-51 overflow-hidden"
        >
          <div className="absolute inset-x-0 h-35 animate-beam bg-[linear-gradient(180deg,transparent,rgb(var(--accent)/0.05)_45%,rgb(var(--scanline)/0.045)_52%,transparent)]" />
        </div>

        {children}

        {closed && <ClosedScreen onReconnect={() => setClosed(false)} />}
      </div>
    </TerminalWindowContext.Provider>
  );
}

function ClosedScreen({ onReconnect }: { onReconnect: () => void }) {
  return (
    <div className="fixed inset-0 z-45 flex animate-fade-in flex-col items-center justify-center gap-5 bg-bg px-6 text-center font-mono">
      <p className="text-[13px] text-fg-mute">[process completed]</p>
      <p className="text-[15px] text-fg-dim">
        connection to olutunde.dev closed. reload to reconnect.
      </p>
      <button
        type="button"
        onClick={onReconnect}
        className="mt-2 cursor-pointer border border-line-strong px-5.5 py-[13px] text-[14px] hover:border-accent hover:text-accent"
      >
        [ reconnect ]
      </button>
    </div>
  );
}
