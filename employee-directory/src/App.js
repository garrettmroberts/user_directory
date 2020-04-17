import React, { Component } from 'react';
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Table from "./components/Table";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import employees from "./employees.json";

class App extends Component {
  state = {
    orderBy: "id",
    employees: employees
  };

  keys = Object.keys(this.state.employees[0]);

  render() {
    return(
      <div style={{height: "100vh"}}>
        <Container>
          <Row>
            <Col size="md-12" className="col-md-12 d-flex justify-content-center align-content-center">
              <Table>
                <TableHeader keys={this.keys} />
                <TableBody data={this.state.employees}/>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
