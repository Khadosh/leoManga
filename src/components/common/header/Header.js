import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import HeaderMenu from './components/headerMenu/HeaderMenu';


const barTitle = (
  <span>
    LEO<b style={{ color: '#ffcd57'}}>MANGA</b>
  </span>
);

class Header extends Component {
  render() {
    return (
      <AppBar
        title={barTitle}
        showMenuIconButton={false}
        iconElementRight={<HeaderMenu />}
        style={{ backgroundColor: "#205081" }}
      />
    );
  }
}

export default Header;