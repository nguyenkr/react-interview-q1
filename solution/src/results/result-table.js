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
      {props.nameList.map((person) =>(
        <tbody>
          <tr>
            <td>{person.name}</td>
            <td>{person.location}</td>
          </tr>
        </tbody>
      ))}
    </table>
    </div>
  );
}

export default ResultTable;
