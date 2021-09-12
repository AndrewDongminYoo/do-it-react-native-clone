import React from 'react'
import { createContext, useContext } from 'react'
import type { FC } from 'react'

export type ToggleThemeContextType = {
  toggleTheme: ()=>void
}
type ToggleThemeContextProps = {
  toggleTheme: ()=>void
}

const defaultToggleThemeContext = {
  toggleTheme: ()=>{}
}
const ToggleThemeContext = createContext<ToggleThemeContextType>(
  defaultToggleThemeContext
)

export const ToggleThemeProvider: FC<ToggleThemeContextProps> = ({
  children, toggleTheme
}) => {
  const value = {
    toggleTheme
  }
  return (
    <ToggleThemeContext.Provider value={value}>
      {children}
    </ToggleThemeContext.Provider>
  )
}

export const useToggleTheme = () => {
  const value = useContext(ToggleThemeContext)
}