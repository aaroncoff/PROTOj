import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginSponsIndex from '../../LoginSponsIndex';

class CompProf extends Component{
    render() {
        return (
            <div>
                <LoginSponsIndex/>
                <button className ="btn4"><Link to="/SponsProf" className="sponsor">Sign In As Sponsor</Link></button>
                
            </div>
        )
    }
}

export default CompProf