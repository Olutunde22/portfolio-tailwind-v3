import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Fades and rises its children once, when they first scroll into view.
 * `delay` staggers siblings that enter together.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setShown(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      style={{ transitionDelay: shown && delay ? `${delay}ms` : undefined }}
      className={cn(
        shown
          ? "translate-y-0 opacity-100 [transition:opacity_.6s_ease,transform_.6s_cubic-bezier(.2,.7,.2,1)]"
          : "translate-y-[22px] opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
