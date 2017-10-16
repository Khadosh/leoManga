import actionTypes from './HomePageConstants';

const initialStore = {
  mangaList: []
};

export default function HomePageReducer(state = initialStore, action) {
  let editedState;
  const duplicateState = () => (Object.assign({}, state));

  switch (action.type) {
    case actionTypes.FETCH_AVAILABLE_MANGAS_SUCCESS:
      editedState = duplicateState();
      editedState.mangaList = [...action.mangaList];
      break;
    default:
      return state;
  }

  return editedState;
}
