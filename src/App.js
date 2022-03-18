import React, { useState } from 'react'
import styled from 'styled-components'

import './App.css'
import SkewerParts from './components/SkewerParts'
import Skewer from './components/Skewer'
import Clear from './components/Clear'

function App() {

  const defaultToppings = []

  const [toppings, setToppings] = useState([
    {
      label: 'Salmon',
      id: '2',
      cost: 6
    },
    {
      label: 'Wings',
      id: '3',
      cost: 4
    },
  ])

  const getTotalCost = () => {
    let cost = 0

    for (let i = 0; i < toppings.length; i++) {
      cost = cost + toppings[i].cost
    }

    return cost
  }
  
  const addTopping = (topping) => {
    setToppings([topping, ...toppings])
  }

  const removeTopping = (index) => {
    const newToppings = []

    for (let i = 0; i < toppings.length; i++) {
      if (i !== index) {
        newToppings.push(toppings[i])
      }
    }

    setToppings(newToppings)
  }

  const clear = () => setToppings(defaultToppings)
  
  return (
    <div className="App">
      <Header>
        <Title>Skewer Bro</Title>
      </Header>

      <Body>
        <Skewer
          toppings={toppings}
          total={getTotalCost()}
          removeTopping={removeTopping}
        />
      </Body>

      <Footer>
        <Clear clear={clear}/>
        <SkewerParts
          addTopping={addTopping}
        />
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
  overflow-y: scroll;
`;

const Footer = styled.div`
  width: 100%;
  flex: 2;
  position: relative;
  overflow-y: hidden;
  background-color: #78A1BB;
`;

export default App
