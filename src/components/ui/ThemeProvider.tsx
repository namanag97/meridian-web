'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: 'light',
  toggle: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

/**
 * Inline script that runs before React hydration to prevent FOUC.
 * Sets data-theme on <html> immediately from localStorage or OS preference.
 */
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t)}catch(e){}})()` as const

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
      suppressHydrationWarning
    />
  )
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'dark' || stored === 'light') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // Sync state with what the blocking script already set
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') as Theme | null
    if (current && current !== theme) {
      setTheme(current)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
