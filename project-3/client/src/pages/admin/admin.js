import React, { Component } from "react";
import { adminChart } from "../../components/adminChart";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Admin extends Component {
    state = {
        users =[],
        chartHide = false
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
        this.setState({ chartHide: true });
    }

    render() {
        return (
            <div>
                {!this.state.chartHide ? <Chart /> : <User />}
            </div>
        )
    }
}

var Chart = React.createClass({
    render() {
        return (
            <Container fluid>
                <Row>
                    <h1>Hello Admin</h1>
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
    }
});

var User = React.createClass({
    render() {
        return (
            <Container fluid>
                {this.state.users.map(users => {
                    return (
                        <div key={users.id}>{users.name}</div>
                    )
                })}
            </Container>
        )
    }
})

export default Admin;
