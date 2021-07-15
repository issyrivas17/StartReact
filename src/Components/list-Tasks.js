import React, { Component } from 'react'; 

import Task from './Task';   


class ListTasks extends Component {

   constructor (props){
        super (props)
        console.log('COMPONENTE PADRE:::',this.props);
   }
    render () {
        return (
                this.props.tasks.map( task => <Task task={task} key={task.id}/>)
        ) 

       
}
 }
 export default ListTasks; 

