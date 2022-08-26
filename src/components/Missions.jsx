import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import DivMissions from '../style/DivMissions';

class Missions extends Component {
  render() {
    const sorteMissions = missions.sort(
      (mission1, mission2) => mission1.year - mission2.year,
    );
    return (
      <>
        <Title headline="Missões" />
        <DivMissions data-testid="missions">
          {sorteMissions.map((value, index) => (
            <MissionCard
              key={ index }
              name={ value.name }
              year={ value.year }
              country={ value.country }
              destination={ value.destination }
              place={ value.place }
            />
          ))}
        </DivMissions>
      </>
    );
  }
}

export default Missions;
