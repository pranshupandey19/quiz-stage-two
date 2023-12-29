import React from 'react'
// import "../App.css"

const Home = ({handlePlay}) => {
  return (
    <div id='home-container'>
      <div id="home-quiz">
        <h1>Quiz App</h1>
        <button onClick={handlePlay} id='button' >Play</button>
      </div>
    </div>
  )
}

export default Home