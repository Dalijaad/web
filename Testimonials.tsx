'use client'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Sarah L.', text: 'The coffee here is amazing!', rating: 5 },
  { name: 'Mike R.', text: 'My go-to spot for afternoon treats.', rating: 4 },
  { name: 'Emily T.', text: 'The vegan options are delicious!', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-primary-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
            >
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 15l-5.236 2.755 1.356-5.92-4.47-3.886 5.91-.406L10 0l2.44 7.543 5.91.406-4.47 3.886 1.356 5.92L10 15z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-700 font-semibold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
