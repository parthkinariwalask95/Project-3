import React from "react";
import { Doughnut } from "react-chartjs-2";

export const adminChart = props => (
    <Doughnut data={props.users} />
)