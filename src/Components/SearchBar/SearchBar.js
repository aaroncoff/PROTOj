import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import axios from 'axios';
import StudSearchWindow from '../SearchWindow/StudSearchWindow';
import UnivSearchWindow from '../SearchWindow/UnivSearchWindow';
import CompSearchWindow from '../SearchWindow/CompSearchWindow';


class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: '',
            answer1: '',
            answer2: '',
            answer3: ''
           
        };
    }

    // componentDidMount(){
        // axios.get(`/api/students`).then(user => console.log(user.data[0].firstname, user.data[0].lastname, user.data[0].studentid))
        
//         axios.get(`/api/students`).then(user => {
//             let userArray = user.data.map(info => {
//            return {
//                 name: `${info.firstname} ${info.lastname}`,
//                 id: info.studentid
//             }
//         })
//         console.log(userArray)
//     })
// }
    // filterNames(e){
    //     this.setState({term: this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
    // }
    getStudResults = () => {
        console.log('hit', this.state.term)
        axios.get(`/api/students?search=${this.state.term}`).then(response => {
            console.log(response)
            this.setState({
                answer1: response.data,
                answer2: '',
                answer3: ''
            })
        })
    }
    getUnivResults = () => {
        console.log('hit2')
        axios.get(`/api/universities?search=${this.state.term}`).then(response => {
            this.setState({
                answer1: '',
                answer2: response.data,
                answer3: ''
            })
        })
    }
    getCompResults = () => {
        console.log('hit3')
        axios.get(`/api/companies?search=${this.state.term}`).then(response => {
            this.setState({
                answer1: '',
                answer2: '',
                answer3: response.data
            })
        })
    }

    

    render() {
        return(
            <div>
                <input className="search" type="text" placeholder="Search" onChange={event => this.setState({term: event.target.value})}/>
                <button className="studSearchBtn" onClick={() => this.getStudResults()}>Search by Student</button>
                <button className="univSearchBtn" onClick={() => this.getUnivResults()}>Search by School</button>
                <button className="compSearchBtn" onClick={() => this.getCompResults()}>Search by Company</button>
               {this.state.answer1&&<StudSearchWindow answer1={this.state.answer1}/>}
               {this.state.answer2&&<UnivSearchWindow answer2={this.state.answer2}/>}
               {this.state.answer3&&<CompSearchWindow answer3={this.state.answer3}/>}
            
            </div>
        
        )
        
    }
    
}


export default SearchBar;