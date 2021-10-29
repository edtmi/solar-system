import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {planets.map((value) => (
          <PlanetCard
            key={ value.name }
            planetName={ value.name }
            planetImage={ value.image }
          />
        ))}
      </>
    );
  }
}

export default SolarSystem;
