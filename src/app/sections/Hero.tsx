'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
  useEffect(() => {
    // Particle universe canvas
    const canvas = document.getElementById('universe') as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = canvas.width
    let H = canvas.height
    let particles: any[] = []
    const N = 80

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    resize()

    function rand(a: number, b: number) {
      return a + Math.random() * (b - a)
    }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      alpha: number
      color: string

      constructor() {
        this.reset()
      }

      reset() {
        this.x = rand(0, W)
        this.y = rand(0, H)
        this.vx = rand(-0.25, 0.25)
        this.vy = rand(-0.25, 0.25)
        this.r = rand(0.5, 2)
        this.alpha = rand(0.2, 0.7)
        this.color = Math.random() > 0.6 ? '#63b3ed' : Math.random() > 0.5 ? '#4fd1c5' : '#b794f4'
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > W) this.vx *= -1
        if (this.y < 0 || this.y > H) this.vy *= -1
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.fill()
      }
    }

    for (let i = 0; i < N; i++) {
      particles.push(new Particle())
    }

    function drawLines() {
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.globalAlpha = (1 - dist / 120) * 0.08
            ctx.strokeStyle = '#63b3ed'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, W, H)
      ctx.globalAlpha = 1
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      drawLines()
      ctx.globalAlpha = 1
      requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    loop()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden">
      <canvas id="universe" className="fixed inset-0 z-0 pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute -top-24 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'rgba(99,179,237,0.06)' }} />
      <div className="absolute -bottom-12 -left-24 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'rgba(79,209,197,0.05)' }} />

      <div className="relative z-10 max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-blue-500/20 rounded-full bg-blue-500/8 opacity-0 animate-[fadeUp_0.8s_0.2s_forwards]">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">Available for Remote Opportunities</span>
        </div>

        {/* Title */}
        <h1 className="font-syne font-black text-5xl sm:text-6xl md:text-7xl leading-none tracking-tighter mb-6 opacity-0 animate-[fadeUp_0.9s_0.4s_forwards]">
          <span className="block text-white">Adham Abbas</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">Backend Engineer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 opacity-0 animate-[fadeUp_0.9s_0.6s_forwards]">
          I architect scalable backend systems and lead digital transformation initiatives — turning complex problems into elegant, production-grade solutions with Node.js, MongoDB, and modern API design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 opacity-0 animate-[fadeUp_0.9s_0.8s_forwards]">
          <Link href="#projects" className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold tracking-wide hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            View Projects
          </Link>
          <Link href="#contact" className="px-8 py-3 rounded-lg border border-cyan-500/40 bg-cyan-500/5 text-cyan-400 font-semibold tracking-wide hover:bg-cyan-500/15 transition-all backdrop-blur">
            Get In Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 opacity-0 animate-[fadeUp_0.9s_1s_forwards]">
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">2+</div>
            <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">5+</div>
            <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mt-1">Projects Shipped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">60%</div>
            <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mt-1">Workflow Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">∞</div>
            <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mt-1">Curiosity</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
          <div className="font-mono text-xs uppercase tracking-widest">Scroll</div>
          <div className="w-0.5 h-10 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </div>
    </section>
  )
}
