import FormErrors from '../form-errors/form-error';
import React, { useState } from 'react';
import { isNameValid } from '../mock-api/apis';

function Name() {
  const [showNameError, setShowNameError] = useState(false)

  function onNameChange(event){
    (async function () {
      isNameValid(event.target.value).then((value) => setShowNameError(!value));
    }());
  }

  return (
    <div className="Name">
      <label>
        Name:  
      </label>
      <input type="text" name="name" onChange={(event) => onNameChange(event)}/>
      {showNameError && <FormErrors errorMessage={"Name is Invalid"}></FormErrors>}
    </div>
  );
}

export default Name;
