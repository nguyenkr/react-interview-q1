import './App.css';
import React, { useState } from 'react';
import Location from './location/Location';
import Name from './name/Name';
import { isNameValid } from './mock-api/apis';


function App() {

  const [name, setName] = useState(false);
  const [showNameError, setShowNameError] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState();

  function onNameChange(event){
    (async function () {
      isNameValid(event.target.value).then((value) => nameChange(value, event.target.value));
    }());
  }

  function nameChange(isNameValid, nameValue){ 
    if(isNameValid){
      settingName(nameValue);
    }else{ 
      setShowNameError(true);
    }
  }

  function settingName(name){
    setName(name);
    setShowNameError(false);
  }

  function handleLocationSelect(e) {
    setSelectedLocation(e.target.value);
  }

  function submitForm(){
    console.log("SUBMITTED!");
    console.log("Name: ", name);
    console.log("Location: ",  selectedLocation);
  }

  return (
    <div className="App">
      <h2>Form</h2>
      <p>Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.</p>
      <form id="register" name="register">
        <Name onNameChange={onNameChange} showNameError={showNameError} ></Name>
        <Location handleLocationSelect={handleLocationSelect}></Location>
        <div className="submit-button row">
          <button disabled={showNameError} onClick={() =>submitForm()} name="button" id="button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
