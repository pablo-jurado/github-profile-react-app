/* global XMLHttpRequest */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { mainState } from './index'

import UserHistory from './UserHistory'
import Search from './Search'
import Avatar from './Avatar'
import Repos from './Repos'

let _localToken = ''

function userNotFound () {
  mainState.isLoading = false
  mainState.userData = null
  mainState.repos = null
}

function fetchGitProfile (user) {
  let api = 'https://api.github.com/users/'
  let gitURL = api + user + _localToken
  var request = new XMLHttpRequest()
  request.open('GET', gitURL, true)
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      mainState.isLoading = false
      if (mainState.userName.indexOf(user) === -1) mainState.userName.push(user)
      mainState.userData = JSON.parse(request.responseText)
    } else {
      userNotFound()
    }
  }
  request.onerror = (e) => userNotFound()
  request.send()
}

function fetchRepos (user) {
  let api = 'https://api.github.com/users/'
  let gitURL = api + user + '/repos' + _localToken
  var request = new XMLHttpRequest()
  request.open('GET', gitURL, true)
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      mainState.isLoading = false
      mainState.repos = JSON.parse(request.responseText)
    } else {
      userNotFound()
    }
  }
  request.onerror = (e) => userNotFound()
  request.send()
}

export function makeAjaxCall () {
  if (!mainState.searchValue) return
  let name = mainState.searchValue
  mainState.isLoading = true
  mainState.searchValue = ''
  fetchGitProfile(name)
  fetchRepos(name)
}

export function App (props) {
  return (
    <div className='app'>
      <header>GitHub Profile</header>
      {UserHistory(props.userName)}
      {Search(props.searchValue)}
      <div className='wrapper'>
        {Avatar(props)}
        {Repos(props.repos)}
      </div>
      <footer>
        Design and Develop by <a href='http://pablojurado.com/' target='_blank' rel='noopener noreferrer'>Pablo Jurado</a>
      </footer>
    </div>
  )
}
