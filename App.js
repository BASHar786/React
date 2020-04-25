import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person'

const app = props => {
  
 const [personState,setPersonState] = useState({
    persons:[
      {name:'Bashar',age:28},
      {name:'Manu',age:29},
      {name:'Stephanie', age:26}
    ],
    
  });
  const [otherState,setOtherState] = useState('some other state');

  console.log(personState,otherState);
  
  const switchNameHandler = ()=>
  {
    //console.log('Was clicked!');
    setPersonState({persons:[
      {name:'Bashar',age:28},
      {name:'Mushaf',age:129},
      {name:'Stephanie', age:26}
    ]});
  };
    return (
      <div className="App">
        
        
          <h1>Hi! I'm a React App</h1>
          <button onClick={switchNameHandler}>PRESS</button>
          <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
          <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Racing</Person>
          <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
        
      </div>
    );
  //return React.createElement('div',{className: "App"},React.createElement('h1',null,"Does this work now?"))
  





  
}

export default app;



