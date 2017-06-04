import React from 'react';

function Feedback (props) {
  return (
    <div className="wrapper">
      <div className='avatar'>
        <span>{props}</span>
        <img src="https://avatars1.githubusercontent.com/u/583231?v=3&s=460" alt="github user"/>
      </div>
      <div className="repos"></div>
    </div>
  )
}

export default Feedback;
