import { NavLink, useNavigate } from "react-router-dom"

const SideBar = ()=>{
    const navigate = useNavigate()

    const handleLogoutAdmin = ()=>{
        if(confirm("Are you sure you want to log out?")){
            localStorage.removeItem("loggedInAdmin")
            navigate("/adminlogin")
        }
    }

    return(
        <>
        <section id="admin-page-menu">
            <div >
                <NavLink to="/admindashboard" className={(isActive)=> (isActive ? "active-link" : " ")}><p><i className="fa-solid fa-house"></i>Home</p></NavLink>
            </div>
            <div>
                <NavLink to="/users" className={(isActive)=> (isActive ? "active-link" : " ")}><p><i className="fa-solid fa-user"></i><span className="sideBarUser">Users</span></p> </NavLink>
            </div>
            <div>
                <NavLink to="/quizquestions" className={(isActive)=> (isActive ? "active-link" : " ")}><p><i className="fa-solid fa-circle-question"></i>Quize</p></NavLink>
            </div>

            <button id="adminlogout-btn" onClick={handleLogoutAdmin}>Logout</button>
        </section>
        </>
    )
}
export default SideBar