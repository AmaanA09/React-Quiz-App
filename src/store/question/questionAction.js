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

export const updateQuestionsRequest = (questions) => ({
    type: "UPDATE_QUESTIONS_REQUEST",
    payload: questions
});

export const updateQuestionsSuccess = (questions) => ({
    type: "UPDATE_QUESTIONS_SUCCESS",
    payload: questions
});

export const updateQuestionsFail = (error) => ({
    type: "UPDATE_QUESTIONS_FAILURE",
    payload: error
});

export const deleteQuestionsRequest = (id) => ({
    type: "DELETE_QUESTIONS_REQUEST",
    payload: id
});

export const deleteQuestionsSuccess = (id) => ({
    type: "DELETE_QUESTIONS_SUCCESS",
    payload: id
});

export const deleteQuestionsFail = (error) => ({
    type: "DELETE_QUESTIONS_FAILURE",
    payload: error
});