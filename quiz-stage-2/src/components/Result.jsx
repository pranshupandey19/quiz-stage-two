import React from 'react'

const Result = ({handlePlayAgain,handleBackToHome}) => {


  return (
    <div id='result-container'>
      <div id='result-result'>Result</div>
      <div id="score-container">
        <div id="result-practice">
          You need more practice!
        </div>
        <div id="result-your-score">
          Your Score is 20%
        </div>
        <div id="result-all-result">
          <div id="result-category">
            <div id='result-category-text'>Total number of questions</div>
            <div id="result-no">15</div>
          </div>

          <div id="result-category">
            <div id='result-category-text'>Number of attempted questions</div>
            <div id="result-no">9</div>
          </div>

          <div id="result-category">
            <div id='result-category-text'>Number of correct answers</div>
            <div id="result-no">3</div>
          </div>

          <div id="result-category">
            <div id='result-category-text'>Number of wrong answers</div>
            <div id="result-no">6</div>
          </div>
        </div>
      </div>
      <div id="result-all-buttons">
        <button id='result-play-again' onClick={handlePlayAgain}>Play Again</button>
        <button id='result-home' onClick={handleBackToHome}>Back to home</button>
      </div>
    </div>
  )
}

export default Result