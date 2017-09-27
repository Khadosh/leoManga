import actionTypes from './HomePageConstants';

const fetchAvailableMangas = (mangaList) => ({ type: actionTypes.FETCH_AVAILABLE_MANGAS_SUCCESS, mangaList });

export function fetchMangaList() { // eslint-disable-line
  return function (dispatch) {
    dispatch(fetchAvailableMangas(['manga1', 'manga2']));
  };
}

