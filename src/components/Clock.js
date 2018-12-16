import React, { Component } from 'react';
import "../styles/Clock.css"

class Clock extends Component {
    render() {
        return (
            <div id = "clockAndCalendar">

                <table id = "startTable">
                    <tr>
                        <td>
                            <iframe  src="https://giphy.com/embed/5vrIMzUk6xHoI" width="250" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                            <p><a href="https://giphy.com/gifs/pusheen-vagrant-5vrIMzUk6xHoI"></a></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id="clock"/>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

//---------------------------------------------------------------------------------------------
function setTime() {
    let date = new Date();
    let sec = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (document.getElementById("clock") != null) {
        document.getElementById("clock").innerHTML = "<label style='color: black;font-size: 25pt;'>Время: " + formatDate(hours) + ":" + formatDate(minutes) + ":" + formatDate(sec) + "</label>";
    }
    let time = setTimeout(setTime, 1000);
}

function formatDate(number) {
    return number < 10 ? "0"+number : number;
}



export default Clock;

window.onload = function () {
    setTime();
};
