import { useEffect, useState } from "react"
import AdminNavbar from "../../component/AdminNavbar"
import SideBar from "../../component/SideBar"
import { useDispatch, useSelector } from "react-redux"
import { addQuestionsRequest, fetchQuestionsRequest } from "../../store/question/questionAction"

const AddNewQuize = () => {
    const [sideBar, setSideBar] = useState(true)
    const [question, setQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const questions = useSelector((state) => state.questions.questions)
    console.log(questions.id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchQuestionsRequest())
    }, [dispatch])

    const handleQuestion = (e) => {
        setQuestion(e.target.value)
        console.log(e.target.value)
    }
    const handleOptionA = (e) => {
        setOptionA(e.target.value)
    }
    const handleOptionB = (e) => {
        setOptionB(e.target.value)
    }
    const handleOptionC = (e) => {
        setOptionC(e.target.value)
    }
    const handleOptionD = (e) => {
        setOptionD(e.target.value)
    }
    const handleCorrectAnswer = (e) => {
        setCorrectAnswer(e.target.value)
    }

    // setAddNewQuiz(addQuizObj)
    const handleAddQuiz = (e) => {
        e.preventDefault()
        dispatch(addQuestionsRequest({
            "question": question,
            "options": [optionA, optionB, optionC, optionD],
            "answer": correctAnswer,
        }))
        setQuestion("")
        setOptionA("")
        setOptionB("")
        setOptionC("")
        setOptionD("")
        setCorrectAnswer("")
    }

    return (
        <>
            <section>
                <AdminNavbar sideBar={sideBar} setSideBar={setSideBar} />
                <div id="admin-users">
                    {sideBar && <SideBar />}
                    <div className="translate-from-top" style={sideBar ? { marginLeft: '220px' } : { marginLeft: '20px' }}>
                        <section id="add-quize-section">
                            <p>Add New Quizes</p>
                            <form id="add-question-form" onSubmit={handleAddQuiz}>
                                <div>
                                    <div>
                                        <label htmlFor="question">Question<span className="star">*</span></label>
                                    </div>
                                    <textarea type="text" id="question" placeholder="Enter Question" value={question} onChange={(value) => (handleQuestion(value))}></textarea>
                                </div>
                                <div className="option-wrapper">
                                    <div>
                                        <div>
                                            <label htmlFor="option-A">Option 1<span className="star">*</span> </label>
                                        </div>
                                        <input type="text" id="option1" placeholder="Enter Option 1" autoComplete="off" value={optionA} onChange={(v) => (handleOptionA(v))} />
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="option-B">Option 2<span className="star">*</span></label>
                                        </div>
                                        <input type="text" id="option2" placeholder="Enter Option 2" autoComplete="off" value={optionB} onChange={(v) => (handleOptionB(v))} />
                                    </div>
                                </div>
                                <div className="option-wrapper">
                                    <div>
                                        <div>
                                            <label htmlFor="option-C">Option 3<span className="star">*</span></label>
                                        </div>
                                        <input type="text" id="option3" placeholder="Enter Option 3" autoComplete="off" value={optionC} onChange={(v) => (handleOptionC(v))} />
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="Option-D">Option 4<span className="star">*</span></label>
                                        </div>
                                        <input type="text" id="option4" placeholder="Enter Option 4" autoComplete="off" value={optionD} onChange={(v) => (handleOptionD(v))} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="correct-answer">Correct Answer<span className="star">*</span></label>
                                    </div>
                                    <select id="option-list" value={correctAnswer} onChange={(v) => (handleCorrectAnswer(v))}>
                                        <option value="" id="correct-answer">Select The Correct Answer</option>
                                        <option value={optionA} id="select-option1">option1</option>
                                        <option value={optionB} id="select-option2">option2</option>
                                        <option value={optionC} id="select-option3">option3</option>
                                        <option value={optionD} id="select-option4">option4</option>
                                    </select>
                                </div>
                                <button type="submit">Add Quize</button>
                            </form>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AddNewQuize