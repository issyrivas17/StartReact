import React, { Component } from "react"; 
import './task.css'; 

class Task extends Component {
  constructor(props) {
    super(props);
    console.log("COMPONENTE HIJO:::", this.props);
  }
  render() {
    const { task } = this.props;
    return ( 
      <p>
        {task.title} -{task.descripcion} -{task.done} -{task.id}
        <input type="checkbox" />
        <button style = {btnDelete}>X</button>
      </p> 
    ); 
  }
} 

const btnDelete = {
fontSize: '18px',
background: '#ea2027',
color: '#fff',
border: 'none', 
padding: '10px 15px',
borderRadius: '50%',
cursor: 'pointer', 
 }
export default Task;