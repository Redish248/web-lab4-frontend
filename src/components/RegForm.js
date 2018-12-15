import React, { Component } from 'react';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import "../styles/Forms.css";

import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {InputText} from 'primereact/inputtext';
import {connect} from "react-redux";
import {signUp} from "../actions/actions";
import * as axios from "axios/index";


class RegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {nick: '',
            password: ''};
    }

    /*handleSubmit(event) {
        event.preventDefault();
        alert(this.state.nick + " " + this.state.password);
        this.props.history.push('/main');
    }*/

    /*handleNickChange(event) {
        this.setState({nick: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }*/
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handlePrevPage = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    };

    signUp = () => {
        alert("kek")
        axios({
            method: 'post',
            url: 'http://localhost:8080/lab4/signup',
            data: {
                nick: this.state.nick,
                password: this.state.password
            },
            withCredentials: true
        }).then(
            alert(this.state.nick)
        ).catch(function (error) {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="main_div">
            <form method="post" /*onSubmit={this.handleSubmit.bind(this)}*/ >
                <h1>Регистрация:</h1>

                <h3>Имя пользователя:</h3>
                <InputText keyfilter={/[^\s]/} value={this.state.nick} onChange={this.handleChange('nick')}/>

                <h3>Пароль:</h3>
                <Password  value={this.state.password} onChange={this.handleChange('password')}/>
                <br/><br/>

                <Button  label="Зарегистрироваться" onClick={this.signUp} />
            </form>
                <br/>
                <Button label="Назад" onClick={this.handlePrevPage}/>
            </div>
        );
    }
}


export default connect(null, {signUp})(RegForm);
