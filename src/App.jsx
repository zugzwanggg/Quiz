import { useState } from 'react'
import './App.scss'
import Game from './components/Game'
import Result from './components/Result'
import { questionsData } from './questions'


function App() {
  const [progress, setProgress] = useState(0)
  const [questions, setQuestions] = useState(questionsData)
  const [correct, setCorrect] = useState(0)

  function checkAnswer(value) {
    if (value == questions[progress].correct) {
      setProgress(prev => prev + 1)
      setCorrect(prev => prev+1)
    } else {
      setProgress(prev => prev + 1)
      setColor('red')
    }
  }

  function newGame() {
    setProgress(0)
    setCorrect(0)
  }


  return (
    <div className='container'>
      {progress !== questions.length
      ?
      <Game 
      key={questions[progress].id} 
      questions={questions[progress]}
      progress={progress}
      length={questions.length}
      onClick={checkAnswer}
      />
      :
      <Result handleClick={()=>newGame()} length={questions.length} correct={correct}/>
      }
    </div>
  )
}

export default App
