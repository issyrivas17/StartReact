import React, { Component } from 'react';
import './App.css';
 
 import tasks from './Ejemplos/tasks.json';  
 
 //Components
 import ListTasks from './Components/list-Tasks'; 
 import TaskForm from './Components/TaskForm'; 
 
 
class App extends Component  { 

  constructor (props){
    super (props)
    console.log('STATE:::', this.state);
} 

  state = {
    tasks 
  }

  addTask = (title,description) => {
    const newTask = {
      title:title,
      description: description,
      id:this.state.tasks.length
    }
    console.log('NEW TASKS::', newTask)
    this.setState ({
      tasks: [...this.state.tasks,newTask] 
    })
  }
  render () {
  return (   
    <div> 
      <TaskForm addTask={this.addTask}/>
      <ListTasks tasks ={this.state.tasks}/>
    </div>
  )}  

}
export default App;
