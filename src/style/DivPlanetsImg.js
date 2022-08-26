import styled from 'styled-components';

const DivPlanetsImg = styled.div`
  filter: brightness(0.4);
  transition: .2s ease-in-out;
  user-select: none;

  .image-planet {
    pointer-events: none;
    width: 110px;
  } 

  .name-planet {
    color: transparent;
  }

  &:hover{
    filter: brightness(1);

    .name-planet {
      color: white;
    }
  }
`;

export default DivPlanetsImg;
