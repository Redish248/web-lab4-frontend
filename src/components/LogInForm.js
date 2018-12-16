import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {InputText} from 'primereact/inputtext';

import "../styles/Forms.css";
import {connect} from "react-redux";
import * as axios from "axios";
import {signIn} from "../actions/actions";

class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {nick: '',
            password: ''
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });

    };

    handlePrevPage = (event) => {
    event.preventDefault();
    this.props.history.push('/');
};
    static changeState = (msg) => {
      this.setState({
          checkLogIn: msg
      })
    };


    logIn = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.set('username', this.state.nick);
        formData.set('password', this.state.password);
        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            data: formData,
            withCredentials: true
        }).then(response => {
                sessionStorage.setItem('isAuthorised', true);
                this.props.signIn(this.state.nick);
                this.props.history.push('/main');
        }
        ).catch(function (error) {
            if (error.response.status === 401) {
                document.getElementById('error').innerText += "Пользователь не существует!";
            }
        });
    };

    render() {
        return (
            <div className="main_div">
                <div id="error"/>
                <form id="formLogIn" >
                    <h1>Вход:</h1>
                    <h3>Имя пользователя:</h3>
                    <InputText id="login" keyfilter={/[^\s]/} value={this.props.nick} onChange={this.handleChange('nick')}/>

                    <br/>

                    <h3>Пароль:</h3>
                    <Password id="pswd" feedback={false}  value={this.state.password} onChange={this.handleChange('password')} />
                    <br/><br/>

                    <Button id="go" label="Войти" onClick={this.logIn}/>

                </form>
                <br/>
                <Button label="Назад" onClick={this.handlePrevPage}/>
            </div>
        );
    }
}


function mapStateToProps(state)  {
    window.sessionStorage.setItem('nick', state.user.nick);
    return {
        isAuthorised: state.user.isAuthorised,
        nick: state.user.nick
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (nick) => dispatch(signIn(nick))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);