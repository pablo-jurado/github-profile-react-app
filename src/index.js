import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

import Header from './Header'
import Avatar from './Avatar'
import Footer from './Footer'
import _token from './_token'

let api = 'https://api.github.com/users/'
let user = 'pablo-jurado'
let gitURL = api + user + _token

let mainState = {
  isLoading: true,
  userData: null
}

function callAJAX () {
  var request = new XMLHttpRequest()
  request.open('GET', gitURL, true)
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {

      mainState.isLoading = false
      mainState.userData = JSON.parse(request.responseText)

      renderNow()
    } else { console.log(request.responseText) }
  }
  request.onerror = (e)=> console.log(e)
  request.send()
}

callAJAX()

function Loading () {
  return  <div className='component'>loading</div>
}

class App extends Component {
  render () {
    if(mainState.isLoading) {
      return (
        <div className="app">
          <Header />
          <Loading />
          <Footer />
        </div>
      )
    } else {
      return (
        <div className="app">
          <Header />
          { Avatar(mainState.userData) }
          <Footer />
        </div>
      )
    }
  }
}

function renderNow () {
  console.log('mainState.isLoading', mainState.isLoading)
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderNow()
