import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Body from '../body/Body';
import './Content.scss';

const marginLeft = {
  marginLeft: 256,
  transition: 'margin-left 290ms'
};

const Content = ({isSideBarOpen, toogleSideBar, browser}) => (
  <div className="AppLayout__Content" style={isSideBarOpen && browser.lg ? marginLeft : {}}>
    <Header
      showLeft={isSideBarOpen}
      onLeftButtonClick={toogleSideBar}
    />
    <Body />
  </div>
);

Content.propTypes = {
  isSideBarOpen: PropTypes.bool.isRequired,
  toogleSideBar: PropTypes.func.isRequired,
  browser: PropTypes.object.isRequired
};

export default Content;
