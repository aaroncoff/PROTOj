// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class ProfProf extends Component{
//     render() {
//         return (
//             <div>
//                 Professor Profile
//                 <button className ="btn3"><Link to="./ProjDash" className="dash">My Projects</Link></button>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom';
import LoginProfessor from '../../LoginProfessor';

export default class ProfProf extends Component{
    constructor() {
        super();
        this.state = {
            professors: [],
        }
    }

    componentDidMount() {

        axios.get(`/api/user-data`).then(response => {
            this.setState({ user: response.data.user || null})
        });
    }

    login() {
        const redirectUri = encodeURIComponent(`${window.location.origin}/professorCallback`);
    window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    }
    

    render() {
        return (
            <div>

                

                New Professor
                <h1>
                   <LoginProfessor/>
                </h1>
                {/* <button className ="btn3"><Link to="./ProjDash" className="dash">My Projects</Link></button> */}
            </div>
        )
    }
}
// ReactDOM.render(<StudProf/>, document.getElementById('studprof'));