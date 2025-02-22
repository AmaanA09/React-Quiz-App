import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestionsRequest } from '../../../store/question/questionAction'

const ViewQuestionDetail = ({questionIndex , setQuestionDetailModal}) => {
    const questions = useSelector((state) => state.questions.questions)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchQuestionsRequest())
    }, [dispatch])
  return (
    <>
    <section id='opacity-question-detail'>
        <div id='opacity' onClick={()=>(setQuestionDetailModal(false))}></div>
    <div id='question-detail-wrap'>
        <div>
        <button id='exitButton' onClick={()=>(setQuestionDetailModal(false))}>X</button>
        <p>Question :- <span id='question'>{questions[questionIndex]?.question}</span></p>
        <p>Option1 :-  <span>{questions[questionIndex]?.options[0]}</span></p>
        <p>Option2 :-  <span>{questions[questionIndex]?.options[1]}</span></p>
        <p>Option3 :-  <span>{questions[questionIndex]?.options[2]}</span></p>
        <p>Option4 :-  <span>{questions[questionIndex]?.options[3]}</span></p>
        <p>Correct Answer :- <span id='correctAnswer'>{questions[questionIndex]?.answer}</span></p>
        </div>
    </div>
    </section>
    </>
  )
}

export default ViewQuestionDetail