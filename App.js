import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      value:'',
      backgroundcolor:'',
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    this.setState({backgroundcolor:this.state.value});
    event.preventDefault();
  }

  render() {
    const {backgroundcolor}=this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Color</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
        <input 
        value={this.state.value}
        onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
        </form>
        <div style={{backgroundColor:backgroundcolor}} className="backcolor">
        </div>
      </div>
    );
  }
}

export default App;
