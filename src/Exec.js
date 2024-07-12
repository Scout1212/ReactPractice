import React, { useEffect, useState } from 'react';
import "./NewComponents/Styles.css";
import NewTodoForm from "./NewComponents/NewTodoForm"
import TodoList from "./NewComponents/TodoList";

function Exec(){
    //new item is a string, setNewItem is a function that updates newItem
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null) return []
        return JSON.parse(localValue)
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    function addTodo(title){
        setTodos((currentTodos) => {
            //setting the todos, to the past todo and adding on a object? with props
            return [...currentTodos, { id: crypto.randomUUID(), title, completed: false}]
        })
    }

    function deleteTodo(id){
        setTodos((currentTodos) => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    function toggleTodo(id, completed){
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id){
                    return {...todo, completed}
                }
                return todo
            })
        })
    }


    return(
        <>
            <NewTodoForm onSubmit = {addTodo}/>
            <h1 className= "header">Todo List</h1>
            <TodoList todos = {todos} toggleTodo = {toggleTodo} deleteTodo = {deleteTodo}/>
        </>

    )
}

export default Exec