import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import axios from 'axios';
import StudSearchWindow from '../SearchWindow/StudSearchWindow';
import UnivSearchWindow from '../SearchWindow/UnivSearchWindow';
import CompSearchWindow from '../SearchWindow/CompSearchWindow';
import ProjSearchWindow from '../SearchWindow/ProjSearchWindow';
import './SearchBar.css';



class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: ''
          
           
        };
    }


    filterNames(e){
        this.setState({term: this.state.filter(item => item.given_name.toLowerCase().includes(e.target.value.toLowerCase()))})
    }
    getStudResults = (e) => {
        e.preventDefault();
        console.log('hit', this.state.term)
        axios.get(`/api/students?search=${this.state.term}`).then(response => {
            console.log('1', response)
            this.setState({
                answer1: response.data,
                answer2: '',
                answer3: '',
                answer4: ''
            })
        })
    }
    getUnivResults = (e) => {
        e.preventDefault();
        console.log('hit2')
        axios.get(`/api/universities?search=${this.state.term}`).then(response => {
            this.setState({
                answer1: '',
                answer2: response.data,
                answer3: '',
                answer4: ''
            })
        })
    }
    getCompResults = (e) => {
        e.preventDefault();
        console.log('hit3')
        axios.get(`/api/companies?search=${this.state.term}`).then(response => {
            this.setState({
                answer1: '',
                answer2: '',
                answer3: response.data,
                answer4: ''
            })
        })
    }
   

    getProjResults = (e) => {
        e.preventDefault();
        //this is hitting as of tuesday night
        console.log('--------hit4')
        axios.get(`/api/projects?search=${this.state.term}`).then(response => {
            console.log('_|_|_|_|_|_|_|_|projResults response', response.data)
            //this is hitting, but returning an empty array as of tuesday night
            this.setState({
                answer1: '',
                answer2: '',
                answer3: '',
                answer4: response.data
            })
        })
    }

    render() {
        return(



            <div className="container">
  


 {/* <input type="checkbox" id="search" hidden="hidden" checked /> */}
  
    
  
  <main>
    <section className="search">
      <form >
        {/* <input className="SearchB" type="search" placeholder="Search"/> */}
        <input type="search" placeholder="Search" onChange={event => this.setState({term: event.target.value})}/>
        <div className="advanced">
          <span>
            {/* <input name="type" type="radio" value="type-pens" id="type-pens" onChange={() => this.getStudResults()} /> */}
            <button name="type" onClick={(e) => this.getStudResults(e)}>Search by Student</button>
            {/* <label>Students</label> */}
          </span>
          <span>
            {/* <input name="type" type="radio" value="type-posts" id="type-posts" onChange={() => this.getCompResults()}/> */}
            <button className="compSearchBtn" onClick={(e) => this.getCompResults(e)}>Search by Company</button>
            {/* <label>Companies</label> */}
          </span>
          <span>
            {/* <input name="type" type="radio" value="type-collections" id="type-collections" onChange={() => this.getProjResults()}/> */}
            <button className='projSearchBtn' onClick={(e) => this.getProjResults(e)}>Search by Project</button>
            {/* <label>Projects</label> */}
          </span>
          <span>
            {/* <input name="type" type="radio" value="type-users" id="type-users" onChange={() => this.getUnivResults()}/> */}
            <button className="univSearchBtn" onClick={(e) => this.getUnivResults(e)}>Search by School</button>
            {/* <label>Universities</label> */}
                {this.state.answer1&&<StudSearchWindow answer1={this.state.answer1}/>}
                {this.state.answer2&&<UnivSearchWindow answer2={this.state.answer2}/>}
                {this.state.answer3&&<CompSearchWindow answer3={this.state.answer3}/>}
                {this.state.answer4&&<ProjSearchWindow answer4={this.state.answer4}/>}

{/* <Link to="./UnivProf" className="univResultsLink"><div className='univSearchBox'>
            {answers.map((answer2, i) => <div key={i}>{`${answer2.name}`}</div>)}
            </div></Link> */}

          </span>
        </div>
      </form>
    </section>
  </main>
  
</div>

/* <div class="container">
    <div class="logo"></div>

    <input type="checkbox" id="search" hidden="hidden" checked />
    <label for="search">
    <span class="fa fa-search"></span>
    </label>
    <main>
        <section class="search">
            <form action="">
                
            </form>
        </section>
    </main>

  
</div> */
            /* // <div className='SearchUnit'>
            //     <input className="search" type="text" placeholder="Search" onChange={event => this.setState({term: event.target.value})}/>
                
            //     <div className='searchBtns'>
            //     <button className="studSearchBtn" onClick={() => this.getStudResults()}>Search by Student</button>
            //     <button className="univSearchBtn" onClick={() => this.getUnivResults()}>Search by School</button>
            //     <button className="compSearchBtn" onClick={() => this.getCompResults()}>Search by Company</button>
            //     <button className='projSearchBtn' onClick={() => this.getProjResults()}>Search by Project</button>
            //     </div>
            //    {this.state.answer1&&<StudSearchWindow answer1={this.state.answer1}/>}
            //    {this.state.answer2&&<UnivSearchWindow answer2={this.state.answer2}/>}
            //    {this.state.answer3&&<CompSearchWindow answer3={this.state.answer3}/>}
            //    {this.state.answer4&&<ProjSearchWindow answer4={this.state.answer4}/>}
            // </div> */
        
        )
        
    }
    
}


export default SearchBar;

