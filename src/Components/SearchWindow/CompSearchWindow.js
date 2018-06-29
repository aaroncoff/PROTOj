import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './SearchWindow.css';
import {Link} from 'react-router-dom'


class CompSearchWindow extends Component{
    constructor(props){
        super(props)

        this.state={
            answers: this.props.answer3
        }
    }
    render(){
        const {answers} = this.state
        return(
            <div>
            {answers.map((answer3, i) => <Link key={i} to={`/compprof/${answer3.compid}`} className="compResultsLink">
            <div>{`${answer3.name}`}</div></Link>)}
            </div>

        //    <Link to="./CompProf" className="compResultsLink"><div className='compSearchBox'>
        //     {answers.map((answer3, i) => <div key={i}>{`${answer3.name}`}</div>)}
        //     </div></Link>
           

        )
    }
}


export default CompSearchWindow;