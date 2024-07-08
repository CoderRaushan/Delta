import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    let [ToDos, setToDos] = useState([{ task: "sample tasks",IsDone:false, id: uuidv4() }]);
    let [newToDos, setNewToDos] = useState("");

    let addNewTask = () => {
        setToDos((prevTodos) => {
            return [...prevTodos, { task: newToDos,IsDone:false, id: uuidv4() }];
        });
        setNewToDos("");
    }

    let updateToDoValue = (event) => {
        setNewToDos(event.target.value);
    }

    let deleteToDo = (id) => {
        setToDos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    }

    let upperCaseOne = (id) => {
        setToDos(ToDos.map((toDo) => {
            if(id===toDo.id)
            {
                return {
                    ...toDo,
                    task: toDo.task.toUpperCase(),
                };
            }
            else 
            {
                return toDo;
            }
        }));
    }
    let upperCaseAll = () => {
        setToDos(ToDos.map((toDo) => {
            return {
                ...toDo,
                task: toDo.task.toUpperCase(),
            };
        }));
    };
    let MarkAsDone = (id) => {
        setToDos(ToDos.map((toDo) => {
            if (toDo.id === id) {
                return { ...toDo, IsDone: true };
            }
            return toDo;
        }));
    };

     let MarkAsDoneAll=() => {
        setToDos(ToDos.map((toDo) => {
                return { ...toDo, IsDone: true };
        }));
    };

    return (
        <div>
            <input
                type="text"
                name="ToDoList"
                id="ToDoList"
                value={newToDos}
                onChange={updateToDoValue}
            />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <hr />
            <h3>ToDoList</h3>
            <ul>
                {
                    ToDos.map((ToDo) => (
                        <li key={ToDo.id}>
                            <span style={ToDo.IsDone?{textDecorationLine:"line-through"}:{}}> {ToDo.task}</span>
                            &nbsp;&nbsp;
                            <button onClick={() => deleteToDo(ToDo.id)}>Delete</button>
                            <button onClick={() => upperCaseOne(ToDo.id)}>upperCaseOne</button>
                            <button onClick={() => MarkAsDone(ToDo.id)}>Mark as Done</button>
                            <br /><br />
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>set to upperCaseAll</button>
            <button onClick={MarkAsDoneAll}>MarkAsDone</button>
        </div>
    )
}
