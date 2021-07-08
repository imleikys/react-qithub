import React, {Fragment} from "react";


export const Repos = ({repos}) => (
  <Fragment>
    {repos.map((repo) => (
      <div className="card mb-3" key={repo.id}>
        <div className="card-body">
          <h5>
            <a
              style={{width: '150px'}}
              className="btn btn-success"
              href={repo.html_url}
              rel="noreferrer"
              target="_blank"
            >
              {repo.name}
            </a>
          </h5>
        </div>
      </div>
    ))}
  </Fragment>
);
