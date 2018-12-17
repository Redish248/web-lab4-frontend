import React, { Component } from 'react';
import { Redirect } from 'react-router';
import RegForm from "./components/RegForm";

export default class RegRouter extends Component {
    render(){
        if(sessionStorage.getItem("isAuthorised") === 'true'){
            return (<Redirect to="/main" />);
        }else{
            return <RegForm/>;
        }
    }
}