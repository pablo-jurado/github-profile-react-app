import React from 'react';

function Repos (props) {

  let repos = props.map(function(repo, index) {
    return  <li key={index}>
              <h4>{repo.name}</h4>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a>
            </li>
  })

  return (
    <ul className="repos">
      {repos}
    </ul>
  )
}

export default Repos;
