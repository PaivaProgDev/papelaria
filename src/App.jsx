import About from './components/About'
import BestSellers from './components/BestSellers'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className=''>
      <Header />
      <Hero />
      <BestSellers />
      <About />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
