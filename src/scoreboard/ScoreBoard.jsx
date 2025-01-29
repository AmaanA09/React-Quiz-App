import { useDispatch, useSelector } from "react-redux";
import curvBackgroundImage from "../assets/bottom-score-card.png";
import winnerIcon from "../assets/winner-King.svg"
import Header from "../component/Header";
import { useEffect, useState } from "react";
import { fetchUserTestRequest } from "../store/userTest/userTestAction";

const ScoreBoard = () => {
  const userTestDetail = useSelector((state) => state.userTest.userTest)
  const dispatch = useDispatch()
  const [sortedArray, setSortedArray] = useState([])
  console.log("sorted",sortedArray)
  const [loggedInUserIndex, setloggedInUserIndex] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  // const [lastOutOfSixCurrentUser , setLastOutOfSixCurrentUser]  = (null)

  console.log(currentUser)
  useEffect(() => {
    dispatch(fetchUserTestRequest())
  }, [dispatch])

  useEffect(() => {
    const sortedUserTestData = userTestDetail.sort((a, b) => b.score - a.score);
    // console.log("sir", sortedUserTestData.slice(0, 3))
    setSortedArray(sortedUserTestData)
  }, [userTestDetail])

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser")) || []
    setCurrentUser(currentUser)
  }, [])

  useEffect(() => {
    const index = sortedArray.findIndex((user) => user.email === currentUser.email)
    const currentUserLast = sortedArray.find((user) => user.email === currentUser.email)
    setloggedInUserIndex(index)
    // setLastOutOfSixCurrentUser(currentUserLast)
  }, [currentUser, sortedArray])



  return (
    <>
      <Header />
      <section id="score-card-section">
        <div id="heading">
          <h2>
            Wow You Rank <span id="user-position">{loggedInUserIndex + 1}</span>
          </h2>
          <p>Supporting Text </p>
        </div>
        {/* {sortedArray.slice(0,3).map((user , index)=>( */}
        <div id="top-3-winners">

          {sortedArray.slice(1, 2).map((user, index) => (
            <div className="winners-img1">
              <h3 id="user-1">#2</h3>
              <img src="" alt="" />
              <p id="name2">{user.name}</p>
              <span id="score-number1">{user.score}</span>
            </div>
          ))}

          <img src={winnerIcon} alt="" id="no1" />
          {sortedArray.slice(0,1).map((user, index) => (
            <div className="winners-img2">
              {/* <h3 id="user-1">#2</h3> */}
              <img src="" alt="" />
              <p id="name2">{user.name}</p>
              <span id="score-number1">{user.score}</span>
            </div>
          ))}
          {sortedArray.slice(2,3).map((user, index) => (
            <div className="winners-img3">
              <h3 id="user-1">#3</h3>
              <img src="" alt="" />
              <p id="name2">{user.name}</p>
              <span id="score-number1">{user.score}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div id="bottom-score-card">
        <img src={curvBackgroundImage} alt="" />
        
          <div id="bottom-score-name">
          {sortedArray.slice(3,4).map((user , index)=>(
            <div className="score-cards-names">
              <div>
                <h3>#4</h3>
                <p id="name4">{user.name}</p>
              </div>
              <div>
                <h3 id="score-number4">{user.score}</h3>
              </div>
            </div>
          ))}
          {sortedArray.slice(4,5).map((user , index)=>(
            <div className="score-cards-names">
              <div>
                <h3>#5</h3>
                <p id="name5">{user.name}</p>
              </div>
              <div>
                <h3 id="score-number5">{user.score}</h3>
              </div>
            </div>
            ))}
            { sortedArray.slice(5,6).map((user , index)=>(
            <div className="score-cards-names">
              <div>
                <h3>
                  #<span id="user-position-with-name">6</span>
                </h3>
                <p id="name6">{user.name}</p>
              </div>
              <div>
                <h3 id="score-number6">{user.score}</h3>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default ScoreBoard;
