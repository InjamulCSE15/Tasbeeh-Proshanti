import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Sync with document on mount and when isDark changes
  useEffect(() => {
    // Check if user previously saved a theme or if system prefers dark
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark:bg-gray-800");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark:bg-gray-800");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark:bg-gray-800");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
    >
      {/* Moon Icon (Visible in Light Mode) */}
      {!isDark && (
        <svg class="w-6 h-6 fill-violet-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      )}

      {/* Sun Icon (Visible in Dark Mode) */}
      {isDark && (
        <svg class="w-6 h-6 fill-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          />
        </svg>
      )}
    </button>
  );
}