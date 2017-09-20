import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, MenuItem} from 'material-ui';
import Content from './common/content/Content';
import './App.scss';

const sideBarStyle = {
  padding: 20,
  backgroundColor: '#d8d8d8'
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      open: false
    };
  }
  
  toogleSideBar = () => this.setState({open: !this.props.browser.sm});
  handleMenuClick = () => this.setState({open: !this.state.open});
  

  render() {
    return (
      <div className="AppLayout">
        <Drawer
          open={this.state.open}
          containerStyle={sideBarStyle}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <Content
          isSideBarOpen={this.state.open}
          toogleSideBar={this.handleMenuClick}
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
  }).isRequired
};


export default App;
