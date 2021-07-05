import React, {useContext} from 'react';
import {AlertContext} from '../../Context/Alert/alertContext';

export const Alert = () => {

  const {alert, hide} = useContext(AlertContext)
  if (!alert) return null;

  return (
    <div>
      <div 
        className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} role="alert">
        {alert.text}
        <button type="button" className="btn-close" aria-label="Close" onClick={hide}></button>
      </div>
    </div>
  )
}
