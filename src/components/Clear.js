import React from 'react'
import styled from 'styled-components';

const Clear = (props) => {
  return (
    <Button onClick={props.clear}>
      <Icon className="icon">
        <ion-icon name="refresh"></ion-icon>
      </Icon>
    </Button>
  )
}

const Button = styled.a`
  position: absolute;
  top: 20px;
  right: 10px;
  color: #e7eeff;
  cursor: pointer;

  &:hover {
    color: white;
    transition: 0.4s all ease;

    .icon {
      transform: rotate(360deg);
    }

    .hint {
      opacity: 1;
    }
  }
`;

const Icon = styled.div`
  transition: 0.4s all ease;
  font-size: 30px;
`;

const Hint = styled.span`
  opacity: 0;
  transition: 0.4s all ease;
`;

export default Clear;
