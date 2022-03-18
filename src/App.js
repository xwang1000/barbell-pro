import React, { useState } from 'react'
import styled from 'styled-components'

import './App.css'
import Inventory from './components/Inventory'
import Barbell from './components/Barbell'
import Clear from './components/Clear'

function App() {

  const defaultBarWeight = 45
  const defaultBells = []

  const barWeight = defaultBarWeight;
  const [bells, setBells] = useState([25, 45])

  const getBellSum = () => {
    const singleSideBellSum = bells.reduce((partialSum, a) => partialSum + a, 0)
    return singleSideBellSum * 2
  }

  const getTotal = () => {
    const totalSum = getBellSum() + barWeight

    return totalSum
  }
  
  const addBell = (bellWeight) => {
    setBells([...bells, bellWeight])
  }

  const removeBell = (value) => {
    var index = bells.indexOf(value)
    const newBells = []

    for (let i = 0; i < bells.length; i++) {
      if (i !== index) {
        newBells.push(bells[i])
      }
    }

    setBells(newBells)
  }

  const clear = () => setBells(defaultBells)
  
  return (
    <div className="App">
      <Header>
        <Title>Barbell Pro</Title>
      </Header>

      <Body>
        <Barbell 
          bells={bells}
          bar={barWeight}
          bellSum={getBellSum()}
          total={getTotal()}
          removeBell={removeBell}
        />
      </Body>

      <Footer>
        <Clear clear={clear}/>
        <Inventory addBell={addBell} />
      </Footer>
    </div>
  )
}

const Title = styled.h1`
  color: #78a1bb;
  font-family: 'Hammersmith One', sans-serif;
  letter-spacing: 2px;
  margin-top: 0;
`;

const Header = styled.div`
  width: 100%;
  flex: 1;
  padding-top: 14px;
`;

const Body = styled.div`
  width: 100%;
  flex: 4;
  display: flex;
  position: relative;
`;

const Footer = styled.div`
  width: 100%;
  flex: 2;
  position: relative;
  overflow-y: hidden;
  background-color: #78A1BB;
`;

export default App
