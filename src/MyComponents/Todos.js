import React from 'react'
import { Todoitem } from './Todoitem'

export const Todos = (props) => {
    let mystyle = {
        minheight:'70vh'
    }
    return (
        <div className = 'container my-3' style = {mystyle}>
            <h3 className = 'my-3'>Todos list</h3>
            {props.listodo.length === 0 ? "no todos today":props.listodo.map((todo)=>{
                return (
                    <>
                    <Todoitem todo={todo} onDelete = {props.onDelete}/><hr/>
                    </>
                ) 

            })}
        </div>
    )
}

