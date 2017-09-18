import React, { Component } from 'react';
import Header from './common/header/Header';
import Body from './common/body/Body';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
