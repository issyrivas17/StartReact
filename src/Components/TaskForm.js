import React, { Component } from "react"; 

export default class TaskForm extends Component{ 

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => { 
        console.log(this.state)
       e.preventDefault(); 

    }
        onChange = e => { 
            console.log(e.target.name,e.target.value)
        this.setState ({
        [e.target.name]: e.target.value
        })
        }
    render () {
        return( 
            <form onSubmit={this.onSubmit}>
                <input type ="text" name="title" placeholder = "Write a taks" onChange={this.onChange} value={this.state.title}/> 
                <br/> 
                <br/>
                <textarea name = "description" placeholder= "Write a Description"onChange={this.onChange}  value={this.state.descriptiondescription}></textarea>
                <button type= "submit">Save a Task</button>
                
                
                
                </form>

        )
    }
} 