import React from 'react'

function Avatar (props) {
  if (props.userData) {
    return (
      <div className='avatar'>
        <h1>{ props.userData.name }</h1>
        <img src={props.userData.avatar_url} alt='github user' />
        <span>{ props.userData.bio }</span>
        <span><a href={props.userData.html_url} target='_blank' rel='noopener noreferrer'>GitHub profile</a></span>
      </div>
    )
  } else {
    let msg = 'User Not Found'
    let imgSrc = 'http://octodex.github.com/images/daftpunktocat-thomas.gif'

    if (props.isLoading) {
      msg = 'loading'
      imgSrc = 'https://stylishthemes.github.io/GitHub-Dark/images/octocat-spinner-smil.min.svg'
    }
    return (
      <div className='avatar'>
        <h1>{ msg }</h1>
        <img src={imgSrc} alt='github user' />
      </div>
    )
  }
}

export default Avatar
