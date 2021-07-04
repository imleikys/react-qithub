import React, {useContext} from 'react';
import {AlertContext} from '../../Context/Alert/alertContext';

export const Search = () => {
  const {show} = useContext(AlertContext)

  const onSubmit = (event) => {
    if (event.key === 'Enter') {
      show('This is alert');
    }
  }

  return (
    <div className="input-group ">
      <input 
        type="text" 
        className="form-control"
        placeholder="Введите ник пользователя.."
        onKeyPress={onSubmit}
      />
    </div>
  )
}