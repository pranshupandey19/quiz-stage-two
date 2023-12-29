import React, { useState } from 'react'
import questions from "./../../resources/quizQuestion.json"


const Quiz = ({handleQuit}) => {
  console.log(questions[0]);

  const [questionNo,setQuestionNo] = useState(0)

  const handleNext = ()=>{
    if(questionNo<questions.length-1){
      setQuestionNo(questionNo+1)
    }
    else{
      setQuestionNo(questions.length-1)
    }
  }
  const handlePrevious = ()=>{
    if(questionNo>0){

      setQuestionNo(questionNo-1)
    }
    else{
      setQuestionNo(0)
    }
  }

  const confirmQuit = () => {
    const quitConfirmed = window.confirm('Are you sure you want to quit?');
    if (quitConfirmed) {
      handleQuit();
    }
  }

  return (
    <div id='quiz-container'>
      <div id="quiz-question-container">
        <div id='quiz-question'>
          Question
        </div>
        <div id="quiz-question-no">
          {questionNo+1} of {questions.length}  
        </div>
        <div id="quiz-questions">
          {questions[questionNo].question}
        </div>

        <div id="quiz-all-options">

        <div id="quiz-options">
          <div id="quiz-opt">
            {questions[questionNo].optionA}
          </div>
          <div id="quiz-opt">
          {questions[questionNo].optionB}
          </div>
        </div>

        <div id="quiz-options">
          <div id="quiz-opt">
          {questions[questionNo].optionC}
          </div>
          <div id="quiz-opt">
          {questions[questionNo].optionD}
          </div>
        </div>

        </div>
        <div id="quiz-all-buttons">
          <button id='quiz-previous' onClick={handlePrevious}>Previous</button>
          <button id='quiz-next' onClick={handleNext}>Next</button>
          <button id='quiz-quit'onClick={confirmQuit}>Quit</button>
        </div>
        
      </div>
    </div>
  )

}

export default Quiz