import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompProf extends Component{
    render() {
        return (
            <div>
                Company Profile
                <button className ="btn4"><Link to="/SponsProf" className="sponsor">Sign In As Sponsor</Link></button>
                
            </div>
        )
    }
}

export default CompProf