import React, { Component } from 'react';
import './App.css';
 
 import tasks from './Ejemplos/tasks.json';  
 
 //Components
 import ListTasks from './Components/list-Tasks'; 
 import TaskForm from './Components/TaskForm'; 
 
 
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
      <TaskForm/>
      <ListTasks tasks ={this.state.tasks}/>
    </div>
  )}  

}
export default App;
