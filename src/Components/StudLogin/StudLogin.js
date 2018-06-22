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

    // componentDidMount() {

    //     axios.get(`/api/user-data`).then(response => {
    //         this.setState({ user: response.data.user || null})
    //     });
    // }

    // login() {
    //     const redirectUri = encodeURIComponent(`${window.location.origin}/auth/studentCallback`);
    // window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    // }
    

    render() {
        return (
            <div>

                

                New Student 
                <h1>
                   <Login/>
                </h1>
                {/* <button className ="btn3"><Link to="./ProjDash" className="dash">My Projects</Link></button> */}
            </div>
        )
    }
}
// ReactDOM.render(<StudProf/>, document.getElementById('studprof'));