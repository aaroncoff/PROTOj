import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './SearchWindow.css';
import {Link} from 'react-router-dom'


class ProjSearchWindow extends Component{
    constructor(props){
        super(props)

        this.state={
            answers: props.answer4
        }
    }
    render(){
        const {answers} = this.state
        return(
           <Link to="./ProjProfile" className="projResultsLink"><div className='projSearchBox'>
            {answers.map((answer4, i) => <div key={i}>{`${answer4.firstname} ${answer4.lastname}`}</div>)}
            </div></Link>
            // <Link to="./UnivProf" className="univResultsLink"><div className='univSearchBox'>
            // {answers.map((answer, i) => <div key={i}>{`${answer.name}`}</div>)}
            // </div></Link>

        )
    }
}


export default ProjSearchWindow;