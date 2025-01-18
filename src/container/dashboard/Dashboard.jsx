import { useNavigate } from "react-router"
import dashboard from "../../assets/catchy-box.svg"
import clockIcon from "../../assets/clock-icon.svg"
import Header from "../../component/Header"

const Dashboard = () => {
    const navigate = useNavigate()
    
    return(
        <>
        <Header/>
        <section id="disclaimer-section">
            <div id="disclaimers">
                <h2>
                    Let's Start the Quiz
                </h2>
                <p><img src={clockIcon}/>10 min</p>
                <ul>
                    <li>Disclaimers</li>
                    <li>Disclaimers</li>
                </ul>
            </div>    
            <div id="catchy-box">
                <div>
                    <img src={dashboard}/>
                </div>
                <h2>Catchy Line For Starting Quiz</h2>
                <p>when you're done, review your answers and See</p>
                <p id="for-padding"> your rank</p>
                <div id="start-quiz-btn">
                    <button type="button" id="start-quize" onClick={()=>navigate('/quiz')}>Start Quiz</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Dashboard