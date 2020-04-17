import React, { Component } from 'react';
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Table from "./components/Table";
import DropDown from "./components/DropDown";
import employees from "./employees.json";

class App extends Component {
  state = {
    orderBy: "id",
    employees: employees
  };

  keys = Object.keys(this.state.employees[0]);

  render() {
    return(
      <div className="my-5">
        <Container>
          <Row>
            <Col size="md-12" className="col-md-12 d-flex justify-content-center align-content-center">
              <Table keys={this.keys} data={this.state.employees}>
              </Table>
            </Col>
          </Row>
            <DropDown name="sort" keys={this.keys} type="success" />
            &nbsp;
            <DropDown name="Filter" keys={this.keys}  type="secondary"/>
        </Container>
      </div>
    )
  }
}

export default App;
