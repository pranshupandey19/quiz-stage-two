import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'

function App() {

  const [toHome,setToHome] = useState(true)
  const [toQuiz,setToQuiz] = useState(false)
  const [toResult,setToResult] = useState(false)

  const handlePlay = ()=>{
    setToHome(false)
    setToQuiz(true)
  }

  const handleQuit = ()=>{
    setToQuiz(false)
    setToResult(true)
  }
  const handlePlayAgain = ()=>{
    setToResult(false)
    setToQuiz(true)
  }

  const handleBackToHome = ()=>{
    setToResult(false)
    setToHome(true)
  }

  return (
    <>
      {toHome && <Home handlePlay={handlePlay} />}
      {toQuiz && <Quiz handleQuit={handleQuit}/>}
      {toResult && <Result handlePlayAgain={handlePlayAgain} handleBackToHome={handleBackToHome}/>}
    </>
  )
}

export default App
