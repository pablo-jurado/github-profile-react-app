import React from 'react'
import ReactDOM from 'react-dom'
import _token from './_token'
import './index.css';

import Header from './Header'
import Avatar from './Avatar'
import Repos from './Repos'
import Footer from './Footer'

let mainState = {
  isLoading: true,
  searchVal: null,
  userName: null,
  userData: null,
  repos: null
}

let _localToken = ''

if (process.env.NODE_ENV === 'development') {
    _localToken = _token
}

function checkUserDataAndRepos () {
  if ((mainState.userData) && (mainState.repos)) {
    renderNow()
  }
}

function userNotFound () {
  mainState.isLoading = false
  mainState.userData = null
  mainState.repos = null
  renderNow()
}

function getGitProfile (user) {
  let api = 'https://api.github.com/users/'
  let gitURL = api + user + _localToken
  var request = new XMLHttpRequest()
  request.open('GET', gitURL, true)
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {

      mainState.isLoading = false
      mainState.userName = user
      mainState.userData = JSON.parse(request.responseText)
      checkUserDataAndRepos()

    } else {
      userNotFound()
    }
  }
  request.onerror = (e)=> userNotFound()
  request.send()
}

function getRepos (user) {
  let api = 'https://api.github.com/users/'
  let gitURL = api + user + '/repos' + _localToken
  var request = new XMLHttpRequest()
  request.open('GET', gitURL, true)
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {

      mainState.isLoading = false
      mainState.repos = JSON.parse(request.responseText)
      checkUserDataAndRepos()

    } else {
      userNotFound()
    }
  }
  request.onerror = (e)=> userNotFound()
  request.send()
}

function upDateState (name) {
  mainState.isLoading = true
  getGitProfile(name)
  getRepos(name)
}

upDateState('pablo-jurado')

function handleKeyPress (target) {
    if (target.charCode === 13) {
      updateValue(target)
      handleClick()
   }
 }

function updateValue (event) {
  mainState.searchVal = event.target.value
}

function handleClick () {
  upDateState(mainState.searchVal)
}

function Search(props) {
  return (
    <div className="search">
      <input type="text" placeholder="pablo-jurado" onChange={ updateValue } onKeyPress={ handleKeyPress }/>
      <input onClick={ handleClick } type="submit" value="Search User" />
    </div>
  )
}

function App(props) {
    return (
    <div className="app">
      { Header() }
      { Search(props) }
      <div className="wrapper">
        { Avatar(props) }
        { Repos(props) }
      </div>
      { Footer() }
    </div>
  )
}

function renderNow () {
  ReactDOM.render(App(mainState), document.getElementById('root'))
}

renderNow()
