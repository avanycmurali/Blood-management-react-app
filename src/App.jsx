import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavigationBar from './components/NavigationBar'
import AddDonor from './components/AddDonor'
import ViewDonor from './components/ViewDonor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddDonor/>
    <ViewDonor/>
    </>
  )
}

export default App
