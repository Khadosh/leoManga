import React, { Component } from 'react';
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
  
  componentDidMount() {
    this.toogleSideBar();
    window.addEventListener("resize", this.toogleSideBar.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.toogleSideBar.bind(this));
  }
  
  toogleSideBar = () => this.setState({open: window.innerWidth > 700});
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

export default App;
