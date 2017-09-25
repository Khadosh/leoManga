import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

const barTitle = (
  <Link to="/" style={{color: '#FFF', textDecoration:'none'}}>
    LEO<b style={{ color: '#ffcd57'}}>MANGA</b>
  </Link>
);

const barStyle = {
  background: 'linear-gradient(rgb(71, 81, 175), rgb(71, 88, 171))'
};

const HeaderBar = (props) => (
    <AppBar
      title={barTitle}
      style={barStyle}
      {...props}
    />
);

export default HeaderBar;