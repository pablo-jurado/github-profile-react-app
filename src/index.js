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
  isUserFound: false,
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
    mainState.isLoading = false
    mainState.isUserFound = true
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

      mainState.userName = user
      mainState.userData = JSON.parse(request.responseText)
      checkIsLoading()

    } else {
      console.log('user not found', request.responseText)
      mainState.isUserFound = false
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
      mainState.repos = JSON.parse(request.responseText)
      checkIsLoading()
    } else { console.log(request.responseText) }
  }
  request.onerror = (e)=> console.log(e)
  request.send()
}

getGitProfile('pablo-jurado')
getRepos('pablo-jurado')

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleClick (event) {
    let name = this.state.value
    console.log('name: ' + name)
    mainState.isLoading = true
    getGitProfile(name)
    getRepos(name)
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder="pablo-jurado" value={this.state.value} onChange={this.handleChange} />
        <input onClick={this.handleClick} type="submit" value="Search User" />
      </div>
    )
  }
}

function App(props) {
  if(props.isLoading) {
    let msg = 'loading'
    if (!props.isUserFound) msg = 'Sorry User Not Found'
    return (
      <div className="app">
        <Header />
        <Search />
        { Feedback(msg) }
        <Footer />
      </div>
    )
  } else {
    return (
      <div className="app">
        <Header />
        <Search />
        <div className="wrapper">
          { Avatar(props.userData) }
          { Repos(props.repos) }
        </div>
        <Footer />
      </div>
    )
  }
}

function renderNow () {
  console.log('render | isLoading: ' + mainState.isLoading);
  ReactDOM.render(App(mainState), document.getElementById('root'))
}

renderNow()
