import React, { useState } from 'react'
import styled from 'styled-components'

const Inventory = (props) => {
  const { addBell } = props;

  const weights = [
    2.5,
    5,
    10,
    25,
    35,
    45
  ]
  return (
    <div>
      {
        weights.map(weight => (
          <Weight
            key={weight}
            onClick={() => addBell(weight)}
          >
            {weight}
          </Weight>
        ))
      }
    </div>
  )
}

const Weight = styled.a`
  background-color: #bfa89e;
  padding: 5px;
  margin: 5px;
`;

export default Inventory;
