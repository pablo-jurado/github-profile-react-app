import React from 'react';

function Avatar (props) {
  return (
    <div className='avatar'>
      <h1>{props.name}</h1>
      <img src={props.avatar_url} alt="github user"/>
      <span>{props.bio}</span>
      <span><a href={props.html_url} target="_blank" rel="noopener noreferrer">GitHub profile</a></span>
    </div>
  )
}

export default Avatar;
