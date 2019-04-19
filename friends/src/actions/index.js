import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = creds => dispatch => {
  // dispatch({ type: LOGIN_START });

  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      // dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log("login err: ", err);
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
      }
      // dispatch({ type: LOGIN_FAILURE });
    });
};

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const getFriendsSuccess = apiData => {
  return {type: FETCH_DATA_SUCCESS, friends: apiData}
}

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
  .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      // console.log(res);
      
      dispatch(getFriendsSuccess(res.data))
    })
  }

export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";

export const addFriendsSuccess = apiData => {
  return {type: ADD_FRIEND_SUCCESS, friends: apiData}
}

export const addFriend = newFriend => dispatch => {
  axios
  .post("http://localhost:5000/api/friends", newFriend, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      // console.log(res);
      
      dispatch(addFriendsSuccess(res.data))
    })
}