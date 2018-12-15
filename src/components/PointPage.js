import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import "../styles/PointPage.css";

import {Button} from 'primereact/button';
import {Spinner} from 'primereact/spinner';
import {Slider} from 'primereact/slider';
import CanvasP from "./CanvasP";


class InputElem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderY: 1,
            spinnerX: 1,
            spinnerR: 2
        };
    }
    handleLogOut= (event) => {
        event.preventDefault();
        this.props.history.push('/');
    };

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.spinnerX + " " + this.state.sliderY + " " + this.state.spinnerR);
    }

    render() {
        return (
            <div className="main_div">
                <Button label="Выйти" onClick={this.handleLogOut.bind(this)}/>
                <table>
                    <tr>
                        <td>
                            <CanvasP/>
                        </td>
                        <td>
                            <form id = "pointForm"/*method="post" action="/checkPoint"*/ onSubmit={this.handleSubmit.bind(this)}>
                                <table className="formTableXYR">
                                    <tr id="chooseLabel">
                                        Выберите данные:
                                    </tr>
                                    <tr>
                                        Координата X:
                                    </tr>
                                    <tr>
                                        <Spinner id="X" readonly min={-5} max={3} value={this.state.spinnerX} onChange={(e) => this.setState({spinnerX: e.value})}/>
                                    </tr>
                                    <tr>
                                        Координата Y: {this.state.sliderY}
                                    </tr>
                                    <tr>
                                        <Slider id= "Y" value={this.state.sliderY} onChange={(e) => this.setState({sliderY: e.value})} style={{width: '14em'}} max ={5} min={-5}/>
                                    </tr>
                                    <tr>
                                        Радиус R:
                                    </tr>
                                    <tr>
                                        <Spinner id="R" readonly min={1} max={3} value={this.state.spinnerR} onChange={(e) => this.setState({spinnerR: e.value})}/>
                                    </tr>
                                    <tr>
                                        <Button id="pointButton" label="Проверить" /*onClick="/checkPoint/save"*//>
                                    </tr>
                                </table>
                            </form>
                        </td>
                    </tr>
                </table>
                <div id="resultPoint"/>
            </div>
        );
    }

}
export default InputElem;