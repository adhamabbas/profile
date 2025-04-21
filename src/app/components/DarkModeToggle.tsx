'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if user has a theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg z-50"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <FaSun className="text-yellow-500" size={20} />
      ) : (
        <FaMoon className="text-gray-700" size={20} />
      )}
    </motion.button>
  )
}

export default DarkModeToggle 