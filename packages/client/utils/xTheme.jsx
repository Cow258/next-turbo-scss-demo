
import Head from 'next/head'
import { createContext, memo, useState } from 'react'

import { isBrowser, isServer, setGlobalContext, getGlobalContext } from './xCm'
import xStore from './xStore'


/** @enum {string} */
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
}

const getDefaultTheme = () => (
  THEME.DARK
  // window.matchMedia('(prefers-color-scheme: dark)').matches
  //   ? THEME.DARK
  //   : THEME.LIGHT
)

export const getTheme = () => {
  if (isServer) return THEME.LIGHT
  const storedTheme = xStore.getItem('theme')
  if (storedTheme) return storedTheme

  const defaultTheme = getDefaultTheme()
  xStore.setItem('theme', defaultTheme)

  return defaultTheme
}

export function setTheme(theme) {
  if (isServer) return
  document.documentElement.dataset.bsTheme = theme
  xStore.setItem('theme', theme)
  const [, setThemeMode] = getGlobalContext('theme')
  setThemeMode(theme)
}

export function resetTheme() {
  if (isServer) return
  setTheme(getDefaultTheme())
}

export function toggleTheme() {
  if (isServer) return
  const nextTheme =
    document.documentElement.dataset.bsTheme === THEME.DARK
      ? THEME.LIGHT
      : THEME.DARK
  setTheme(nextTheme)
}

export function initTheme() {
  if (isServer) return
  setTheme(getTheme())
}

export const ThemeContext = createContext(getTheme())

const _ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(getTheme())

  if (isBrowser) {
    setGlobalContext('theme', themeMode, setThemeMode)
  }

  const color = themeMode === 'light'
    ? '#ffffff'
    : '#141414'

  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content={color} />
        <meta name="theme-color" content={color} />
      </Head>
      <ThemeContext.Provider value={themeMode}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

/** @type {_ThemeProvider} */
const ThemeProvider = memo(_ThemeProvider)

export default ThemeProvider
