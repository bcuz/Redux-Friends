import { FETCH_DATA_SUCCESS, ADD_FRIEND_SUCCESS, FETCH_DATA_START } from "../actions";

const defaults = {
  friends: [],
  fetchingData: false,
}

const rootReducer = (state = defaults, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        // error: "",
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        // error: "",
        fetchingData: false,
        friends: action.friends
      };
    case ADD_FRIEND_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        // error: "",
        friends: action.friends
      };
    default:
      return state;
  }
}

export default rootReducer;