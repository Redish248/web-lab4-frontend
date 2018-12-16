import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PointPage from "./components/PointPage";

export default class LoginComponent extends Component {
    render(){
        if(sessionStorage.getItem("isAuthorised") !== 'true'){
            return (<Redirect to="/" />);
        }else{
            return <PointPage/>;
        }
    }
}