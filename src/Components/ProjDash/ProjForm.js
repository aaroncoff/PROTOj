import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ProjForm extends Component{
    constructor(){
        super()
        this.state={
            projname: null,
            company: null,
            sponsor: null,
            bio: null
        }
        
    }

    componentDidMount(){
        axios.get(`/api/projects/${this.props.match.params.projname}`)
        .then(response => {
            console.log(response.data);
        this.setState({
            projname: response.data.projname,
            company: response.data.company,
            sponsor: response.data.sponsor,
            bio: response.data.bio})
        })
    }
    render() {
        const {projname} = this.state.projname
        console.log('----------projname state', projname)
        return (
          <div>
          {this.state.projname}
          </div>
        )
    }
}