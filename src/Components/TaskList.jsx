import React from "react";
import TaskItem from "./TaskItem";
export default function TaskList({tasks, onDelete}){
    if(tasks.length === 0){
        return <p>No Tasks Added !</p>
    }
   return(
    <div>
        {tasks.map((task)=> (
            <TaskItem key={task.id} task={task} onDelete={onDelete}/>
        ))}
    </div>
   );
   
}