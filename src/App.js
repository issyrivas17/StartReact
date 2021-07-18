import React, { Component } from 'react';
import './App.css';
 import { BrowserRouter as Router,Route,Link } from 'react-router-dom'; 
 import tasks from './Ejemplos/tasks.json';  
 
 //Components
 import ListTasks from './Components/list-Tasks'; 
 import TaskForm from './Components/TaskForm'; 
 import Posts from './Components/Posts';
 
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
    this.setState ({
      tasks: [...this.state.tasks,newTask] 
    })
  } 
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task =>  task.id !== id ) 
this.setState({tasks:newTasks})
  }

  checkDone = id => { 
const newTasks= this.state.tasks.map(task  => { 
  if (task.id === id) {
    task.done = ! task.done
  }
return task;
}); 
this.setState({tasks: newTasks})
  }
  render () {
  return (   
    <div> 
     <Router>
       <Link to="/">Home</Link>
      <br/> 
       <Link to="/posts">Posts</Link>

     <Route exact path= "/" render= {() => { 
       return <div>
        <TaskForm addTask={this.addTask}/>
        <ListTasks tasks ={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
        </div>
      }}>
      </Route>
      <Route path ="/posts" >
        <Posts />
      </Route>  
     </Router>
  
    
    </div>
  )}  

}
export default App;
