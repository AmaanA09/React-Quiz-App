import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestionsRequest, updateQuestionsRequest } from "../../../store/question/questionAction"


const EditModal = ({ setEditModal, questionIndex }) => {
    const questions = useSelector((state) => state.questions.questions)
    console.log(questions[questionIndex].id)

    const [updatedQuestion, setUpdatedQuestion] = useState(questions[questionIndex].question)
    const [updatedOptionA, setUpdatedOptionA] = useState(questions[questionIndex].options[0])
    const [updatedOptionB, setUpdatedOptionB] = useState(questions[questionIndex].options[1])
    const [updatedOptionC, setUpdatedOptionC] = useState(questions[questionIndex].options[2])
    const [updatedOptionD, setUpdatedOptionD] = useState(questions[questionIndex].options[3])
    const [updatedAnswer, setUpdatedAnswer] = useState(questions[questionIndex].answer)

    const options = [updatedOptionA, updatedOptionB, updatedOptionC, updatedOptionD]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchQuestionsRequest())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateQuestionsRequest({
            id: questions[questionIndex].id,
            question : updatedQuestion,
            options,
            answer : updatedAnswer,
        }
        ))
        setEditModal(false)
    }

    return (
        <>
            <section id='opacity-question-detail'>
                <div id='opacity' onClick={() => (setEditModal(false))}></div>
                <div id='edit-form-wrap'>
                    <div>
                        <button id='exitButton' onClick={() => (setEditModal(false))}>X</button>
                        <form id="add-question-form" onSubmit={handleSubmit}>
                            <div>
                                <div>
                                    <label htmlFor="question">Question<span className="star">*</span></label>
                                </div>
                                <textarea type="text"
                                    id="question" placeholder="Enter Question"
                                    value={updatedQuestion}
                                    onChange={(e) => setUpdatedQuestion(e.target.value)}>{updatedQuestion}</textarea>
                            </div>
                            <div className="option-wrapper">
                                <div>
                                    <div>
                                        <label htmlFor="option-A">Option 1<span className="star">*</span> </label>
                                    </div>
                                    <input type="text" id="option1" placeholder="Enter Option 1" autoComplete="off" value={updatedOptionA} onChange={(e) => setUpdatedOptionA(e.target.value)} />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="option-B">Option 2<span className="star">*</span></label>
                                    </div>
                                    <input type="text" id="option2" placeholder="Enter Option 2" autoComplete="off" value={updatedOptionB} onChange={(e) => setUpdatedOptionB(e.target.value)} />
                                </div>
                            </div>
                            <div className="option-wrapper">
                                <div>
                                    <div>
                                        <label htmlFor="option-C">Option 3<span className="star">*</span></label>
                                    </div>
                                    <input type="text" id="option3" placeholder="Enter Option 3" autoComplete="off" value={updatedOptionC} onChange={(e) => setUpdatedOptionC(e.target.value)} />
                                </div>
                                <div>
                                    <div>
                                        <label htmlFor="Option-D">Option 4<span className="star">*</span></label>
                                    </div>
                                    <input type="text" id="option4" placeholder="Enter Option 4" autoComplete="off" value={updatedOptionD} onChange={(e) => setUpdatedOptionD(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="correct-answer">Correct Answer<span className="star">*</span></label>
                                </div>
                                <select id="option-list" value={updatedAnswer} onChange={(e) => setUpdatedAnswer(e.target.value)}>
                                    <option value="" id="correct-answer">Select The Correct Answer</option>
                                    <option value={updatedOptionA} id="select-option1">option1</option>
                                    <option value={updatedOptionB} id="select-option2">option2</option>
                                    <option value={updatedOptionC} id="select-option3">option3</option>
                                    <option value={updatedOptionD} id="select-option4">option4</option>
                                </select>
                            </div>
                            <button type="submit" id="edit-add-quiz">Add Quize</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
export default EditModal