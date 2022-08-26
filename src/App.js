import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import BackgroundImg from './components/BackgroundImg';
import SolarSystem from './components/DivPlanets';

class App extends React.Component {
  render() {
    return (
      <>
        <BackgroundImg /> 
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
