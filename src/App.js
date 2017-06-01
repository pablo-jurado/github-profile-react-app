import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import JSON from './data'

// const api = 'https://api.github.com/users/'
// const user = 'pablo-jurado'
// const url = api + user
//
// var request = new XMLHttpRequest();
// request.open('GET', url, true);
//
// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     var data = JSON.parse(request.responseText);
//     console.log(data)
//   } else {
//     console.log(request.responseText)
//   }
// }
//
// request.onerror = function(e) {
//   console.log(e)
// }
//
// request.send()
//
// const mainState = {
//   isLoading: true,
//   userName: user,
//   userDate: null
// }
let gitObj = JSON
console.log(gitObj)

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Body data={JSON.login}/>
        <Footer />
      </div>
    );
  }
}

export default App;
