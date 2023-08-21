import React from 'react'
import Confetti from 'react-confetti'

export default function Result(props) {
  return (
    <div className='result-container'>
      {props.correct == props.length 
      ?
      <>
      <Confetti 
        style={{width: '100%'}}
      />
      <h3>You answered for all questions correctly! {props.correct}/{props.length}</h3>
      <button onClick={props.handleClick}>Play Again</button>
      </> 
      :
      <>
      <h3>You answered correctly for {props.correct}/{props.length}</h3>
      <button onClick={props.handleClick}>Play Again</button>
      </>}
    </div>
  )
}
