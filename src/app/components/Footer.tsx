'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p>&copy; {new Date().getFullYear()} Adham Abbas. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 