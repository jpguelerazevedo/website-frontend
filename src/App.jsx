import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/NavBar'
import Sobre from './pages/sobre.jsx'
import Home from './pages/home.jsx'
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </div>
  )
}

export default App
