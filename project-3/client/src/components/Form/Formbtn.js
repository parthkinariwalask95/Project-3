import React from "react";

export const Formbtn = props => (
    <button {...props} className="btn btn-success">
        {props.children}
    </button>
)