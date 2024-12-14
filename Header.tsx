'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-100 text-neutral-800 py-3"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-3">
            <Image src="/logo.png" alt="Green Café Logo" width={100} height={50} />
          </div>
          <div className="col-6 col-md-9">
            <nav className="navbar navbar-expand-md navbar-light">
              <button 
                className="navbar-toggler ms-auto" 
                type="button" 
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="navbarNav" 
                aria-expanded={isOpen} 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav">
                  {['Home', 'Menu', 'Book a Table', 'Contact'].map((item) => (
                    <motion.li key={item} className="nav-item" whileHover={{ scale: 1.1 }}>
                      <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link" onClick={() => setIsOpen(false)}>
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

