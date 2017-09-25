import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideBar from './common/sideBar/SideBar';
import Content from './common/content/Content';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.browser.lg});
  }
  
  toogleSideBar = () => this.setState({open: !this.state.open});

  render() {    
    return (
      <div className="AppLayout">
        <SideBar
          isOpen={this.state.open}
          browser={this.props.browser}
          toogleSideBar={this.toogleSideBar}
        />
        <Content
          showMarginLeft = {this.state.open && this.props.browser.lg}
          toogleSideBar={this.toogleSideBar}
        />
      </div>
    );
  }
}

App.propTypes = {
  browser: PropTypes.shape({
    sm: PropTypes.bool.isRequired,
    md: PropTypes.bool.isRequired,
    lg: PropTypes.bool.isRequired
  })
};

App.defaultProps = {
  browser: {
    sm: false,
    md: false,
    lg: false
  }
};

export default App;
