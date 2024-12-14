import Header from '../components/Header'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Booking from '../components/Booking'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Menu />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

