import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Main from "./main.jsx";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1></h1>

                {this.props.children}
            </div>
        );
    }
}
