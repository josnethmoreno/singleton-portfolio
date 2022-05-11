import { useState } from 'react'
import Header from '@/components/sections/Header'
import Home from '@/components/sections/Home'
import Work from '@/components/sections/Work'
import Stack from '@/components/sections/Stack'
import Contact from '@/components/sections/Contact'
import '@/App.css'
import '@/stylesheets/theme/theme.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Work />
      <Stack />
      <Contact />
    </div>
  )
}

export default App
