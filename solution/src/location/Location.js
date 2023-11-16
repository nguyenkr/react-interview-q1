import React, { useState, useEffect } from 'react';
import { getLocations } from '../mock-api/apis';

function Location() {

  const [locationList, setLocationList] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState();


  useEffect(() => {  
    (async function () {
      getLocations().then((value) => setLocationList(value));
    }());
  }, []);

  function handleLocationSelect(e) {
    console.log("Selected location", e.target.value);
    setSelectedLocation(e.target.value);
  }
  
  return (
    <p className="Location">
      <label>
        Location
      </label>
      <select name="location" onChange={e => handleLocationSelect(e)} value={selectedLocation} >
        <option value="select location">select location</option>
        {locationList.map((location) => (
        <option value={location}>
          {location}
        </option>
        ))}
      </select>
    </p>

  );
}

export default Location;
