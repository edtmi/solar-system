import React, { Component } from 'react';
import HeaderDiv from '../style/HeaderDiv';

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <h1
          className="title_header"
        >
          Sistema Solar
        </h1>
      </HeaderDiv>
    );
  }
}

export default Header;
