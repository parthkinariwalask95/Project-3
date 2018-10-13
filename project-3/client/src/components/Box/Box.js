
import React from "react";
import { Link } from "react-router-dom";


const Box = props => (


<div class={props.color}>
<div class="dash-box-icon">
  <i class={props.gyp}></i>
</div>
<div class="dash-box-body">
  <span class="dash-box-count">{props.title}</span>
  <span class="dash-box-title">{props.text}</span>
</div>
<img src={props.src} alt={props.alt} className="imgonbox"/>
<button className="myButt a1 three"><Link to={props.linkto}>{props.button}</Link></button>
</div>
);
export default Box;

