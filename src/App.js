import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import BackgroundImg from './components/BackgroundImg';

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
