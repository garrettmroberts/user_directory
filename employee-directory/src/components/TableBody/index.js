import React from "react";

function TableBody(props) {
  return <tbody>
    {props.data.map(datapoint => {
      return <tr>
        <td>{datapoint.id}</td>
        <td>{datapoint.firstName}</td>
        <td>{datapoint.lastName}</td>
        <td>{datapoint.title}</td>
        <td>{datapoint.department}</td>
        <td>{datapoint.salary}</td>
      </tr>
    })}
  </tbody>
};

export default TableBody;