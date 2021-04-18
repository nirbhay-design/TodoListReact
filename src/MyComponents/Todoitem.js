import React from 'react'

// when we are using export default then we write import todos and
// if we write export const then we need to import {todos}

export const Todoitem = ({todo,onDelete}) => {
    return (
        <div>
            <h4> {todo.title} </h4>
            <p> {todo['desc']} </p>
            <button className = 'btn btn-danger' onClick={()=>(onDelete(todo))}>Delete</button>
        </div>
    )
}
