import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  state={
    persons:[
      {name:"manu" ,age:28},
      {name:"Max" ,age:30}
    ],
    showPerson:false

  }
  switchShowPerson=()=>{
    const sperson=this.state.showPerson;
    this.setState({
      showPerson:!sperson
    });
  }
  switchNameHandler=(newname)=>{
    //console.log('clicked button');
    this.setState({
      persons:[
        {name:newname ,age:98},
        {name:"Moni" ,age:30}
      ]
    })
  }
  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:event.target.value ,age:98},
        {name:"Moni" ,age:30}
      ]
    })
  }

  render() {
const style={
  backgroundColor:'white',
  boder:'1px solid blue',
  padding:'8px',
  cursor:'pointer'
}
let persons=null;
if(this.state.showPerson){
  persons=(<div>{
    this.state.persons.map(person=>{
      return   <Person name={person.name}
      age={person.age} />

    })
  }

  </div> )
}
    return (
      <div className="App">
        <h1>Hi I am react App..</h1>
        <button style={style} onClick={this.switchShowPerson} >switchNAme Here</button>
        {persons}

      </div>
    );
//return React.createElement('div',null,React.createElement('h1',null,'Does this work....!'));
  }
}

export default App;
