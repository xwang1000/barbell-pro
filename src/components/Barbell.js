import React from 'react'
import styled from 'styled-components'

const Barbell = (props) => {
  const { barWeight, bells } = props
  const sortedBells = [...bells].sort(function(a, b){return a-b})

  const getTotal = () => {
    const singleSideBellSum = bells.reduce((partialSum, a) => partialSum + a, 0)
    const bellSum = singleSideBellSum * 2
    const totalSum = bellSum + barWeight

    return totalSum
  }
  
  return (
    <div>
      <Bar>{barWeight}</Bar>
      {
        sortedBells.map(bell => (
          <Bell>{bell}</Bell>
        ))
      }

      <Total>Total: {getTotal()}</Total>
    </div>
  )
}

const Bar = styled.h1``

const Bells = styled.div``

const Bell = styled.h2`
  color: white;
  width: 50px;
  display: inline-block;
  margin: 10px;
  background-color: #78a1bb;
`;

const Total = styled.h1``;

export default Barbell