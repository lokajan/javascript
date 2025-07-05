import { useState } from "react"
import TaskForm from "./TaskForm"
import Tasklist from "./tasklist"

export default function TaskManager() {
    const [task, SetTask] = useState([])

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false }
        SetTask([...task, newTask])
    }
    return <>
        <h1> TaskManager</h1>
        <p>Task: {task.length}</p>
        <TaskForm addTask={addTask} />
        <Tasklist task={task} />
    </>
}