import React, { useState } from 'react';
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

  function departmentKeys() {
    let keys = [];
    employeesState.map(employee => {
      keys.push(employee.department);
    });
    let uniqueKeys = Array.from(new Set(keys));
    return uniqueKeys;
  };

  function reset() {
    console.log("We need to reset the array.");
  };

  // Sorts or filters table based on type
  function changeParams(type, affectedRow) {
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
      };
    } else {
      console.log(affectedRow);
      const filtered = employeesState.filter((employee) => {
        return employee.department === affectedRow
      });
      setEmployeesState(filtered);
    }
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
          <DropDown name="filter by department" type="secondary" keys={departmentKeys()} func={changeParams} />
          &nbsp;
          <button className="btn btn-danger btn-lg btn-block" onClick={reset()}>Reset</button>
      </Container>
    </div>
  )
}

export default App;
