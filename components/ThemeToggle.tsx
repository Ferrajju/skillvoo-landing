"use client"

import React from "react"
import { useTheme } from "next-themes"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative inline-block w-12 h-6">
      <label htmlFor="themeToggle" className="sr-only">
        Toggle theme
      </label>
      <input
        type="checkbox"
        id="themeToggle"
        className="themeToggleInput sr-only"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <div className="themeToggle w-12 h-6 bg-gray-200 rounded-full p-1 transition-colors duration-200 ease-in-out dark:bg-gray-700">
        <div className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out dark:translate-x-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-500 dark:text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ThemeToggle

