import actionTypes from './HomePageConstants';

const fetchAvailableMangas = (mangaList) => ({ type: actionTypes.FETCH_AVAILABLE_MANGAS_SUCCESS, mangaList });

export function fetchMangaList() { // eslint-disable-line
  return function (dispatch) {
    setTimeout(function() {
      dispatch(fetchAvailableMangas([
        'manga1',
        'manga2',
        'manga3',
        'manga4',
        'manga5',
        'manga6',
        'manga7',
        'manga8',
        'manga9',
        'manga10',
        'manga11',
        'manga12'
      ]));
    }, 1000);
  };
}

