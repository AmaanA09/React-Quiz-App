import { NavLink } from "react-router-dom"

const SideBar = ()=>{

    return(
        <>
        <section id="admin-page-menu">
            <div >
                <NavLink to="/admindashboard" className={(isActive)=> (isActive ? "active-link" : " ")}><p><i className="fa-solid fa-house"></i>Home</p></NavLink>
            </div>
            <div>
                <NavLink to="/users" className={(isActive)=> (isActive ? "active-link" : " ")}> <p><i className="fa-solid fa-user"> </i><span className="sideBarUser">Users</span></p> </NavLink>
            </div>
            <div>
                <NavLink to="/quizquestions" className={(isActive)=> (isActive ? "active-link" : " ")}><p><i className="fa-solid fa-circle-question"></i>Quize</p></NavLink>
            </div>
        </section>
        </>
    )
}
export default SideBar