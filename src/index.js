import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterPrompt from './filterprompt';
import Home from './home';

class PomoCo extends React.Component{
  constructor(props){
    super(props)
    this.state = {filter: false}
  }

  handleFilter = () =>{
    this.setState({filter: !this.state.filter});
  }

  render(){
    return(
      <div>
      <Home filter = {this.handleFilter}/>
      {this.state.filter ?
      <FilterPrompt unfilter = {this.handleFilter}/>
      : <br />}
      </div>
    );
  }
}

ReactDOM.render(
  <PomoCo />, document.getElementById('root')
);