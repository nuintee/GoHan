import React from "react";
import ReactDOM from "react-dom";

import "core-js/stable";
import "regenerator-runtime/runtime";

import './css/base.css';
import './css/layout.css';
import './css/module.css';
import './css/state.css';
import './css/animation.css'

import App from './App'

ReactDOM.render(
    <App />,
    document.getElementById("root")
);