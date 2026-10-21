import { useEffect, useState } from "react";

const CHAR_INTERVAL_MS = 42;

/**
 * Renders `text` in full on the server, then retypes it once on the client.
 * The untyped remainder stays in the layout (hidden) so the line never reflows
 * while typing.
 */
export function TypedLine({ text }: { text: string }) {
  const [typedLength, setTypedLength] = useState(text.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval>;

    const frame = requestAnimationFrame(() => {
      setTypedLength(0);
      timer = setInterval(() => {
        setTypedLength((length) => {
          if (length >= text.length) {
            clearInterval(timer);
            return length;
          }
          return length + 1;
        });
      }, CHAR_INTERVAL_MS);
    });

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(timer);
    };
  }, [text]);

  return (
    <>
      {text.slice(0, typedLength)}
      <span
        aria-hidden="true"
        className="ml-1.5 inline-block h-4 w-[9px] animate-blink bg-accent align-[-2px]"
      />
      <span className="invisible">{text.slice(typedLength)}</span>
    </>
  );
}
