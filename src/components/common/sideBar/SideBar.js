import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, MenuItem } from 'material-ui';
import HeaderBar from '../header/components/headerBar/HeaderBar';
import SentimentVerySatisfied from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import PersonAdd from 'material-ui/svg-icons/social/person-add';

const sideBarStyle = {
  backgroundColor: 'rgb(250, 250, 250)'
};


const SideBar = ({isOpen, browser, toogleSideBar}) => (
  <Drawer
    open={isOpen}
    docked={browser.lg}
    containerStyle={sideBarStyle}
    onRequestChange={toogleSideBar}
  >
    {
      !browser.lg &&
      <HeaderBar onLeftIconButtonTouchTap={toogleSideBar} />
    }
    <MenuItem leftIcon={<SentimentVerySatisfied />} onClick={toogleSideBar}>Menu Item</MenuItem>
    <MenuItem leftIcon={<PersonAdd />} onClick={toogleSideBar}>Menu Item 2</MenuItem>
  </Drawer>
);

SideBar.propTypes = {
  browser: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toogleSideBar: PropTypes.func.isRequired
};

export default SideBar;