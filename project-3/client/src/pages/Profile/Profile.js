import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";

class Profile extends Component {
  state = {
    user: []
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Jumbotron>
              <h1>Profile</h1>
              <button className="myButt"><Link to="/">Back To Dashboard</Link></button>

            </Jumbotron>
            
          </Col>
        </Row>
      
      </Container>
    );
  }
}

export default Profile;
