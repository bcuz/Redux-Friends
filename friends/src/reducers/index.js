import { 
  LOGIN_START,
   LOGIN_FAILURE,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_START,
   ADD_FRIEND_SUCCESS } from "../actions";

const defaults = {
  friends: [],
  fetchingData: false,
  loginError: null,
  loggingIn: false,
}

const rootReducer = (state = defaults, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loginError: null,
        loggingIn: true
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginError: "failed login",
        loggingIn: false,
      };
    }
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