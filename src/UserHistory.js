import React from 'react'
import { mainState } from './index'
import { makeAjaxCall } from './App'
import { CSSTransitionGroup } from 'react-transition-group'

function Users (arr) {
  if (typeof arr !== 'object' || arr.length === 0) return
  let history = arr.map(function (user, index) {
    if (user === '') return ''
    return (
      <li key={index}>
        <a onClick={handleHistoryClick.bind(null, user)}>{user}</a>
        <button onClick={handleDeleteClick.bind(null, user)}>x</button>
      </li>
    )
  })
  return history
}

function handleHistoryClick (user) {
  mainState.searchValue = user
  makeAjaxCall()
}

function handleDeleteClick (item) {
  mainState.userName = mainState.userName.filter(function (value) {
    return value !== item
  })
}

function UserHistory (props) {
  return (
    <ul className='history'>
      <CSSTransitionGroup transitionName={'fade'} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
        {Users(props)}
      </CSSTransitionGroup>
    </ul>
  )
}

export default UserHistory
