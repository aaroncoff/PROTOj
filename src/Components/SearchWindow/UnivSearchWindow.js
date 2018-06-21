import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './SearchWindow.css';
import {Link} from 'react-router-dom'


class UnivSearchWindow extends Component{
    constructor(props){
        super(props)

        this.state={
            answers: props.answer2
        }
    }
    render(){
        const {answers} = this.state
        return(
           
            <Link to="./UnivProf" className="univResultsLink"><div className='univSearchBox'>
            {answers.map((answer2, i) => <div key={i}>{`${answer2.name}`}</div>)}
            </div></Link>

        )
    }
}


export default UnivSearchWindow;