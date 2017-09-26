/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePageContainer from '../../../components/home/HomePageContainer';
import AboutPage from '../../../components/about/AboutPage';
import AccountPage from '../../../components/account/AccountPage';
import NotFoundPage from '../../../components/NotFoundPage';
import './Body.scss';

const activeStyle = { color: 'blue' };
class Body extends Component {
  render() {
    return (
      <div className="AppLayout__Body">
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
          {' | '}
          <NavLink to="/account" activeStyle={activeStyle}>Account</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/home" component={HomePageContainer} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Body;