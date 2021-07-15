import React, { Component } from 'react';
import './App.css';
 
 import tasks from './Ejemplos/tasks.json';  

 import ListTasks from './Components/list-Tasks'; 
 
 
 
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
      <ListTasks tasks ={this.state.tasks}/>
    </div>
  )}  

}
export default App;
