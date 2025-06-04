import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './Search.jsx'
import Weather from './Weather.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container p-3">
      <h1 className='my-2'>Weather Forecast</h1>
      <Weather/>
    </div>
    </>
  )
}

export default App
