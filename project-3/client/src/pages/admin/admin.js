import React, { Component } from "react";
import { adminChart } from "../../components/adminChart";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Admin extends Component {
    state = {
        users =[],
        chartHide = false,
        userHide = true
    };

    componentDidMount() {
        this.countUsers();
    };

    countUsers = () => {
        API.findAll()
            .then(res =>
                this.setState({ users: res.data }))
            .catch(err => console.log(err));
    };

    showUsers = () => {

    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <h1>Good Evening Admin</h1>
                </Row>
                <Row>
                    <Col size="4"></Col>
                    <Col size="4">
                        <adminChart users={this.state.users.length} />
                        <button onClick={this.showUsers}>Manage Users</button>
                    </Col>
                    <Col size="4"></Col>
                </Row>
                <Row></Row>
            </Container>
        );
    };
};

export default Admin;
