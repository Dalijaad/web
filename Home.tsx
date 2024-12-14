'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-neutral-100 py-5"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center"
            >
              <Image
                src="/image-removebg-preview__5_-removebg-preview-removebg-preview - Copy.png"
                alt="Green Café Symbol"
                width={300}
                height={300}
                className="img-fluid"
              />
            </motion.div>
          </div>
          <div className="col-md-6 order-md-1">
            <motion.h1
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
              className="display-4 fw-bold mb-4 text-neutral-800"
            >
              Welcome to Green Café
            </motion.h1>
            <motion.p
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
              className="lead text-neutral-700"
            >
              Eco-friendly café serving organic coffee and sustainable treats.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

