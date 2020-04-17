import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table(props) {
  return <table className="table table-hover table-light">
      <TableHeader keys={props.keys} />
      <TableBody data={props.data} />
    </table>
};

export default Table;