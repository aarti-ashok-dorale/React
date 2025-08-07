import {useState} from "react";

export default function TodoList() {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo]);
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

        return(
        <div>
            <input placeholder="add a task" 
            value={newTodo}
            onChange={updateTodoValue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask} >Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li>{todo}</li>
                    )
                )}
            </ul>
        </div>
    );
}
