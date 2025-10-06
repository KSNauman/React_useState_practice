import {useState} from 'react'
export default function Todo() {
    let [todos , setTodos] = useState(["Sample text"])
    let [task , setTask] = useState("")
    let updateTask = (event) =>{
        setTask(event.target.value)
    }
    let updateList = () =>{
        setTodos((todos)=>([...todos , task]))
        setTask("")
    }
    return(<>
        <h1>To-do App</h1>
        <input type="text" value = {task} onChange = {updateTask}/>
        <button onClick = {updateList}>Add</button>
        <hr />
        <ul>
            {todos.map((todo)=>(<li>{todo}</li>))}
        </ul>
    </>)
}