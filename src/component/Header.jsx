import techpaathshalaLogo from "../assets/techpaathshala-logo.svg"
import userProfile from "../assets/header-image.svg"
import { useEffect, useState } from "react"
import LogoutModal from "../container/Admin/Modal/LogoutModal"
const Header = () =>{
    const [userName , setUserName] = useState('')

    useEffect(()=>{
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
        setUserName(loggedInUser?.name)
    },[])

    return(
        <>
        <LogoutModal/>
        <header>
        <div id="quiz-app-header">
            <div>
                <img src={techpaathshalaLogo} alt=""/>
            </div>
            <div id="header-list">
                <ul>
                    <li>Hello</li>
                    <li id="show-user-name">{userName}</li>
                </ul>
                <img src={userProfile} alt="image"/>
            </div>
        </div>
    </header>
        </>
    )
}
export default Header