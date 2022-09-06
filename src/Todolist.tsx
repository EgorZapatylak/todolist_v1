import React from "react";

type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
}

type TaskType = {
    id: number,
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}