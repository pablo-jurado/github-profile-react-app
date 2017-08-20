/* global XMLHttpRequest */

import React from 'react'
import ReactDOM from 'react-dom'
import { App, makeAjaxCall } from './App'
import './index.css'

// -----------------------------------------------------------------------------
// App State
// -----------------------------------------------------------------------------

export let mainState = {
  isLoading: true,
  searchValue: 'pablo-jurado',
  userName: [],
  userData: null,
  repos: null
}


// -----------------------------------------------------------------------------
// Render Loop
// -----------------------------------------------------------------------------

const rootEl = document.getElementById('root')

function render () {
  ReactDOM.render(App(mainState), rootEl)
  window.requestAnimationFrame(render)
}
window.requestAnimationFrame(render)

makeAjaxCall()
