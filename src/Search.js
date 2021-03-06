import React from 'react'
import { makeAjaxCall, mainState } from './index'

function handleKeyPress (target) {
  if (target.charCode === 13) makeAjaxCall()
}

function onChangeUpdate (event) {
  mainState.searchValue = event.target.value
}

function Search (inputValue) {
  return (
    <div className='search'>
      <input type='text' value={inputValue} onChange={onChangeUpdate} onKeyPress={handleKeyPress} />
      <input onClick={makeAjaxCall} type='submit' value='Search User' />
    </div>
  )
}

export default Search
