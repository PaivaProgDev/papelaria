import About from './components/About'
import BestSellers from './components/BestSellers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <BestSellers />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
