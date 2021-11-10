import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      name:"devansh"
    }
    console.log("initialization...");
  }
  componentDidMount(){
    console.log("fetch some data")
  }
  componentDidUpdate(prevstate , prevProps ){
  console.log("updated state" , prevProps, prevstate)
  }
  render(){
   console.log("rendered successfully")
    return (
      <div>
      <h1>Class component using react js </h1>
      <button onClick={()=>this.setState({name:"virat"})}>Click me</button>
      </div>
        );
  }
}


export default App;
