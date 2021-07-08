import React, {useContext, useState} from 'react';
import {AlertContext} from '../../Context/Alert/alertContext';
import {GithubContext} from '../../Context/github/GithubContext';

export const Search = () => {

  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return;
    }

    github.clearUsers();

    if (value.trim()) {
      github.search(value.trim()); 
      alert.hide();
    } else {
      alert.show('Введите данные пользователя!');
    }
  }

  return (
    <div className="input-group ">
      <input 
        type="text" 
        className="form-control"
        placeholder="Введите ник пользователя.."
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}