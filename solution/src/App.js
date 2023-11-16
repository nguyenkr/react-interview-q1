import './App.css';
import React from 'react';
import Location from './location/Location';
import Name from './name/Name';


function App() {

  return (
    <div className="App">
      <form id="register" name="register">
        <Name></Name>
        <Location></Location>
        <button name="button" id="button">Submit</button>
      </form>
    </div>
  );
}

export default App;
