import "normalize.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Main from "./pages/main.js";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h3>Index is My.</h3>
    }
}

class One extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h3>One is My.</h3>
    }
}

class Two extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h3>Two is My.</h3>
    }
}

class Three extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h3>Three is My.</h3>
    }
}


ReactDOM.render(
    <Router>
        <div>
            <h1>Base of the all</h1>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/one">首页one</Link>
                </li>
                <li>
                    <Link to="/two">首页two</Link>
                </li>
                <li>
                    <Link to="/three">首页three</Link>
                </li>
            </ul>


            <Main className="good">
                <Route exact path="/" component={Index} />
                <Route path="/one" component={One} />
                <Route path="/Two" component={Two} />
                <Route path="/Three" component={Three} />
            </Main>
        </div>
    </Router>,
    document.getElementById("root")
)