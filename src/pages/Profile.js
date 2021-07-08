import React, { useContext, useEffect, Fragment } from "react";
import { GithubContext } from "../Context/github/GithubContext";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader/Loader";
import './Profile.scss';
import {Repos} from "../components/Repos/Repos";


export const Profile = ({ match }) => {
  const { getUser, getRepos, user, loading, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
    following,
  } = user;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">На главную</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{width: '150px'}}
              />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              }
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark mb-3"
              >Открыть профиль</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}

                {company && <li>
                  <strong>Компания: </strong> {company}
                </li>}

                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>

              <div className="badge bg-primary margin-left">Подписчики: {followers}</div>
              <div className="badge bg-success margin-left">Подписан: {following}</div>
              <div className="badge bg-info margin-left">Репозитории: {public_repos}</div>
              <div className="badge bg-dark margin-left">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos}/>
    </Fragment>
  );
};


