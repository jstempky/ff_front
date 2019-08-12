import React from 'react';

const SetDetail = (props) => {
  return (
    <div>
      <table>
        <tr>
          <td>{props.exercise}</td>
          <td>{props.weight}</td>
          <td>{props.reps}</td>
          <td>{props.dateTime}</td>
        </tr>
      </table>
    </div>
  )
}

export default SetDetail;
