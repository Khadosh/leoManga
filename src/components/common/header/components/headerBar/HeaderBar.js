import React from 'react';
import AppBar from 'material-ui/AppBar';

const barTitle = (
  <span>
    LEO<b style={{ color: '#ffcd57'}}>MANGA</b>
  </span>
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