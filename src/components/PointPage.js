import React, { Component } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import "../styles/PointPage.css";

import {Button} from 'primereact/button';
import {Spinner} from 'primereact/spinner';
import {Slider} from 'primereact/slider';
import CanvasP from "./CanvasP";
import {addPoint, signOut} from "../actions/actions";
import {connect} from "react-redux";
import * as axios from "axios/index";
import history from "../history"



class InputElem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nick: window.sessionStorage.getItem('nick'),
            sliderY: 1,
            spinnerX: 1,
            spinnerR: 2
        };
    }
    handleLogOut = (event) => {
        event.preventDefault();
        window.sessionStorage.setItem('isAuthorised', false);
        window.sessionStorage.setItem('nick', '');
        this.props.signOut();
        history.push('/');
        document.location.reload();
    };


    savePoint = (event) => {
        event.preventDefault();
        this.props.addPoint(this.state.spinnerX, this.state.sliderY, this.state.spinnerR);
        let formData = new FormData();
        formData.set('x', this.state.spinnerX);
        formData.set('y', this.state.sliderY);
        formData.set('r', this.state.spinnerR);
        axios({
            method: 'post',
            url: 'http://localhost:8080/lab4/savepoint',
            data: formData,
            withCredentials: true
        }).then(() => {
            console.log("added");
            //this.getPoints()
            }
        ).catch(function (error) {
            console.log(error)

        });
    };

    /*getPoints = () => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/lab4/getpoints',
            withCredentials: true
        }).then(() => {
                console.log("all points")
            }
        ).catch(function (error) {
            console.log(error)

        });
    };*/

    render() {
        return (
            <div className="main_div">
                <h2 id="saveNick" className="hello">Hello, {this.state.nick}!</h2>
                <Button label="Выйти" onClick={this.handleLogOut.bind(this)}/>
                <table className="main_table_point">
                    <tr>
                        <td>
                            <CanvasP/>
                        </td>
                        <td>
                            <form id = "pointForm" >
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
                                        <Button id="pointButton" label="Проверить" onClick={this.savePoint}/>
                                    </tr>
                                </table>
                            </form>
                        </td>
                    </tr>
                </table>
                <div id="resultPoint">

                </div>
            </div>
        );
    }

}
function mapStateToProps ( state) {
    return {
        x: state.point.x,
        y: state.point.y,
        r: state.point.r,
        nick: state.user.nick,
        isAuthorised: state.user.isAuthorised,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut()),
        addPoint : (x,y,r) => dispatch(addPoint(x,y,r))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputElem);