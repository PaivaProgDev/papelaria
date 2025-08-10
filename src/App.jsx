import About from './components/About'
import BestSellers from './components/BestSellers'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <BestSellers />
      <About />
      <Testimonials />
    </div>
  )
}

export default App
