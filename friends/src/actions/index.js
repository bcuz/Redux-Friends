import axios from "axios";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const getCharsSuccess = apiData => {
  return {type: FETCH_DATA_SUCCESS, characters: apiData}
}

export const getFriends = () => dispatch => {
  // dispatch({ type: FETCHING });
  axios
    .get('http://localhost:5000/api/friends')
    // .then(res => dispatch(getCharsSuccess(res.data.results)))
    .then(res => console.log(res))
  }