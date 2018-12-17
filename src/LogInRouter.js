import React, { Component } from 'react';
import { Redirect } from 'react-router';
import LogInForm from "./components/LogInForm";

export default class LoginComponent extends Component {
    render(){
        if(sessionStorage.getItem("isAuthorised") === 'true'){
            return (<Redirect to="/main"/>);
        }else{
            return <LogInForm/>;
        }
    }
}