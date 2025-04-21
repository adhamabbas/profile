'use client'

import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./Scene'), { ssr: false })

export default function Shapes() {
  return (
    <>
      {/* Background shapes that follow scroll */}
      <div className="fixed inset-0 pointer-events-none" style={{ width: '100vw', height: '100vh', zIndex: -1 }}>
        <Scene />
      </div>
      
      {/* Additional shapes that appear on scroll */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i === 0 ? '#4F46E5' : i === 1 ? '#7C3AED' : '#EC4899'
              }15, transparent)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(100px)',
              opacity: 0.5,
            }}
          />
        ))}
      </div>
    </>
  )
} 