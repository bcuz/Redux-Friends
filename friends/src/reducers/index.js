import { FETCH_DATA_SUCCESS } from "../actions";

const defaults = {
  friends: []
}

const rootReducer = (state = defaults, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_DATA_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        // error: "",
        fetchingData: false,
        friends: action.friends
      };
    default:
      return state;
  }
}

export default rootReducer;