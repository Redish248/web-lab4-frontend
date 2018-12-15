import React, { Component } from "react";
import '../styles/Headers.css';

class Header1 extends Component {
    render() {
        return (
            <div>
                <div className="header_1">
                    <label> Лабораторная работа № 4 </label>
                </div>
                <div className="header_2">
                    <table className="table_header_2">
                        <tr>
                            <td><a href="https://isu.ifmo.ru/pls/apex/f?p=2143:GR:113549732621734::NO::GR_GR,GR_DATE:p3212,08.11.2018"> Группа P3212 </a></td>
                            <td>&#127774;</td>
                            <td><a href="https://se.ifmo.ru/courses/iaps#labs"> Вариант 8428 </a> </td>
                        </tr>
                        <tr>
                            <td> <a href="https://isu.ifmo.ru/pls/apex/f?p=2143:3:102153591906187::NO:RP:PID:242361"> Редькина Ирина  </a> </td>
                            <td>&#128049; &#128058;</td>
                            <td > <a href="https://isu.ifmo.ru/pls/apex/f?p=2143:3:115928066281303::NO:RP:PID:243887">Соболева Ольга  </a>  </td>
                        </tr>
                    </table>
                </div>
            </div>

        );
    }
}
export default Header1;