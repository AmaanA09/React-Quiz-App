import { Navigate, Outlet } from "react-router"
import UserAuth from "../auth/UserAuth"


const UserPublicRoutes = ()=>{
    const userAuth = UserAuth()

    return userAuth ?  <Navigate to={"/dashboard"}></Navigate> : <Outlet /> 
}

export default UserPublicRoutes
