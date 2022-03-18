import React from 'react';
import styled from 'styled-components'

const Giphy = (props) => {
  return (
    <Root>
      <iframe src="https://giphy.com/embed/3rVfBUa9f0RErtMZBH" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </Root>
  )
}

const Root = styled.div`
  width: 300px;
  height: auto;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`;

export default Giphy;
