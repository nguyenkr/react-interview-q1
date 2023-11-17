import React, { useState, useEffect } from 'react';
import { getLocations } from '../mock-api/apis';

function Location( {handleLocationSelect} ) {

  const [locationList, setLocationList] = useState([]);

  useEffect(() => {  
    (async function () {
      getLocations().then((value) => setLocationList(value));
    }());
  }, []);
  
  return (
    <div className="Location row">
      <div className="col-25">
        <label>Location</label>
      </div>
      <div className="col-75">
        <select name="location" onChange={e => handleLocationSelect(e)} >
          <option value="select location">select location</option>
          {locationList.map((location) => (
          <option value={location}>
            {location}
          </option>
          ))}
        </select>
      </div>
    </div>

  );
}

export default Location;
