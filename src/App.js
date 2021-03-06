
import './App.css';
import Header from './MyComponents/Header'// default export and named exprot is there we can have catch some of the parts usign {}
import {Footer} from './MyComponents/Footer'
import {Todos} from './MyComponents/Todos'

import AddTodo from './MyComponents/AddTodo'
import React, { useState } from 'react';
// className is jsx java script syntax extension




function App() {
  const addTodo = (title ,desc)=>{
    let sno;
    if(todos.length === 0){
      sno = 0
    }else{

      sno = todos[todos.length-1].sn0+1;
    }
    if(title && desc){
      const mytodo = {
        sn0:sno,
        title:title,
        desc:desc
      };
      settodos([...todos,mytodo])
    }
    console.log(sno);
    return todos;
  }
  const onDelete = (todo)=>{
    // var ind = todos.indexOf(todo);
    // todos.splice(ind,1) deleting this way in react does not work we need to use settodos
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos , settodos]  = useState([])
  return (
    <>
    <Header title='MYTOdoList'/>
      <AddTodo addTodo = {addTodo}/>
    <Todos listodo = {todos} onDelete = {onDelete}/>
    <Footer/>
    {/* <Todoitem/> */}
    </>
  );
}

export default App;
