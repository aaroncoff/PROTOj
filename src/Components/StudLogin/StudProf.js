import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import Logo from '../../media/logo';
import './StudProf.css';



export default class StudProf extends Component {
    constructor() {
        super();
        this.state = {
            studentid: "",
            firstName: "",
            lastName: "",
            picture: "",
            university: ""

        }
    }

    componentDidMount() {
        const id = this.props.location.pathname.slice(10);
        // const redirectUri = encodeURIComponent(`${window.location.origin}/studentCallback`);
        // const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code&typeP=1`;

    axios.get(`/api/students/${id}`).then(response => {
        console.log(response.data)
        this.setState({
            studentid: id,
            firstName: response.data[0].given_name,
            lastName: response.data[0].family_name,
            picture: response.data[0].picture
        })    
        console.log(response.data)
    });

   

    }

    inputSchool = (e) => {
        this.setState({
            university: e.target.value
        })
    }

    addSchool = (e) => {
        console.log(this.state.university)
        e.preventDefault();
        axios.patch(`/api/students/${this.state.studentid}/university`, {
            // axios.get(`/api/students/${this.state.studentid}`, {
            university: this.state.university
        })
        .then(res => console.log(res.data, "----------hi"))
        .catch(err => console.log(err, "err"))
           
    }

    // studLogout = () => {
    //     axios.post('/api/logout, controller.logout')
    // }
   

    // const ProfesLogin = () => {
    //     const redirectUri = encodeURIComponent(`${window.location.origin}/professorCallback`);
    //     const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code&`;
      
      
      
      
    //     return (
    //       <div>
    //         <a href={auth0LoginUrl}>Professor Login</a>
    //       </div>


    render(){
        return(
            <div className='check'>
                <header className='header1'>
                {/* <a href={this.studLogout}>
                    Logout
                </a> */}
                <Logo/>
                <SearchBar className='SearchBar1'/>
                <div className="UserPicName">
                {this.state.firstName ? <div><img className="studProfPic" src={this.state.picture}/><br/>
               <h1 className="userName">{this.state.firstName} {this.state.lastName}</h1></div>: 'Welcome Student!' }
               </div>
                </header>
                {/* <body className='body'> */}
                <form className="univAdd" onSubmit={this.addSchool}>
                <input type='text' value={this.state.university} placeholder="Add University" onChange={this.inputSchool}/>
                <button>Submit</button>
                </form>
              
            
             </div>
            
        )
    }

}