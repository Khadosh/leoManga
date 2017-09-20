import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Body from '../body/Body';
import './Content.scss';

const marginLeft = {
  marginLeft: 256,
  transition: 'margin-left 290ms'
};

class Content extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="AppLayout__Content" style={this.props.isSideBarOpen ? marginLeft : {}}>
        <Header
          showLeft={this.props.isSideBarOpen}
          onLeftButtonClick={this.props.toogleSideBar}
        />
        <Body />
      </div>
    );
  }
}

Content.propTypes = {
  isSideBarOpen: PropTypes.bool.isRequired,
  toogleSideBar: PropTypes.func.isRequired
};

export default Content;
