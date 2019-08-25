import React from 'react';

const SetDetail = (props) => {
  // window.navigator.geolocation.getCurrentPosition(
  //   (position) => console.log(position),
  //   (err) => console.log(err)
  // );
  //
  return (
      <tr
      >
        <td>{props.exercise}</td>
        <td>{props.weight}</td>
        <td>{props.reps}</td>
        <td>{props.dateTime}</td>
        <td>Unfuck</td>
      </tr>
  )
}

export default SetDetail;
