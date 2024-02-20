import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Info />
      <Data />
    </div>
  )
}

export default App
