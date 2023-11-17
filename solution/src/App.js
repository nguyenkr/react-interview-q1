import './App.css';
import React, { useState } from 'react';
import Location from './location/Location';
import Name from './name/Name';
import { isNameValid } from './mock-api/apis';
import { Person } from './pojo/person';
import ResultTable from './results/result-table';

function App() {
  const [nameList, setNameList] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    selectedLocation: "",
    showNameError: false,
  });

  function onNameChange(event){
    (async function () {
      isNameValid(event.target.value).then((value) => nameChange(value, event.target.value));
    }());
  }

  function nameChange(isNameValid, nameValue){ 
    if(isNameValid){
      setFormValues({...formValues, name:nameValue, showNameError:false});
    }else{ 
      setFormValues({...formValues, showNameError:true});
    }
  }

  function handleLocationSelect(e) {
    setFormValues({...formValues, selectedLocation:e.target.value});
  }

  function addNames(){
    let person = new Person(formValues.name, formValues.selectedLocation);
    nameList.push(person);
    setFormValues({...formValues, name:formValues.name, showNameError:false, selectedLocation:""});
  }

  function clear(){
    setFormValues({...formValues, name:formValues.name, showNameError:false, selectedLocation:""});
    setNameList([]);
  }

  return (
    <div className="App">
      <h2>Form</h2>
      <p>Resize the browser window to see the effect. 
        When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other. 
        To enable the Add button, both Name and Location must be fill out. Clear will refresh the list and reset the location, however it will keep the name in the text box </p>
      <div id="register" name="register">
        <Name onNameChange={onNameChange} showNameError={formValues.showNameError}></Name>
        <Location handleLocationSelect={handleLocationSelect} selectedLocation={formValues.selectedLocation}></Location>
        <div className="submit-button row">
          <button disabled={formValues.showNameError || !formValues.name || !formValues.selectedLocation} onClick={() =>addNames()} name="button" id="add-button">Add</button>
          <button onClick={() =>clear()} name="button" id="clear-button">Clear</button>
        </div>
      </div>
      <ResultTable nameList={nameList}></ResultTable>
    </div>
  );
}

export default App;
