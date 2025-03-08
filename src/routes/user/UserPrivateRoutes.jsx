import { Navigate, Outlet } from "react-router"
import UserAuth from "../auth/UserAuth"



const UserPrivateRoutes = ()=>{
    const userAuth = UserAuth()

    return userAuth ?   <Outlet /> : <Navigate to={"/"}></Navigate>
}

export default UserPrivateRoutes