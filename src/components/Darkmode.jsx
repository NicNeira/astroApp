{
  /* darkmode switch */
}
import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";

export const Darkmode = () => {
  const [checked, setChecked] = useState("");
  const root = window.document.documentElement;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  useEffect(() => {
    if (localStorage) {
      theme = localStorage.getItem("theme");
    }
    if (theme === lightTheme || theme === darkTheme) {
      root.classList.add(theme);
    } else {
      root.classList.add(lightTheme);
    }
  }, [checked]);

  const handleChange = () => {
    if (theme === darkTheme) {
      root.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setChecked(false);
    } else {
      root.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      setChecked(true);
    }
  };

  console.log(localStorage.getItem("theme"));

  return (
    <div className="flex items-center">
      <button
        onClick={handleChange}
        className=" p-2 rounded-full bg-blue-800  shadow-sm"
      >
        {localStorage.getItem("theme") === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#facc15"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#facc15"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </button>

      {/* <label className="inline-flex relative  cursor-pointer mx-2">
        <input
          onChange={handleDarkMode}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label> */}
    </div>
  );
};
