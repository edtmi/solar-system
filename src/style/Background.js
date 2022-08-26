import styled from 'styled-components';

const Background = styled.img`
  animation: rotation 800s infinite linear;
  left: -625px;
  position: fixed;
  width: 380vh;
  top: -530px;
  z-index: -1;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(-360deg);
    }
  }
`;

export default Background;
