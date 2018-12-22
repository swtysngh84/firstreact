import React from 'react';
import './Person.css'
const person=(props)=>{
  return(<div className='person'>
<p onClick={props.click}>Hello i m {props.name} and i m {props.age} year old!</p>
<p>{props.children}</p>
<input type="text" onChange={props.change} value={props.name}/>
    </div> );
};
export default person;
