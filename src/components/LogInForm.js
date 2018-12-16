import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {InputText} from 'primereact/inputtext';

import "../styles/Forms.css";
import {connect} from "react-redux";
import {signIn, signOut} from "../actions/actions";
import * as axios from "axios";
import  {store} from "../store/store";
import {userReducer} from "../reducers/userReducer";
import {SIGN_IN} from "../actions/actionTypes";

class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {nick: '',
            password: '',
            isAuth: true,
            checkMessage: ""
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


    logIn = (event) => {
        //mapStateToProps(this.state.nick);
        event.preventDefault();
        let formData = new FormData();
        formData.set('username', this.state.nick);
        formData.set('password', this.state.password);
        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            data: formData,
            withCredentials: true
        }).then(response => (
                this.props.history.push('/main'))
        ).catch(function (error) {
            if (error.response.status === 401) {
                alert("no user")
            }
        });
    };

    render() {
        return (
            <div className="main_div">
                <form id="formLogIn" >
                    <h1>Вход:</h1>

                    <h3>Имя пользователя:</h3>
                    <InputText id="login" keyfilter={/[^\s]/} value={this.props.nick} onChange={this.handleChange('nick')}/>

                    <br/>
                    <label>{this.state.checkMessage}</label>

                    <h3>Пароль:</h3>
                    <Password id="pswd" feedback={false}  value={this.state.password} onChange={this.handleChange('password')} />
                    <br/><br/>

                    <Button label="Войти" onClick={this.logIn}/>

                </form>
                <br/>
                <Button label="Назад" onClick={this.handlePrevPage}/>
            </div>
        );
    }
}

function validate(nick, password) {
   if ((nick === '') || (password === '')) {
       return false;
   } else {
       return true;
   }
}

/*const mapStateToProps = (nick) => {
    console.log(store);
    return {
        nick: nick
    };
};
*/

export default connect(null, {signIn})(LogInForm);