import React from "react";
import "./name.css";



const Usernames = props => (
  <div>
  
      <div className="main">
      <div className="container">
        
            <img src={props.img} alt="Avatar" className="image" />
            <h5>{props.usernames} , {props.Gender} , {props.age} , {props.City} </h5>
            <h6>{props.About_me}</h6>

            <div className="overlay">
              <button className="btn"><i className="fa fa-save">&nbsp;Save</i></button>
              <button id={props.id} className="btn1" onClick={props.hiddenid}><i className="fa fa-trash">&nbsp;Remove</i></button>
              <button className="btn2" onClick={props.show}><i className="fa fa-ellipsis-h">&nbsp;View More</i></button>
            </div>
          </div>
          
</div>
  </div>
)

export default Usernames;


