import React from 'react'
import styled from 'styled-components'

const Stats = (props) => {
  const { count, total } = props;

  return (
    <Root>
      <H2>
        <span>{count} pieces</span>
      </H2>

      <H1>
        <span className="total">TOTAL: </span>
        <span className="total">$</span>
        {total}
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
