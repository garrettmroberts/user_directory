import React from "react";

function TableHeader(props) {
  return <thead className="thead-dark">
    <tr>
      {props.keys.map(key => {
        return <th scope="col">{key}</th>
      })}
    </tr>
  </thead>
};

export default TableHeader;