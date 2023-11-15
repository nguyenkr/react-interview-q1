import './App.css';
import React from 'react';
import Location from './location/Location';
import Name from './name/Name';


function App() {

  return (
    <div className="App">
      <form>
        <Name></Name>
        <Location></Location>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
