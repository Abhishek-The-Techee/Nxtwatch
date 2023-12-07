import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: true,
  savedVideo: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})
export default ThemeAndVideoContext
