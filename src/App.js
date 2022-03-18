import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Inventory from './components/Inventory'
import Barbell from './components/Barbell'
import Clear from './components/Clear'

function App() {

  const defaultBarWeight = 45
  const defaultBells = []

  const [barWeight, setBarWeigth] = useState(defaultBarWeight)
  const [bells, setBells] = useState(defaultBells)
  
  const addBell = (bellWeight) => {
    setBells([...bells, bellWeight])
  }

  const clear = () => setBells(defaultBells)
  
  return (
    <div className="App">
      <Inventory addBell={addBell} />
      <Inventory addBell={addBell} />
      <Barbell 
        barWeight={barWeight}
        bells={bells}
      />
      <Clear clear={clear}/>
    </div>
  )
}

export default App
