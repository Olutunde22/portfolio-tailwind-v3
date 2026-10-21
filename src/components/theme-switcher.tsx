import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { themes } from "@/lib/themes";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="flex cursor-pointer items-center gap-2 text-fg-mute transition-colors hover:text-accent"
      >
        <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
        <span>
          theme:<span className="text-fg">{theme}</span>
        </span>
        <span aria-hidden="true" className={cn("transition-transform", open && "rotate-180")}>
          ▾
        </span>
      </button>

      {open && (
        <div
          id={menuId}
          className="absolute right-0 top-full z-50 mt-3 min-w-[220px] animate-fade-in border border-line-strong bg-panel py-2 shadow-[0_12px_32px_rgb(0_0_0/0.35)]"
        >
          <p className="border-b border-line px-4 pb-2 text-[11px] text-fg-mute">$ theme --list</p>
          <ul className="pt-1">
            {themes.map(({ id, label, swatch }) => {
              const active = id === theme;
              return (
                <li key={id}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setTheme(id);
                      setOpen(false);
                      buttonRef.current?.focus();
                    }}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-left transition-colors hover:bg-line/60",
                      active ? "text-accent" : "text-fg-dim"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="size-3 rounded-sm border border-line-strong"
                      style={{ backgroundColor: swatch }}
                    />
                    <span className="flex-1">{label}</span>
                    {active && <span aria-hidden="true">✓</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
