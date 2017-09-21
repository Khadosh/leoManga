import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
      <div className="AppLayout__Header">
        <AppBar
          title={barTitle}
          iconElementRight={<HeaderMenu />}
          style={{background:"linear-gradient(rgb(71, 81, 175), rgb(71, 88, 171))"}}
          onLeftIconButtonTouchTap={this.props.onLeftButtonClick}
        />
      </div>
    );
  }
}

Header.propTypes = {
  onLeftButtonClick: PropTypes.func.isRequired
};

export default Header;