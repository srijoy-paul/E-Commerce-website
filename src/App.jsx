import { useState } from 'react'
import './App.css'
import Button from "@mui/material/Button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant='outlined'>Click me</Button>
    </>
  )
}

export default App
