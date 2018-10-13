
import React from "react";


const Checkbox = props => (
 <div>
            <input type="checkbox" name={props.name} value={props.value}> {props.text}</input>
  </div>
  );

  export default Checkbox;