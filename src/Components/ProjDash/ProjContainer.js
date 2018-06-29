import React, {Component} from 'react';
import axios from 'axios';
import ProjForm from './ProjForm';


// const project = this.state

export default class ProjContainer extends Component{
    constructor(){
        super()
        this.state={ project:[] }
        
    }

//     componentDidMount(){
//         console.log(this.props.match.params.projname)
//         // axios.get(`/api/projects/${this.props.match.params.projname}`)
//         axios.get(`/api/projects/${this.props.match.params.projname}`).then(response => {
//             console.log(response.data);
//         this.setState ({
//             project: response.data
            
        
//         })
//     }).catch(error => {
//         this.setState({
//             // projx: '',
//             message: error,
//         })
//     })
// }      
            // projname: response.data[0].projname,
            // company: response.data[0].company,
            // sponsor: response.data[0].sponsor,
            // bio: response.data[0].bio,
            // industry: response.data[0].industry})
        
    
    render() {
        console.log(this.state.project)
        // this.componentDidMount()
        // const {projname, company, sponsor, bio, industry} = this.state
        // console.log('----------projname state', projname)
        return (
            <ProjForm project={this.props.match.params.projname} message={this.state.messsage} />
           

        //   <div>
        //       <h1 className="projname">{this.props.projname}</h1>
        //       <h2 className="industry">{industry}</h2>
        //       <input type='text' placeholder='Specify Industry' onChange={}/>
        //     <h3 className="company">{company}</h3>
        //     <h4 className="sponsor">{sponsor}</h4>
        //     <h5 className="bio">{bio}</h5>
            
          
          
        //   </div>
        )
    }
}