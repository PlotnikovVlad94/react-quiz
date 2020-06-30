import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Drawer.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index} className="drawer__item">
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName='active'
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li >
      )
    }
    )
  }

  render() {
    const cls = ['drawer'];

    if (!this.props.isOpen) {
      cls.push('close')
    };

    const links = [
      { to: '/', label: 'Список тестов', exact: true }
    ];

    if (this.props.isAuthenticated) {
      links.push({ to: '/quiz-creator', label: 'Создать тест', exact: false })
      links.push({ to: '/logout', label: 'Выйти', exact: false })
    } else {
      links.push({ to: '/auth', label: 'Авторизация', exact: false })
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul className="drawer__list"> {this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>

    )
  }

};

export default Drawer