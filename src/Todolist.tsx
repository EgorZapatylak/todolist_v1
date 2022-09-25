import React, {useState} from "react";
import {filterValueType} from "./App";

type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title:string)=> void
    changeFilter: (value: filterValueType) => void
}

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('');

    const addTask = () =>{
        props.addTask(title)
        setTitle('');
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={(event)=> {setTitle(event.currentTarget.value)}}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map((el) =>
                    <li key={el.id}><input type="checkbox" checked={el.isDone}  />
                        <span> {el.title} </span>
                        <button onClick={()=> {props.removeTask(el.id)}}> X </button>
                    </li>
                )}
            </ul>
            <div>
                <button onClick = {()=>{props.changeFilter("all")}}>All</button>
                <button onClick = {()=>{props.changeFilter("active")}}>Active</button>
                <button onClick = {()=>{props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    )
}