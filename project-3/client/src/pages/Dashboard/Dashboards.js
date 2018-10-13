import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./dashboard.css";
import Box from "../../components/Box";
import Jumbotron from "../../components/Jumbotron";

class Dashboards extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Hey Jane</h1>
              <h3>What would you like to do today?</h3>
            </Jumbotron>

          </Col>
        </Row>
        <Row>
          <Col size="md-4">

            <Box
              color="dash-box dash-box-color-2"
              gyp="glyphicon glyphicon-screenshot"
              title="Best Matches"
              text="To see best matches as per your profile"
              src="./images/match2.png"
              alt="Best Matches"
              linkto="/matches"
              button="View Matches"

            />


          </Col>
          <Col size="md-4">
          <Box
              color="dash-box dash-box-color-2"
              gyp="glyphicon glyphicon-floppy-saved"
              title="Saved Friend List"
              text="Get your all saved friends"
              src="./images/save2.png"
              alt="save"
              linkto="/saved"
              button="View Saved"

            />


           
          </Col>
          <Col size="md-4">
          <Box
              color="dash-box dash-box-color-2"
              gyp="glyphicon glyphicon-user"
              title="Profile"
              text="Edit your profile to get matches as per profile"
              src="./images/editProfile.png"
              alt="profile"
              linkto="/profile"
              button="Edit Profile"

            />
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Dashboards;
