const initialState = {
    userTest: [],
    // loading : false
  };

  const userTestReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
      case "FETCH_USERTEST_SUCCESS":
        return { ...state, userTest: action.payload };
      case "ADD_USERTEST_SUCCESS":
        return { ...state, userTest: [...state.userTest, ...action.payload] };
        case "UPDATE_USERTEST_SUCCESS":
        return { ...state, userTest: [...state.userTest, ...action.payload] };
        default:
      return state;
    }}

export default userTestReducer