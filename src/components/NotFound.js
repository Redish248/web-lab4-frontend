import React, { Component} from 'react';
import "../styles/NotFound.css"
import {Button} from "primereact/components/button/Button";

export default class NotFound extends Component{
    componentDidMount() {
        rotate();
    }

    handlePrevPage = () => {
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="NotFound">
                <h2>Такой страницы не существует</h2>
                <h2>Возможно, сервер не отвечает</h2>
                <Button label="На главную" onClick={this.handlePrevPage}/>

                <table>
                    <tr>
                        <td>
                <iframe src="https://giphy.com/embed/8dSS9qsdSBhpm" width="350" height="350" frameBorder="0"
                        class="giphy-embed" allowFullScreen/>
                <p><a href="https://giphy.com/gifs/slim-shady-8dSS9qsdSBhpm"></a></p>
                        </td>

                        <td>
                            <table>
                                <tr>
                                    <td>
                            <div ref="game" className="circle" />
                                    </td>
                                </tr>
                                <tr>
                                    <td id="strTable">
                            <div className="str"/>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

function rotate() {
    let lastRotate = 0;
    document.getElementsByClassName('circle')[0].addEventListener('click', function (e) {
        e.target.style.transform = 'rotate(' + (lastRotate += Math.random() * Math.PI * 10) + 'rad)';
        return false;
    })
}


document.oncontextmenu = function (event) {
    event = event || window.event;
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    let lastRotate = 0;
    document.getElementsByClassName('circle')[0].style.transform = 'rotate(' + (lastRotate +=  Math.PI * 10 / 2) + 'rad)';
};



        
