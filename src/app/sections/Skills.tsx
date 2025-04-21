'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Technical Skills',
    items: [
      { name: 'Node.js Backend', level: 'Advanced' },
      { name: 'JavaScript Programming', level: 'Advanced' },
      { name: 'UI & UX Design', level: 'Intermediate' },
      { name: 'IT Support', level: 'Advanced' },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Active Listening', level: 'Advanced' },
      { name: 'Communication Skills', level: 'Advanced' },
      { name: 'Teamwork', level: 'Advanced' },
      { name: 'Problem Solving', level: 'Advanced' },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
            Skills
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            My technical and professional capabilities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.h3 
                className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                {skillCategory.category}
              </motion.h3>
              
              <div className="space-y-6 relative z-10">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <motion.span 
                        className="text-gray-700 dark:text-gray-300 font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.level}
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          skill.level === 'Advanced'
                            ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                            : 'bg-gradient-to-r from-blue-400 to-purple-400'
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Advanced' ? '90%' : '70%' }}
                        transition={{ duration: 1, delay: skillIndex * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 