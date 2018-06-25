import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import Logo from '../../media/logo';
import CreateProj from '../ProjDash/CreateProj';
import { Link } from 'react-router-dom';



export default class SponsProf extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            picture: "",
            
        }
    }


componentDidMount() {

    axios.get('/api/userData').then(response => {
        console.log('method hit-------------');
        this.setState({
            firstName: response.data.given_name,
            lastName: response.data.family_name,
            picture: response.data.picture
        })
        // console.log(response.data)
    }).catch(err => console.log('User Data--------------', err));
}

render() {
    return(
        <div>
            <Logo/>
            <SearchBar/>
            {this.state.firstName ? <div><img src={this.state.picture}/><br/>
            <h1>Welcome Sponsor {this.state.firstName} {this.state.lastName}!</h1></div>: 'Welcome Sponsor!'}
            <Link to='/projdash'>My Projects</Link>
            
        </div>
    )
}
}