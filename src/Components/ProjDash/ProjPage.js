import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ProjPage extends Component{
    constructor(){
        super()
        
    }

    componentDidMount(){
        axios.get('/api/projects').then(response => {
        this.setState({
            projname: response.data.projname,
            company: response.data.company,
            sponsor: response.data.sponsor,
            bio: response.data.bio
        })
        })
    }
    render() {
        const {projname} = this.state.projname
        console.log(projname)
        return (
          <div>
          {this.state.projname}
          </div>
        )
    }
}