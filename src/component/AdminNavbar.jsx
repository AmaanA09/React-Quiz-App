import techpaathshalaLogo from "../assets/techpaathshala-logo.svg"
import userProfile from "../assets/header-image.svg"
import { useEffect, useState } from "react"
// import SideBar from "./SideBar"
const AdminNavbar = ({sideBar , setSideBar}) => {
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const loggedInAdmin = JSON.parse(localStorage.getItem("loggedInAdmin"))
        setUserName(loggedInAdmin?.name)
    }, [])


    return (
        <>
            <header>
                <div id="quiz-app-header">
                    <div>
                        <img src={techpaathshalaLogo} alt="" />
                        
                        <div id="humburger-container" onClick={()=>(setSideBar(!sideBar))}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="header-list">
                        <ul>
                            <li>Hello</li>
                            <li id="show-user-name">{userName ? userName : "Admin"}</li>
                        </ul>
                        <img src={userProfile} alt="image" />
                    </div>
                </div>
            </header>
        </>
    )
}
export default AdminNavbar