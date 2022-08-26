import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DivCardMission from '../style/DivCardMission';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination, place } = this.props;
    return (
      <DivCardMission data-testid="mission-card">
        <h3 className="title-year" data-testid="mission-year">{ year }</h3>
        <p className="info-mission" data-testid="mission-name">{ name }</p>
        <p className="info-mission" data-testid="mission-country">{ country }</p>
        <p className="info-mission" data-testid="mission-destination">{ destination }</p>
        <img className="planet-image" src={ place } alt={ name } />
      </DivCardMission>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};

export default MissionCard;
