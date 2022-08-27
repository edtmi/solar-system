import styled from 'styled-components';

const DivPlanetsSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: auto;
  text-align: center;
  width: 90%;

  @media screen and (min-width: 375px) {
    width: 65%;
  }

  @media screen and (min-width: 425px) {
    width: 60%;
  }

  @media screen and (min-width: 768px) {
    width: 71%;
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
  }
`;

export default DivPlanetsSection;
