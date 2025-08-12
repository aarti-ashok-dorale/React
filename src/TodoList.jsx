import {useState} from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return[...prevTodos, { task: newTodo, id: uuidv4(), isDone: false}]
        });
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    //delete task
    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))
    };

    // //uppercase all tasks
    // let upperCaseAll = () => {
    //     setTodos( (Todos) => 
    //         todos.map((todo) => {
    //       return{
    //         ...todo,
    //         task : todo.task.toUpperCase()
    //       };
    //     })
    // );
    // };

    //uppercase only one task
    let UpperCaseOne = (id) => {
        setTodos( (todos) => 
         todos.map((todo) => {
          if(todo.id == id) {
                    return{
            ...todo,
            task : todo.task.toUpperCase()
          };

         } else {
            return todo;
         }

     })
    );
  };

  // marking all tasks as done
   let markAllDone = () => {
        setTodos( (Todos) => 
            todos.map((todo) => {
          return{
            ...todo,
            isDone: true,
          };
        })
    );
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
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>
                                {todo.task}
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() =>  UpperCaseOne(todo.id)}>UpperCase One</button>
                            <button onClick={() =>   markAllDone(todo.id)}>Mark AS Done</button>
                        </li>
                    )
                )}
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase</button>
            <button onClick={ markAllDone }>Mark All As Done</button>
        </div>
    );
}


