import React from 'react';

function Avatar (props) {
  return (
    <div className='wrapper'>
      <span>{props.name}</span>
      <img src={props.avatar_url} alt="github user"/>
      <span>{props.bio}</span>
      <span><a href={props.html_url} target="_blank" rel="noopener noreferrer">GitHub profile</a></span>
    </div>
  )
}

export default Avatar;
