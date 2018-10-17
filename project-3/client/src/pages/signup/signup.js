import React, { Component } from "react";
import { Formbtn, Input, Checkbox } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class SignUp extends Component {
    state = {
        pageOneHide: false,
        pageTwoHide: true,
        pageThreeHide: true,
        fName: "",
        lName: "",
        email: "",
        cemail: "",
        pword: "",
        cpword: "", //need to update state to include second and third page state variables as well
        image: "",
        age: "",
        gender: "",
        location: "",
        rage: "",
        rgender: ""
        //how to handle checkboxes
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handlePageTransition = (event, pageNum) => {
        event.preventDefault();
        if (pageNum === "One") {
            return this.setState({ pageOneHide: true, pageTwoHide: false });
        }

        if (pageNum === "Two") {
            return this.setState({ pageTwoHide: true, pageThreeHide: false });
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.fName && this.state.lName && this.state.email && this.state.cemail && this.state.pword && this.state.cpword && this.state.email === this.state.cemail && this.state.pword && this.state.cpword) {
            API.signUp({
                username: this.state.email,
                password: this.state.pword,
                email: this.state.email
            })
                .catch(err => console.log(err));
            //if no error then button click should transition to dashboard page
            //fix validation to include all state variables?
        }
    };

    render() {
        return (
            <Container fluid>
                <form className="pageOne">
                    <Row>
                        <h1>Let's Start With Some Basic Information</h1>
                    </Row>
                    <Row></Row>
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
                            onClick={this.handlePageTransition("One")}> {/*change this onClick*/}
                            Proceed
                        </Formbtn>
                    </Row>
                </form>
                <form className="pageTwo">
                    <Row>
                        <h1>Upload Image</h1>
                    </Row>
                    <Row></Row>
                    <Row>
                        <Input
                            value={this.state.image}
                            onChange={this.handleInputChange}
                            name="Image URL"
                            placeholder="Image URL (required)"
                        />
                        <Formbtn
                            onClick={this.handlePageTransition("One")}
                        > {/*add onclick method for uploading/proceeding*/}
                            Upload
                        </Formbtn>

                    </Row>
                </form>
                <form className="pageThree">
                    <Row>
                        <h1>I am</h1>
                        <Input
                            value={this.state.age}
                            onChange={this.handleInputChange}
                            name="Age"
                            placeholder="Age (required)" //this should include numeric validation
                        />
                        <h1>years old</h1>
                        <Input
                            value={this.state.gender}
                            onChange={this.handleInputChange}
                            name="Gender"
                            placeholder="Gender" //this shoud be a dropdown and include male, female, and other?
                        />
                        <h1>looking for a roommate in</h1>
                        <Input
                            value={this.state.location}
                            onChange={this.handleInputChange}
                            name="Location"
                            placeholder="Location (required)"
                        />
                        <h1>area</h1>
                    </Row>
                    <Row>
                        <Row>
                            <h2>I identify as a:</h2>
                        </Row>
                        <Row>
                            <Col size="4">
                                <Checkbox
                                    text="Athlete"
                                />
                                {/* need to add a checkbox component for here */}
                            </Col>
                            <Col size="4">

                            </Col>
                            <Col size="4">

                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Row>
                            <h2>I am looking for a</h2>
                            <Input
                                value={this.state.rage}
                                onChange={this.handleInputChange}
                                name="Rage"
                                placeholder="Roomate Age (required)" //add numeric validation here
                            />
                            <h2>year old</h2>
                            <Input
                                value={this.state.rgender}
                                onChange={this.handleInputChange}
                                name="Rgender"
                                placeholder="Roommate Gender (required)" //make this a dropdown
                            />
                        </Row>
                        <Row>
                            <Col size="4">
                            </Col>
                            <Col size="4">

                            </Col>
                            <Col size="4">

                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Formbtn onClick={this.handleFormSubmit}>
                            Submit
                        </Formbtn>
                    </Row>
                </form>
            </Container>
        )
    }
}

export default SignUp;