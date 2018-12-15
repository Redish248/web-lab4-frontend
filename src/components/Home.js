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
                             TODO: clock will be here!
                        </td>
                        <td>
                            <table>
                                <tr>
                <Button label="Войти" onClick={this.handleLogIn.bind(this)}/>
                                </tr>
                                <br/>
                                <tr>
                <Button label="Регистрация" onClick={this.handleSignUp.bind(this)}/>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}