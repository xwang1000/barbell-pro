import React from 'react'
import styled from 'styled-components';

const Clear = (props) => {
  return (
    <Button onClick={props.clear}>
      <Icon>
        <ion-icon name="refresh"></ion-icon>
      </Icon>
    </Button>
  )
}

const Button = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #e7eeff;
  cursor: pointer;

  &:hover {
    color: white;
    transition: 0.4s all ease;
  }
`;

const Icon = styled.div`
  // padding: 12px 20px;
  transition: 0.4s all ease;
  font-size: 30px;
  &:hover {
    transform: rotate(360deg);
  }
`;

export default Clear;
