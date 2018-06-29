import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import Logo from '../../media/logo';
import CreateProj from '../ProjDash/CreateProj';
import { Link } from 'react-router-dom';



export default class SponsProf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            picture: "",
            proj1: "",
            proj2: "",
            proj3: "",
            proj4: "",
            proj5: ""
            
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

//is sponsid needed for componentDidMount?

// componentDidMount() {
//     const id = this.props.location.pathname.slice(10);
//     console.log('--------------------id', id);
    
// axios.get(`/api/sponsors/${id}`).then(response => {
//     console.log(response.data)
//     this.setState({
//         sponsid: response.data[0].sponsid,
//         firstName: response.data[0].given_name,
//         lastName: response.data[0].family_name,
//         picture: response.data[0].picture
//     })    
//     console.log(response.data)
// });
// }
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
