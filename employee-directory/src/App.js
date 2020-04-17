import React, { useState, useEffect } from 'react';
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Table from "./components/Table";
import DropDown from "./components/DropDown";
import employees from "./employees.json";

function App() {
  const [orderState, setOrderState] = useState('id');
  const [employeesState, setEmployeesState] = useState(employees);
  const [keysState, setKeysState] = useState(Object.keys(employeesState[0]));

  // Sorts or filters table based on type
  function changeParams(type, affectedRow) {
    console.log("TYPE: ", type);
    console.log("AFFECTED ROW: ", affectedRow)
    if (type === "sort") {
      setOrderState(affectedRow);
      if (affectedRow === "salary" || affectedRow === "id") {
        const query = `a.${affectedRow} - b.${affectedRow}`
        const sorted = employeesState.sort((a,b) => eval(query)); 
        console.log(sorted);
      } else {
        const query = `a.${affectedRow}.localeCompare(b.${affectedRow})`;
        console.log(query);
        const sorted = employeesState.sort((a,b) => eval(query));
        console.log(sorted);
      }
    };
  };

  return(
    <div className="my-5">
      <Container>
        <Row>
          <h1>Employee Directory</h1>
        </Row>
        <Row>
          <Col size="md-12" className="col-md-12 d-flex justify-content-center align-content-center">
            <Table keys={keysState} data={employeesState} />
          </Col>
        </Row>

          <DropDown name="sort" type="success" keys={keysState} func={changeParams} />
          &nbsp;

          <DropDown name="filter" type="secondary" keys={keysState} func={changeParams} />
      </Container>
    </div>
  )
}

export default App;
