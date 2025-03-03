import { useEffect, useState } from "react"
import AdminNavbar from "../../component/AdminNavbar"
import SideBar from "../../component/SideBar"
import { useDispatch, useSelector } from "react-redux"
import { addQuestionsRequest, fetchQuestionsRequest } from "../../store/question/questionAction"
import { retry } from "redux-saga/effects"

const AddNewQuize = () => {
    const [sideBar, setSideBar] = useState(true)
    const [question, setQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [error , setError] = useState({})
    const questions = useSelector((state) => state.questions.questions)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchQuestionsRequest())
    }, [dispatch])


    function validate(){
        const errors = {}
        if(!question){
            errors.question = "question required"
        }
        if(!optionA){
            errors.optionA = "option1 is required"
        }
        if(!optionB){
            errors.optionB = "option2 is required"
        }
        if(!optionC){
            errors.optionC = "option3 is required"
        }
        if(!optionD){
            errors.optionD = "option4 is required"
        }
        if(!correctAnswer){
            errors.correctAnswer = "answer is required"
        }
        setError(errors)
        return Object.keys(errors).length === 0
    }

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
        if(validate()){
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
                                    {error.question && <span style={{ color: 'red' }}>{error.question}</span>}
                                </div>
                                <div className="option-wrapper">
                                    <div>
                                        <div>
                                            <label htmlFor="option-A">Option 1<span className="star">*</span> </label>
                                        </div>
                                        <input type="text" id="option1" placeholder="Enter Option 1" autoComplete="off" value={optionA} onChange={(v) => (handleOptionA(v))} />
                                        {error.optionA && <span style={{ color: 'red' }}>{error.optionA}</span>}
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="option-B">Option 2<span className="star">*</span></label>
                                        </div>
                                        <input type="text" id="option2" placeholder="Enter Option 2" autoComplete="off" value={optionB} onChange={(v) => (handleOptionB(v))} />
                                        {error.optionB && <span style={{ color: 'red' }}>{error.optionB}</span>}
                                    </div>
                                </div>
                                <div className="option-wrapper">
                                    <div>
                                        <div>
                                            <label htmlFor="option-C">Option 3<span className="star">*</span></label>
                                        </div>
                                        <input type="text" id="option3" placeholder="Enter Option 3" autoComplete="off" value={optionC} onChange={(v) => (handleOptionC(v))} />
                                        {error.optionC && <span style={{ color: 'red' }}>{error.optionC}</span>}
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="Option-D">Option 4<span className="star">*</span></label>
                                        </div>
                                        <input type="text" id="option4" placeholder="Enter Option 4" autoComplete="off" value={optionD} onChange={(v) => (handleOptionD(v))} />
                                        {error.optionD && <span style={{ color: 'red' }}>{error.optionD}</span>}
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
                                    {error.correctAnswer && <div style={{ color: 'red' }}>{error.correctAnswer}</div>}
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