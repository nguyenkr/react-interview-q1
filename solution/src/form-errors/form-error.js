import React from 'react';
import './form-error.css';

function FormErrors({errorMessage}) {

  return (
    <div className="FormErrors">
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormErrors;
