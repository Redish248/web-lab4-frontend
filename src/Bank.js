import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {Calendar} from "primereact/components/calendar/Calendar";

class Bank extends Component {
    constructor(props) {
        super(props);
        this.state = {number: '',
            name: '',
            date: '',
            code: ''
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });

    };
    clickButton = () => {
        //...обработка
    };

    render() {
        return (
            <div>
                <form id="formLogIn" >
                    <h1>Введите данные карты:</h1>
                    <h3>Номер:</h3>
                    <InputText maxlength="16" keyfilter={/[0-9^\s]/} value={this.props.number} onChange={this.handleChange('number')}/>

                    <br/>

                    <h3>Имя:</h3>
                    <InputText keyfilter={/[A-z^\s]/} value={this.props.name} onChange={this.handleChange('name')}/>

                    <br/>

                    <h3>Срок действия:</h3>
                    <Calendar value={this.state.date} onChange={this.handleChange('date')} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="2010:2030"/>

                    <br/>

                    <h3>Защитный код:</h3>
                    <InputText maxlength="3" keyfilter={/[0-9^\s]/} value={this.props.code} onChange={this.handleChange('code')}/>

                    <br/>

                    <Button label="Send" onClick={this.clickButton}/>

                </form>
            </div>
        );
    }
}

export default Bank;