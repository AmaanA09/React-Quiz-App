const AdminAuth = ()=>{
    const loggedInAdmin = localStorage.getItem("loggedInAdmin")
    if(loggedInAdmin){
        return true
    }else{
        return false
    }
}

export default AdminAuth