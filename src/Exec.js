import React, { useState } from 'react';
import "./NewComponents/Styles.css";

function Exec(){
    //new item is a string, setNewItem is a function that updates newItem
    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        setTodos((currentTodos) => {
            //setting the todos, to the past todo and adding on a object? with props
            return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false}]
        })

        setNewItem("")
    }

    function deleteTodo(id){

        setTodos((currentTodos) => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    function toggleTodo(id, completed){
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id == id){
                    return {...todo, completed}
                }

                return todo
            })
        })
    }


    return(
        <>
            {/*When the submit button -> add button is pressed the handle submit function is called and it adds new item*/}
            <form onSubmit = {handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    {/*onChange is a event listener that listens for changes in the input field*/}
                    {/*when it changes we take the update in 'e' and set new item to the change*/}
                    <input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
                </div>
                <button className="btn">Add</button>
            </form>
            <h1 className= "header">Todo List</h1>
            <ul className = "list">
                {todos.map(todo => {
                    //this part processes all todo objects and puts them into this template html for formatting
                    return(
                        <li key = {todo.id} >
                            <label>
                                <input type="checkbox" checked = {todo.completed} onChange = {e => toggleTodo(todo.id, e.target.checked)}/>
                                {todo.title}
                            </label>
                            <button onClick = {() => deleteTodo(todo.id)} className="btn btn-danger"> Delete</button>
                        </li>
                    )
                })}

            </ul>
        </>

    )
}

export default Exec