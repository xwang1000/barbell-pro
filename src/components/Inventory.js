import React, { useState } from 'react'
import styled from 'styled-components'
import Bell from './Bell'

const Inventory = (props) => {
  const { addBell } = props;

  const weights = [
    45,
    35,
    25,
    10,
    5,
    2.5
  ]

  return (
    <Root>
      {
        weights.map(weight => (
          <Bell
            key={weight}
            bell={weight}
            onClick={() => addBell(weight)}
            bgColor="#283044"
          />
        ))
      }
    </Root>
  )
}

const Root = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(41%);
  display: flex;
  justify-content: center;
  width: 100%;
`

const Weight = styled.a`
  display: inline-block;
  color: #283044;
  background-color: #bfa89e;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

export default Inventory;
