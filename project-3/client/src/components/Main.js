import React, { Component } from "react";
import API from "../utils/API";
import Name from "../components/cards/profile";
import Modal from "../components/modal/modal"

class View extends Component {
  state = {
    usernames: [],
    show: false,
    Info: {},
    currentUserId: null,
     showMe:true
    };

  showModal = id => {
    API.getInfoById(id)
      .then(res => { console.log(res); this.setState({ Info: res.data }) });
    console.log(this.state.Info);
    this.setState({ show: true });
    this.setState({ currentUserId: id })

  };

  hideModal = () => {
    this.setState({ show: false });
  }

  hiddenid = () => {
    this.setState({
      showMe:!this.state.showMe
    })  }
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getviewmatch()
      .then(res => this.setState({ usernames: res.data }));

  };


  render() {
    return (
      <div>
        {this.state.usernames.map(user => (
          <div>

            {
              this.state.showMe ?
                <div>
                  <Name

                    img={user.img}
                    usernames={user.name}
                    age={user.Age}
                    Gender={user.Gender}
                    City={user.City}
                    About_me={user.About_me}
                    id={user._id}

                    hiddenid={() => this.hiddenid()}
                    show={() => this.showModal(user._id)}
                  // show={this.showModal(user._id)}
                  //  showdata={  () => this.showdata(user._id)}
                  />        </div>
                : null
            }


            <Modal show={this.state.show} handleClose={this.hideModal}
              name={this.state.Info.name}
              Gender={this.state.Info.Gender}
              Age={this.state.Info.Age}
              About_me={this.state.Info.About_me} />

          </div>
        ))}
      </div>
    )
  }

}




const container = document.createElement('div');
document.body.appendChild(container);
export default View;