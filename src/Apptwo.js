import React, { Component } from 'react';
import './App.css';
 
import tasks from './Ejemplos/tasks.json'; 
class App extends Component  { 
  state = {
    tasks 
  }
  
  render () {
  return (
    <div> 
      { this.state.tasks.map( task => <p key={task.id}>{task.title} - {task.description} - {task.id}</p>) }
    </div>
  )}
}
export default App;
