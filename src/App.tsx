import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const tasks1 = [
        {id: 1, title: "HTML", isDone: true},
        {id: 1, title: "CSS", isDone: true},
        {id: 1, title: "JS", isDone: false},
        {id: 1, title: "React", isDone: false},
    ]
    const tasks2 = [
        {id: 1, title: "Hello World", isDone: true},
        {id: 1, title: "I am happy", isDone: false},
        {id: 1, title: "Yo", isDone: true},
        {id: 1, title: "Bombox", isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title = "What to learn" tasks = {tasks1}/>
            <Todolist title = "Songs" tasks = {tasks2} />
        </div>
    );
}

export default App;
