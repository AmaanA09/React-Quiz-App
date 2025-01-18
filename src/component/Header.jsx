import techpaathshalaLogo from "../assets/techpaathshala-logo.svg"
import userProfile from "../assets/header-image.svg"
const Header = () =>{

    return(
        <>
        <header>
        <div id="quiz-app-header">
            <div>
                <img src={techpaathshalaLogo} alt=""/>
            </div>
            <div id="header-list">
                <ul>
                    <li>Hello</li>
                    <li id="show-user-name"></li>
                </ul>
                <img src={userProfile} alt="image"/>
            </div>
        </div>
        <div id="logout-container" className="logout-container">
            {/* <div>
                <i class="fa-solid fa-sort-up"></i>
                <p id="logedinuser-firstname"></p>
                <p id="current-user-name"></p>
                <p id="current-user-email"></p>
                <button type="button" id="logOut-btn">Log out</button>
            </div> */}
        </div>
    </header>
        </>
    )
}
export default Header