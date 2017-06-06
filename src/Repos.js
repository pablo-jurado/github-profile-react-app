import React from 'react';

function Repos (props) {
  if (props.repos === null) return  <div className="repos"></div>
  let repos = props.repos.map(function(repo, index) {
    return  <li key={index}>
              <h4>{repo.name}</h4>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a>
              <hr />
            </li>
  })

  return (
    <div className="repos">
      <h3>Repositories</h3>
      <ul>
        {repos}
      </ul>
    </div>
  )
}

export default Repos;
