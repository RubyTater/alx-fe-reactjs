import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
    <WelcomeMessage />
      
      <Header />

      <MainContent />

      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <Footer />
    </>
  )
}

export default App
