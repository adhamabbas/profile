'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'
import Navigation from './components/Navigation'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'
import Shapes from './components/Shapes'
import Certificates from './sections/Certificates'

const MouseTrail = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setTrail(prev => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id: Date.now() }])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            x: point.x - 8,
            y: point.y - 8,
            scale: 1 - i * 0.1,
            opacity: 1 - i * 0.1,
          }}
        />
      ))}
    </div>
  )
}

const FloatingText = () => {
  const [text, setText] = useState("Full Stack Developer")
  const texts = ["Full Stack Developer", "Web Designer", "Problem Solver", "Tech Enthusiast"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setText(prev => texts[(texts.indexOf(prev) + 1) % texts.length])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      key={text}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
    >
      {text}
    </motion.div>
  )
}

const StarBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            x: star.x,
            y: star.y,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}

const ShootingStar = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <motion.div
      className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
      initial={{ x: -100, y: 0, opacity: 0 }}
      animate={{
        x: [0, dimensions.width + 100],
        y: [0, dimensions.height / 2],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 5,
      }}
    />
  )
}

const NebulaBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.3), rgba(79, 70, 229, 0.3), rgba(236, 72, 153, 0.3))',
        }}
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.3), rgba(79, 70, 229, 0.3), rgba(236, 72, 153, 0.3))',
            'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.3), rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.3))',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.3), rgba(79, 70, 229, 0.3))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

const GlowingBorder = () => {
  return (
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{
        background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)',
        filter: 'blur(20px)',
      }}
      animate={{
        background: [
          'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)',
          'linear-gradient(45deg, #00ffff, #ff00ff, #00ffff)',
          'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)',
        ],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360])
  const springConfig = { stiffness: 100, damping: 30 }
  const springScale = useSpring(1, springConfig)
  const springRotate = useSpring(0, springConfig)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
      <StarBackground />
      <ShootingStar />
      <NebulaBackground />
      <MouseTrail />
      <FloatingElements />
      <Navigation />
      <DarkModeToggle />
      <Shapes />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 relative z-10"
      >
        <motion.div 
          style={{ opacity, scale }}
          className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"
        >
          <motion.p 
            whileHover={{ scale: 1.05 }}
            className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          >
            Welcome to my portfolio
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative flex flex-col items-center place-items-center my-12"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
            onHoverStart={() => {
              springScale.set(1.2)
              springRotate.set(10)
            }}
            onHoverEnd={() => {
              springScale.set(1)
              springRotate.set(0)
            }}
          >
            <GlowingBorder />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              style={{
                scale: springScale,
                rotate: springRotate,
              }}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="https://res.cloudinary.com/dikief0td/image/upload/v1745245508/profile/profile.jpg"
                  alt="Profile Image"
                  fill
                  className="rounded-full object-cover border-4 border-white/20 shadow-lg relative z-10"
                  priority
                  sizes="(max-width: 768px) 192px, 256px"
                  quality={100}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
          <FloatingText />
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-4"
        >
          {[
            { href: "#about", title: "About", description: "Learn more about me and my background.", color: "from-blue-500 to-cyan-500" },
            { href: "#projects", title: "Projects", description: "Explore my recent work and projects.", color: "from-purple-500 to-pink-500" },
            { href: "#skills", title: "Skills", description: "Discover my technical skills and expertise.", color: "from-green-500 to-emerald-500" },
            { href: "#contact", title: "Contact", description: "Get in touch with me.", color: "from-yellow-500 to-orange-500" }
          ].map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gradient-to-br ${item.color} hover:bg-opacity-20 backdrop-blur-sm relative overflow-hidden`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ background: `linear-gradient(to bottom right, ${item.color})` }}
              />
              <h2 className="mb-3 text-2xl font-semibold relative z-10">
                {item.title}{' '}
                <motion.span 
                  className="inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-70 relative z-10">
                {item.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-sm opacity-70 flex items-center gap-2"
          >
            Scroll down to explore more
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.main>

      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
} 