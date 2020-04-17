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

  // Either filters or sorts app states depending on type
  // needs LOTS of work
  function changeParams({ type, affectedRow }) {
    if (type === "sort") {
      setOrderState(affectedRow);
      let order = employeesState.sort((a, b) => {
        return b.department - a.department;
      })
      console.log(order);
    };
    
  };

  return(
    <div className="my-5">
      <Container>
        <Row>
          <Col size="md-12" className="col-md-12 d-flex justify-content-center align-content-center">
            <Table keys={keysState} data={employeesState} />
          </Col>
        </Row>

          {/* Sort Dropdown button */}
          <button type="button" className={`btn btn-success dropdown-toggle btn-lg btn-block`} data-toggle="dropdown">
            Sort
          </button>
          <div className="dropdown-menu">
            {keysState.map(key => {
              return <button
                className="dropdown-item"
                type="button"
                onClick={e => changeParams({type: "sort", affectedRow: e.target.innerText.toLowerCase()})}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            })}
          </div>
          &nbsp;

          {/* Filter Dropdown Button */}
          <button
          type="button"
          className={`btn btn-secondary dropdown-toggle btn-lg btn-block`}
          data-toggle="dropdown"
          onClick={e => changeParams({ type: "filter", affectedRow: e.target.innerText.toLowerCase() })}>
          Filter
          </button>
        <div className="dropdown-menu">
          {keysState.map(key => {
            return <button className="dropdown-item" type="button">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          })}
        </div>
      </Container>
    </div>
  )
}

export default App;
