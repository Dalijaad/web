'use client'
import { motion } from 'framer-motion'

const menuItems = {
  beverages: [
    { name: 'Organic Espresso', price: '$3.50', description: 'Rich and smooth, sourced from fair-trade farms.' },
    { name: 'Green Tea Latte', price: '$4.00', description: 'Made with organic matcha and plant-based milk.' },
    { name: 'Cold Brew Coffee', price: '$4.50', description: 'Smooth, refreshing cold brew steeped for 24 hours.' },
    { name: 'Chai Latte', price: '$4.00', description: 'Spiced black tea with steamed milk of your choice.' },
    { name: 'Fresh Mint Tea', price: '$3.50', description: 'Organic mint leaves steeped in hot water.' },
  ],
  breakfastAndSnacks: [
    { name: 'Avocado Toast', price: '$8.50', description: 'Locally sourced avocados on artisanal bread.' },
    { name: 'Vegan Blueberry Muffin', price: '$3.75', description: 'Baked fresh daily with organic blueberries.' },
    { name: 'Granola Parfait', price: '$6.50', description: 'Homemade granola with yogurt and fresh berries.' },
    { name: 'Breakfast Burrito', price: '$9.00', description: 'Scrambled eggs, black beans, and veggies in a whole wheat wrap.' },
    { name: 'Almond Croissant', price: '$4.25', description: 'Flaky croissant filled with almond cream.' },
  ],
  saladsAndPlatters: [
    { name: 'Green Goddess Salad', price: '$11.00', description: 'Mixed greens, avocado, cucumber, and green goddess dressing.' },
    { name: 'Quinoa Buddha Bowl', price: '$12.50', description: 'Quinoa, roasted vegetables, and tahini dressing.' },
    { name: 'Mediterranean Platter', price: '$14.00', description: 'Hummus, falafel, tabbouleh, and pita bread.' },
    { name: 'Caprese Salad', price: '$10.50', description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze.' },
    { name: 'Lentil Soup', price: '$7.50', description: 'Hearty lentil soup with vegetables and herbs.' },
  ],
}

export default function Menu() {
  return (
    <section id="menu" className="py-5 bg-white">
      <div className="container">
        <h2 className="display-4 fw-bold mb-5 text-center text-neutral-800">Our Menu</h2>
        {Object.entries(menuItems).map(([category, items]) => (
          <div key={category} className="mb-5">
            <h3 className="h3 mb-4 text-neutral-700">{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
            <div className="row">
              {items.map((item, index) => (
                <div key={item.name} className="col-md-6 mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card h-100 bg-neutral-50 shadow-sm"
                  >
                    <div className="card-body">
                      <h4 className="card-title h5 fw-bold mb-2">{item.name}</h4>
                      <p className="card-text text-muted mb-2">{item.description}</p>
                      <p className="card-text fw-bold text-neutral-700">{item.price}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

