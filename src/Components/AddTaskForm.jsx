import React, { useState } from "react";

export default function AddTaskForm({ onAdd }){

    const [text,setText] = useState('');
    const submitForm = (e)=>{
        e.preventDefault();
        if( text == "") {
            alert("Please enter a task !");
            return;
        }
        onAdd(text);
        setText("")
    };
    return(
    <form onSubmit={submitForm} className="task__form">
        <div>
            <input 
            type="text"
            value={text} 
            id="input" 
            placeholder="Enter your Task"
            onChange={(e)=> setText(e.target.value)}
            />
            <button className="btn scale-s" type="submit">Add Task</button> 
                      
        </div>
    </form>
    )
}