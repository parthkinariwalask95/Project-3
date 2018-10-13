import React from "react";

import { Link } from "react-router-dom";

import "./button.css";

const Button = props => (
<div>
<button className="btndash"><Link to={props.link}><h6 className="btndash">{props.text}</h6></Link></button>

</div> 
);

  export default Button;