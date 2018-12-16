import React, { Component } from "react";
import "../styles/Home.css";

import {Button} from "primereact/components/button/Button";
import Clock from "./Clock";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    handleLogIn= (event) => {
        event.preventDefault();
        this.props.history.push('/login');
    };

    handleSignUp= (event) => {
        event.preventDefault();
        this.props.history.push('/signup');
    };

    render() {
        return (
            <div className="home">
                <table>
                    <tr>
                        <td>
                            <Clock/>

                        </td>
                        <td>
                            <table>
                                <tr>
                <Button label="Войти" onClick={this.handleLogIn}/>
                                </tr>
                                <br/>
                                <tr>
                <Button label="Регистрация" onClick={this.handleSignUp}/>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

/* "dev": "webpack --mode development",
   "build": "webpack --mode production",*/