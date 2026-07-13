import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavigationBar from './components/NavigationBar'
import AddDonor from './components/AddDonor'
import ViewDonor from './components/ViewDonor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<HomePage/>}/>
      <Route path="/add"element={<AddDonor/>}/>
      <Route path="/view"element={<ViewDonor/>}/>
     
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
