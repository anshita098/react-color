import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      value:'red',
      backcolor:'',
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChangeComplete=this.handleChangeComplete.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
  }

  handleSubmit(event){
    this.setState({backcolor:this.state.value,});
    event.preventDefault();
  }

  handleChangeComplete(event){
    this.setState({backcolor:event.hex});
  }

  render() {
    const {backcolor}=this.state;
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
        <div style={{backgroundColor:backcolor}} className="backcolor">
        </div>
        
      <SketchPicker 
        color={this.state.backcolor}
        onChangeComplete={this.handleChangeComplete}
      />
      </div>
    );
  }
}

export default App;
