import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg border border-border bg-muted/50 hover:bg-muted transition-colors"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={`w-4 h-4 transition-all duration-300 ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0 absolute"
        }`}
      />
      <Moon
        className={`w-4 h-4 transition-all duration-300 ${
          theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
      />
    </button>
  );
}
