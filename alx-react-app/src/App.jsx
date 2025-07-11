import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WelcomeMessage />
      
      <Header />

      <MainContent />

      <Footer />
    </>
  )
}

export default App
