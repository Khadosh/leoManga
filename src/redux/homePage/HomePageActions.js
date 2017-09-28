import actionTypes from './HomePageConstants';
import axios from 'axios';

const fetchAvailableMangas = (mangaList) => ({ type: actionTypes.FETCH_AVAILABLE_MANGAS_SUCCESS, mangaList });
const url = path => `http://localhost:8000/${path}`;

export function fetchMangaList() { // eslint-disable-line
  return function (dispatch) {
    axios.get(url('mangas'))
      .then(resp => dispatch(fetchAvailableMangas(resp.data)))
      .catch(err => { throw err; });
  };
}
