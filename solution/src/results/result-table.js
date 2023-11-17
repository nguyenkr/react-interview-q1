import React from 'react';
import './result-table.css'
function ResultTable( props ) {

  return (
    <div className="ResultTable">
    <table>
      <tr>
        <th>Name</th>
        <th>Location</th>
      </tr>
      {props.nameList.map((person) =>(
        <tr>
          <td>{person.name}</td>
          <td>{person.location}</td>
        </tr>
      ))}
    </table>
    </div>
  );
}

export default ResultTable;
