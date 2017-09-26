import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HomePage extends Component {
  componentWillMount(){
    this.props.actions.fetchMangaList();
  }
  
  render(){
    const {mangaList} = this.props;
    return (
      <div>
        <h1>Leo Manga Content Test</h1>
        {
          mangaList.map((index, manga) =>(<p key={index}>{manga}</p>))
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  mangaList: PropTypes.array.isRequired,
  actions: PropTypes.shape({
    fetchMangaList: PropTypes.func.isRequired
  }).isRequired
};

export default HomePage;
