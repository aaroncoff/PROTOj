import React, { Component } from 'react';
import axios from 'axios';
import CreateProj from './CreateProj';
import { Link } from 'react-router-dom';

export default class ProjDash extends Component{
    constructor(){
        super()

        this.state={
            sponsor: '',
            projects: []
           
        };
    }




//     app.get('/api/projspons/:user_id', controller.getProjBySpons)

// getProjBySpons: (req, res) => {
//   const dbInstance = req.app.get('db')
//   const {search} = req.query
//   console.log('==============getProjSpons hit', search)
//   dbInstance.get_project_sponsor_join(search).then(projects => {
//       console.log(projects)
//       res.send(projects)
//   }).catch(err => {
//       console.log('get proj by spons error', err)
//       res.send('get project by sponsor error')
//   })
// },

    componentDidMount(){
        axios.get('/api/projspons').then(response => {
            console.log('-------get spons proj info hit')
            this.setState({
                projects: response.data
                
            })
        }).catch(err => console.log('----get spons user info error', err));
    }

    // componentDidMount(){
    //     axios.all([
    //         axios.get('/api/userData'),
    //         axios.get('/api/projspons')
    //     ])
    //     .then(axios.spread((userResponse, projResponse) => {
    //         console.log('-------get spons user info hit')
    //         this.setState({
    //             sponsor: userResponse.

                
    //         })
    //     }).catch(err => console.log('----get spons user info error', err));
    // }
        
    
    render() {
        const {projects} = this.state
        console.log(projects)
        return (
            <div>
                <Link to='/createproj'>Add New Project</Link>
                <div>
                  
                        <div>
                          <h1>My Projects</h1>

                            {projects.map((projects, i) =>
                                <Link key={i} to={`/projform/${projects.projname}`}><div>{`${projects.projname}`}</div></Link>)}
                                

                            

                        </div>
                   
                       
                </div>
            
                

            </div>
        )
}
}



//  <div>{e.projname[0]}</div>
//                             <div>{e.projname[1]}</div>
//                             <div>{e.projname[2]}</div>
//                             <div>{e.projname[3]}</div>
//                             <div>{e.projname[4]}</div>
//                             <div>{e.projname[5]}</div>
//                             <div>{e.projname[6]}</div>
//                             <div>{e.projname[7]}</div>
//                             <div>{e.projname[8]}</div>
//                             <div>{e.projname[9]}</div> */