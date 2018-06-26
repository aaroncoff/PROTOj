import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './SearchWindow.css';
import {Link} from 'react-router-dom'


class StudSearchWindow extends Component{
    constructor(props){
        super(props)

        this.state={
            answers: this.props.answer1
        }
    }
    render(){
        const {answers} = this.state 
        console.log(this.state)
        return(
            <div>
            {answers.map((answer1, i) => <Link to={`/studprof/${answer1.studentid}`} className="studResultsLink">
            <div key={i}>{`${answer1.given_name} ${answer1.family_name}`}</div></Link>)}
            </div>

        //    <Link to="./studprof" className="studResultsLink"><div className='studSearchBox'>
        //     {answers.map((answer1, i) => <div key={i}>{`${answer1.given_name} ${answer1.family_name}`}</div>)}
        //     </div></Link>


            // <Link to="./UnivProf" className="univResultsLink"><div className='univSearchBox'>
            // {answers.map((answer, i) => <div key={i}>{`${answer.name}`}</div>)}
            // </div></Link>

        )
    }
}


export default StudSearchWindow;

// import React, { Component } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
// import './SearchWindow.css';
// import {Link} from 'react-router-dom'


// class StudSearchWindow extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             answers: props.answer1
//         }
//     }
//     render(){
//         const {answers} = this.state
//         return(
//            <Link to="./StudProfile" className="studResultsLink"><div className='studSearchBox'>
//             {answers.map((answer1, i) => <div key={i}>{`${answer1.firstname} ${answer1.lastname}`}</div>)}
//             </div></Link>
//             // <Link to="./UnivProf" className="univResultsLink"><div className='univSearchBox'>
//             // {answers.map((answer, i) => <div key={i}>{`${answer.name}`}</div>)}
//             // </div></Link>

//         )
//     }
// }


// export default StudSearchWindow;
