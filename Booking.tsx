'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({ name: '', date: '', time: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission process
    setTimeout(() => {
      alert('Your reservation has been received! Thank you.')
      setFormData({ name: '', date: '', time: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="book-a-table" className="py-5 bg-neutral-50">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center text-neutral-800">Book a Table</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white p-4 rounded shadow"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Book Now'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
