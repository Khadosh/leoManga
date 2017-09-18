import React, { Component } from 'react';
import './SideBar.scss';

class SideBar extends Component {
  render() {
    return (
      <div className="AppLayout__SideBar">
        <h1 style = {{ textAlign: 'center', color: 'white'}}>Filters</h1>
      </div>
    );
  }
}

export default SideBar;
