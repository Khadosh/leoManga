import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';
import Content from '../content/Content';
import './Body.css';

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
