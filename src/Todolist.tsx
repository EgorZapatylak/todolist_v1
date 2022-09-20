import React from "react";
import {filterValueType} from "./App";

type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: ()=> void
    changeFilter: (value: filterValueType) => void
}

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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