import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type filterValueType = "all" | "active" | "completed" ;
function App() {

    let [tasks, setTasks]  = useState( [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: false},
        {id: 4, title: "React", isDone: false},
        {id: 5, title: "Reset API", isDone: false},
        {id: 6, title: "QraphQL", isDone: false},
    ] )
    // const tasks2 = [
    //     {id: 1, title: "Hello World", isDone: true},
    //     {id: 2, title: "I am happy", isDone: false},
    //     {id: 3, title: "Yo", isDone: true},
    //     {id: 4, title: "Bombox", isDone: false},
    // ]

    let [filter, setFilter] = useState<filterValueType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone === true)
    }

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(tasks => tasks.id !== id)
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
            />
            {/*<Todolist title = "Songs" tasks = {tasks2} />*/}
        </div>
    );
}

export default App;
