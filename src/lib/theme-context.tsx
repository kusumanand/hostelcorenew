"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

type ViewTransitionDocument = Document & {
  startViewTransition?: (
    callback: () => void
  ) => {
    finished: Promise<void>;
  };
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored =
      (localStorage.getItem("hostelcore-theme") as Theme | null) ?? "dark";

    setTheme(stored);
    document.documentElement.classList.toggle("dark", stored === "dark");
  }, []);

  const toggleTheme = async () => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("hostelcore-theme", next);
      setTheme(next);
    };

    const doc = document as ViewTransitionDocument;

    if (doc.startViewTransition) {
      await doc.startViewTransition(() => {
        applyTheme();
      }).finished;
    } else {
      applyTheme();
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}