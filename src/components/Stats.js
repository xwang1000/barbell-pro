import React, { useState } from 'react'
import styled from 'styled-components'

import TotalWeightInput from './TotalWeightInput';

const Stats = (props) => {
  const { bar, bells, total, setNewWeight } = props;
  const [enteringWeight, setEnteringWeight] = useState(false);
  const clickHandler = () => {
    setEnteringWeight(true)
  }

  const setNewTotalWeight = (value) => {
    setNewWeight(value);
    setEnteringWeight(false);
  }
  return (
    <Root>
      <H2>
        <span>bar: </span>
        <span>{bar}lb</span>
      </H2>

      <H2>
        <span>bells: </span>
        <span>{bells}lb</span>
      </H2>

      <H1 onClick={clickHandler}>
        <span className="total">TOTAL: </span>
        {
          enteringWeight ? 
          <TotalWeightInput
            setNewTotalWeight={setNewTotalWeight}
          />
          :
          total
        }
        <span className="total">lb</span>
      </H1>
    </Root>
  )
}

const Root = styled.div`
  max-width: 400px;
  margin: auto;
  position: absolute;
  right: 10px;
  left: 10px;
  bottom: 0;
  text-align: right;
  color: #78a1bb;
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
  justify-content: space-between;
`;

const H1 = styled.h1`
  // letter-spacing: 1px;
  font-size: 1.6em;
  margin: 0;

  .total {
    opacity: 0.8;
    font-size: 16px;
  }
`;

const H2 = styled.h2`
  opacity: 0.8;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin: 0;
  margin-bottom: 4px;
`;

export default Stats;
