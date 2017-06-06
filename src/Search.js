import React from 'react';
import { upDateState, mainState } from './index';



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

export default Search;
