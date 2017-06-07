import React from 'react'
import { makeAjaxCall, mainState } from './index'

function Users (arr) {
  if (typeof arr !== 'object' || arr.length === 0) return
  let history = arr.map(function(user, index) {
    if (user === '') return
    return (
      <li key={ index }>
        <a onClick={ handleHistoryClick.bind(null, user) }>{ user }</a>
        <button onClick={ handleDeleteClick.bind(null, user) }>x</button>
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
  console.log('delete user from state')
  mainState.userName = mainState.userName.filter(function (value) {
    return value !== item
  })
}

function UserHistory(props) {
  return (
    <ul className="history">
        { /* < ReactCSSTransition transitionName={'fade'} transitionEnterTimeout={200} transitionLeaveTimeout={200} > */ }
        { Users(props) }
        { /* </ ReactCSSTransition >  */ }
     </ul>
  )
}

export default UserHistory
