import React, { Component } from "react";
import Routes from "../Routes";

import "./App.css";
import Headers from "../components/Headers";

class App extends Component {
    render() {
        return (
            <div className="App container">
                <center>
                <Headers/>
                    <br/>
                <Routes />
                </center>
            </div>
        );
    }
}

export default App;