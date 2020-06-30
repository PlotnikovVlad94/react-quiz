import React from 'react'
import { Link } from 'react-router-dom'
import './FinishedQuiz.scss'
import Button from '../../components/UI/Button/Button'

const FinishedQuiz = props => {

  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className="finished-quiz">
      <ul className="finished-quiz__list">
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            props.results[quizItem.id]
          ]
          return (
            <li key={index} className="finished-quiz__item">
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>
      <div className="finished-quiz__result">
        <p>Правильно {successCount} из {props.quiz.length}</p>

        <div className="finished-quiz__btn">
          <Button onClick={props.onRetry} type="primary">Повторить</Button>
          <Link to={'/'}>
            <Button type="success">К списку вопросов</Button>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default FinishedQuiz