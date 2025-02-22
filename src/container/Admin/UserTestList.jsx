import { useEffect, useState } from "react"
import AdminNavbar from "../../component/AdminNavbar"
import SideBar from "../../component/SideBar"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserTestRequest } from "../../store/userTest/userTestAction"
import { useParams } from "react-router"

const UserTestList = () => {
    const [sideBar, setSideBar] = useState(true)
    const userTest = useSelector((state) => state.userTest.userTest)
    const dispatch = useDispatch()
    const { index, name, email } = useParams()

    useEffect(() => {
        dispatch(fetchUserTestRequest())
    }, [dispatch])

    const userIndex = userTest.findIndex(
        (user) => user.email === email
    )

    const userTestList = userTest[userIndex]?.tests[index].selectedAnswer;
    // console.log("hello",userTestList.selectedAnswer)

    return (
        <>
            <section>
                <AdminNavbar sideBar={sideBar} setSideBar={setSideBar} />
                <div id="admin-users">
                    {sideBar && <SideBar />}
                    <div className="translate-from-top" style={sideBar ? { marginLeft: '220px' } : { marginLeft: '20px' }}>
                        <h2 style={{ fontSize: "24px", color: "#495057" }}>{name} | {email}</h2>
                        {userTestList?.map((userTest, index) => (
                            <div id="user-test-list" key={index}>
                                <p>Question :-<span className="translate-right-question">{userTest.questions}</span> </p>
                                <p>Option1 :-  <span className="translate-right"> {userTest.options[0]}</span></p>
                                <p>Option2 :-  <span className="translate-right"> {userTest.options[1]}</span> </p>
                                <p>Option3 :-  <spna className="translate-right"> {userTest.options[2]}</spna> </p>
                                <p>Option4 :-  <span className="translate-right"> {userTest.options[3]}</span> </p>
                                <p>CorrectAnswer :- <spna className="correct-answer-right">{userTest.selectedOption}</spna></p>
                                <p style={userTest.selectedOption === userTest.correctAnswer ? { color: "#90ee90" } : { color: "#FF7F7F" }}>ChoosedAnswer :- <spna className="choosed-answer-right">{userTest.correctAnswer}</spna></p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default UserTestList