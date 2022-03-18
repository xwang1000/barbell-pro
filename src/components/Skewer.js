import React from 'react'
import styled from 'styled-components'
import Bell from './Bell'
import Stats from './Stats'

const Skewer = (props) => {
  const { toppings, total, removeTopping } = props
  
  return (
    <Root>
      <Toppings>
        {
          toppings.map((topping, index) => (
            <Topping
              key={topping.label+index}
              onClick={() => removeTopping(index)}
              width="80" src={require(`../assets/images/${topping.id}.png`)} 
            >
            </Topping>
          ))
        }
      </Toppings>
      <Stats
        count={toppings.length}
        total={total}
      />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  &::after {
    content: '';
    background-color: #78a1bb;
    height: 100%;
    width: 6px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    z-index: 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

const Toppings = styled.div`
  z-index: 1;
  width: 100%;
  position: relative;
  margin-top: 20px;
  height: 100%;
`;

const Topping = styled.img`
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -20px;
  z-index: 1;
`;

export default Skewer