import React, { Component } from "react";
import { Formbtn, Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class SignUp extends Component {
    state = {
        fName: "",
        lName: "",
        email: "",
        cemail: "",
        pword: "",
        cpword: "",
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        if (this.state.fName && this.state.lName && this.state.email && this.state.cemail && this.state.pword && this.state.cpword && this.state.email === this.state.cemail && this.state.pword && this.state.cpword) {
            API.signUp({
                username: this.state.email,
                password: this.state.pword,
                email: this.state.email
            })
                .catch(err => console.log(err));
            //if no error then button click should transition to next page (questionnaire?)
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <h1>Let's Start With Some Basic Information</h1>
                </Row>
                <Row></Row>
                <form>
                    <Row>
                        <Col size="6">
                            <Input
                                value={this.state.fName}
                                onChange={this.handleInputChange}
                                name="First Name"
                                placeholder="First Name (required)"
                            />
                        </Col>
                        <Col size="6">
                            <Input
                                value={this.state.lName}
                                onChange={this.handleInputChange}
                                name="Last Name"
                                placeholder="Last Name (required)"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="6">
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="Email"
                                placeholder="Email (required)"
                            />
                        </Col>
                        <Col size="6">
                            <Input
                                value={this.state.cemail}
                                onChange={this.handleInputChange}
                                name="Confirm Email"
                                placeholder="Confirm Email (required)"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="6">
                            <Input
                                value={this.state.pword}
                                onChange={this.handleInputChange}
                                name="Password"
                                placeholder="Password (required)"
                            />
                        </Col>
                        <Col size="6">
                            <Input
                                value={this.state.cpword}
                                onChange={this.handleInputChange}
                                name="Confirm Password"
                                placeholder="Confirm Password (required)"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Formbtn
                            onClick={this.handleFormSubmit}>
                            Proceed
                        </Formbtn>
                    </Row>
                </form>
            </Container>
        )
    }
}