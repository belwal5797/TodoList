import React, { useState } from 'react';

const TodoList=()=>{

     const[list,setList]=useState("");
     const[items,setItems]=useState([]);


     const todo=(event)=>{
           setList(event.target.value);
        }

    const listItems=()=>{
          
        let check=document.querySelector('#search').value;
        
        if(!check){
            alert('Please Enter Some Task...');
        }
         else{   
          setItems((oldItems)=>{
              return [...oldItems,list];
          });

          setList("");
        }
    }
     
        
   

    return(
        <>
 
   <div className='todo'>
     <h1>TodoList</h1>
     <input type='text' placeholder='Enter Task Here ...' onChange={todo} id='search'
         value={list}
     />
     <button onClick={listItems}>+</button>
     <br/>

     <ol>
         {items.map((itemsVal)=>{
               return <li>{itemsVal}</li>;
         })}
     </ol>

   </div>



        </>
    );
}

export default TodoList;