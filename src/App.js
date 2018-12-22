import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  state={
    persons:[
      {id:'i1',name:"manu" ,age:28},
      {id:'i2',name:"Max" ,age:30}
    ],
    showPerson:false

  }
  switchShowPerson=()=>{
    const sperson=this.state.showPerson;
    this.setState({
      showPerson:!sperson
    });
  }
/*deletePersonHandler=(indexPerson)=>{
//const persons=this.state.persons;
//or
const persons=[...this.state.persons]
persons.splice(indexPerson,1);
this.setState({persons:persons})
}*/
  nameChangeHandler=(event,id)=>{

    const personindex=this.state.persons.findIndex(p=>{
      return p.id==id
    })
      const person={...this.state.persons[personindex]};
      person.name=event.target.value;
      const persons=[...this.state.persons];
      persons[personindex]=person;
        this.setState({persons:persons})
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
    this.state.persons.map((person,indexPerson)=>{
      return   <Person name={person.name}
      age={person.age}// click={()=>this.deletePersonHandler(indexPerson)} />
key={person.id} change={(event)=>this.nameChangeHandler(event,person.id)}/>
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
