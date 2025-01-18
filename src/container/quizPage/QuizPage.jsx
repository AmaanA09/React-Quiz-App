import React, { useEffect, useState } from "react";
import rightArrowIcon from "../../assets/right-arrow.svg";
import leftArrowIcon from "../../assets/left-arrow.svg";
import Header from "../../component/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsRequest } from "../../store/question/questionAction";

function QuizPage() {
  const [choosedquestion, setChoosedQuestion] = useState([]);
  const [countQuestions, setCountQuestions] = useState(0);
  const [previosBtn, setPreveiosBtn] = useState(false);
  console.log("count", countQuestions);
  const questions = useSelector((state) => state.questions.questions);
  console.log("length", questions.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestionsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (questions.length > 0) {
      const newChoosedIndex = [];
      const newChoosedQuestion = [];
      let max = questions?.length;
      while (newChoosedIndex.length < 10) {
        const randomIndex = Math.floor(Math.random() * max);
        if (!newChoosedIndex.includes(randomIndex)) {
          newChoosedIndex.push(randomIndex);
          newChoosedQuestion.push(questions[randomIndex]);
        }
      }
      setChoosedQuestion(newChoosedQuestion);
    }
  }, [questions]);

  //   useEffect(() => {
  //     const shuffleQuestions = () => {
  //       let shuffleData = Array.from(questions);
  //       shuffleData.sort(() => Math.random() - 0.5);
  //       return shuffleData.slice(0, 10);
  //     };

  //     setChoosedQuestion(shuffleQuestions());
  //     console.log(choosedquestion);
  //   }, [questions]);

  const handleNextButton = () => {
    if (countQuestions < 9) {
      setCountQuestions((countQuestions) => (countQuestions += 1));
    }
    if (countQuestions === 0) {
      setPreveiosBtn(true);
    }
  };

  const handlePreviousButton = () => {
    if (countQuestions > 0) {
      setCountQuestions((countQuestions) => (countQuestions -= 1));
    }
    if (countQuestions === 1) {
      setPreveiosBtn(false);
    }
  };

  return (
    <>
      <Header />
      <section>
        <div id="q-a-section">
          {/* <div> */}
          <div>
            {countQuestions === questions.length - 1 ? (
              <h2 id="countQuestions">
                Hey! this is Last Question
              </h2>
            ) : (
              <h2 id="countQuestions">
                Question <span id="countQue">{countQuestions + 1} </span> of 10
              </h2>
            )}
          </div>
          <div id="progress-bar">
            <span id="progress-percentage"></span>
          </div>
        </div>
        <div id="questions">
          <h3>
            <span id="countNum">
              {countQuestions ? countQuestions + 1 : 1}.{" "}
            </span>
            <span id="quizes">{choosedquestion[countQuestions]?.question}</span>
          </h3>
          <p>Supporting Text</p>
        </div>
        <div id="second-ol-list">
          <ol>
            <li className="radio-buttons">
              <input type="radio" name="answer" id="option1" />
              <label htmlFor="option1" className="option">
                1.
                <span id="option-1">
                  {choosedquestion[countQuestions]?.options[0]}
                </span>
              </label>
            </li>
            <li className="radio-buttons">
              <input type="radio" name="answer" id="option2" />
              <label htmlFor="option2" className="option">
                2.
                <span id="option-2">
                  {choosedquestion[countQuestions]?.options[1]}
                </span>
              </label>
            </li>
            <li className="radio-buttons">
              <input type="radio" name="answer" id="option3" />
              <label htmlFor="option3" className="option">
                3.
                <span id="option-3">
                  {choosedquestion[countQuestions]?.options[2]}
                </span>
              </label>
            </li>
            <li className="radio-buttons">
              <input type="radio" name="answer" id="option4" />
              <label htmlFor="option4" className="option">
                4.
                <span id="option-4">
                  {choosedquestion[countQuestions]?.options[3]}
                </span>
              </label>
            </li>
          </ol>
        </div>
        <div id="previos-and-next-button">
          {previosBtn && (
            <button
              type="button"
              id="previous-btn"
              onClick={() => handlePreviousButton()}
            >
              <img src={leftArrowIcon} id="left-arrow" />
              Previous
            </button>
          )}
          <button
            type="button"
            id="next-btn"
            onClick={() => handleNextButton()}
          >
            {countQuestions == 9 ? "Submit & Continue" : "Next"}
            <img src={rightArrowIcon} id="right-arrow" />
          </button>
        </div>
      </section>
    </>
  );
}

export default QuizPage;
