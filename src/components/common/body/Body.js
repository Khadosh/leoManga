import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';
import Content from '../content/Content';
import './Body.scss';

class Body extends Component {
  render() {
    return (
      <div className="AppLayout__Body">
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default Body;
