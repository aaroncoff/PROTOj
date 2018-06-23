import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Login from '../../LoginStudentIndex';

export default class StudLogin extends Component{
    constructor() {
        super();
        this.state = {
            students: [],
        }
    }

    

    render() {
        return (
            <div>

                

                New Student 
                <h1>
                   <Login/>
                </h1>
               
            </div>
        )
    }
}
// ReactDOM.render(<StudProf/>, document.getElementById('studprof'));