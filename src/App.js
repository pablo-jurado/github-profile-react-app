import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Wrapper from './Wrapper';
import Footer from './Footer';
import dataObj from './data'

const api = 'https://api.github.com/users/'
const user = 'pablo-jurado'
const token = '?access_token=618da9b4013f02572ee90f6f07f11d43daa7abd7'
const gitURL = api + user + token

var request = new XMLHttpRequest()
request.open('GET', gitURL, true)
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    let dataObj = JSON.parse(request.responseText)
    mainState.isLoading = false
    mainState.userData = dataObj
    console.log('mainState.isLoading', mainState.isLoading)

    ReactDOM.render(<App />, document.getElementById('root'))

    console.log('mainState.isLoading', mainState.isLoading)
  } else { console.log(request.responseText) }
}
request.onerror = (e)=> console.log(e)
request.send()

const mainState = {
  isLoading: true,
  userData: null
}

function Loading () {
  return  <div className='component'>loading</div>
}

class App extends Component {
  render() {
    if(mainState.isLoading) {
      console.log('mainState.isLoading', mainState.isLoading)
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
          <Wrapper mainData={mainState.userData} />
          <Footer />
        </div>
      )
    }
  }
}

export default App;
