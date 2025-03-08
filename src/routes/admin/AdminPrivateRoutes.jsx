import { Navigate, Outlet } from "react-router"
import AdminAuth from "../auth/AdminAuth"



const AdminPrivateRoutes = ()=>{
    const adminAuth = AdminAuth()

    return adminAuth ?   <Outlet /> : <Navigate to={"/adminlogin"}></Navigate>
}

export default AdminPrivateRoutes