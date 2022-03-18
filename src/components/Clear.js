import React from 'react'
import styled from 'styled-components';

const Clear = (props) => {
  return (
    <Button onClick={props.clear}>
      CLEAR BAR
    </Button>
  )
}

const Button = styled.a`
  background-color: #283044;
  padding: 12px 20px;
  color: white;
  cursor: pointer;
`;

export default Clear;
