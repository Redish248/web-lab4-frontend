import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {InputText} from 'primereact/inputtext';
import {withRouter} from 'react-router-dom'
import * as axios from "axios";
import "../styles/Forms.css";
import {connect} from "react-redux";
import {signIn, signOut} from "../actions/actions";

class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {nick: '',
            password: '',
            isAuth: true
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.nick + " " + this.state.password);
        this.props.history.push('/main');
    };

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


    logIn = (evt) => {
        evt.preventDefault();
        let formData = new FormData();
        formData.set('username', this.state.nick);
        formData.set('password', this.state.password);
        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            data: formData,
            withCredentials: true
        }).then(
            this.props.history.push('/main')
        ).catch(function (error) {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="main_div">
                <form id="formLogIn"  /*onSubmit={this.handleSubmit}*/>
                    <h1>Вход:</h1>

                    <h3>Имя пользователя:</h3>
                    <InputText id="login" keyfilter={/[^\s]/} value={this.state.nick} onChange={this.handleChange('nick')}/>


                    <h3>Пароль:</h3>
                    <Password id="pswd" feedback={false}  value={this.state.password} onChange={this.handleChange('password')} />
                    <br/><br/>

                    <Button label="Войти" onClick={this.logIn}/>

                </form>
            </div>
        );
    }
}


export default connect(null, {signIn, signOut})(LogInForm);