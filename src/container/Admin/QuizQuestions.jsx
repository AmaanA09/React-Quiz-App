import { useEffect, useState } from "react"
import AdminNavbar from "../../component/AdminNavbar"
import SideBar from "../../component/SideBar"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestionsRequest } from "../../store/question/questionAction"
import dustbinIcon from "../../assets/dustbin.png"
import eyeIcon from "../../assets/view.png"
import editIcon from "../../assets/edit.png"
import { Link } from "react-router"
import ViewQuestionDetail from "./Modal/questionDetailModal"
import DeleteModal from "./Modal/DeleteModal"
import EditModal from "./Modal/EditModal"

const QuizQuestions = () => {
    const [sideBar, setSideBar] = useState(true)
    const [questionIndex , setQuestionIndex] = useState(0)
    const [questionDetailModal , setQuestionDetailModal] = useState(false)
    const [deleteModal , setDeleteModal] = useState(false)
    const [editModal , setEditModal] = useState(false)
    const questions = useSelector((state) => state.questions.questions)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchQuestionsRequest())
    }, [dispatch])

    return (
        <>
            <section>
            {questionDetailModal && <ViewQuestionDetail questionIndex={questionIndex} setQuestionDetailModal={setQuestionDetailModal}/>}
            {deleteModal && <DeleteModal setDeleteModal={setDeleteModal} questionIndex={questionIndex}/>}
            {editModal && <EditModal setEditModal={setEditModal} questionIndex={questionIndex}/>}
                <AdminNavbar sideBar={sideBar} setSideBar={setSideBar} />
                <div id="admin-users">
                    {sideBar && <SideBar />}
                    <div className="translate-from-top" style={sideBar ? { marginLeft: '220px' } : { marginLeft: '20px' }}>
                        <Link to={"/addnewquiz"}><button id="add-new-quize">Add New Quizes</button></Link>
                        <table id="users-table">
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Questions</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {questions.map((quiz,index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{quiz.question}</td>
                                        <td><img src={editIcon} id="edit-icon" onClick={()=>(setEditModal(true),setQuestionIndex(index))}/>
                                        <img src={eyeIcon} id="view-icon" onClick={()=>(setQuestionIndex(index) , setQuestionDetailModal(true))}/>
                                        <img src={dustbinIcon} id="delete-icon" onClick={() => (setDeleteModal(true) , setQuestionIndex(index))}/>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default QuizQuestions