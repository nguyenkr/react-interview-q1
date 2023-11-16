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
    <div className="Name row">
      <div className="col-25">
        <label>Name</label>
      </div>
      <div className="col-75">
        <input type="text" name="name" onChange={(event) => onNameChange(event)}/>
      </div>
      {showNameError && <FormErrors errorMessage={"Name is Invalid"}></FormErrors>}
    </div>
  );
}

export default Name;
