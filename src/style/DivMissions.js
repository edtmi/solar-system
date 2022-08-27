import styled from 'styled-components';

const DivMissions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  text-align: center;
  width: 65%;

  @media screen and (min-width: 1024px) {
    width: 55%;
  }

  @media screen and (min-width: 1440px) {
    width: 65%;
  }
`;

export default DivMissions;
