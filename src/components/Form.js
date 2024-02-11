import React , {useState} from 'react';

export default function Form({ setItems }) {

    const [list , setList] = useState();

    function handleclick(event){
        event.preventDefault();
        setItems((prev) =>
          [...prev , list]
         )
      }
      
  return (
    <form>
          <input name='newItem' className=  "input" placeholder='Add a new item' value={list} onChange={(e) => {setList(e.target.value)}} />
          <button className='add-button' onClick={handleclick} >Add</button> 
    </form>
  )
}
