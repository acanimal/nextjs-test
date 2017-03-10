const initialState = ['pepe'];

export default function names(state = initialState, action) {
  switch (action.type) {
    case 'NEW_NAMES':
      return action.data;
    default:
      return state;
  }
}
