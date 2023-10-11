import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navigation />

      <AppRoutes />

      <Footer />

    </>
  )
}

export default App
