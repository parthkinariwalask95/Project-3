import React from "react";
import "./model.css";
//({ handleClose, show, children ,userid, username })
const Modal = props => {
    const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
        <p>{props.userid}</p>
        <p>Name: {props.name}</p>
        <p>Gender:{props.Gender}</p>
        <p>Age: {props.Age}</p> 
        <p>About_me: {props.About_me}</p>
          {/* //{children} */}
        
          <button
            onClick={props.handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };

  
  export default Modal;

