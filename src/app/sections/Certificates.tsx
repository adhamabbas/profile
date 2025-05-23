'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa'
import { images } from '@/config/images'

const certificates = [
  {
    id: 1,
    title: 'MongoDB Certification',
    issuer: 'MongoDB University',
    image: images.certificates.mongodb,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 2,
    title: 'Full Stack Development',
    issuer: 'Udacity',
    image: images.certificates.fullstack,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 3,
    title: 'Coursera Certification 1',
    issuer: 'Coursera',
    image: images.certificates.coursera1,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 4,
    title: 'Coursera Certification 2',
    issuer: 'Coursera',
    image: images.certificates.coursera2,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 5,
    title: 'SkillsBuild Certification',
    issuer: 'IBM',
    image: images.certificates.skillsbuild,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 6,
    title: 'Node.js E-commerce',
    issuer: 'Udacity',
    image: images.certificates.nodejs,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 7,
    title: 'Git & GitHub',
    issuer: 'Udacity',
    image: images.certificates.git,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 8,
    title: 'UI/UX Design',
    issuer: 'Udacity',
    image: images.certificates.uiux,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 9,
    title: 'Motion Graphics',
    issuer: 'Udacity',
    image: images.certificates.motionGraphic,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 10,
    title: 'Canva Design Badge',
    issuer: 'Canva',
    image: images.certificates.canva,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 11,
    title: 'Attendance Certificate 1',
    issuer: 'Udacity',
    image: images.certificates.attendance1,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 12,
    title: 'Attendance Certificate 2',
    issuer: 'Udacity',
    image: images.certificates.attendance2,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  },
  {
    id: 13,
    title: 'Course Certificate',
    issuer: 'Udacity',
    image: images.certificates.courseCertificate,
    date: '2024',
    placeholder: '/certificates/placeholder.svg',
  }
]

const CertificateCard = ({ certificate, index }: { certificate: typeof certificates[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <motion.div
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[4/3] bg-gray-200 dark:bg-gray-700"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <FaSpinner className="animate-spin text-blue-500" size={24} />
            </div>
          )}
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <span>{certificate.title}</span>
            </div>
          ) : (
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
              onLoadingComplete={() => setIsLoading(false)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col justify-end p-4 text-white"
        >
          <h3 className="text-xl font-bold">{certificate.title}</h3>
          <p className="text-sm">{certificate.issuer}</p>
          <p className="text-xs opacity-75">{certificate.date}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Certifications
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden"
          >
            <Image
              src={certificates[currentIndex].image}
              alt={certificates[currentIndex].title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              priority
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">{certificates[currentIndex].title}</h3>
              <p className="text-sm opacity-75">{certificates[currentIndex].issuer} • {certificates[currentIndex].date}</p>
            </div>
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 text-white rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Previous certificate"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 text-white rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Next certificate"
          >
            <FaChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates 