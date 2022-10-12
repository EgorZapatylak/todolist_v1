import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {filterValueType} from "./App";

type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title:string)=> void
    changeFilter: (value: filterValueType) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    filter: string
}

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null)

    const addTask = () =>{
        if (title.trim()!=='') {
            props.addTask(title.trim())
            setTitle('');
        } else {
            setError("Tilte is required")
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if(event.key === 'Enter') {
            addTask();
        }
    }

    const onAllClickHandler = () =>
        props.changeFilter("all")

    const onActiveClickHandler = () =>
        props.changeFilter("active")

    const onCompletedClickHandler = () =>
        props.changeFilter("completed")

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? 'error' : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className='error-message'>{error}</div>}
            </div>
            <ul>
                {props.tasks.map((el) =>{
                    const onClickHandler = () => {
                        props.removeTask(el.id)
                    }
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>{
                        let newIsDoneValue = e.currentTarget.checked
                        props.changeTaskStatus(el.id, newIsDoneValue)
                    }
                    return(
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}  onChange={onChangeHandler} />
                            <span> {el.title} </span>
                            <button onClick={onClickHandler}> X </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={props.filter === "all" ? "active-filter" : ""} onClick = {onAllClickHandler}>All</button>
                <button className={props.filter === "active" ? "active-filter" : ""} onClick = {onActiveClickHandler}>Active</button>
                <button className={props.filter === "completed" ? "active-filter" : ""} onClick = {onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )
}