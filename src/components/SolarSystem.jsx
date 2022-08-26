import React, { Component } from 'react';
import DivPlanetsSection from '../style/DivPlanetsSection';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSytem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <DivPlanetsSection data-testid="solar-system">
          {
            planets.map((value, index) => (
              <PlanetCard
                key={ index }
                planetName={ value.name }
                planetImage={ value.image }
              />
            ))
          }
        </DivPlanetsSection>
      </>
    );
  }
}

export default SolarSytem;
