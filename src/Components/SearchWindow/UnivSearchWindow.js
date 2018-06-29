import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './SearchWindow.css';
import {Link} from 'react-router-dom'


class UnivSearchWindow extends Component{
    constructor(props){
        super(props)

        this.state={
            answers: this.props.answer2
        }
    }
    render(){
        const {answers} = this.state
        return(
           
            // <Link key={i} to="./UnivProf" className="univResultsLink"><div className='univSearchBox'>
            // {answers.map((answer2, i) => <div>{`${answer2.name}`}</div>)}
            // </div></Link>

<div>
{answers.map((answer2, i) => <Link key={i} to={`/univprof/${answer2.univid}`} className="univResultsLink">
<div >{`${answer2.name}`}</div></Link>)}
</div>

        )
    }
}


export default UnivSearchWindow;