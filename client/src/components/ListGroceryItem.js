import React, {Fragment, useEffect, useState} from "react";

import EditGroceryItem from "./EditGroceryItem";

const ListGroceryItem = () => { //function used for listing items

    const [todos, setItems] = useState([]);

    //delete todo function


    const deleteGroceryItem = async (id) => {
        try {
            const deleteGroceryItem = await fetch(`http://localhost:5000/todos/${id}`, {method: "DELETE"}); //obtains info from server

        setItems(todos.filter(todo => todo.todo_id !== id));
        }catch (err) {
            console.error(err.message)
        }
    }

    const getGroceryItems = async () => {
        try {

            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            document.body.style.backgroundColor = "lightgreen";   //obtain data from server and set items
            setItems(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getGroceryItems();  //use fucntion to get grocery items
    }, []);

    
    return (
    <Fragment>
  
<table className="table mt-5 text-center table-dark table-striped table-bordered " >
    <caption> Current List of Items</caption>
    <thead className="font-italic">
      <tr>
        <th>Description</th>
        <th>Edit Item</th>
        <th>Delete Item</th>
      </tr>
    </thead>
    <tbody>
        {}
     {todos.map(todo => (
         <tr  className = "font-weight-bold "  key = {todo.todo_id}>
             <td>{todo.description}</td>
             <td><EditGroceryItem todo = {todo} /></td>
             <td><button className="btn btn-danger" onClick = {() => deleteGroceryItem(todo.todo_id)}>Delete item</button></td>
         </tr>
     ))}
    </tbody>
  </table>

 
    </Fragment>


    )};

export default ListGroceryItem;