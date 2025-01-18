import curvBackgroundImage from "../assets/bottom-score-card.png";
import winnerIcon from "../assets/winner-King.svg"

const ScoreBoard = () => {
  return (
    <>
      <section id="score-card-section">
        <div id="heading">
          <h2>
            Wow You Rank <span id="user-position">1st</span>
          </h2>
          <p>Supporting Text </p>
        </div>
        <div id="top-3-winners">
          <div className="winners-img1">
            <h3 id="user-1">#2</h3>
            <img src="" alt="" />
            <p id="name2">name</p>
            <span id="score-number1">0</span>
          </div>
          <img src={winnerIcon} alt="" id="no1" />
          <div className="winners-img2">
            <img src="" alt="" />
            <p id="name1">name</p>
            <span id="score-number2">0</span>
          </div>
          <div className="winners-img3">
            <h3 id="user-3">#3</h3>
            <img src="" alt="" />
            <p id="name3">name</p>
            <span id="score-number3">0</span>
          </div>
        </div>
      </section>
      <section>
        <div id="bottom-score-card">
          <img src={curvBackgroundImage} alt="" />
          <div id="bottom-score-name">
            <div className="score-cards-names">
              <div>
                <h3>#4</h3>
                <p id="name4">name</p>
              </div>
              <div>
                <h3 id="score-number4">0</h3>
              </div>
            </div>
            <div className="score-cards-names">
              <div>
                <h3>#5</h3>
                <p id="name5">name</p>
              </div>
              <div>
                <h3 id="score-number5">0</h3>
              </div>
            </div>
            <div className="score-cards-names">
              <div>
                <h3>
                  #<span id="user-position-with-name">6</span>
                </h3>
                <p id="name6">name</p>
              </div>
              <div>
                <h3 id="score-number6">0</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScoreBoard;
