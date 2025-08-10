import About from './components/About'
import BestSellers from './components/BestSellers'
import Cards from './components/Cards'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <BestSellers />
      <About />
    </div>
  )
}

export default App
