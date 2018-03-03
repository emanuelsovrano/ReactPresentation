import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Game } from "./components/Game";

ReactDOM.render(
    <Game />,
    document.getElementById("content")
);