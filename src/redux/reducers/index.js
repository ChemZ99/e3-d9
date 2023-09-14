const initialState = {
  Preferences: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PREFERENCES":
      return {
        ...state,
        Preferences: state.Preferences.concat(action.payload),
      };
    case "REMOVE_FROM_PREFERENCES":
      return {
        ...state,
        Preferences: state.Preferences.filter(elem => elem._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default mainReducer;
