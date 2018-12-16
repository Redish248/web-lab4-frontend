import React, { Component } from 'react';
import "../styles/Clock.css"

class Clock extends Component {
    render() {
        return (
            <div id = "clockAndCalendar">

                <table id = "startTable">
                    <tr>
                        <td>
                            <iframe src="https://giphy.com/embed/5vrIMzUk6xHoI" width="250" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pusheen-vagrant-5vrIMzUk6xHoI"></a></p>
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

//-----------------------------------------------------------------------------------------------

function createCalendar() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let dayOfWeek = date.getDay();
    let nameOfMonth = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь',
    ];
    let numOfMonth = [
        31, 29 ,31 ,30 ,31 ,30 ,31 ,31 ,30 ,31 ,30 ,31
    ];
        document.getElementById("tableCalendar").innerHTML += "<caption>" + nameOfMonth[month - 2] + " " + year + "</caption>";
        document.getElementById("tableCalendar").innerHTML += "<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr>";
        let num = 1;
        let str = "<tr>";
        let start = (day - 1) - day % 7; //TODO: day of week
        for (let k = 1; k <= 7; k++) {
            if (k < start) {
                str += "<td/>";
            }
            else {
                if (num === day) {
                    str += "<td style='background: #1b30a7;color: white'>" + num + "</td>";
                } else {
                    str += "<td>" + num + "</td>";
                }
                num++;
            }
        }
        str += "</tr>";
        if (str !== "<tr><td/><td/><td/><td/><td/><td/><td/></tr>") {
            document.getElementById("tableCalendar").innerHTML += str;
        }
        for (let i = 1; i <= 5; i++) {
            let week = "<tr>";
            let temp = num + 6;
            for (let j = num; j <= temp; j++) {

                if (j <= numOfMonth[month - 1]) {
                    if (j === day) {
                        week += "<td style='background: #1b30a7;color: white'>" + j + "</td>";
                    } else {
                        week += "<td>" + j + "</td>";
                    }
                } else {
                    week += "<td/>"
                }
            }
            week += "</tr>";
            if (week !== "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>") {
                document.getElementById("tableCalendar").innerHTML += week;
            }
            num += 7;
        }

}


export default Clock;

window.onload = function () {
    setTime();
   // if (document.getElementById("tableCalendar") != null) {
     //   createCalendar();
    //}
};
