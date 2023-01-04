import { useState } from 'react'
import './App.css'
import Header from './components/Header'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title="Book suggestions" />
    </div>
  )
}

export default App
