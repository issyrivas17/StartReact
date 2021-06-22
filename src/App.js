import React, { Component } from 'react';
import './App.css';

/* function HelloWorld(props){
  return(
    <div id= "hello">
     <h3>{props.subtitle}</h3>
      {props.myText}
      </div>
  )
}  */

class HelloWorld extends Component { 

  render () { 
    return( 
      <div id= "hello">
        <h3>{this.props.subtitle}</h3>
         {this.props.myText}
         </div>
    )
  } 
}

function App() {
  return (
    <div>This is my component: 
      <HelloWorld myText="Hola issy" subtitle="Eres genial por naturaleza."/> 
      <HelloWorld myText= "Bienvenida a tu react"/> 
      <HelloWorld myText= "Futura programadora!!!!"/> 
      </div>
  );
}

export default App;
