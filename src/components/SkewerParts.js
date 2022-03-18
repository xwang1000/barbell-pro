import React from 'react'
import styled from 'styled-components'

const SkewerParts = (props) => {
  const { addTopping } = props
  const toppings = [
    {
      label: 'Pork Belly',
      id: '1',
      cost: 5
    },
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
    {
      label: 'Corn',
      id: '4',
      cost: 2
    },
    {
      label: 'Shrimp',
      id: '5',
      cost: 3
    },
    {
      label: 'Pineapple',
      id: '6',
      cost: 3
    },
  ]

  return (
    <Root>
      {
        toppings.map(topping => (
          <Topping onClick={() => addTopping(topping)}>
            <Img width="70" src={require(`../assets/images/${topping.id}.png`)} />
            <Label>{topping.label}</Label>
          </Topping>
        ))
      }
    </Root>
  )
}


const Root = styled.div`
  margin: 20px 40px;

`

const Topping = styled.div`
  width: 33%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Img = styled.img``;

const Label = styled.span`
  color: #e7eeff;
`;

export default SkewerParts
