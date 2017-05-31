import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';



// import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
