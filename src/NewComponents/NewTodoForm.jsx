import React, {useState} from "react";
import "./Styles.css"

export default function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e){
      e.preventDefault();
      if(newItem  === "") return;

      onSubmit(newItem);
      setNewItem("")
    }

    {/*When the submit button -> add button is pressed the handle submit function is called and it adds new item*/}
    return(
        <form onSubmit = {handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                {/*onChange is a event listener that listens for changes in the input field*/}
                {/*when it changes we take the update in 'e' and set new item to the change*/}
                <input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}