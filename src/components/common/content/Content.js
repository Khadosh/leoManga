import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Body from '../body/Body';
import './Content.scss';

const marginLeft = {
  marginLeft: 256,
  transition: 'margin-left 290ms'
};

const Content = ({toogleSideBar, showMarginLeft}) => (
  <div className="AppLayout__Content" style={showMarginLeft ? marginLeft : {}}>
    <Header onLeftButtonClick={toogleSideBar} />
    <Body />
    <Footer />
  </div>
);

Content.propTypes = {
  toogleSideBar: PropTypes.func.isRequired,
  showMarginLeft: PropTypes.bool.isRequired
};

export default Content;
