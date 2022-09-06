import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

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

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(tasks => tasks.id !== id)
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}
            />
            {/*<Todolist title = "Songs" tasks = {tasks2} />*/}
        </div>
    );
}

export default App;
