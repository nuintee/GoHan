import React from "react";
import ReactDOM from "react-dom";

import './css/base.css';
import './css/layout.css';
import './css/module.css';
import './css/state.css';
import './css/animation.css'

import * as serviceWorker from './serviceWorker';

serviceWorker.register();

import App from './App'

ReactDOM.render(
    <App />,
    document.getElementById("root")
);