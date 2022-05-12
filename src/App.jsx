import { useState, createContext } from 'react'
import Header from '@/components/sections/Header'
import Home from '@/components/sections/Home'
import Work from '@/components/sections/Work'
import Stack from '@/components/sections/Stack'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import '@/App.css'
import '@/stylesheets/theme/theme.css'

function App() {
  return (
    <div className="App" id="top" data-theme='light'>
      <Header/>
      <Home />
      <Work />
      <Stack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
