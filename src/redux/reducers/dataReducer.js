const INITIAL_STATE = {
  movies: null,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {...state, movies: action.data};
    case 'RESET_DATA':
      return INITIAL_STATE;
    default:
      return state;
  }
};
export default dataReducer;
