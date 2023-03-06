import { useEffect, useState } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setTheme("dark")
        : setTheme("light");
    }
  }, []);

  useEffect(() => {
    {
      theme === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="md:w-5 md:h-5 md:hover:scale-125 duration-100 md:leading-3">
      <button
        onClick={handleThemeSwitch}
        className={theme === "light" ? "mt-1.5 md:mt-0.5" : "hidden"}
      >
        <ion-icon name="moon"></ion-icon>
      </button>
      <button
        onClick={handleThemeSwitch}
        className={theme === "dark" ? "mt-1.5 md:mt-0.5" : "hidden"}
      >
        <ion-icon name="sunny"></ion-icon>
      </button>
    </div>
  );
}
