import React from 'react'
import styled from 'styled-components'
import Bell from './Bell'
import Stats from './Stats'

const Barbell = (props) => {
  const { bells, bar, bellSum, total, removeBell } = props
  const sortedBells = [...bells].sort(function(a, b){return b-a})
  
  return (
    <Root>
      <Bells>
      {
        sortedBells.map((bell, index) => (
          <Bell
            key={bell+index}
            bell={bell}
            onClick={removeBell}
            bgColor="#78a1bb"
          >
          </Bell>
        ))
      }
      </Bells>
      <Stats
        bar={bar}
        bells={bellSum}
        total={total}
      />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
`;

const Bells = styled.div`
  // min-height: 600px;
  min-height: 342px;

  display: flex;
  justify-content: center;
  position: relative;

  // Bar graphic
  &::before {
    content: '';
    background-color: #78a1bb;
    height: 12px;
    width: 80%;
    position: absolute;
    left: 0;
    top: 50%;
    z-index: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

export default Barbell