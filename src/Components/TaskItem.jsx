import React from "react";
export default function TaskItem({task, onDelete}){
    return(
    <div className="task">
        <p className="scale">{task.text}</p>
        <button className="btn-d scale-s" onClick={()=> onDelete(task.id)}>Delete</button>
    </div>
    );
    
}