import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './SearchWindow.css';
import {Link} from 'react-router-dom'


class CompSearchWindow extends Component{
    constructor(props){
        super(props)

        this.state={
            answers: props.answer3
        }
    }
    render(){
        const {answers} = this.state
        return(
           <Link to="./CompProf" className="compResultsLink"><div className='compSearchBox'>
            {answers.map((answer3, i) => <div key={i}>{`${answer3.name}`}</div>)}
            </div></Link>
            // <Link to="./UnivProf" className="univResultsLink"><div className='univSearchBox'>
            // {answers.map((answer, i) => <div key={i}>{`${answer.name}`}</div>)}
            // </div></Link>

        )
    }
}


export default CompSearchWindow;