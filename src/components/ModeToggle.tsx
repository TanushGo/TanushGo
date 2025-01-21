"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-black  rounded-full" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}