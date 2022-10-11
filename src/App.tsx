import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type filterValueType = "all" | "active" | "completed" ;
function App() {

    let [tasks, setTasks]  = useState( [
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Reset API", isDone: false},
        {id: v1(), title: "QraphQL", isDone: false},
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
        tasksForTodolist = tasks.filter(tasks => !tasks.isDone)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone)
    }

    function changeFilter(value: filterValueType ) {
        setFilter(value)
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(tasks => tasks.id !== id)
        setTasks(filteredTasks)
    }

    function addTask(title: string) {
        let task = {id: v1(), title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    function changeTaskStatus(id: string, isDone: boolean) {
        let task = tasks.find(t=>t.id===id)
        if (task) {
            task.isDone =isDone;
            setTasks([...tasks])
        }
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeFilter={changeFilter}
                      changeTaskStatus={changeTaskStatus}
            />
            {/*<Todolist title = "Songs" tasks = {tasks2} />*/}
        </div>
    );
}

export default App;
