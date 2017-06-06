import React from 'react';

function Avatar (props) {
  let msg = 'User Not Found'
  let imgSrc = 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'
  if (props.userData === null) {
    if (props.isLoading) {
      msg = 'loading'
      imgSrc = 'https://stylishthemes.github.io/GitHub-Dark/images/octocat-spinner-smil.min.svg'
    }
    return (
    <div className='avatar'>
      <h1>{ msg }</h1>
      <img src={ imgSrc } alt="github user"/>
    </div>
    )
  }
  return (
    <div className='avatar'>
      <h1>{ props.userData.name }</h1>
      <img src={props.userData.avatar_url} alt="github user"/>
      <span>{props.userData.bio}</span>
      <span><a href={props.userData.html_url} target="_blank" rel="noopener noreferrer">GitHub profile</a></span>
    </div>
  )
}

export default Avatar;
