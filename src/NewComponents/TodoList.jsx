import React from 'react';
import TodoItem from "./TodoItem";
import "./Styles.css";

export default function TodoList({todos, toggleTodo, deleteTodo}){

    return (
        <ul className="list">
            {todos.length === 0 && "no Todos"}
            {todos.map(todo => {
                return (<TodoItem{...todo} key = {todo.id} toggleTodo = {toggleTodo} deleteTodo = {deleteTodo}/>
                )
            })}
        </ul>
    )
}