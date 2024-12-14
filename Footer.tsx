'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-800 text-white py-4"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; 2024 Green Café | All Rights Reserved</p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <a href="#" className="text-neutral-300 text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-neutral-300 text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

