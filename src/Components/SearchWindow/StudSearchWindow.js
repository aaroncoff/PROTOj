import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './SearchWindow.css';
import {Link} from 'react-router-dom'


class StudSearchWindow extends Component{
    constructor(props){
        super(props)

        this.state={
            answers: props.answer1
        }
    }
    render(){
        const {answers} = this.state
        return(
           <Link to="./StudProfile" className="studResultsLink"><div className='studSearchBox'>
            {answers.map((answer1, i) => <div key={i}>{`${answer1.firstname} ${answer1.lastname}`}</div>)}
            </div></Link>
            // <Link to="./UnivProf" className="univResultsLink"><div className='univSearchBox'>
            // {answers.map((answer, i) => <div key={i}>{`${answer.name}`}</div>)}
            // </div></Link>

        )
    }
}


export default StudSearchWindow;