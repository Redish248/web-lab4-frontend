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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handlePrevPage = () => {
        this.props.history.push('/');
    };

    signUp = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.set('username', this.state.nick);
        formData.set('password', this.state.password);
        axios({
            method: 'post',
            url: 'http://localhost:8080/lab4/signup',
            data: formData,
            withCredentials: true
        }).then(response => {
                window.sessionStorage.setItem('isAuthorised', true);
                window.sessionStorage.setItem('nick', this.state.nick);
                this.props.signUp(this.state.nick);
                this.props.history.push('/main')}

        ).catch(function (error) {
            if ((error.response) && (error.response.status = 400)) {
                alert('user exists');
        }
        });
    };

    render() {
        return (
            <div className="main_div">
            <form>
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

function mapStateToProps(state)  {
    return {
        isAuthorised: state.user.isAuthorised,
        nick: state.user.nick
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (nick) => dispatch(signUp(nick))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(RegForm);
