import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import Logo from '../../media/logo';

export default class ProfProf extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            picture: ""
        }
    }

    componentDidMount() {
        axios.get('api/userData').then(response => {
            this.setState({
                firstName: response.data.given_name,
                lastName: response.data.family_name,
                picture: response.data.picture
            })
            console.log(response.data)
        })
    }
    render(){
        return(
            <div>
                <Logo/>
                <SearchBar/>
                {this.state.firstName ? <div><img src={this.state.picture}/><br/>
                <h1>Welcome Professor {this.state.lastName}!</h1></div>: 'Welcome Professor'}
                
            </div>
        )
    }
}