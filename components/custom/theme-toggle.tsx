"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="cursor-pointer flex items-center gap-2"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <>
          <Moon size={20} /> {"Dark"}
        </>
      ) : (
        <>
          <Sun size={20} /> {"Light"}
        </>
      )}
    </div>
  );
}
