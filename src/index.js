import React from 'react'
import ReactDOM from 'react-dom'
import _token from './_token'
import './index.css';

import Header from './Header'
import Avatar from './Avatar'
import Feedback from './Feedback'
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

function checkIsLoading () {
  if ((mainState.userData) && (mainState.repos)) {
    renderNow()
  }
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
      checkIsLoading()

    } else {
      console.log('user not found', request.responseText)
      mainState.isLoading = false
      renderNow()
    }
  }
  request.onerror = (e)=> console.log(e)
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
      checkIsLoading()

    } else {
      console.log('user not found', request.responseText)
      mainState.isLoading = false
      renderNow()
    }
  }
  request.onerror = (e)=> console.log(e)
  request.send()
}

function upDateState (name) {
  mainState.isLoading = true
  getGitProfile(name)
  getRepos(name)
}

upDateState('pablo-jurado')

function Search(props) {
  return (
    <div className="search">
      <input type="text" placeholder="pablo-jurado" onChange={ updateValue } onKeyPress={ handleKeyPress }/>
      <input onClick={ handleClick } type="submit" value="Search User" />
    </div>
  )
}

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

function App(props) {
    return (
    <div>
      { Search(props) }
      <div className="wrapper">
        { Avatar(props) }
        { Repos(props) }
      </div>
    </div>
  )
}

function renderNow () {
  console.log('render | isLoading: ' + mainState.isLoading);
  ReactDOM.render(App(mainState), document.getElementById('root'))
}

renderNow()
