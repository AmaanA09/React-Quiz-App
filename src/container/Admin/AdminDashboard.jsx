import { useState } from "react"
import AdminNavbar from "../../component/AdminNavbar"
import SideBar from "../../component/SideBar"

const AdminDashboard = ()=>{
    const [sideBar , setSideBar] = useState(true)

    return(
        <>
        <section>
            <AdminNavbar sideBar={sideBar} setSideBar={setSideBar}/>
            <div id="admin-dashboard">
                {sideBar && <SideBar/>}
                <div style={sideBar  ? {marginLeft : '220px'} : {marginLeft : '20px'}}>
                <h2>WelCome Admin DashBoard</h2>
                </div>
            </div>
        </section>
        </>
    )
}
export default AdminDashboard