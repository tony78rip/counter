import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [error, setError] = useState("")

    function addTodo() {

        if (inputValue.trim()=== "") {
            setError("veuillez saisir un champs")
        }else{
            let todoObject =  {
                id : uuidv4(),
                content : inputValue, 
                date : new Date().toLocaleDateString(),
                check: false
            }

            setTodos([ ... todos, todoObject])
            setInputValue("")
            setError("")
        }

    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function handleCheck(todo) {
        todo.check = !todo.check

        let todosCopy = [ ... todos ]
        todosCopy = todosCopy.filter((task) => task.id != todo.id)

        todosCopy.push(todo)

        setTodos(todosCopy)
    }

    function handleDelete(todo) {
        let todosCopy = [ ... todos ]
        todosCopy = todosCopy.filter((task) => task.id != todo.id)

        setTodos(todosCopy)
    }

    console.log(todos)

    return ( 
        <>
            <h1>Ma todo</h1>

            <input 
                type="text" 
                placeholder="Votre todo ici"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={() => addTodo()}>Ajouter</button>

            {error && <h2 styles={{ color: "darkred"}}>{error}</h2>}

            <div>
                {todos && todos.map((todo) => (
                    <>
                        <h3 key={todo.id} >{todo.content}</h3>
                        <h4>{todo.date}</h4>
                        <button onClick={() => handleDelete(todo)}>X</button>
                        <input 
                            onChange={() => handleCheck(todo)}
                            type="checkbox" 
                            name="check" 
                            id="check" 
                            value={todo.check} />
                    </>
                ))}
            </div>
        </>
     );
}

export default Todo;