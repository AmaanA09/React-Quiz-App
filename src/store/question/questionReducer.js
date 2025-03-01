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
        return { ...state, questions: [...state.questions, action.payload] };

        case "UPDATE_QUESTIONS_SUCCESS":
        return { ...state, 
          questions: state.questions.map((questions)=>
            questions.id === action.payload.id ? action.payload : questions
          ), };

          case "DELETE_QUESTIONS_SUCCESS":
        return { ...state, 
          questions: state.questions.filter((questions)=>
            questions?.id !== action.payload
          ), };
        default:
      return state;
    }}

export default questionReducer  