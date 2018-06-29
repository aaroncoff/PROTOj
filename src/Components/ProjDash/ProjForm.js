import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProjForm.css';

export default class ProjForm extends Component{
    constructor(){
        super()
        this.state={
            project: {},
            projname: null,
            company: null,
            sponsor: null,
            bio: null,
            industry: null
        }
        
    }
//below as of tuesday night
//     componentDidMount(){
//         const id = this.props.location.pathname.slice(10);
//         console.log(this.props.project)
//         axios.get(`/api/projects/${this.props.match.params.projname}`).then(response => {
//         // axios.get(`/api/projects/${id}`).then(response => {
//             console.log("---------xxx--------", response.data)
//         this.setState({
//             project: response.data[0]
//             // projname: response.data.projname,
//             // company: response.data.company,
//             // sponsor: response.data.sponsor,
//             // bio: response.data.bio,
//             // industry: response.data.industry
        
//         })
//     }).catch(error => {
//         (console.log("--------front end getproj error", error))
//     })
// }

// SELECT * FROM projects WHERE LOWER(company) || LOWER(sponsor) || LOWER(projname) || LOWER(student1) || LOWER(student2) || LOWER(student3) || LOWER(student4) || LOWER(student5) || LOWER(bio) || LOWER(industry) LIKE '%' || LOWER($1) || '%';


    componentDidMount(){
        //Note: doesn't seem to be getting a response from backend
        console.log(this.props.project)
        // axios.get(`/api/projects/${this.props.match.params.projname}`)
        axios.get(`/api/projects/:projname${this.props.project}`).then(response => {
            console.log("-----------xxxx-------------", response.data);
        this.setState({
            project: response.data[0]
            // projname: response.data.projname,
            // company: response.data.company,
            // sponsor: response.data.sponsor,
            // bio: response.data.bio,
            // industry: response.data.industry
        
        })
    }).catch(error => {
        this.setState({
            // projx: '',
            message: error,
        })
    })
}

    getProjectByName(){
        axios.get(`/api/projects/${this.props.project}`).then(response => {
            console.log(response.data);
        this.setState({
            project: response.data[0]
            // projname: response.data.projname,
            // company: response.data.company,
            // sponsor: response.data.sponsor,
            // bio: response.data.bio,
            // industry: response.data.industry
            })
        })
    }

    // componentDidMount(){
    //     console.log(this.props.match.params.projname)
    //     axios.get(`/api/projects/${this.props.match.params.projname}`)
    //     .then(response => {
    //         console.log(response.data);
    //     this.setState({
    //         projname: response.data[0].projname,
    //         company: response.data[0].company,
    //         sponsor: response.data[0].sponsor,
    //         bio: response.data[0].bio,
    //         industry: response.data[0].industry})
    //     })
    // }
    render() {
       const {project}=this.state
        console.log(this.props, this.state)
        if(!this.state.project){
            console.log('hit')
            this.getProjectByName()
        }
        // const {projname, company, sponsor, bio, industry} = this.state
        // console.log('----------projname state', projname)
        return (
        //   <div>
        //       <h1 className="projname">{this.props.projname}</h1>
        //       <h2 className="industry">{industry}</h2>
        //       <input type='text' placeholder='Specify Industry' onChange={}/>
        //     <h3 className="company">{company}</h3>
        //     <h4 className="sponsor">{sponsor}</h4>
        //     <h5 className="bio">{bio}</h5>
        //   </div>
            <div>
                {/* {this.props.project.map(x => ( */}
                    {project &&
                    <div className='project'>
                        <div>Project Name: {project.projname}</div>
                        <div>Company: {project.company}</div>
                        <div>Sponsor Name: {project.sponsor}</div>
                        <div>Project Description: {project.bio}</div>
                        <div>Industry: {project.industry}</div>
                        <div></div>
                    </div>}

            </div>

        
        )
    }
}


