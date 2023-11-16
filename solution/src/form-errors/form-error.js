import React from 'react';
import './form-error.css';

function FormErrors({errorMessage}) {

  return (
    <div className="FormErrors">
      {errorMessage}
    </div>
  );
}

export default FormErrors;
