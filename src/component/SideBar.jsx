import { act } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const SideBar = () => {
    const navigate = useNavigate()

    const handleLogoutAdmin = () => {
        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem("loggedInAdmin")
            navigate("/adminlogin")
        }
    }

    return (
        <>
            <section id="admin-page-menu">
                <div >
                    <NavLink to="/admindashboard" className={({isActive})=> (isActive ? "active" : "")}>
                    <i className="fa-solid fa-house"></i>
                    Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/users"><i className="fa-solid fa-user"></i>Users</NavLink>
                </div>
                <div>
                    <NavLink to="/quizquestions"><i className="fa-solid fa-circle-question"></i>Quize</NavLink>
                </div>

                <button id="adminlogout-btn" onClick={handleLogoutAdmin}>Logout</button>
            </section>
        </>
    )
}
export default SideBar