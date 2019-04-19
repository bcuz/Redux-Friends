const defaults = {
  friends: ['bob']
}

const rootReducer = (state = defaults, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
}

export default rootReducer;