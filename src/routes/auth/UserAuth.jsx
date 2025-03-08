const UserAuth = ()=>{
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    if(loggedInUser){
        return true
    }else{
        return false
    }
}

export default UserAuth