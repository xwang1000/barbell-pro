import React from 'react';
import styled from 'styled-components';

const Bell = (props) => {
  const { bell, onClick, bgColor } = props;
  return (
    <Root
      onClick={() => onClick(bell)}
    >
      <BellLabel
        weight={bell}
        color={bgColor}
      >
        {bell}lb
      </BellLabel>
            
      <BellShape
        weight={bell}
        className="bell-shape"
        bgColor={bgColor}
      />
    </Root>
  )
}

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  z-index: 1;
  cursor: pointer;

  &:hover .bell-shape {
    background-color: #A3CEE9;
  }
`;

const BellLabel = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: ${(props) => props.weight < 10 ? '13' : '18'}px;
`;

const BellShape = styled.div`
  color: #78a1bb;
  width: ${(props) => props.weight < 10 ? '30' : '38'}px;
  height: ${(props) => 20 + props.weight * 5}px;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;

export default Bell;
