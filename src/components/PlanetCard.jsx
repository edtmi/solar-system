import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DivPlanetsImg from '../style/DivPlanetsImg';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <DivPlanetsImg data-testid="planet-card">
        <h3
          className="name-planet"
          data-testid="planet-name"
        >
          {planetName}
        </h3>
        <img
          className="image-planet"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </DivPlanetsImg>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
