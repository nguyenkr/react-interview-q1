import './App.css';
import React from 'react';
import Location from './location/Location';
import Name from './name/Name';


function App() {

  return (
    <div className="App">
      <h2>Form</h2>
      <p>Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.</p>
      <form id="register" name="register">
        <Name></Name>
        <Location></Location>
        <div className="submit-button row">
          <button name="button" id="button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
