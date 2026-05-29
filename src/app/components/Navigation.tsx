'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 h-16 flex items-center justify-between bg-black/70 backdrop-blur-md border-b border-white/8 transition-all">
        <Link href="/" className="font-syne font-black text-2xl bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
          AA/
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 list-none">
          <li><Link href="#about" className="font-mono text-xs tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors">About</Link></li>
          <li><Link href="#skills" className="font-mono text-xs tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors">Skills</Link></li>
          <li><Link href="#experience" className="font-mono text-xs tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors">Experience</Link></li>
          <li><Link href="#projects" className="font-mono text-xs tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors">Projects</Link></li>
          <li><Link href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold tracking-wide hover:scale-105 transition-transform text-xs">Hire Me</Link></li>
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-slate-300 transition-all" />
          <div className="w-6 h-0.5 bg-slate-300 transition-all" />
          <div className="w-6 h-0.5 bg-slate-300 transition-all" />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-md md:hidden flex flex-col items-center justify-center gap-8 py-8">
          <Link href="#about" onClick={toggleMenu} className="font-syne text-xl font-bold text-white">About</Link>
          <Link href="#skills" onClick={toggleMenu} className="font-syne text-xl font-bold text-white">Skills</Link>
          <Link href="#experience" onClick={toggleMenu} className="font-syne text-xl font-bold text-white">Experience</Link>
          <Link href="#projects" onClick={toggleMenu} className="font-syne text-xl font-bold text-white">Projects</Link>
          <Link href="#contact" onClick={toggleMenu} className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold">Contact</Link>
        </div>
      )}
    </>
  )
}