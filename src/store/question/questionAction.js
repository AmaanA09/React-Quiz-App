export const fetchQuestionsRequest = () => ({
    type: "FETCH_QUESTIONS_REQUEST"
});

export const fetchQuestionsSuccess = (questions) => ({
    type: "FETCH_QUESTIONS_SUCCESS",
    payload: questions
});

export const fetchQuestionsFail = (error) => ({
    type: "FETCH_QUESTIONS_FAILURE",
    payload: error
});

export const addQuestionsRequest = (questions) => ({
    type: "ADD_QUESTIONS_REQUEST",
    payload: questions
});

export const addQuestionsSuccess = (questions) => ({
    type: "ADD_QUESTIONS_SUCCESS",
    payload: questions
});

export const addQuestionsFail = (error) => ({
    type: "ADD_QUESTIONS_FAILURE",
    payload: error
});