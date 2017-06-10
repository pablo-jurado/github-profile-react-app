import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

function Repos (repos) {
  if (repos === null) return <div className='repos' />
  let reposArr = repos.map(function (repo, index) {
    return <li key={index}>
      <h4>{repo.name}</h4>
      <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>{repo.html_url}</a>
      <hr />
    </li>
  })

  return (
    <div className='repos'>
      <h3>Repositories</h3>
      <ul>
        <CSSTransitionGroup transitionName={'faderepo'} transitionEnterTimeout={200} transitionLeaveTimeout={200}>
          {reposArr}
        </CSSTransitionGroup>
      </ul>
    </div>
  )
}

export default Repos
