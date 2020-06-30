import React from 'react'
import './MenuToggle.scss'

const MenuToggle = props => {
  const cls = [
    'menu-toggle',
    'fa'
  ]

  props.isOpen ? cls.push('fa-times', 'open') : cls.push('fa-bars')

  return (<i
    className={cls.join(' ')}
    onClick={props.onToggle}

  />)
}

export default MenuToggle