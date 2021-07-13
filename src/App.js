import React, { Component } from 'react';
import './App.css';
 
 import tasks from './Ejemplos/tasks.json';  

 import Tasks from './Components/Tasks'; 
 
class App extends Component  { 
  state = {
    tasks 
  }
  constructor (props){
    super (props)
    console.log('STATE:::', this.state);
}
  render () {
  return (
    <div> 
      <Tasks tasks ={this.state.tasks}/>
    </div>
  )}  

}
export default App;
