import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SearchBar from 'material-ui-search-bar';
import './HeaderMenu.css'

const sideBarStyle = {
  margin: '0 auto',
  width: 500,
  borderRadius: 10,
  border: 'none'
}


class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
  
  changeValue = (value) => {
    const newalue = [ value, value+value, value+value+value];
    return this.setState({dataSource: newalue});
  }
  
  render(props) {
    return (
      <div>
        <div className="HeaderMenu__SearchContainer">
          <SearchBar
            dataSource={this.state.dataSource}
            onChange={this.changeValue}
            onRequestSearch={() => console.log('onRequestSearch')}
            hintText="Search by Title / Author..."
            style={ sideBarStyle }
          />
        </div>
        <IconMenu
          iconButtonElement={ <IconButton><MoreVertIcon color={"FAFAFA"} /></IconButton> }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="My Account" />
          <MenuItem primaryText="My Mangas" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
      </div>
    );
  }
}

HeaderMenu.muiName = 'IconMenu';
export default HeaderMenu;