import styled from 'styled-components';

const DivCardMission = styled.div`
  align-items: center;
  background-color: rgba(0,0,0,0.01);
  backdrop-filter: blur(15px);
  border: 1px solid gray;
  border-radius: 2em;
  box-shadow: 0 0 10px 5px rgba(255, 255, 255,0.2);
  display: flex;
  filter: brightness(0.7);
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
  margin: 20px;
  margin-top: 30px;
  padding: 20px;
  transition: .2s ease-in-out;
  width: 180px;

  .info-mission {
    color: white;
    font-size: 20px;
  }

  .planet-image {
    width: 110px;
  }

  .title-year {
    border-bottom: 2px solid white;
    color: white;
    font-weight: normal;
    font-size: 25px;
    width: 50%;
  }

  &:hover{
    box-shadow: 0 0 10px 5px rgba(255, 255, 255,0.5);
    filter: brightness(1);
    transform: scale(1.1);
    font-weight: bold;
    
    .planet-image {
      filter: brightness(1);
    }

    .title-year{
      transition: all .6s;
      width: 90%;
    }
  }
`;

export default DivCardMission;
