import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

// Requires keys and table data
function Table({ keys, data }) {
  return <table className="table table-hover table-light">
      <TableHeader keys={keys} />
      <TableBody data={data} />
    </table>
};

export default Table;