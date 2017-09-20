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
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({open: !nextProps.browser.sm});
  }
  
  handleMenuClick = () => this.setState({open: !this.state.open});
  closeDrawer = () => this.setState({open: !this.props.browser.sm});

  render() {
    return (
      <div className="AppLayout">
        <Drawer
          open={this.state.open}
          docked={!this.props.browser.sm}
          containerStyle={sideBarStyle}
        >
          <MenuItem onClick={this.closeDrawer}>Menu Item</MenuItem>
          <MenuItem onClick={this.closeDrawer}>Menu Item 2</MenuItem>
        </Drawer>
        <Content
          isSideBarOpen={this.state.open}
          toogleSideBar={this.handleMenuClick}
          browser={this.props.browser}
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
