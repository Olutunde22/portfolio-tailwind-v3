export const themes = [
  { id: "ember", label: "ember", swatch: "#ff6b00", themeColor: "#0b0b0b" },
  { id: "phosphor", label: "phosphor", swatch: "#4af626", themeColor: "#040a06" },
  { id: "amber", label: "amber", swatch: "#ffb000", themeColor: "#0d0904" },
  { id: "dracula", label: "dracula", swatch: "#bd93f9", themeColor: "#191a21" },
  { id: "paper", label: "paper", swatch: "#c84c00", themeColor: "#f5f3ee" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const DEFAULT_THEME: ThemeId = "ember";
export const THEME_STORAGE_KEY = "portfolio-theme";

export function isThemeId(value: unknown): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}
