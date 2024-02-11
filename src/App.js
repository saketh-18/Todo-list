import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [list , setList] = useState();
  const [items , setItems] = useState(["Add" , "Tasks" , "to Your", "List"]);

  function handleclick(event){
    event.preventDefault();
    setItems((prev) =>
      [...prev , list]
     )
  }


  return (
    <div className='todo flex' >
      <h1 className = "heading"> Todo List </h1> 
      <div className = "container flex">
       <div className='addItem flex'>
        <form>
          <input name='newItem' className=  "input" placeholder='Add a new item' value={list} onChange={(e) => {setList(e.target.value)}} />
          <button className='add-button' onClick={handleclick} >Add</button> 
        </form>
       </div>
        {items.map((item) => {return <p>{item}</p>})}
      </div>
    </div>
  );

}

export default App;
