import styled from 'styled-components';

const DivPlanetsImg = styled.div`
  filter: brightness(0.4);
  transition: .2s ease-in-out;
  user-select: none;

  h3 {
    color: transparent;
  }

  img {
    pointer-events: none;
    width: 110px;
  }

  &:hover{
    filter: brightness(1);

    h3 {
      color: white;
    }
  }
`;

export default DivPlanetsImg;
