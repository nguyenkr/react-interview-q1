import FormErrors from '../form-errors/form-error';
import React from 'react';

function Name(props) {

  return (
    <div className="Name row">
      <div className="col-25">
        <label>Name</label>
      </div>
      <div className="col-75">
        <input type="text" name="name" onChange={event => props.onNameChange(event)}/>
      </div>
      {props.showNameError && <FormErrors errorMessage={"Name is Invalid"}></FormErrors>}
    </div>
  );
}

export default Name;
