import './App.css';
import React, { useState, useEffect } from 'react';
import Location from './location/Location';


function App() {

  return (
    <div className="App">
      <form>
        <div>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </div>
        <Location></Location>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
