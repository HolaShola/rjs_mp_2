const initialState = 'movie';

export default function ButtonReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TYPE_OF_SEARCH':
      return action.payload;
    default: return state;
  }
}
