export const fetchUserRequest = () =>({
    type : "FETCH_USER_REQUEST"
})
export const fetchUserSuccess = () =>({
    type : "FETCH_USER_SUCCESS",
    // payload: user
})
export const fetchUserFail = () =>({
    type : "FETCH_USER_FAILURE"
})

export const addUserRequest = (user) =>({
    type : "ADD_USER_REQUEST" , payload : user
})
export const addUserSuccess = (user) =>({
    type : "ADD_USER_SUCCESS" , payload : user
})
export const addUserFail = (error) =>({
    type : "ADD_USER_FAILURE" , payload : error
})