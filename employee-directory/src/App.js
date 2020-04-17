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

  return(
    <div className="my-5">
      <Container>
        <Row>
          <Col size="md-12" className="col-md-12 d-flex justify-content-center align-content-center">
            <Table keys={keysState} data={employeesState}>
            </Table>
          </Col>
        </Row>
          <DropDown name="sort" keys={keysState} type="success" />
          &nbsp;
          <DropDown name="Filter" keys={keysState}  type="secondary"/>
      </Container>
    </div>
  )
}

export default App;
