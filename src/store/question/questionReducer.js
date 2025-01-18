const initialState = {
    questions: [],
    // loading : false
  };

  const questionReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
      case "FETCH_QUESTIONS_SUCCESS":
        return { ...state, questions: action.payload };
      case "ADD_QUESTIONS_SUCCESS":
        return { ...state, questions: [...state.questions, ...action.payload] };
        default:
      return state;
    }}

export default questionReducer  