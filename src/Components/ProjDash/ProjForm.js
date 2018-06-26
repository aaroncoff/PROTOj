import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProjForm.css';

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
        console.log(this.props.match.params.projname)
        axios.get(`/api/projects/${this.props.match.params.projname}`)
        .then(response => {
            console.log(response.data);
        this.setState({
            projname: response.data[0].projname,
            company: response.data[0].company,
            sponsor: response.data[0].sponsor,
            bio: response.data[0].bio})
        })
    }
    render() {
        const {projname, company, sponsor, bio} = this.state
        console.log('----------projname state', projname)
        return (
          <div>
              <h1 className="projName">{projname}</h1>
              {/* <input type='text' placeholder='Specify Industry' onChange={}/> */}
            <h2 className="company">{company}</h2>
            <h3 className="sponsor">{sponsor}</h3>
            <h4 className="bio">{bio}</h4>
          
          
          </div>
        )
    }
}

// app.post('/api/projects', controller.updateProject)