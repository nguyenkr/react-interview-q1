import React from 'react';
import './result-table.css'
function ResultTable( props ) {

  return (
    <div className="ResultTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {props.nameList.map((person) =>(
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ResultTable;
