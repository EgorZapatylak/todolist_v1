import React, {ChangeEvent, KeyboardEvent, useState} from "react";
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

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            addTask();
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter("all")
    }

    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }

    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map((el) =>{
                    const onClickHandler = () => {
                        props.removeTask(el.id)
                    }
                    return(
                        <li key={el.id}><input type="checkbox" checked={el.isDone}  />
                            <span> {el.title} </span>
                            <button onClick={onClickHandler}> X </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick = {onAllClickHandler}>All</button>
                <button onClick = {onActiveClickHandler}>Active</button>
                <button onClick = {onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}