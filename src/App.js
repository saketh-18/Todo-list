import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [items , setItems] = useState(["Add" , "Tasks" , "to Your", "List"]); 
  
  return (
    <div className='todo flex' >
      <h1 className = "heading"> Todo List </h1> 
      <div className = "container flex">
       <div className='addItem flex'>
       <Form setItems = {setItems}/>
       </div>
        <TodoList items ={items} />
      </div>
    </div>
  );

}

export default App;
