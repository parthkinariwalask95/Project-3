import React from "react";

export const Checkbox = props => (
    <div className="form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">{props.checkText}</label>
    </div>
)