import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import Logo from '../../media/logo';



export default class StudProf extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            picture: ""

        }
    }

    componentDidMount() {

        // const redirectUri = encodeURIComponent(`${window.location.origin}/studentCallback`);
        // const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code&typeP=1`;

    axios.get('/api/userData').then(response => {
        this.setState({
            firstName: response.data.given_name,
            lastName: response.data.family_name,
            picture: response.data.picture
        })    
        console.log(response.data)
    });


    }


    render(){
        return(
            <div>
                
                <Logo/>
                <SearchBar/>
               {this.state.firstName ? <div><img src={this.state.picture}/><br/>
               <h1>Welcome {this.state.firstName} {this.state.lastName}</h1></div>: 'Welcome Student!' }
            </div>
            
        )
    }

}