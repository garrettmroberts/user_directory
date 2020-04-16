import React, { Component } from 'react';
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Card from "./components/Card";
import employees from "./employees.json"

class App extends Component {
  state = {
    test: true
  }

  render() {
    return(
      <div style={{height: "100vh"}}>
        <Container>
          <Row>
            {employees.map(employee => {
              return (<Col size="md-3">
                <Card employee />
              </Col>)
            })}
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
