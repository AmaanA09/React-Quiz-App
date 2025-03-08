import { Navigate, Outlet } from "react-router"
import AdminAuth from "../auth/AdminAuth"



const AdminPublicRoutes = ()=>{
    const adminAuth = AdminAuth()

    return adminAuth ?  <Navigate to={"/admindashboard"}></Navigate> : <Outlet />
}

export default AdminPublicRoutes