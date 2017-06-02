import React, { Component } from 'react';

function Avatar (props) {
  return (
    <div>
      <span>{props.data.name}</span>
      <img src={props.data.avatar_url} alt="image"/>
      <span>{props.data.bio}</span>
      <span><a href={props.data.html_url} target="_blank">GitHub profile</a></span>
    </div>
  )
}

function Repos (props) {
  return (
    <ul>
      <li></li>
    </ul>
  )
}

class Wrapper extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Avatar data={this.props.mainData} />
      </div>
    )
  }
}

export default Wrapper;
