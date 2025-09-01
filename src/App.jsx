import React from "react"
import TaskItem from "./Components/TaskItem";
import TaskList from "./Components/TaskList";
import AddTaskForm from "./Components/AddTaskForm";
import { useState } from "react";
function App() { 
  const [tasks,setTasks] = useState([]);

  //add new task
  const addTask = (text)=>{
    const newTask = {id:Date.now(), text};
    setTasks([...tasks,newTask]);
  };
  //Delete a task
  const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
  }
  return(
    <div className="main">
    <div className="container">
    <header>
      <h1>Task Tracker App </h1>
    </header>
      <AddTaskForm onAdd = {addTask}/>
      <TaskList tasks={tasks} onDelete={deleteTask}/>
    </div>
    
      
    </div>
  )
}

export default App;
