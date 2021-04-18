import React from 'react'
import { useState } from 'react';
export default function AddTodo(props) {
    const [title , setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('title or descritption cannot be blank')
        }
        props.addTodo(title,desc)
    }
    return (
        <div className = "container my-3"> 
        <h3>Add a Todo</h3>
            <form onSubmit = {submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value = {title} onChange = {(e)=> {setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" value = {desc} onChange = {(e)=> {setDesc(e.target.value)}}className="form-control" id="exampleInputPassword1"/>
  </div>
                            <button type="submit" className="btn btn-success">Submit</button>
</form>
                    </div>
    )
}
