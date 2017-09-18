/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from '../../../components/home/HomePage';
import AboutPage from '../../../components/about/AboutPage';
import NotFoundPage from '../../../components/NotFoundPage';
import './Content.scss';

const activeStyle = { color: 'blue' };
class Content extends Component {
  render() {
    return (
      <div className="AppLayout__Content">
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Content;