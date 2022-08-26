import React, { Component } from 'react';
import background from '../data/backgroundImg';
import Background from '../style/Background';

class BackgroundImg extends Component {
  render() {
    return (
      <Background
        src={ `${background.image}` }
        alt={ `${background.name}` }
      />
    );
  }
}

export default BackgroundImg;
