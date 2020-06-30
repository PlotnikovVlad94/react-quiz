import React from 'react'
import './ActiveQuiz.scss'
import AnswerList from './AnswerList/AnswerList'

const ActiveQuiz = (props) => (
  <div className="active-quiz">
    <div className="active-quiz__question">
      <h2>{props.answerNumber}. {props.question}</h2>
      <span>{props.answerNumber} из {props.quizLength}</span>
    </div>
    <AnswerList
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
);

export default ActiveQuiz