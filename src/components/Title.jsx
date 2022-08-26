import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleH2 from '../style/TitleH2';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <TitleH2>{ headline }</TitleH2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
