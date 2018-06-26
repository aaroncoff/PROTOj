import React, { Component } from 'react';
import Logo from '../../media/logo';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default class CreateProj extends Component {
    constructor() {
        super();
        this.state={
            projname: '',
            company: '',
            sponsor: '',
            student1: 'Bob',
            student2: 'Sue',
            student3: 'Brad',
            student4: 'Steve',
            student5: 'Jim',
            bio: ''
        }
    }

    // componentDidMount() {
    //     axios.get('/api/proj-data').then(response => {
    //         this.setState({
    //             projName: response.data.projName,
    //             bio: response.data.bio,
    //             company: response.data.company,
    //             sponsor: response.data.sponsor,
    //             student1: response.data.student1,
    //             student2: response.data.student2,
    //             student3: response.data.student3,
    //             student4: response.data.student4,
    //             student5: response.data.student5
               
    //         })
    //         console.log(response.data)
    //     });
    // }

    // axios.post('/api/projects', controller.updateProject).then
    //  bioChange = (e) => {
    //     this.setState(
    //          {bio: e.target.value})
    // }
    // setBio = (e) => {

    // }

    setProjName = (e) => {
        this.setState(
            {projname: e.target.value}
        )
    }



    setCompany = (e) => {
        this.setState(
            {company: e.target.value}
        )
    }


    setSponsor = (e) => {
        this.setState(
            {sponsor: e.target.value}
        )
    }

    setBio = (e) => {
        this.setState(
            {bio: e.target.value}
        )
    }

    // submit = () => {
    //     axios.post('/api/projects').then(res => {
    //        this.props.history.push('/projpage')
    //     })
    // }

    submit = (e) => {
        e.preventDefault();
        const {company, sponsor, projname, student1, student2, student3, student4, student5, bio} = this.state;
        axios.post('/api/projects', {company, sponsor, projname, student1, student2, student3, student4, student5, bio}).then(res => {
            this.props.history.push(`/projform/${projname}`)
        console.log(res)
        })
    }

    // CREATE TABLE projects (
    //     projid SERIAL PRIMARY KEY,
    //     company VARCHAR,
    //     sponsor VARCHAR,
    //     projname VARCHAR,
    //     student1 VARCHAR,				
    //     student2 VARCHAR,			
    //     student3 VARCHAR,			
    //     student4 VARCHAR,				
    //     student5 VARCHAR,
    //     bio VARCHAR,
    //     user_id INTEGER REFERENCES sponsors(sponsid),
    //     industry VARCHAR);

    // submit = () => {
    //     axios.post('/api/projects').then(res => {
    //         res.redirect('/projpage')
    //     })
    // }

    render(){
        console.log(this.state.projname)
        return(
            <div>
                <Logo/>
                <SearchBar/>
                <form>
                    <input type='text' placeholder="Project Name" onChange={ this.setProjName }  />
                    <input type='text' placeholder="Company Name" onChange={ this.setCompany }  />
                    <input type='text' placeholder="Sponsor Name" onChange={ this.setSponsor } />
                    <textarea className="inpProjBio" placeholder='Describe your project' onChange={this.setBio}/>
                    <button className="projSubmit" onClick={(e) => this.submit(e)}>Submit</button>
                </form>
             
            </div>
        )
    }
}