import React, { Component } from 'react';
import axios from 'axios';
import CreateProj from './CreateProj';
import { Link } from 'react-router-dom';

export default class ProjDash extends Component{
    constructor(){
        super()

        this.state={
            proj1: '',
            proj2: '',
            proj3: '',
            proj4: '',
            proj5: ''
        };
    }

    componentDidMount(){
        axios.get('/api/projects').then(project => {

        })
    }
    render() {
        return (
            <div>
                <Link to='/createproj'>Add Project</Link>
            </div>
        )
    }
}