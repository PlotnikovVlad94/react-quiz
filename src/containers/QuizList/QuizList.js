import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './QuizList.scss'
import Loader from '../../components/UI/Loader/Loader'
import { fetchQuizes } from '../../store/actions/quiz'
import { connect } from "react-redux"

class QuizList extends Component {

  renderQuizes() {
    return this.props.quizes.map(quiz => {
      return (
        <li key={quiz.id} className="quizes__list--item">
          <NavLink
            to={'/quiz/' + quiz.id}
            className="quizes__list--link"
          >
            {quiz.name}
          </NavLink>
        </li >
      )
    })
  }

  componentDidMount() {
    this.props.fetchQuizes()
  }

  render() {
    return (
      <div className="quizes">
        <h1>Список тестов</h1>
        {
          this.props.loading
            ? <Loader />
            : <ul className="quizes__list">
              {this.renderQuizes()}
            </ul>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)