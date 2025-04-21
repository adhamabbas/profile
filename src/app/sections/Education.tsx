'use client'

import React from 'react'
import { motion } from 'framer-motion'

const education = [
  {
    degree: "Bachelor's degree",
    field: 'Computer and Informatics',
    institution: 'Suez Canal University',
    period: '09/2019 - 07/2023',
    description: 'Comprehensive study of computer science fundamentals, software engineering, and information systems.',
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My academic background in computer science
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.3
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="mb-8 p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative z-10">
                <motion.h3 
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                  whileHover={{ scale: 1.05 }}
                >
                  {edu.degree}
                </motion.h3>
                <motion.span 
                  className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  {edu.period}
                </motion.span>
              </div>
              
              <motion.h4 
                className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 relative z-10"
                whileHover={{ x: 10 }}
              >
                {edu.field}
              </motion.h4>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-2 relative z-10"
                whileHover={{ x: 5 }}
              >
                {edu.institution}
              </motion.p>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 relative z-10"
                whileHover={{ x: 5 }}
              >
                {edu.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 