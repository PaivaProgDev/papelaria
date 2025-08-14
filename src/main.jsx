import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Catalog from './pages/Catalog.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
