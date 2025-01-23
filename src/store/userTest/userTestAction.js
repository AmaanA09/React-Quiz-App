export const fetchUserTestRequest = () =>({
    type : "FETCH_USERTEST_REQUEST"
})
export const fetchUserTestSuccess = () =>({
    type : "FETCH_USERTEST_SUCCESS",
    // payload: user
})
export const fetchUserTestFail = () =>({
    type : "FETCH_USERTEST_FAILURE"
})


export const addUserTestRequest = (userTest) =>({
    type : "ADD_USERTEST_REQUEST" , payload : userTest
})
export const addUserTestSuccess = (user) =>({
    type : "ADD_USERTEST_SUCCESS" , payload : userTest
})
export const addUserTestFail = (error) =>({
    type : "ADD_USERTEST_FAILURE" , payload : error
})

export const updateUserTestRequest = (userTest) => ({
    type: "UPDATE_USERTEST_REQUEST",
    payload: userTest,
  });
  export const updateUserTestSuccess = (userTest) => ({
    type: "UPDATE_USERTEST_SUCCESS",
    payload: userTest,
  });
  export const updateUserError = (error) => ({
    type: "UPDATE_USERTEST_ERROR",
    payload: error,
  });