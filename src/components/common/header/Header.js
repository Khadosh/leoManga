import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './components/headerBar/HeaderBar';
import HeaderMenu from './components/headerMenu/HeaderMenu';

class Header extends Component {
  render() {
    return (
      <div className="AppLayout__Header">
        <HeaderBar
          iconElementRight={<HeaderMenu />}
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