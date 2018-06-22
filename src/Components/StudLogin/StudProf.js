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

        }
    }

    componentDidMount() {

    //     axios.get(`/studentCallback`).then(response => {
    //         this.setState({ firstName: response.data.given_name, lastName: response.data.family_name })
    //         console.log(response)
    //     });
    // }
    axios.get('/studentCallback').then(response => {console.log(response)});


    }


    render(){
        return(
            <div>
                
                <Logo/>
                <SearchBar/>
                Welcome Student!
            </div>
        )
    }

}