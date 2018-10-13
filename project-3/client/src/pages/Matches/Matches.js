import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./matches.css";
import Button from "../../components/Button";
import Input from "../../components/input";
import Name from "../../components/cards/profile";
import Modal from "../../components/modal/modal"

// import Checkbox from "../../components/Checkbox";

class Matches extends Component {
  state = {
    user: [],
    results: [],
    startAge:"",
    endAge:"",
    gender:"",
    area:"",
    usernames: [],
    show: false,
    Info: {},
    currentUserId: null,
     showMe:true
  };
  
  showModal = id => {
    API.getInfoById(id)
      .then(res => { console.log(res); this.setState({ Info: res.data }) });
    console.log("INFO" + this.state.Info);
    this.setState({ show: true });
    this.setState({ currentUserId: id });
    // console.log("hi");

  };

  hideModal = () => {
    this.setState({ show: false });
  }

  hiddenid = (id) => {
    let newResults = this.state.results.filter((user) => {
      return (user._id !== id);
    });

    this.setState({
      results: newResults
    })  }
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getviewmatch()
      .then(res => this.setState({ usernames: res.data }));

  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ user: res.data })
      )
      .catch(err => console.log(err));
      
  };

  find = (startAge, EndAge, Gender, Area) => {
    API.findYourUser(startAge, EndAge, Gender, Area)
      .then(res => {
        this.setState({ results: res.data })
        console.log(this.state.results);
      });
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>

          <Row>
            <Col size="md-11">
          
              <h3>Find Your Matches</h3>

              <h3>I am Looking for age between
              <Input
                value={this.state.startAge}
                onChange={this.handleInputChange}
                name="startAge"
                placeholder="StartAge (required)"
              />To
               <Input
                value={this.state.endAge}
                onChange={this.handleInputChange}
                name="endAge"
                placeholder="EndAge (required)"
              />
              
               years old
               <Input
                value={this.state.gender}
                onChange={this.handleInputChange}
                name="gender"
                placeholder="Gender (required)"
              />
               who's in
               <Input
                value={this.state.area}
                onChange={this.handleInputChange}
                name="area"
                placeholder="Area (required)"
              />
              </h3>
              {/* <Checkbox name="Sports Lover" value="Sports Lover" text="Sports Lover" /> */}
              <button onClick={() => this.find(this.state.startAge, this.state.endAge,this.state.gender, this.state.area)} >Find</button>

            </Col>
            <Col size="md-1">
              <Button link="/" text="Back To Dashboard" />

            </Col>
          </Row>
          </Jumbotron>
          {/* {this.state.user.map(user => (
            <div>
              <h3>{user.username}</h3>
              
            </div>
          ))} */}

           {this.state.results.length ? (
             <div>
             {this.state.results.map(user => (
                //   <div>
                //   <h3>{user.username}</h3>
                  
                // </div>
                <div>

                {
                  this.state.showMe ? 
                    <div>
                      <Name 
    
                        img={user.avatarUrl}
                        usernames={user.username}
                        age={user.age}
                        Gender={user.gender}
                        City={user.location}
                        About_me={user.About_me}
                        id={user._id}
    
                        hiddenid={() => this.hiddenid(user._id)}
                        show={() => this.showModal(user._id)}
                      // show={this.showModal(user._id)}
                      //  showdata={  () => this.showdata(user._id)}
                      />        </div>
                    : null
                }
    
    
                <Modal show={this.state.show} handleClose={this.hideModal}
                  name={this.state.Info.username}
                  Gender={this.state.Info.gender}
                  Age={this.state.Info.age}
                  About_me={this.state.Info.About_me} />
    
              </div>
              ))}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}

            <div>
        {/* {this.state.usernames.map(user => ( */}
         
        {/* ))} */}
      </div>
      </Container>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
export default Matches;
