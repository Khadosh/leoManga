import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SearchBar from 'material-ui-search-bar';
import './HeaderMenu.scss';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  render() {
    return (
      <div>
        <div className="HeaderMenu__SearchContainer">
          <SearchBar
            className="HeaderMenu__SearchBox"
            dataSource={this.state.dataSource}
            onChange={(value) => this.setState({dataSource: [ value, value+value, value+value+value]})}
            onRequestSearch={() => null}
            hintText="Search"
          />
        </div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon color={"FAFAFA"} /></IconButton>}
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