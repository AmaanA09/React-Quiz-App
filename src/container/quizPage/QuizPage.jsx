import React, { useEffect, useState } from "react";
import rightArrowIcon from "../../assets/right-arrow.svg";
import leftArrowIcon from "../../assets/left-arrow.svg";
import Header from "../../component/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsRequest } from "../../store/question/questionAction";
import {
  updateUserTestRequest,
  addUserTestRequest,
  fetchUserTestRequest,
} from "../../store/userTest/userTestAction";
import { useNavigate } from "react-router";

function QuizPage() {

  const [choosedquestion, setChoosedquestion] = useState([]);
  const [countQuestions, setCountQuestions] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionArray, setSelectedOptionArray] = useState([]);
  const [previosBtn, setPreveiosBtn] = useState(false);
  const [randomNumberArray, setrandomNmberArray] = useState([]);
  // const [marks, setMarks] = useState(0);
  const [test , setTest] = useState([])
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions.questions);
  const userTest = useSelector((state) => state.userTest.userTest);
  const dispatch = useDispatch();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))


  useEffect(() => {
    dispatch(fetchQuestionsRequest());
    dispatch(fetchUserTestRequest())
  }, [dispatch]);

  useEffect(() => {
    console.log("selectedOptionArray", selectedOptionArray)
    if (countQuestions === 4) {
      calculateMarks();
    }

  }, [selectedOptionArray])

  useEffect(() => {
    if (questions.length > 0) {
      const newChoosedIndex = [];
      const newChoosedQuestion = [];
      let max = questions?.length;
      while (newChoosedIndex.length < 4) {
        const randomIndex = Math.floor(Math.random() * max);
        if (!newChoosedIndex.includes(randomIndex)) {
          newChoosedIndex.push(randomIndex);
          newChoosedQuestion.push(questions[randomIndex]);
        }
      }
      setChoosedquestion(newChoosedQuestion);
      setrandomNmberArray(newChoosedIndex);
    }
  }, [questions]);

  const handleOptionClick = (option) => {
    setSelectedOption(option)
  }

  const handleNextButton = () => {
    if (!selectedOption) {
      alert("please select any 1 option from 4 option");
      return;
    }
    if (countQuestions < 4) {
      setCountQuestions((countQuestions) => countQuestions + 1);
      const updatedOptionsArray = [...selectedOptionArray];
      updatedOptionsArray[countQuestions] = selectedOption;
      setSelectedOptionArray(updatedOptionsArray);
      setSelectedOption(updatedOptionsArray[countQuestions + 1]);
    }
    if (countQuestions === 0) {
      setPreveiosBtn(true);
    }
    if (countQuestions === 3) {
      navigate("/scoreboard")
    }

  };

  const handlePreviousButton = () => {
    if (countQuestions > 0) {
      setCountQuestions((countQuestions) => (countQuestions - 1));
      const previousSelectedOption = selectedOptionArray[countQuestions - 1] || "";
      setSelectedOption(previousSelectedOption);
    }
    if (countQuestions <= 1) {
      setPreveiosBtn(false);
    }
  };

  const calculateMarks = () => {
    let tempMarks = 0;
    const tempTest = selectedOptionArray.map(
      (selectedOption, index) => {
        console.log({ selectedOption, index })
        const correctAnswer = questions[randomNumberArray[index]].answer;
        if (selectedOption === correctAnswer) {
          tempMarks += 10;
        }
        return ({
          questions: questions[randomNumberArray[index]].question,
          options: questions[randomNumberArray[index]].options,
          selectedOption: selectedOption,
          correctAnswer: correctAnswer,
        })
      }
    );
    // setMarks(tempMarks)

    
    // Prepare data for saving
    // const loggedInEmail = loggedInUser[0].email;
    const date = new Date();

    // Checking if the user has any previous tests
    const existingUser = userTest.find(
      (user) => user.email === loggedInUser.email
    );
    const newTest = {
      selectedAnswer : tempTest,
      marks : tempMarks
    }

    const updatedTest = [...test, newTest];
    setTest(updatedTest)

    if(existingUser){
      const existingTest = existingUser.tests
      const newTests = [...existingTest , newTest]
      
      dispatch(updateUserTestRequest({
        id : existingUser.id,
        name : loggedInUser.name,
        email : loggedInUser.email,
        score : tempMarks,
        tests : newTests
      }))
    }else{
      dispatch(
        addUserTestRequest({
          name: loggedInUser.name,
          email: loggedInUser.email,
          date: new Date().toDateString(),
          score: tempMarks,
          tests: updatedTest,
        }))
    }
  }


  return (
    <>
      <Header />
      <section>
        <div id="q-a-section">
          {/* <div> */}
          <div>
            {countQuestions === questions.length - 1 ? (
              <h2 id="countQuestions">Hey! this is Last Question</h2>
            ) : (
              <h2 id="countQuestions">
                Question <span id="countQue">{countQuestions + 1} </span> of 4
              </h2>
            )}
          </div>
          <div id="progress-bar">
            <span
              id="progress-percentage"
              style={{ width: `${((countQuestions + 1) / 4) * 100}%` }}
            ></span>
          </div>
        </div>
        <div id="questions">
          <h3>
            <span id="countNum">
              {countQuestions + 1}.
            </span>
            <span id="quizes">{choosedquestion[countQuestions]?.question}</span>
          </h3>
          <p>Supporting Text</p>
        </div>
        <div id="second-ol-list">
          <ol>
            <li className="radio-buttons">
              <input
                type="radio"
                name="answer"
                id="option1"
                value={choosedquestion[countQuestions]?.options[0]}
                checked={
                  selectedOption === choosedquestion[countQuestions]?.options[0]
                }
                onChange={(e) => handleOptionClick(e.target.value)}
              />
              <label htmlFor="option1" className="option">
                1.
                <span id="option-1">
                  {choosedquestion[countQuestions]?.options[0]}
                </span>
              </label>
            </li>
            <li className="radio-buttons">
              <input
                type="radio"
                name="answer"
                id="option2"
                value={choosedquestion[countQuestions]?.options[1]}
                checked={
                  selectedOption === choosedquestion[countQuestions]?.options[1]
                }
                onChange={(e) => handleOptionClick(e.target.value)}
              />
              <label htmlFor="option2" className="option">
                2.
                <span id="option-2">
                  {choosedquestion[countQuestions]?.options[1]}
                </span>
              </label>
            </li>
            <li className="radio-buttons">
              <input
                type="radio"
                name="answer"
                id="option3"
                value={choosedquestion[countQuestions]?.options[2]}
                checked={
                  selectedOption === choosedquestion[countQuestions]?.options[2]
                }
                onChange={(e) => handleOptionClick(e.target.value)}
              />
              <label htmlFor="option3" className="option">
                3.
                <span id="option-3">
                  {choosedquestion[countQuestions]?.options[2]}
                </span>
              </label>
            </li>
            <li className="radio-buttons">
              <input
                type="radio"
                name="answer"
                id="option4"
                value={choosedquestion[countQuestions]?.options[3]}
                checked={
                  selectedOption === choosedquestion[countQuestions]?.options[3]
                }
                onChange={(e) => handleOptionClick(e.target.value)}
              />
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
              onClick={() => (handlePreviousButton())}
            >
              <img src={leftArrowIcon} id="left-arrow" />
              Previous
            </button>
          )}
          <button
            type="button"
            id="next-btn"
            onClick={() => (handleNextButton())}
          >
            {countQuestions == 3 ? "Submit" : "Next"}
            <img src={rightArrowIcon} id="right-arrow" />
          </button>
        </div>
      </section>
    </>
  );
}

export default QuizPage;
