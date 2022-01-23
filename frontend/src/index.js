import React from "react";
import ReactDOM from "react-dom";
import Switcher from "./app";
import "./css/style.css";

import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

ReactDOM.render(<Switcher />, document.getElementById("root"));
