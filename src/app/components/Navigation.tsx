'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-24">
          <Link href="/" className="group">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Main name container */}
              <motion.div
                className="relative px-6 py-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      'linear-gradient(to right, rgba(96, 165, 250, 0.2), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                      'linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(96, 165, 250, 0.2), rgba(168, 85, 247, 0.2))',
                      'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2), rgba(96, 165, 250, 0.2))',
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Name text */}
                <div className="relative flex items-center">
                  <motion.span
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      background: 'linear-gradient(to right, #60a5fa, #a855f7, #ec4899)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    Adham
                  </motion.span>
                  <motion.span
                    className="text-4xl md:text-5xl font-bold text-white ml-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ 
                      color: '#60a5fa',
                      transition: { duration: 0.3 }
                    }}
                  >
                    Abbas
                  </motion.span>
                </div>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation 