import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MangaPortrait from '../manga/components/mangaPortrait/MangaPortrait';

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
          mangaList.map((manga, index) =>(<MangaPortrait key={index} title={manga} />))
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
