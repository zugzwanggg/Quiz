import React, { useState } from 'react'

export default function Game(props) {
  const percent = (100 * props.progress)/props.length
  return (
    <div className='game-container'>
      <div className="progress"><span style={{width: `${percent}%`}}></span></div>
      <h3>{props.questions.question}</h3>
      <ul className="answer-list">
        {props.questions.answer.map(x=>
        <li key={x} onClick={()=>props.onClick(x)} className='answer-item'><p>{x}</p></li>
        )}
      </ul>
    </div>
  )
}
