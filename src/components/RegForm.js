import React, { Component } from 'react';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import "../styles/Forms.css";

import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {InputText} from 'primereact/inputtext';


class RegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {nick: '',
            password: ''};
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.nick + " " + this.state.password);
        this.props.history.push('/main');
    }

    handleNickChange(event) {
        this.setState({nick: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    render() {
        return (
            <div className="main_div">
            <form method="post" onSubmit={this.handleSubmit.bind(this)} >
                <h1>Регистрация:</h1>

                <h3>Имя пользователя:</h3>
                <InputText keyfilter={/[^\s]/} value={this.state.nick} onChange={this.handleNickChange.bind(this)}/>

                <h3>Пароль:</h3>
                <Password  value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
                <br/><br/>

                <Button  label="Регистрация"  />
            </form>
            </div>
        );
    }
}


export default RegForm;
